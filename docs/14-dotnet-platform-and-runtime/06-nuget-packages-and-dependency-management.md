# NuGet Packages and Dependency Management

NuGet is the package manager for .NET. It lets projects reference reusable libraries, analyzers, build tools, and source generators from package feeds such as nuget.org or private registries.

Original Microsoft Learn reference: [What is NuGet?](https://learn.microsoft.com/en-us/nuget/what-is-nuget).

## A practical mental model

```mermaid
flowchart LR
    A["Project file"] --> B["Package references"]
    B --> C["Restore resolves dependencies"]
    C --> D["Build uses package assets"]
```

## Key ideas

- A package reference adds a dependency to a project file.
- Restore downloads packages and writes dependency resolution assets.
- Transitive dependencies are dependencies brought in by other packages.
- Package versions should be deliberate because they affect compatibility, security, and reproducibility.

## Why dependency management deserves attention

Adding a package is easy. Understanding the consequences is the real engineering skill.

A package can affect:

- API availability
- build behavior
- application size
- runtime compatibility
- security exposure
- reproducibility across machines and CI

## Example

```xml
<ItemGroup>
  <PackageReference Include="Humanizer" Version="2.14.1" />
</ItemGroup>
```

You can add a package from the command line:

```bash
dotnet add package Humanizer
```

## Direct and transitive dependencies

One of the most important concepts here is that your project depends not only on the packages you add directly, but also on the packages those packages bring in.

That means dependency analysis is often broader than one visible line in the project file.

## Practical guidance

Good dependency management usually means:

- add packages only when they solve a real need
- keep versions intentional and review upgrades carefully
- understand whether a package is runtime code, analyzer tooling, source generation, or build infrastructure
- treat dependency updates as compatibility and security decisions, not only convenience changes

## Summary

- NuGet is the package system for .NET libraries and build-time tooling
- restore resolves both direct and transitive dependencies
- package choices affect compatibility, security, and build behavior
- disciplined package management reduces surprises in development and deployment

## Practice

Add a small package to a test project, run `dotnet restore`, and inspect the project file change. Then remove the package and restore again.

As a second exercise, explain why two projects with the same direct package reference might still end up with different dependency behavior if other transitive dependencies differ.
