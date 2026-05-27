# C# and .NET

C# and .NET are tightly connected, but they are not the same thing. This distinction is one of the most important mental models in the entire repository.

C# is the language you write. .NET is the platform that provides the runtime, libraries, SDK tools, packaging model, and execution environment around that language.

## The simplest accurate model

Think in layers:

- C# gives you syntax and language rules
- the compiler translates that source code
- .NET provides the runtime that executes it
- .NET libraries provide types such as `Console`, `List<T>`, `HttpClient`, and `Task`
- the SDK provides tools such as `dotnet new`, `dotnet build`, and `dotnet run`

That is why a line like `Console.WriteLine(...)` is not just "C# magic." The C# compiler understands the syntax, but `Console` comes from .NET libraries.

## What Microsoft's .NET introduction emphasizes

The official .NET introduction describes the platform in terms of components such as:

- the runtime
- libraries
- compilers
- the SDK and tools

That breakdown is useful because it explains why language behavior, runtime behavior, and tool behavior are related but still different.

## Example workflow

```bash
dotnet --info
dotnet new console -n DemoApp
dotnet run --project DemoApp
```

This command sequence shows the platform side clearly:

- `dotnet --info` shows the installed SDK and runtimes
- `dotnet new` creates project files and starter source
- `dotnet run` builds and executes the app through the .NET toolchain

## Why this distinction matters

When a beginner says "C# is broken," the real problem might be any of these:

- the SDK is not installed correctly
- the project targets a different framework than expected
- the runtime is missing
- the code uses syntax from a newer language version
- the editor tooling is misconfigured

Those are different layers. If you keep the layers separate, troubleshooting gets easier.

## Practice

Take one feature such as `Console.WriteLine`, `List<T>`, or `async`. Explain which part belongs mostly to the language and which part belongs mostly to .NET.
