# Target Frameworks, TFMs, and .NET Standard

A target framework tells the .NET SDK which platform version and API surface your project is built for. The short name for that target is a target framework moniker, or TFM.

## Common examples

- `net8.0`, `net9.0`, and `net10.0` target modern .NET versions.
- `netstandard2.0` and `netstandard2.1` describe shared API contracts for libraries.
- `net48` targets .NET Framework 4.8.

## Why it matters

The target framework controls which APIs are available, which runtime can execute the program, and which packages are compatible. A library can target more than one framework when it needs to support different consumers.

## Example

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

## Practice

Open a `.csproj` file and identify its target framework. Then check whether the installed SDK can build that target with `dotnet --list-sdks`.
