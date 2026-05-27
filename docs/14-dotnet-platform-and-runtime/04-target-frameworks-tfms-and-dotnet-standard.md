# Target Frameworks, TFMs, and .NET Standard

A target framework tells the .NET SDK which platform version and API surface your project is built for. The short name for that target is a target framework moniker, or TFM.

Original Microsoft Learn reference: [Microsoft Learn Introduction to .NET](https://learn.microsoft.com/dotnet/core/introduction).

## A practical mental model

```mermaid
flowchart LR
    A["Project file"] --> B["Target framework"]
    B --> C["Available APIs and compatibility"]
    C --> D["Build and runtime behavior"]
```

## Common examples

- `net8.0`, `net9.0`, and `net10.0` target modern .NET versions.
- `netstandard2.0` and `netstandard2.1` describe shared API contracts for libraries.
- `net48` targets .NET Framework 4.8.

## Why it matters

The target framework controls which APIs are available, which runtime can execute the program, and which packages are compatible. A library can target more than one framework when it needs to support different consumers.

This means the target framework is not just metadata. It is a compatibility decision.

## Single-targeting and multi-targeting

```xml
<PropertyGroup>
  <TargetFramework>net9.0</TargetFramework>
</PropertyGroup>
```

Multi-targeting uses `TargetFrameworks` with a semicolon-separated list.

```xml
<PropertyGroup>
  <TargetFrameworks>net8.0;net9.0</TargetFrameworks>
</PropertyGroup>
```

Multi-targeting is most common for libraries that need to support multiple consumer environments.

## Where .NET Standard fits

`.NET Standard` is best understood as an API contract for libraries rather than as a runtime you run directly.

That distinction matters because learners often confuse these ideas:

- a runtime that executes applications
- a target framework that describes a platform version
- a shared API contract intended to improve library compatibility

## Practical guidance

Choose a target framework based on:

- the environment where the application or library must run
- the APIs you need
- package compatibility requirements
- whether library consumers need broad support across platforms or older runtimes

## Summary

- a TFM tells the SDK and tooling what platform the project targets
- target frameworks influence available APIs, compatible runtimes, and package support
- multi-targeting is mainly useful when one project must serve multiple consumer environments
- .NET Standard is a shared API contract, not a standalone runtime

## Practice

Open a `.csproj` file and identify its target framework. Then check whether the installed SDK can build that target with `dotnet --list-sdks`.

As a second exercise, explain when a library might need multi-targeting and when a normal application usually does not.
