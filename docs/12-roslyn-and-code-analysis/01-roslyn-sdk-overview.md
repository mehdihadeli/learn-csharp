# Roslyn SDK Overview

Roslyn is the .NET Compiler Platform. It is more than the component that turns C# source code into assemblies. It also exposes the compiler's internal models so tools can inspect, analyze, and transform code in structured ways.

That is why Roslyn powers features such as syntax highlighting, code navigation, quick fixes, analyzers, refactorings, and source generators.

## Why Roslyn matters

Before Roslyn, many code-analysis tools relied on text processing or loosely integrated compiler hooks. Roslyn made the compiler itself programmable, which gives tooling direct access to syntax trees, symbols, types, and project structure.

This enables tools that can answer questions such as:

- what symbols are declared in this file
- what type does this expression have
- where is this method used
- can this code be safely rewritten automatically

## Main Roslyn concepts

The most important Roslyn building blocks are:

- syntax trees, which describe code structure
- semantic models, which explain meaning
- analyzers, which report diagnostics
- code fixes, which offer automated repairs
- source generators, which add code during compilation
- workspaces, which model projects, documents, and solutions

## Example perspective

If a tool wants to find every `if` statement in a file, syntax is enough. If it wants to know whether an expression is of type `string`, it needs semantics. If it wants to offer a fix across an entire solution, it usually also needs workspace information.

## A practical mindset

Roslyn becomes easier to learn when you tie each API surface to a concrete task. Do not start by memorizing types. Start by asking what problem the tool is trying to solve.

## Practice

Pick one editor feature you use often, such as rename, quick fixes, or warnings. Describe which Roslyn concepts it likely depends on.
