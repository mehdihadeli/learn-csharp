# Syntax and Semantic Analysis

The difference between syntax and semantics is the foundation of Roslyn work. Syntax tells you how code is written. Semantics tell you what that code means.

## Syntax: structure only

A syntax tree represents the structure of source code as tokens and nodes. It knows that `Customer customer = new();` is a local declaration statement with specific pieces, even if the code does not compile fully.

That makes syntax analysis useful for tasks such as:

- finding declarations by shape
- locating specific statements or expressions
- enforcing formatting or style patterns
- working with incomplete code in the editor

## Semantics: meaning and symbols

Semantic analysis answers questions that syntax alone cannot answer.

- Which `Customer` type does this identifier refer to?
- What is the type of this expression?
- Which overload was chosen?
- Is this member accessible here?

That information comes from the semantic model and symbol APIs.

## Example difference

Two method calls might have identical syntax shapes but resolve to different overloads depending on imports, type inference, and available members. Syntax sees the call expression. Semantics explains which method is actually being called.

## When syntax is enough

If you only need structure, stay at the syntax level. It is usually simpler and cheaper than semantic analysis.

## When semantics is required

If the tool depends on types, symbol identity, accessibility, overload resolution, or conversions, syntax alone is not enough.

## Practice

Take one code inspection idea, such as "find every empty catch block" or "find all string-returning methods." Decide whether syntax, semantics, or both are required.
