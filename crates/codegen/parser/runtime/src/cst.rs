use std::rc::Rc;

use serde::Serialize;

use crate::cursor::Cursor;
use crate::kinds::{RuleKind, TokenKind};
use crate::text_index::TextIndex;

#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
pub struct NamedNode {
    pub name: String,
    pub node: Node,
}

impl NamedNode {
    /// Creates an anonymous (nameless) node.
    pub fn anonymous(node: Node) -> Self {
        Self {
            name: String::new(),
            node,
        }
    }
}

impl std::ops::Deref for NamedNode {
    type Target = Node;

    fn deref(&self) -> &Self::Target {
        &self.node
    }
}

#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
pub struct RuleNode {
    pub kind: RuleKind,
    pub text_len: TextIndex,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub children: Vec<NamedNode>,
}

#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
pub struct TokenNode {
    pub kind: TokenKind,
    pub text: String,
}

#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
pub enum Node {
    Rule(Rc<RuleNode>),
    Token(Rc<TokenNode>),
}

impl Node {
    pub fn rule(kind: RuleKind, children: Vec<NamedNode>) -> Self {
        let text_len = children.iter().map(|node| node.text_len()).sum();

        Self::Rule(Rc::new(RuleNode {
            kind,
            text_len,
            children,
        }))
    }

    pub fn token(kind: TokenKind, text: String) -> Self {
        Self::Token(Rc::new(TokenNode { kind, text }))
    }

    pub fn text_len(&self) -> TextIndex {
        match self {
            Self::Rule(node) => node.text_len,
            Self::Token(node) => (&node.text).into(),
        }
    }

    /// Returns a slice of the children (not all descendants) of this node.
    pub fn children(&self) -> &[NamedNode] {
        match self {
            Self::Rule(node) => &node.children,
            Self::Token(_) => &[],
        }
    }

    /// Creates a [`Cursor`] that starts at the current node as the root and a given initial `text_offset`.
    pub fn cursor_with_offset(&self, text_offset: TextIndex) -> Cursor {
        Cursor::new(self.clone(), text_offset)
    }

    /// Reconstructs the original source code from the parse tree.
    pub fn unparse(self) -> String {
        match self {
            Self::Rule(rule) => rule.unparse(),
            Self::Token(token) => token.text.clone(),
        }
    }

    pub fn into_rule(self) -> Option<Rc<RuleNode>> {
        match self {
            Self::Rule(rule) => Some(rule),
            Self::Token(..) => None,
        }
    }

    pub fn is_rule(&self) -> bool {
        self.as_rule().is_some()
    }

    pub fn as_rule(&self) -> Option<&Rc<RuleNode>> {
        match self {
            Self::Rule(rule) => Some(rule),
            Self::Token(..) => None,
        }
    }

    pub fn is_rule_with_kind(&self, kind: RuleKind) -> bool {
        self.as_rule_with_kind(kind).is_some()
    }

    pub fn as_rule_with_kind(&self, kind: RuleKind) -> Option<&Rc<RuleNode>> {
        self.as_rule().filter(|rule| rule.kind == kind)
    }

    pub fn is_rule_with_kinds(&self, kinds: &[RuleKind]) -> bool {
        self.as_rule_with_kinds(kinds).is_some()
    }

    pub fn as_rule_with_kinds(&self, kinds: &[RuleKind]) -> Option<&Rc<RuleNode>> {
        self.as_rule().filter(|rule| kinds.contains(&rule.kind))
    }

    pub fn into_token(self) -> Option<Rc<TokenNode>> {
        match self {
            Self::Token(token) => Some(token),
            Self::Rule(..) => None,
        }
    }

    pub fn is_token(&self) -> bool {
        self.as_token().is_some()
    }

    pub fn as_token(&self) -> Option<&Rc<TokenNode>> {
        match self {
            Self::Token(token) => Some(token),
            Self::Rule(..) => None,
        }
    }

    pub fn is_token_with_kind(&self, kind: TokenKind) -> bool {
        self.as_token_with_kind(kind).is_some()
    }

    pub fn as_token_with_kind(&self, kind: TokenKind) -> Option<&Rc<TokenNode>> {
        self.as_token().filter(|token| token.kind == kind)
    }

    pub fn is_token_with_kinds(&self, kinds: &[TokenKind]) -> bool {
        self.as_token_with_kinds(kinds).is_some()
    }

    pub fn as_token_with_kinds(&self, kinds: &[TokenKind]) -> Option<&Rc<TokenNode>> {
        self.as_token().filter(|token| kinds.contains(&token.kind))
    }
}

impl From<Rc<RuleNode>> for Node {
    fn from(node: Rc<RuleNode>) -> Self {
        Self::Rule(node)
    }
}

impl From<Rc<TokenNode>> for Node {
    fn from(node: Rc<TokenNode>) -> Self {
        Self::Token(node)
    }
}

impl RuleNode {
    /// Creates a [`Cursor`] that starts at the current node as the root and a given initial `text_offset`.
    pub fn cursor_with_offset(self: Rc<Self>, text_offset: TextIndex) -> Cursor {
        Cursor::new(Node::Rule(self), text_offset)
    }

    /// Reconstructs the original source code from the parse tree.
    pub fn unparse(self: Rc<Self>) -> String {
        let acc = String::with_capacity(self.text_len.utf8);

        self.cursor_with_offset(TextIndex::ZERO)
            .filter_map(|node| node.into_token())
            .fold(acc, |mut acc, token| {
                acc.push_str(&token.text);
                acc
            })
    }
}
