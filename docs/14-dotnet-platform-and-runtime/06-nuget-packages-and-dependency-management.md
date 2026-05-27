# NuGet Packages and Dependency Management

NuGet is the package manager for .NET. It lets projects reference reusable libraries, analyzers, build tools, and source generators from package feeds such as nuget.org or private registries.

## Key ideas

- A package reference adds a dependency to a project file.
- Restore downloads packages and writes dependency resolution assets.
- Transitive dependencies are dependencies brought in by other packages.
- Package versions should be deliberate because they affect compatibility, security, and reproducibility.

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

## Practice

Add a small package to a test project, run `dotnet restore`, and inspect the project file change. Then remove the package and restore again.
