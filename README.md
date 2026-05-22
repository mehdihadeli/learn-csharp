# Learn C\#

Learn C# from the ground up with a practical, readable path inspired by course-style learning repositories, but written specifically for modern C# and .NET.

This repository should help:

- beginners who want a structured roadmap
- developers coming from other languages
- engineers who want a quick C# reference with clear examples

The goal is not to collect random notes. The goal is to build a clean learning path that is accurate, readable, and easy to expand with runnable examples later.

This repository aims to stay close to the spirit of the official Microsoft documentation:

- the C# language reference for syntax and idioms
- the .NET docs for platform and tooling context
- language version guidance for newer features and compatibility

## What This Repository Should Teach

- C# fundamentals in a logical order
- correct mental models for the type system and statements
- modern .NET CLI and project workflows
- practical examples you can run and modify
- modern C# practices, not outdated habits

## How To Use This Repository

The full learning content lives under the [docs](docs) folder and is also intended for Docusaurus publishing.

Interactive notebook companions live under the [notebooks](notebooks) folder for runnable .NET and C# examples that mirror the chapter layout.

Start here:

- [Introduction](docs/00-introduction.md)

## Table of Contents

### Getting Started

- [What Is C#?](docs/01-getting-started/01-what-is-csharp.md)
- [Why Learn C#?](docs/01-getting-started/02-why-learn-csharp.md)
- [C# and .NET](docs/01-getting-started/03-csharp-and-dotnet.md)
- [Language Versions](docs/01-getting-started/04-language-versions.md)
- [Installation and Setup](docs/01-getting-started/05-installation-and-setup.md)
- [SDK and CLI Basics](docs/01-getting-started/06-sdk-and-cli-basics.md)
- [IDEs: VS Code and Visual Studio](docs/01-getting-started/07-ides-vs-code-and-visual-studio.md)
- [Your First Program](docs/01-getting-started/08-your-first-program.md)
- [How C# Runs Code](docs/01-getting-started/09-how-csharp-runs-code.md)
- [How To Run C# Programs](docs/01-getting-started/10-how-to-run-csharp-programs.md)

### Chapter I: Core Syntax and Types

- [Variables and Naming](docs/02-core-syntax-and-types/01-variables-and-naming.md)
- [Built-in Value Types](docs/02-core-syntax-and-types/02-built-in-value-types.md)
- [Reference Types and Nullability](docs/02-core-syntax-and-types/03-reference-types-and-nullability.md)
- [Type Conversion and Casting](docs/02-core-syntax-and-types/04-type-conversion-and-casting.md)
- [Operators and Expressions](docs/02-core-syntax-and-types/05-operators-and-expressions.md)
- [Strings and Characters](docs/02-core-syntax-and-types/06-strings-and-characters.md)
- [Arrays](docs/02-core-syntax-and-types/07-arrays.md)
- [Tuples](docs/02-core-syntax-and-types/08-tuples.md)
- [Enums](docs/02-core-syntax-and-types/09-enums.md)
- [Input and Output](docs/02-core-syntax-and-types/10-input-and-output.md)

### Chapter II: Statements and Flow Control

- [Statements and Blocks](docs/03-statements-and-flow-control/01-statements-and-blocks.md)
- [Selection Statements](docs/03-statements-and-flow-control/02-selection-statements.md)
- [Pattern Matching](docs/03-statements-and-flow-control/03-pattern-matching.md)
- [Iteration Statements](docs/03-statements-and-flow-control/04-iteration-statements.md)
- [Jump Statements](docs/03-statements-and-flow-control/05-jump-statements.md)
- [Exception-handling Statements](docs/03-statements-and-flow-control/06-exception-handling-statements.md)
- [checked and unchecked](docs/03-statements-and-flow-control/07-checked-and-unchecked.md)
- [using and Dispose Patterns](docs/03-statements-and-flow-control/08-using-and-dispose-patterns.md)
- [lock Statement](docs/03-statements-and-flow-control/09-lock-statement.md)
- [yield Statement](docs/03-statements-and-flow-control/10-yield-statement.md)

### Chapter III: Members, Methods, and Functions

- [Methods](docs/04-members-methods-and-functions/01-methods.md)
- [Method Parameters](docs/04-members-methods-and-functions/02-method-parameters.md)
- [Optional and Named Arguments](docs/04-members-methods-and-functions/03-optional-and-named-arguments.md)
- [Return Values](docs/04-members-methods-and-functions/04-return-values.md)
- [Expression-bodied Members](docs/04-members-methods-and-functions/05-expression-bodied-members.md)
- [Local Functions](docs/04-members-methods-and-functions/06-local-functions.md)
- [Lambda Expressions](docs/04-members-methods-and-functions/07-lambda-expressions.md)
- [Delegates](docs/04-members-methods-and-functions/08-delegates.md)
- [Events](docs/04-members-methods-and-functions/09-events.md)
- [Extension Methods](docs/04-members-methods-and-functions/10-extension-methods.md)

### Chapter IV: Namespaces, Projects, and Organization

- [Namespaces](docs/05-namespaces-projects-and-organization/01-namespaces.md)
- [using Directives](docs/05-namespaces-projects-and-organization/02-using-directives.md)
- [Access Modifiers](docs/05-namespaces-projects-and-organization/03-access-modifiers.md)
- [Classes](docs/05-namespaces-projects-and-organization/04-classes.md)
- [Structs](docs/05-namespaces-projects-and-organization/05-structs.md)
- [Records](docs/05-namespaces-projects-and-organization/06-records.md)
- [Interfaces](docs/05-namespaces-projects-and-organization/07-interfaces.md)
- [Generics](docs/05-namespaces-projects-and-organization/08-generics.md)
- [Projects and Assemblies](docs/05-namespaces-projects-and-organization/09-projects-and-assemblies.md)
- [NuGet Packages and References](docs/05-namespaces-projects-and-organization/10-nuget-packages-and-references.md)

### Chapter V: Object-Oriented C\#

- [Objects and Instances](docs/06-object-oriented-csharp/01-objects-and-instances.md)
- [Fields and Properties](docs/06-object-oriented-csharp/02-fields-and-properties.md)
- [Constructors](docs/06-object-oriented-csharp/03-constructors.md)
- [Inheritance](docs/06-object-oriented-csharp/04-inheritance.md)
- [Polymorphism](docs/06-object-oriented-csharp/05-polymorphism.md)
- [Abstract Classes](docs/06-object-oriented-csharp/06-abstract-classes.md)
- [Interfaces in Practice](docs/06-object-oriented-csharp/07-interfaces-in-practice.md)
- [Operator Overloading](docs/06-object-oriented-csharp/08-operator-overloading.md)
- [Indexers](docs/06-object-oriented-csharp/09-indexers.md)
- [Object and Collection Initializers](docs/06-object-oriented-csharp/10-object-and-collection-initializers.md)

### Chapter VI: Advanced Language Features

- [Pattern Combinators](docs/07-advanced-language-features/01-pattern-combinators.md)
- [Nullable Reference Types](docs/07-advanced-language-features/02-nullable-reference-types.md)
- [Attributes](docs/07-advanced-language-features/03-attributes.md)
- [Preprocessor Directives](docs/07-advanced-language-features/04-preprocessor-directives.md)
- [Unsafe Code and Pointers](docs/07-advanced-language-features/05-unsafe-code-and-pointers.md)
- [Span and Memory Overview](docs/07-advanced-language-features/06-span-and-memory-overview.md)
- [User-defined Conversions](docs/07-advanced-language-features/07-user-defined-conversions.md)
- [Overload Resolution Overview](docs/07-advanced-language-features/08-overload-resolution-overview.md)
- [Anonymous Types](docs/07-advanced-language-features/09-anonymous-types.md)
- [dynamic and Reflection Overview](docs/07-advanced-language-features/10-dynamic-and-reflection-overview.md)

### Chapter VII: Practical C\#

- [LINQ Basics](docs/08-practical-csharp/01-linq-basics.md)
- [async and await](docs/08-practical-csharp/02-async-and-await.md)
- [Exception Design](docs/08-practical-csharp/03-exception-design.md)
- [File and Directory Basics](docs/08-practical-csharp/04-file-and-directory-basics.md)
- [Serialization with System.Text.Json](docs/08-practical-csharp/05-serialization-with-system-text-json.md)
- [Testing Basics](docs/08-practical-csharp/06-testing-basics.md)
- [Documentation Comments](docs/08-practical-csharp/07-documentation-comments.md)
- [Configure Language Version](docs/08-practical-csharp/08-configure-language-version.md)
- [Whats New in Recent C# Versions](docs/08-practical-csharp/09-whats-new-in-recent-csharp-versions.md)
- [Next Steps and References](docs/08-practical-csharp/10-next-steps-and-references.md)

## References

- [C# Language Reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)
- [.NET Documentation](https://learn.microsoft.com/en-us/dotnet/)
- [.NET CLI Overview](https://learn.microsoft.com/en-us/dotnet/core/tools/)
- [C# Language Versioning](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/configure-language-version)
- [System.Text.Json](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/overview)
- [NuGet Documentation](https://learn.microsoft.com/en-us/nuget/)

## License

This repository is licensed under the `MIT` License.

See the [LICENSE.md](LICENSE.md) file for the full information.
