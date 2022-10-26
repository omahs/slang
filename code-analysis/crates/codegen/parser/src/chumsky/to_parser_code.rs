use proc_macro2::{Ident, TokenStream};
use quote::quote;

use codegen_schema::*;

use crate::chumsky::combinator_node::OperatorModel;

use super::{
    character_filter::CharacterFilter, code_fragments::CodeFragments,
    combinator_forest::CombinatorForest, combinator_node::CombinatorNode,
    combinator_tree::CombinatorTree, naming, terminal_trie::TerminalTrie,
};

impl CharacterFilter {
    pub fn to_parser_code(
        &self,
        name: Option<&String>,
        is_trivia: bool,
        code: &mut CodeFragments,
    ) -> TokenStream {
        self.to_code(name, code, if is_trivia { "trivia_" } else { "" })
    }
}

impl TerminalTrie {
    pub fn to_parser_code(&self, is_trivia: bool, code: &mut CodeFragments) -> TokenStream {
        self.to_code(code, if is_trivia { "trivia_" } else { "" })
    }
}

impl CombinatorNode {
    pub fn to_parser_code(
        &self,
        forest: &CombinatorForest,
        tree: &CombinatorTree,
        is_trivia: bool,
        code: &mut CodeFragments,
    ) -> TokenStream {
        fn create_kind(name: &Option<String>, code: &mut CodeFragments) -> Option<Ident> {
            name.as_ref().map(|name| code.add_rule_kind(name.clone()))
        }

        let token_macro = if is_trivia {
            quote!(trivia_token!)
        } else {
            quote!(token!)
        };
        let terminal_macro = if is_trivia {
            quote!(trivia_terminal!)
        } else {
            quote!(terminal!)
        };

        match self {
            /**********************************************************************
             * Simple Reference
             */
            Self::Reference { production } => {
                let production_parser_name = naming::to_parser_name_ident(&production.name);
                match production.kind {
                    ProductionKind::Rule if is_trivia => unreachable!(
                        "Trivia productions can only reference trivia or token productions"
                    ),
                    ProductionKind::Rule => quote!(rule!(#production_parser_name)),
                    ProductionKind::Trivia => quote!(rule!(#production_parser_name)),
                    ProductionKind::Token => quote!(#token_macro(#production_parser_name)),
                }
            }

            /**********************************************************************
             * Sequence and Choice
             */
            Self::Sequence { elements, name } => {
                let elements = elements
                    .iter()
                    .map(|element| element.to_parser_code(forest, tree, is_trivia, code))
                    .collect::<Vec<_>>();
                if let Some(kind) = create_kind(name, code) {
                    quote!(seq!( #kind, #(#elements),* ))
                } else {
                    quote!(seq!( #(#elements),* ))
                }
            }

            Self::Choice { elements, name } => {
                let elements = elements
                    .iter()
                    .map(|element| element.to_parser_code(forest, tree, is_trivia, code))
                    .collect::<Vec<_>>();
                if let Some(kind) = create_kind(name, code) {
                    quote!(choice!( #kind, #(#elements),* ))
                } else {
                    quote!(choice!( #(#elements),* ))
                }
            }

            /**********************************************************************
             * Numeric qualification
             */
            Self::Optional { expr, .. } => {
                let expr = expr.to_parser_code(forest, tree, is_trivia, code);
                quote!(optional!(#expr))
            }

            Self::ZeroOrMore { expr, name } => {
                let expr = expr.to_parser_code(forest, tree, is_trivia, code);
                if let Some(kind) = create_kind(name, code) {
                    quote!(zero_or_more!(#kind, #expr))
                } else {
                    quote!(zero_or_more!(#expr))
                }
            }
            Self::OneOrMore { expr, name } => {
                let expr = expr.to_parser_code(forest, tree, is_trivia, code);
                if let Some(kind) = create_kind(name, code) {
                    quote!(one_or_more!(#kind, #expr))
                } else {
                    quote!(one_or_more!(#expr))
                }
            }

            Self::Repeated {
                expr,
                min,
                max,
                name,
            } => {
                let expr = expr.to_parser_code(forest, tree, is_trivia, code);
                if let Some(kind) = create_kind(name, code) {
                    quote!(repeated!(#kind, #expr, #min, #max))
                } else {
                    quote!(repeated!(#expr, #min, #max))
                }
            }

            /**********************************************************************
             * Special Structures
             */
            Self::DelimitedBy {
                open,
                expr,
                close,
                name,
            } => {
                let open_kind = code.add_terminal_kind(open.clone());
                let expr = expr.to_parser_code(forest, tree, is_trivia, code);
                let close_kind = code.add_terminal_kind(close.clone());
                if let Some(kind) = create_kind(name, code) {
                    quote!(
                        delimited_by!(#kind, #terminal_macro(#open_kind, #open), #expr, #terminal_macro(#close_kind, #close))
                    )
                } else {
                    quote!(
                        delimited_by!(#terminal_macro(#open_kind, #open), #expr, #terminal_macro(#close_kind, #close))
                    )
                }
            }

            Self::SeparatedBy {
                expr,
                separator,
                name,
            } => {
                let expr = expr.to_parser_code(forest, tree, is_trivia, code);
                let separator_kind = code.add_terminal_kind(separator.clone());
                if let Some(kind) = create_kind(name, code) {
                    quote!(
                        separated_by!(#kind, #expr, #terminal_macro(#separator_kind, #separator))
                    )
                } else {
                    quote!(separated_by!(#expr, #terminal_macro(#separator_kind, #separator)))
                }
            }

            /**********************************************************************
             * Precedence parsing
             */
            Self::PrecedenceRule { members, .. } => {
                let first_parser_name = naming::to_parser_name_ident(&members[0].name);
                quote!(rule!(#first_parser_name))
            }

            Self::PrecedenceRuleMember {
                next_sibling,
                operator,
                operator_model,
                name,
                ..
            } => {
                let kind = code.add_rule_kind(name.clone());
                let operator = operator.to_parser_code(forest, tree, is_trivia, code);
                let next_sibling = next_sibling
                    .clone()
                    .map(|next| naming::to_parser_name_ident(&next.name));

                match operator_model {
                    OperatorModel::None => match next_sibling {
                        Some(next_sibling) => quote!( choice((#operator, #next_sibling.clone())) ),
                        None => operator,
                    },

                    OperatorModel::BinaryLeftAssociative => {
                        let next_sibling = next_sibling
                            .expect("Cannot have binary operator as last expression member");
                        quote!(left_associative_binary_expression!(#kind, #next_sibling, #operator))
                    }

                    OperatorModel::BinaryRightAssociative => {
                        let next_sibling = next_sibling
                            .expect("Cannot have binary operator as last expression member");
                        quote!(
                            right_associative_binary_expression!(#kind, #next_sibling, #operator)
                        )
                    }

                    OperatorModel::UnaryPrefix => {
                        let next_sibling = next_sibling
                            .expect("Cannot have unary operator as last expression member");
                        quote!(unary_prefix_expression!(#kind, #next_sibling, #operator))
                    }

                    OperatorModel::UnarySuffix => {
                        let next_sibling = next_sibling
                            .expect("Cannot have unary operator as last expression member");
                        quote!(unary_suffix_expression!(#kind, #next_sibling, #operator))
                    }
                }
            }

            /**********************************************************************
             * Terminals and their utilities
             */
            Self::CharacterFilter { filter, name } => {
                filter.to_parser_code(name.as_ref(), is_trivia, code)
            }

            Self::TerminalTrie { trie, .. } => trie.to_parser_code(is_trivia, code),

            Self::Difference {
                minuend,
                subtrahend,
            } => {
                let minuend = minuend.to_parser_code(forest, tree, is_trivia, code);
                let subtrahend = subtrahend.to_parser_code(forest, tree, is_trivia, code);
                quote! ( difference(#minuend, #subtrahend) )
            }

            Self::Lookahead { expr, lookahead } => {
                let expr = expr.to_parser_code(forest, tree, is_trivia, code);
                let lookahead = lookahead.to_parser_code(forest, tree, is_trivia, code);
                quote!( #expr.then_ignore(#lookahead.rewind()) )
            }
        }
    }
}
