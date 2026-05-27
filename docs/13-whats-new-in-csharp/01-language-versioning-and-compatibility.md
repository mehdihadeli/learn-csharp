# Language Versioning and Compatibility

C# language versions are tied closely to the compiler and, in practice, to the .NET SDK and target framework you use. That relationship matters because new syntax is not only a compiler feature. Some language features also rely on runtime or library support.

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

## Breaking changes

Most new language versions are evolutionary rather than disruptive, but compiler behavior can still change. A previously accepted edge case might become a warning, an ambiguity might resolve differently, or a stricter rule might expose old code that was fragile all along.

## Practice

Open a project file and decide whether it should rely on the SDK default language version or specify a version explicitly. Explain the tradeoff.
