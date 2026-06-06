# .NET SDK, Project System, and MSBuild

The .NET SDK provides the `dotnet` command, project templates, compilers, build targets, restore logic, and publishing tools. SDK-style project files describe what to build and how MSBuild should build it.

Original Microsoft Learn references: [.NET project SDKs](https://learn.microsoft.com/en-us/dotnet/core/project-sdk/overview) and [MSBuild](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=vs-2022).

## A practical mental model

```mermaid
flowchart LR
    A["Project file"] --> B["SDK and MSBuild"]
    B --> C["Restore, build, test, publish targets"]
    C --> D["Output artifacts"]
```

## Key ideas

- `dotnet new` creates projects from templates.
- `dotnet restore` resolves NuGet dependencies.
- `dotnet build` compiles the project and its dependencies.
- `dotnet test` runs tests for test projects.
- `dotnet publish` prepares output for deployment.

## Why the SDK-style project matters

Older project systems often required much more explicit file listing and configuration. SDK-style projects are smaller because they assume common defaults.

That means the project file usually communicates intent rather than every low-level detail.

## Example

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net9.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>
</Project>
```

The project file is small because SDK-style projects infer many defaults, including source file inclusion and common build targets.

## What MSBuild does in practice

MSBuild is the build engine beneath much of the .NET project system. It evaluates project files, properties, items, and targets, then coordinates the work needed to restore, compile, copy outputs, and publish.

You do not need to become an MSBuild expert immediately, but it helps to know that:

- the SDK supplies common targets and conventions
- the project file sets important inputs into that build process
- the `dotnet` CLI is often the main way developers interact with that system

## Practical guidance

When reading a `.csproj` file, start by looking for:

- target frameworks
- package references
- nullable and implicit usings settings
- output type
- any custom properties or special build behavior

## Summary

- the .NET SDK provides the main CLI tooling and project conventions for modern .NET development
- SDK-style projects are intentionally concise because they infer common defaults
- MSBuild is the engine that evaluates projects and runs restore, build, test, and publish steps
- understanding the project file helps explain how the application is built and configured

## Practice

Create a console project and compare the generated `.csproj` file with the files in the project directory. Notice how source files are included without being listed one by one.

As a second exercise, explain why a short project file does not mean the build system is simple. It means the SDK is supplying many conventions for you.
