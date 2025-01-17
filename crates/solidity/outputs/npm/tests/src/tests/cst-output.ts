import { Language } from "@nomicfoundation/slang/language";
import { RuleKind, TokenKind } from "@nomicfoundation/slang/kinds";
import { expectRule, expectToken } from "../utils/cst-helpers";

test("parse token", () => {
  const source = "5_286_981";
  const language = new Language("0.8.1");

  const parseTree = language.parse(RuleKind.DecimalNumberExpression, source).tree();
  expectRule(parseTree, RuleKind.DecimalNumberExpression);

  const children = parseTree.children();
  expect(children).toHaveLength(1);

  expectToken(children[0]!, TokenKind.DecimalLiteral, "5_286_981");
});

test("parse rule", () => {
  const source = "int256 constant z = 1**2**3;";
  const language = new Language("0.8.1");

  const parseTree = language.parse(RuleKind.SourceUnit, source).tree();
  expectRule(parseTree, RuleKind.SourceUnit);

  const children = parseTree.children();
  expect(children).toHaveLength(1);

  expectRule(children[0]!, RuleKind.SourceUnitMembers);
});

test("trivial cursor access", () => {
  const source = "int256 constant z = 1**2**3;";
  const language = new Language("0.8.1");

  const parseOutput = language.parse(RuleKind.SourceUnit, source);
  const node = parseOutput.createTreeCursor().node();
  expectRule(node, RuleKind.SourceUnit);

  const children = node.children();
  expect(children).toHaveLength(1);
});

test("calculate unicode characters text length", () => {
  const source = `unicode"some 😁 emoji"`;
  const language = new Language("0.8.1");

  const parseTree = language.parse(RuleKind.UnicodeStringLiterals, source).tree();
  expectRule(parseTree, RuleKind.UnicodeStringLiterals);

  expect(parseTree.textLength).toEqual({
    char: 21,
    utf16: 22,
    utf8: 24,
  });

  const children = parseTree.children();
  expect(children).toHaveLength(1);

  const token = children[0]!;
  expectToken(token, TokenKind.UnicodeStringLiteral, `unicode"some 😁 emoji"`);
  expect(token.textLength).toEqual({
    char: 21,
    utf16: 22,
    utf8: 24,
  });
});
