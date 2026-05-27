# How To Run C# Programs

There is more than one way to run C# code, and the differences matter. The right workflow depends on whether you are learning, experimenting, building a reusable project, or creating a small utility.

## Project-based programs

The default long-term workflow is a project-based application created with the .NET SDK.

```bash
dotnet new console -n HelloProject
dotnet run --project HelloProject
```

This is the standard choice for serious learning and maintainable applications because it gives you a project file, dependency management, build settings, and room to grow.

## File-based apps

Modern .NET also supports file-based C# programs. Microsoft's current guidance shows that a single `.cs` file can be run directly through the `dotnet` host.

```csharp
Console.WriteLine("Hello from a file-based app");
```

```bash
dotnet hello-world.cs
```

This workflow is excellent for quick experiments, tiny utilities, and lower-overhead learning steps. It is not a replacement for normal multi-file projects, but it is a useful tool.

## Running from an editor

Editors such as VS Code and Visual Studio can also run or debug programs through their own commands and menus. Underneath, they still rely on the SDK, project system, and runtime.

That means editor-based running is convenient, but it is still valuable to know the equivalent terminal command.

## Which workflow should you choose?

Use a project when:

- the code will grow beyond a tiny example
- you want dependencies, tests, or multiple files
- you want a workflow that matches normal .NET development

Use a file-based app when:

- you want the smallest possible setup
- you are testing a concept quickly
- the program naturally fits in one file

## Practice

Run one small example as a project and one as a file-based app. Then explain which workflow feels better for learning and which feels better for maintainable code.
