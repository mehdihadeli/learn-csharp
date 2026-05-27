# Preprocessor Directives

Preprocessor directives are compile-time instructions rather than ordinary runtime code. They tell the compiler how to include, exclude, label, or interpret parts of the source file before normal execution behavior even begins.

They are useful in a few specific scenarios, but they should be used carefully because they can make code harder to follow when overused.

## The big idea

Preprocessor directives do not behave like methods, expressions, or statements. They are instructions to the compiler.

```mermaid
flowchart LR
    A["Source code"] --> B["Preprocessor directives applied"]
    B --> C["Compiler sees final active code"]
    C --> D["Compiled program"]
```

That means code inside certain directives may not even be compiled, depending on the symbols that are active.

## A simple `#if` example

```csharp
#define DEMO

#if DEMO
Console.WriteLine("Conditional compilation is active");
#endif
```

If `DEMO` is defined, the code inside the `#if` block is included. If not, it is skipped during compilation.

## Common directives beginners should know

Some of the most common directives are:

- `#define` to define a compilation symbol
- `#if`, `#elif`, `#else`, and `#endif` for conditional compilation
- `#nullable` to control nullable analysis context
- `#region` and `#endregion` for code folding organization
- `#warning` and `#error` for compile-time messages

## Conditional compilation

Conditional compilation is the most important practical use for many developers.

```csharp
#if DEBUG
Console.WriteLine("Debug-only message");
#endif
```

This allows code to compile differently depending on symbols such as `DEBUG` or `RELEASE`.

## `#warning` and `#error`

These directives let you produce messages during compilation.

```csharp
#warning This feature is temporary and should be reviewed.
```

```csharp
#error This file should not be compiled in production.
```

They can be useful in controlled scenarios, but they should not become a substitute for proper build rules and code review.

## `#region`

`#region` and `#endregion` help group source code visually in the editor.

```csharp
#region Helper Methods
void PrintHeader() { }
void PrintFooter() { }
#endregion
```

This affects source organization in tools, not runtime behavior.

## `#nullable`

The `#nullable` directive can control nullable reference type analysis for part of a file.

```csharp
#nullable enable
```

This is useful in some migration or boundary situations, but project-level configuration is often easier to reason about when possible.

## When preprocessor directives are appropriate

They are most reasonable when:

- you need conditional compilation by build configuration or target
- you need a compile-time diagnostic message
- you are controlling nullable context deliberately
- you are organizing large files with regions

## When they hurt readability

Too many directives can fragment the code and make it difficult to know what really compiles in a given build.

If business logic depends heavily on `#if` blocks, the design is often becoming harder to maintain.

In many cases, dependency injection, configuration, runtime branching, or cleaner project structure is better than large amounts of conditional compilation.

## Common beginner mistakes

- Treating directives like normal runtime language features.
- Overusing `#if` for ordinary business rules.
- Hiding large amounts of behavior behind compile-time branches.
- Using `#region` to cover up overly large or poorly structured files.

## Summary

- preprocessor directives are compile-time instructions, not runtime statements
- `#if` and related directives control conditional compilation
- `#warning`, `#error`, `#nullable`, and `#region` are also common tools
- they should be used for specific compiler-oriented scenarios
- overuse can make code harder to understand and maintain

## Practice

Write a tiny example that compiles different code under `DEBUG` and `RELEASE`.

As a second exercise, explain one scenario where conditional compilation is appropriate and one where a normal runtime configuration option would be the better design.
