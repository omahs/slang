// Slang License: https://github.com/NomicFoundation/slang/blob/main/LICENSE
// NAPI-RS License: https://github.com/napi-rs/napi-rs/blob/main/LICENSE

// @ts-nocheck

/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export enum NodeType {
  Rule = 0,
  Token = 1,
}
export enum TokenKind {
  SKIPPED = "SKIPPED",
  AbicoderKeyword = "AbicoderKeyword",
  AbstractKeyword = "AbstractKeyword",
  AddressKeyword = "AddressKeyword",
  Ampersand = "Ampersand",
  AmpersandAmpersand = "AmpersandAmpersand",
  AmpersandEqual = "AmpersandEqual",
  AnonymousKeyword = "AnonymousKeyword",
  AsKeyword = "AsKeyword",
  AsciiStringLiteral = "AsciiStringLiteral",
  AssemblyKeyword = "AssemblyKeyword",
  Asterisk = "Asterisk",
  AsteriskAsterisk = "AsteriskAsterisk",
  AsteriskEqual = "AsteriskEqual",
  Bang = "Bang",
  BangEqual = "BangEqual",
  Bar = "Bar",
  BarBar = "BarBar",
  BarEqual = "BarEqual",
  BoolKeyword = "BoolKeyword",
  BreakKeyword = "BreakKeyword",
  ByteKeyword = "ByteKeyword",
  CalldataKeyword = "CalldataKeyword",
  Caret = "Caret",
  CaretEqual = "CaretEqual",
  CaseKeyword = "CaseKeyword",
  CatchKeyword = "CatchKeyword",
  CloseBrace = "CloseBrace",
  CloseBracket = "CloseBracket",
  CloseParen = "CloseParen",
  Colon = "Colon",
  ColonEqual = "ColonEqual",
  Comma = "Comma",
  ConstantKeyword = "ConstantKeyword",
  ConstructorKeyword = "ConstructorKeyword",
  ContinueKeyword = "ContinueKeyword",
  ContractKeyword = "ContractKeyword",
  DaysKeyword = "DaysKeyword",
  DecimalLiteral = "DecimalLiteral",
  DefaultKeyword = "DefaultKeyword",
  DeleteKeyword = "DeleteKeyword",
  DoKeyword = "DoKeyword",
  ElseKeyword = "ElseKeyword",
  EmitKeyword = "EmitKeyword",
  EndOfLine = "EndOfLine",
  EnumKeyword = "EnumKeyword",
  Equal = "Equal",
  EqualEqual = "EqualEqual",
  EqualGreaterThan = "EqualGreaterThan",
  ErrorKeyword = "ErrorKeyword",
  EtherKeyword = "EtherKeyword",
  EventKeyword = "EventKeyword",
  ExperimentalKeyword = "ExperimentalKeyword",
  ExternalKeyword = "ExternalKeyword",
  FallbackKeyword = "FallbackKeyword",
  FalseKeyword = "FalseKeyword",
  FinneyKeyword = "FinneyKeyword",
  FixedBytesType = "FixedBytesType",
  ForKeyword = "ForKeyword",
  FromKeyword = "FromKeyword",
  FunctionKeyword = "FunctionKeyword",
  GlobalKeyword = "GlobalKeyword",
  GreaterThan = "GreaterThan",
  GreaterThanEqual = "GreaterThanEqual",
  GreaterThanGreaterThan = "GreaterThanGreaterThan",
  GreaterThanGreaterThanEqual = "GreaterThanGreaterThanEqual",
  GreaterThanGreaterThanGreaterThan = "GreaterThanGreaterThanGreaterThan",
  GreaterThanGreaterThanGreaterThanEqual = "GreaterThanGreaterThanGreaterThanEqual",
  GweiKeyword = "GweiKeyword",
  HexLiteral = "HexLiteral",
  HexStringLiteral = "HexStringLiteral",
  HoursKeyword = "HoursKeyword",
  Identifier = "Identifier",
  IfKeyword = "IfKeyword",
  ImmutableKeyword = "ImmutableKeyword",
  ImportKeyword = "ImportKeyword",
  IndexedKeyword = "IndexedKeyword",
  InterfaceKeyword = "InterfaceKeyword",
  InternalKeyword = "InternalKeyword",
  IsKeyword = "IsKeyword",
  LeaveKeyword = "LeaveKeyword",
  LessThan = "LessThan",
  LessThanEqual = "LessThanEqual",
  LessThanLessThan = "LessThanLessThan",
  LessThanLessThanEqual = "LessThanLessThanEqual",
  LetKeyword = "LetKeyword",
  LibraryKeyword = "LibraryKeyword",
  MappingKeyword = "MappingKeyword",
  MemoryKeyword = "MemoryKeyword",
  Minus = "Minus",
  MinusEqual = "MinusEqual",
  MinusGreaterThan = "MinusGreaterThan",
  MinusMinus = "MinusMinus",
  MinutesKeyword = "MinutesKeyword",
  ModifierKeyword = "ModifierKeyword",
  MultilineComment = "MultilineComment",
  NewKeyword = "NewKeyword",
  OpenBrace = "OpenBrace",
  OpenBracket = "OpenBracket",
  OpenParen = "OpenParen",
  OverrideKeyword = "OverrideKeyword",
  PayableKeyword = "PayableKeyword",
  Percent = "Percent",
  PercentEqual = "PercentEqual",
  Period = "Period",
  Plus = "Plus",
  PlusEqual = "PlusEqual",
  PlusPlus = "PlusPlus",
  PragmaKeyword = "PragmaKeyword",
  PrivateKeyword = "PrivateKeyword",
  PublicKeyword = "PublicKeyword",
  PureKeyword = "PureKeyword",
  QuestionMark = "QuestionMark",
  ReceiveKeyword = "ReceiveKeyword",
  ReturnKeyword = "ReturnKeyword",
  ReturnsKeyword = "ReturnsKeyword",
  RevertKeyword = "RevertKeyword",
  SecondsKeyword = "SecondsKeyword",
  Semicolon = "Semicolon",
  SignedFixedType = "SignedFixedType",
  SignedIntegerType = "SignedIntegerType",
  SingleLineComment = "SingleLineComment",
  Slash = "Slash",
  SlashEqual = "SlashEqual",
  SolidityKeyword = "SolidityKeyword",
  StorageKeyword = "StorageKeyword",
  StringKeyword = "StringKeyword",
  StructKeyword = "StructKeyword",
  SwitchKeyword = "SwitchKeyword",
  SzaboKeyword = "SzaboKeyword",
  ThrowKeyword = "ThrowKeyword",
  Tilde = "Tilde",
  TrueKeyword = "TrueKeyword",
  TryKeyword = "TryKeyword",
  TypeKeyword = "TypeKeyword",
  UncheckedKeyword = "UncheckedKeyword",
  UnicodeStringLiteral = "UnicodeStringLiteral",
  UnsignedFixedType = "UnsignedFixedType",
  UnsignedIntegerType = "UnsignedIntegerType",
  UsingKeyword = "UsingKeyword",
  VarKeyword = "VarKeyword",
  VersionPragmaValue = "VersionPragmaValue",
  ViewKeyword = "ViewKeyword",
  VirtualKeyword = "VirtualKeyword",
  WeeksKeyword = "WeeksKeyword",
  WeiKeyword = "WeiKeyword",
  WhileKeyword = "WhileKeyword",
  Whitespace = "Whitespace",
  YearsKeyword = "YearsKeyword",
  YulDecimalLiteral = "YulDecimalLiteral",
  YulHexLiteral = "YulHexLiteral",
  YulIdentifier = "YulIdentifier",
}
export enum RuleKind {
  ABICoderPragma = "ABICoderPragma",
  AddressType = "AddressType",
  ArgumentsDeclaration = "ArgumentsDeclaration",
  ArrayExpression = "ArrayExpression",
  ArrayTypeName = "ArrayTypeName",
  ArrayValuesList = "ArrayValuesList",
  AsciiStringLiteralsList = "AsciiStringLiteralsList",
  AssemblyFlagsList = "AssemblyFlagsList",
  AssemblyStatement = "AssemblyStatement",
  BinaryExpression = "BinaryExpression",
  Block = "Block",
  BreakStatement = "BreakStatement",
  CatchClause = "CatchClause",
  CatchClauseError = "CatchClauseError",
  CatchClausesList = "CatchClausesList",
  ConditionalExpression = "ConditionalExpression",
  ConstantDefinition = "ConstantDefinition",
  ConstructorAttributesList = "ConstructorAttributesList",
  ConstructorDefinition = "ConstructorDefinition",
  ContinueStatement = "ContinueStatement",
  ContractDefinition = "ContractDefinition",
  ContractMembersList = "ContractMembersList",
  DeconstructionImport = "DeconstructionImport",
  DeconstructionImportSymbol = "DeconstructionImportSymbol",
  DeconstructionImportSymbolsList = "DeconstructionImportSymbolsList",
  DeleteStatement = "DeleteStatement",
  DoWhileStatement = "DoWhileStatement",
  EmitStatement = "EmitStatement",
  EndOfFileTrivia = "EndOfFileTrivia",
  EnumDefinition = "EnumDefinition",
  ErrorDefinition = "ErrorDefinition",
  ErrorParameter = "ErrorParameter",
  ErrorParametersList = "ErrorParametersList",
  EventDefinition = "EventDefinition",
  EventParameter = "EventParameter",
  EventParametersList = "EventParametersList",
  ExperimentalPragma = "ExperimentalPragma",
  Expression = "Expression",
  ExpressionStatement = "ExpressionStatement",
  FallbackFunctionAttributesList = "FallbackFunctionAttributesList",
  FallbackFunctionDefinition = "FallbackFunctionDefinition",
  ForStatement = "ForStatement",
  FunctionAttributesList = "FunctionAttributesList",
  FunctionCallExpression = "FunctionCallExpression",
  FunctionCallOptions = "FunctionCallOptions",
  FunctionDefinition = "FunctionDefinition",
  FunctionType = "FunctionType",
  FunctionTypeAttributesList = "FunctionTypeAttributesList",
  HexStringLiteralsList = "HexStringLiteralsList",
  IdentifierPath = "IdentifierPath",
  IdentifierPathsList = "IdentifierPathsList",
  IdentifiersList = "IdentifiersList",
  IfStatement = "IfStatement",
  ImportDirective = "ImportDirective",
  IndexAccessExpression = "IndexAccessExpression",
  InheritanceSpecifier = "InheritanceSpecifier",
  InheritanceType = "InheritanceType",
  InheritanceTypesList = "InheritanceTypesList",
  InterfaceDefinition = "InterfaceDefinition",
  InterfaceMembersList = "InterfaceMembersList",
  LeadingTrivia = "LeadingTrivia",
  LibraryDefinition = "LibraryDefinition",
  LibraryMembersList = "LibraryMembersList",
  MappingKeyType = "MappingKeyType",
  MappingType = "MappingType",
  MappingValueType = "MappingValueType",
  MemberAccessExpression = "MemberAccessExpression",
  ModifierAttributesList = "ModifierAttributesList",
  ModifierDefinition = "ModifierDefinition",
  ModifierInvocation = "ModifierInvocation",
  NamedArgument = "NamedArgument",
  NamedArgumentsDeclaration = "NamedArgumentsDeclaration",
  NamedArgumentsList = "NamedArgumentsList",
  NamedImport = "NamedImport",
  NewExpression = "NewExpression",
  NumericExpression = "NumericExpression",
  OverrideSpecifier = "OverrideSpecifier",
  Parameter = "Parameter",
  ParametersDeclaration = "ParametersDeclaration",
  ParametersList = "ParametersList",
  PathImport = "PathImport",
  PositionalArgumentsList = "PositionalArgumentsList",
  PragmaDirective = "PragmaDirective",
  ReceiveFunctionAttributesList = "ReceiveFunctionAttributesList",
  ReceiveFunctionDefinition = "ReceiveFunctionDefinition",
  ReturnStatement = "ReturnStatement",
  ReturnsDeclaration = "ReturnsDeclaration",
  RevertStatement = "RevertStatement",
  SourceUnit = "SourceUnit",
  SourceUnitMembersList = "SourceUnitMembersList",
  StateVariableAttributesList = "StateVariableAttributesList",
  StateVariableDefinition = "StateVariableDefinition",
  Statement = "Statement",
  StatementsList = "StatementsList",
  StructDefinition = "StructDefinition",
  StructMember = "StructMember",
  StructMembersList = "StructMembersList",
  ThrowStatement = "ThrowStatement",
  TrailingTrivia = "TrailingTrivia",
  TryStatement = "TryStatement",
  TupleDeconstructionStatement = "TupleDeconstructionStatement",
  TupleExpression = "TupleExpression",
  TupleMember = "TupleMember",
  TupleMembersList = "TupleMembersList",
  TupleValuesList = "TupleValuesList",
  TypeExpression = "TypeExpression",
  TypeName = "TypeName",
  UnaryPostfixExpression = "UnaryPostfixExpression",
  UnaryPrefixExpression = "UnaryPrefixExpression",
  UncheckedBlock = "UncheckedBlock",
  UnicodeStringLiteralsList = "UnicodeStringLiteralsList",
  UnnamedFunctionAttributesList = "UnnamedFunctionAttributesList",
  UnnamedFunctionDefinition = "UnnamedFunctionDefinition",
  UserDefinedValueTypeDefinition = "UserDefinedValueTypeDefinition",
  UsingDirective = "UsingDirective",
  UsingDirectiveDeconstruction = "UsingDirectiveDeconstruction",
  UsingDirectivePath = "UsingDirectivePath",
  UsingDirectiveSymbol = "UsingDirectiveSymbol",
  UsingDirectiveSymbolsList = "UsingDirectiveSymbolsList",
  VariableDeclaration = "VariableDeclaration",
  VariableDeclarationStatement = "VariableDeclarationStatement",
  VersionPragma = "VersionPragma",
  VersionPragmaBinaryExpression = "VersionPragmaBinaryExpression",
  VersionPragmaExpression = "VersionPragmaExpression",
  VersionPragmaExpressionsList = "VersionPragmaExpressionsList",
  VersionPragmaSpecifier = "VersionPragmaSpecifier",
  VersionPragmaUnaryExpression = "VersionPragmaUnaryExpression",
  WhileStatement = "WhileStatement",
  YulAssignmentStatement = "YulAssignmentStatement",
  YulBlock = "YulBlock",
  YulBreakStatement = "YulBreakStatement",
  YulContinueStatement = "YulContinueStatement",
  YulDeclarationStatement = "YulDeclarationStatement",
  YulExpression = "YulExpression",
  YulExpressionsList = "YulExpressionsList",
  YulForStatement = "YulForStatement",
  YulFunctionCallExpression = "YulFunctionCallExpression",
  YulFunctionDefinition = "YulFunctionDefinition",
  YulIdentifierPath = "YulIdentifierPath",
  YulIdentifierPathsList = "YulIdentifierPathsList",
  YulIdentifiersList = "YulIdentifiersList",
  YulIfStatement = "YulIfStatement",
  YulLeaveStatement = "YulLeaveStatement",
  YulParametersDeclaration = "YulParametersDeclaration",
  YulReturnsDeclaration = "YulReturnsDeclaration",
  YulStatement = "YulStatement",
  YulStatementsList = "YulStatementsList",
  YulSwitchCase = "YulSwitchCase",
  YulSwitchCasesList = "YulSwitchCasesList",
  YulSwitchStatement = "YulSwitchStatement",
}
export enum ProductionKind {
  ABICoderPragma = "ABICoderPragma",
  AbicoderKeyword = "AbicoderKeyword",
  AbstractKeyword = "AbstractKeyword",
  AddressKeyword = "AddressKeyword",
  AddressType = "AddressType",
  Ampersand = "Ampersand",
  AmpersandAmpersand = "AmpersandAmpersand",
  AmpersandEqual = "AmpersandEqual",
  AnonymousKeyword = "AnonymousKeyword",
  ArgumentsDeclaration = "ArgumentsDeclaration",
  ArrayExpression = "ArrayExpression",
  ArrayValuesList = "ArrayValuesList",
  AsKeyword = "AsKeyword",
  AsciiStringLiteral = "AsciiStringLiteral",
  AsciiStringLiteralsList = "AsciiStringLiteralsList",
  AssemblyFlagsList = "AssemblyFlagsList",
  AssemblyKeyword = "AssemblyKeyword",
  AssemblyStatement = "AssemblyStatement",
  Asterisk = "Asterisk",
  AsteriskAsterisk = "AsteriskAsterisk",
  AsteriskEqual = "AsteriskEqual",
  Bang = "Bang",
  BangEqual = "BangEqual",
  Bar = "Bar",
  BarBar = "BarBar",
  BarEqual = "BarEqual",
  Block = "Block",
  BoolKeyword = "BoolKeyword",
  BreakKeyword = "BreakKeyword",
  BreakStatement = "BreakStatement",
  ByteKeyword = "ByteKeyword",
  CalldataKeyword = "CalldataKeyword",
  Caret = "Caret",
  CaretEqual = "CaretEqual",
  CaseKeyword = "CaseKeyword",
  CatchClause = "CatchClause",
  CatchClauseError = "CatchClauseError",
  CatchClausesList = "CatchClausesList",
  CatchKeyword = "CatchKeyword",
  CloseBrace = "CloseBrace",
  CloseBracket = "CloseBracket",
  CloseParen = "CloseParen",
  Colon = "Colon",
  ColonEqual = "ColonEqual",
  Comma = "Comma",
  ConstantDefinition = "ConstantDefinition",
  ConstantKeyword = "ConstantKeyword",
  ConstructorAttributesList = "ConstructorAttributesList",
  ConstructorDefinition = "ConstructorDefinition",
  ConstructorKeyword = "ConstructorKeyword",
  ContinueKeyword = "ContinueKeyword",
  ContinueStatement = "ContinueStatement",
  ContractDefinition = "ContractDefinition",
  ContractKeyword = "ContractKeyword",
  ContractMembersList = "ContractMembersList",
  DaysKeyword = "DaysKeyword",
  DecimalLiteral = "DecimalLiteral",
  DeconstructionImport = "DeconstructionImport",
  DeconstructionImportSymbol = "DeconstructionImportSymbol",
  DeconstructionImportSymbolsList = "DeconstructionImportSymbolsList",
  DefaultKeyword = "DefaultKeyword",
  DeleteKeyword = "DeleteKeyword",
  DeleteStatement = "DeleteStatement",
  DoKeyword = "DoKeyword",
  DoWhileStatement = "DoWhileStatement",
  ElseKeyword = "ElseKeyword",
  EmitKeyword = "EmitKeyword",
  EmitStatement = "EmitStatement",
  EndOfFileTrivia = "EndOfFileTrivia",
  EndOfLine = "EndOfLine",
  EnumDefinition = "EnumDefinition",
  EnumKeyword = "EnumKeyword",
  Equal = "Equal",
  EqualEqual = "EqualEqual",
  EqualGreaterThan = "EqualGreaterThan",
  ErrorDefinition = "ErrorDefinition",
  ErrorKeyword = "ErrorKeyword",
  ErrorParameter = "ErrorParameter",
  ErrorParametersList = "ErrorParametersList",
  EtherKeyword = "EtherKeyword",
  EventDefinition = "EventDefinition",
  EventKeyword = "EventKeyword",
  EventParameter = "EventParameter",
  EventParametersList = "EventParametersList",
  ExperimentalKeyword = "ExperimentalKeyword",
  ExperimentalPragma = "ExperimentalPragma",
  Expression = "Expression",
  ExpressionStatement = "ExpressionStatement",
  ExternalKeyword = "ExternalKeyword",
  FallbackFunctionAttributesList = "FallbackFunctionAttributesList",
  FallbackFunctionDefinition = "FallbackFunctionDefinition",
  FallbackKeyword = "FallbackKeyword",
  FalseKeyword = "FalseKeyword",
  FinneyKeyword = "FinneyKeyword",
  FixedBytesType = "FixedBytesType",
  ForKeyword = "ForKeyword",
  ForStatement = "ForStatement",
  FromKeyword = "FromKeyword",
  FunctionAttributesList = "FunctionAttributesList",
  FunctionCallOptions = "FunctionCallOptions",
  FunctionDefinition = "FunctionDefinition",
  FunctionKeyword = "FunctionKeyword",
  FunctionType = "FunctionType",
  FunctionTypeAttributesList = "FunctionTypeAttributesList",
  GlobalKeyword = "GlobalKeyword",
  GreaterThan = "GreaterThan",
  GreaterThanEqual = "GreaterThanEqual",
  GreaterThanGreaterThan = "GreaterThanGreaterThan",
  GreaterThanGreaterThanEqual = "GreaterThanGreaterThanEqual",
  GreaterThanGreaterThanGreaterThan = "GreaterThanGreaterThanGreaterThan",
  GreaterThanGreaterThanGreaterThanEqual = "GreaterThanGreaterThanGreaterThanEqual",
  GweiKeyword = "GweiKeyword",
  HexLiteral = "HexLiteral",
  HexStringLiteral = "HexStringLiteral",
  HexStringLiteralsList = "HexStringLiteralsList",
  HoursKeyword = "HoursKeyword",
  Identifier = "Identifier",
  IdentifierPath = "IdentifierPath",
  IdentifierPathsList = "IdentifierPathsList",
  IdentifiersList = "IdentifiersList",
  IfKeyword = "IfKeyword",
  IfStatement = "IfStatement",
  ImmutableKeyword = "ImmutableKeyword",
  ImportDirective = "ImportDirective",
  ImportKeyword = "ImportKeyword",
  IndexedKeyword = "IndexedKeyword",
  InheritanceSpecifier = "InheritanceSpecifier",
  InheritanceType = "InheritanceType",
  InheritanceTypesList = "InheritanceTypesList",
  InterfaceDefinition = "InterfaceDefinition",
  InterfaceKeyword = "InterfaceKeyword",
  InterfaceMembersList = "InterfaceMembersList",
  InternalKeyword = "InternalKeyword",
  IsKeyword = "IsKeyword",
  LeadingTrivia = "LeadingTrivia",
  LeaveKeyword = "LeaveKeyword",
  LessThan = "LessThan",
  LessThanEqual = "LessThanEqual",
  LessThanLessThan = "LessThanLessThan",
  LessThanLessThanEqual = "LessThanLessThanEqual",
  LetKeyword = "LetKeyword",
  LibraryDefinition = "LibraryDefinition",
  LibraryKeyword = "LibraryKeyword",
  LibraryMembersList = "LibraryMembersList",
  MappingKeyType = "MappingKeyType",
  MappingKeyword = "MappingKeyword",
  MappingType = "MappingType",
  MappingValueType = "MappingValueType",
  MemoryKeyword = "MemoryKeyword",
  Minus = "Minus",
  MinusEqual = "MinusEqual",
  MinusGreaterThan = "MinusGreaterThan",
  MinusMinus = "MinusMinus",
  MinutesKeyword = "MinutesKeyword",
  ModifierAttributesList = "ModifierAttributesList",
  ModifierDefinition = "ModifierDefinition",
  ModifierInvocation = "ModifierInvocation",
  ModifierKeyword = "ModifierKeyword",
  MultilineComment = "MultilineComment",
  NamedArgument = "NamedArgument",
  NamedArgumentsDeclaration = "NamedArgumentsDeclaration",
  NamedArgumentsList = "NamedArgumentsList",
  NamedImport = "NamedImport",
  NewExpression = "NewExpression",
  NewKeyword = "NewKeyword",
  NumericExpression = "NumericExpression",
  OpenBrace = "OpenBrace",
  OpenBracket = "OpenBracket",
  OpenParen = "OpenParen",
  OverrideKeyword = "OverrideKeyword",
  OverrideSpecifier = "OverrideSpecifier",
  Parameter = "Parameter",
  ParametersDeclaration = "ParametersDeclaration",
  ParametersList = "ParametersList",
  PathImport = "PathImport",
  PayableKeyword = "PayableKeyword",
  Percent = "Percent",
  PercentEqual = "PercentEqual",
  Period = "Period",
  Plus = "Plus",
  PlusEqual = "PlusEqual",
  PlusPlus = "PlusPlus",
  PositionalArgumentsList = "PositionalArgumentsList",
  PragmaDirective = "PragmaDirective",
  PragmaKeyword = "PragmaKeyword",
  PrivateKeyword = "PrivateKeyword",
  PublicKeyword = "PublicKeyword",
  PureKeyword = "PureKeyword",
  QuestionMark = "QuestionMark",
  ReceiveFunctionAttributesList = "ReceiveFunctionAttributesList",
  ReceiveFunctionDefinition = "ReceiveFunctionDefinition",
  ReceiveKeyword = "ReceiveKeyword",
  ReturnKeyword = "ReturnKeyword",
  ReturnStatement = "ReturnStatement",
  ReturnsDeclaration = "ReturnsDeclaration",
  ReturnsKeyword = "ReturnsKeyword",
  RevertKeyword = "RevertKeyword",
  RevertStatement = "RevertStatement",
  SecondsKeyword = "SecondsKeyword",
  Semicolon = "Semicolon",
  SignedFixedType = "SignedFixedType",
  SignedIntegerType = "SignedIntegerType",
  SingleLineComment = "SingleLineComment",
  Slash = "Slash",
  SlashEqual = "SlashEqual",
  SolidityKeyword = "SolidityKeyword",
  SourceUnit = "SourceUnit",
  SourceUnitMembersList = "SourceUnitMembersList",
  StateVariableAttributesList = "StateVariableAttributesList",
  StateVariableDefinition = "StateVariableDefinition",
  Statement = "Statement",
  StatementsList = "StatementsList",
  StorageKeyword = "StorageKeyword",
  StringKeyword = "StringKeyword",
  StructDefinition = "StructDefinition",
  StructKeyword = "StructKeyword",
  StructMember = "StructMember",
  StructMembersList = "StructMembersList",
  SwitchKeyword = "SwitchKeyword",
  SzaboKeyword = "SzaboKeyword",
  ThrowKeyword = "ThrowKeyword",
  ThrowStatement = "ThrowStatement",
  Tilde = "Tilde",
  TrailingTrivia = "TrailingTrivia",
  TrueKeyword = "TrueKeyword",
  TryKeyword = "TryKeyword",
  TryStatement = "TryStatement",
  TupleDeconstructionStatement = "TupleDeconstructionStatement",
  TupleExpression = "TupleExpression",
  TupleMember = "TupleMember",
  TupleMembersList = "TupleMembersList",
  TupleValuesList = "TupleValuesList",
  TypeExpression = "TypeExpression",
  TypeKeyword = "TypeKeyword",
  TypeName = "TypeName",
  UncheckedBlock = "UncheckedBlock",
  UncheckedKeyword = "UncheckedKeyword",
  UnicodeStringLiteral = "UnicodeStringLiteral",
  UnicodeStringLiteralsList = "UnicodeStringLiteralsList",
  UnnamedFunctionAttributesList = "UnnamedFunctionAttributesList",
  UnnamedFunctionDefinition = "UnnamedFunctionDefinition",
  UnsignedFixedType = "UnsignedFixedType",
  UnsignedIntegerType = "UnsignedIntegerType",
  UserDefinedValueTypeDefinition = "UserDefinedValueTypeDefinition",
  UsingDirective = "UsingDirective",
  UsingDirectiveDeconstruction = "UsingDirectiveDeconstruction",
  UsingDirectivePath = "UsingDirectivePath",
  UsingDirectiveSymbol = "UsingDirectiveSymbol",
  UsingDirectiveSymbolsList = "UsingDirectiveSymbolsList",
  UsingKeyword = "UsingKeyword",
  VarKeyword = "VarKeyword",
  VariableDeclaration = "VariableDeclaration",
  VariableDeclarationStatement = "VariableDeclarationStatement",
  VersionPragma = "VersionPragma",
  VersionPragmaExpression = "VersionPragmaExpression",
  VersionPragmaExpressionsList = "VersionPragmaExpressionsList",
  VersionPragmaSpecifier = "VersionPragmaSpecifier",
  VersionPragmaValue = "VersionPragmaValue",
  ViewKeyword = "ViewKeyword",
  VirtualKeyword = "VirtualKeyword",
  WeeksKeyword = "WeeksKeyword",
  WeiKeyword = "WeiKeyword",
  WhileKeyword = "WhileKeyword",
  WhileStatement = "WhileStatement",
  Whitespace = "Whitespace",
  YearsKeyword = "YearsKeyword",
  YulAssignmentStatement = "YulAssignmentStatement",
  YulBlock = "YulBlock",
  YulBreakStatement = "YulBreakStatement",
  YulContinueStatement = "YulContinueStatement",
  YulDecimalLiteral = "YulDecimalLiteral",
  YulDeclarationStatement = "YulDeclarationStatement",
  YulExpression = "YulExpression",
  YulExpressionsList = "YulExpressionsList",
  YulForStatement = "YulForStatement",
  YulFunctionDefinition = "YulFunctionDefinition",
  YulHexLiteral = "YulHexLiteral",
  YulIdentifier = "YulIdentifier",
  YulIdentifierPath = "YulIdentifierPath",
  YulIdentifierPathsList = "YulIdentifierPathsList",
  YulIdentifiersList = "YulIdentifiersList",
  YulIfStatement = "YulIfStatement",
  YulLeaveStatement = "YulLeaveStatement",
  YulParametersDeclaration = "YulParametersDeclaration",
  YulReturnsDeclaration = "YulReturnsDeclaration",
  YulStatement = "YulStatement",
  YulStatementsList = "YulStatementsList",
  YulSwitchCase = "YulSwitchCase",
  YulSwitchCasesList = "YulSwitchCasesList",
  YulSwitchStatement = "YulSwitchStatement",
}
export class RuleNode {
  get type(): NodeType.Rule;
  get kind(): RuleKind;
  get textLength(): [utf8: number, utf16: number, char: number];
  get children(): (RuleNode | TokenNode)[];
}
export class TokenNode {
  get type(): NodeType.Token;
  get kind(): TokenKind;
  get textLength(): [utf8: number, utf16: number, char: number];
}
export class Language {
  constructor(version: string);
  get version(): string;
  static supportedVersions(): Array<string>;
  parse(productionKind: ProductionKind, input: string): ParseOutput;
}
export class ParseOutput {
  get parseTree(): RuleNode | TokenNode | null;
  get errors(): Array<ParseError>;
  get isValid(): boolean;
}
export class ParseError {
  get range(): [start: [utf8: number, utf16: number, char: number], end: [utf8: number, utf16: number, char: number]];
  toErrorReport(sourceId: string, source: string, withColour: boolean): string;
}
