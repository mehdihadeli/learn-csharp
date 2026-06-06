# Language Versioning and Compatibility

C# language versions are tied closely to the compiler and, in practice, to the .NET SDK and target framework you use. That relationship matters because new syntax is not only a compiler feature. Some language features also rely on runtime or library support.

Original Microsoft Learn reference: [C# language versioning](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-versioning).

## A practical mental model

```mermaid
flowchart LR
    A["Target framework and SDK"] --> B["Compiler and language version"]
    B --> C["Available syntax and feature support"]
```

This is why language versioning is not just about syntax preference. It is also about build behavior, tooling support, and team consistency.

## The default version usually follows the target framework

In most modern .NET projects, you do not need to set the language version manually. The SDK chooses a default language version that matches the project's target framework and compiler support.

That default is usually the safest option because it keeps language features aligned with supported runtime behavior.

## Setting the language version explicitly

If you need a specific version, you can set it in the project file.

```xml
<PropertyGroup>
  <LangVersion>14.0</LangVersion>
</PropertyGroup>
```

Preview features can be enabled with:

```xml
<PropertyGroup>
  <LangVersion>preview</LangVersion>
</PropertyGroup>
```

Use preview deliberately. Preview syntax can change, and it may not be appropriate for long-lived production material.

## Compatibility guidance

The most practical rule is simple: do not force a language version newer than the version supported by the target environment unless you understand the consequences.

This is also why `latest` is usually a poor choice for reproducible builds. Different machines may have different compiler versions installed.

In a team or CI environment, predictable builds usually matter more than always getting the newest syntax automatically.

## Why compatibility is not only a compiler issue

Some features are mostly syntax-level improvements. Others depend more strongly on newer libraries, runtime behavior, or updated framework support.

That means a language feature can be technically recognized by the compiler while still being a poor fit for a project's actual deployment environment.

## Breaking changes and behavioral shifts

Most new language versions are evolutionary rather than disruptive, but compiler behavior can still change. A previously accepted edge case might become a warning, an ambiguity might resolve differently, or a stricter rule might expose old code that was fragile all along.

So version upgrades should be treated as small engineering changes, not as invisible toggles.

## Practical guidance

Prefer the SDK default when:

- you want the simplest supported setup
- the project does not need a special version policy
- reproducibility already comes from a controlled SDK environment

Specify `LangVersion` explicitly when:

- a repository must stay aligned across multiple environments
- you are teaching or documenting a specific version deliberately
- you need preview exploration and want that choice to be visible

## Summary

- language versioning depends on the compiler, SDK, and target environment together
- the default SDK-selected version is usually the safest choice
- explicit `LangVersion` settings are useful when version policy must be visible and controlled
- `preview` and `latest` should be used deliberately, not casually
- compatibility decisions affect more than syntax; they affect build reliability and project maintainability

## Practice

Open a project file and decide whether it should rely on the SDK default language version or specify a version explicitly. Explain the tradeoff.

As a second exercise, explain why `latest` can be a poor choice for reproducible builds even if it sounds convenient.
