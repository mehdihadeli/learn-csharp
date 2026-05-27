# .NET Platform Overview

.NET is the platform that runs C# programs, supplies the standard libraries, and provides the SDK tools used to build, test, package, and publish applications. C# is the language; .NET is the runtime, library, and tooling ecosystem that makes C# useful beyond isolated syntax examples.

## What belongs in this chapter

This chapter focuses on platform concepts that apply across many kinds of .NET programs. It does not try to teach specific application stacks or UI frameworks in detail.

- the runtime and managed execution model
- the common type system and base class library
- target frameworks and compatibility
- SDK-style projects, MSBuild, and NuGet
- configuration, dependency injection, hosting, and logging
- diagnostics, memory management, publishing, and security basics

## Mental model

A C# source file is compiled by the C# compiler into an assembly. The .NET runtime loads that assembly, just-in-time compiles or executes prepared code, manages memory, handles exceptions, and connects your code to a large standard library.

```text
C# source -> compiler -> assembly -> .NET runtime -> running program
```

## Practice

Run `dotnet --info` and identify the SDK version, runtimes, operating system, architecture, and base path. Those details explain many build and runtime behaviors later.
