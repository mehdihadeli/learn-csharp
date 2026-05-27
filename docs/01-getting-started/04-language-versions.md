# Language Versions

C# changes over time. New versions add syntax, refine analysis rules, and sometimes make older code look more verbose by comparison. That is why two perfectly valid C# examples can look quite different.

## Why versioning matters

A project does not automatically get every new language feature just because you saw it in a blog post or tutorial. The active language version depends on the compiler and usually on the target framework and SDK being used.

That matters when:

- reading code from older tutorials
- copying examples from newer Microsoft docs
- working in a repository with mixed target frameworks
- deciding whether preview features are appropriate

## The safest default

The official Microsoft guidance is that the default language version chosen by the SDK is usually the right choice. It keeps the language level aligned with the target framework and reduces compatibility surprises.

If you need to override it, you can do so in the project file:

```xml
<PropertyGroup>
  <LangVersion>14.0</LangVersion>
</PropertyGroup>
```

For preview features:

```xml
<PropertyGroup>
  <LangVersion>preview</LangVersion>
</PropertyGroup>
```

## What to avoid

Microsoft explicitly warns against using `latest` casually. It can make builds less reproducible because the meaning depends on whichever compiler version is installed on a given machine.

In other words, `latest` feels convenient, but it can make team environments and CI less predictable.

## A useful diagnostic trick

If you want to know which language version a project is using, Microsoft documents a simple technique:

```csharp
#error version
```

That causes the compiler to report the current compiler and selected language version in the error output.

## Practice

Open a `.csproj` file and check whether it sets `LangVersion` explicitly. If it does, explain why the project might want that override instead of the default.
