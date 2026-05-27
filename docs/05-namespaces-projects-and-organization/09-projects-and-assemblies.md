# Projects and Assemblies

Projects describe how code should be built. Assemblies are the compiled outputs that result from that build.

These are related concepts, but they are not the same thing. Understanding the difference helps a lot when navigating .NET solutions, references, builds, and deployment.

## The basic relationship

```mermaid
flowchart LR
    A["Source files"] --> B["Project .csproj"]
    B --> C["Build process"]
    C --> D["Assembly .dll or .exe"]
```

This is the main pipeline:

- source code lives in files
- the project file describes build intent
- building produces an assembly

## What a project is

A project is usually represented by a `.csproj` file.

It describes things such as:

- target framework
- output type
- package references
- project references
- build settings

Example:

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net9.0</TargetFramework>
  </PropertyGroup>
</Project>
```

This file is not your program logic. It is build configuration for your program.

## What an assembly is

An assembly is the compiled output of a .NET project.

Common forms include:

- `.dll` for libraries
- `.exe` for executables in some build contexts

An assembly contains compiled code and metadata that the .NET runtime and other tools can use.

## Why the distinction matters

Beginners often hear “project” and “assembly” used loosely, but they solve different problems:

- the project tells the tooling how to build
- the assembly is the result of building

That distinction becomes important when you:

- add references
- split code into multiple libraries
- inspect build outputs
- publish applications

## Projects versus solutions

A solution can hold multiple projects.

For example:

- a web app project
- a class library project
- a test project

Each project can produce its own assembly.

This is one reason larger .NET codebases often have more than one project.

## A worked example

Suppose you have this setup:

- `Catalog.Core` project for domain logic
- `Catalog.ConsoleApp` project for a console UI

The core library project builds a reusable assembly. The console app project builds an executable and references the library project.

That separation helps keep code organized by responsibility.

## Common project file elements

You will often see items such as:

- `TargetFramework`
- `OutputType`
- `PackageReference`
- `ProjectReference`

These are all about build and dependency structure, not about the runtime business logic itself.

## Common mistakes

- Treating a project and an assembly as interchangeable terms.
- Assuming one solution should always contain only one project.
- Ignoring the `.csproj` file until dependency or build problems appear.
- Thinking folder structure alone defines build boundaries.

## Summary

Projects and assemblies are connected, but different.

The main ideas are:

- a project defines build intent
- an assembly is the compiled output
- one solution can contain multiple projects
- build structure influences how code is shared and organized

Once this distinction is clear, .NET tooling and references become easier to reason about.

## Practice

Open a `.csproj` file and identify the target framework and one dependency-related element.

As a second exercise, explain in your own words how a class library project differs from the assembly it produces.
