# NPM Package

[![npm](https://img.shields.io/npm/v/@nomicfoundation/slang?label=NPM%20Package&logo=npm&logoColor=white)](https://www.npmjs.com/package/@nomicfoundation/slang)

## Installation

Start by adding the Slang package as a dependency to your project:

```bash
npm install "@nomicfoundation/slang"
```

## Parser API

The API is initialized with a language version to create a `Language` object.
Specifying the correct version is important, as it will affect the grammar used to parse inputs.

You can then use it to parse different inputs belonging to that version.
Each `parse()` operation accepts the input source code, and a `RuleKind` variant.
This allows callers to parse entire source files (`RuleKind.SourceUnit`), individual contracts (`RuleKind.ContractDefinition`),
methods (`RuleKind.FunctionDefinition`), or any other syntax nodes.

The resulting `ParseOutput` object will contain syntax errors (if any), and the parse tree corresponding to the input source code.
You can then iterate over the resulting children, and assert that they match the expected syntax nodes:

```{ .typescript }
--8<-- "crates/solidity/outputs/npm/tests/src/doc-examples/simple-contract.ts"
```
