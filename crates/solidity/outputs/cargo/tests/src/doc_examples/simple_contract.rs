use anyhow::Result;
use semver::Version;
use slang_solidity::cst::Node;
use slang_solidity::kinds::{RuleKind, TokenKind};
use slang_solidity::language::Language;

#[test]
fn simple_contract() -> Result<()> {
    let language = Language::new(Version::parse("0.8.0")?)?;
    let parse_output = language.parse(RuleKind::ContractDefinition, "contract Foo {}");

    let parse_tree = parse_output.tree();
    let rule = parse_tree
        .into_rule()
        .expect("Expected root node to be a rule");

    assert_eq!(rule.kind, RuleKind::ContractDefinition);
    assert_eq!(rule.children.len(), 6);

    let children = &rule.children;
    assert!(
        matches!(&children[0].node, Node::Token(token) if token.kind == TokenKind::ContractKeyword)
    );
    assert!(matches!(&children[1].node, Node::Rule(rule) if rule.kind == RuleKind::LeadingTrivia));
    assert!(matches!(&children[2].node, Node::Token(token) if token.kind == TokenKind::Identifier));
    assert!(matches!(&children[3].node, Node::Rule(rule) if rule.kind == RuleKind::LeadingTrivia));
    assert!(matches!(&children[4].node, Node::Token(token) if token.kind == TokenKind::OpenBrace));
    assert!(matches!(&children[5].node, Node::Token(token) if token.kind == TokenKind::CloseBrace));

    assert_eq!(rule.unparse(), "contract Foo {}");

    Ok(())
}
