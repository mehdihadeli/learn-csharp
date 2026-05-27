# .NET SDK, Project System, and MSBuild

The .NET SDK provides the `dotnet` command, project templates, compilers, build targets, restore logic, and publishing tools. SDK-style project files describe what to build and how MSBuild should build it.

## Key ideas

- `dotnet new` creates projects from templates.
- `dotnet restore` resolves NuGet dependencies.
- `dotnet build` compiles the project and its dependencies.
- `dotnet test` runs tests for test projects.
- `dotnet publish` prepares output for deployment.

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

## Practice

Create a console project and compare the generated `.csproj` file with the files in the project directory. Notice how source files are included without being listed one by one.
