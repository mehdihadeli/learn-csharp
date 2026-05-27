# SDK and CLI Basics

The .NET SDK is the development kit for building .NET applications. The .NET CLI is the command-line interface that comes with that SDK. If you install the SDK, you get the `dotnet` command.

That command is one of the most important tools in the C# ecosystem because it gives you a consistent, explicit workflow across machines, editors, and operating systems.

## How the CLI is structured

Microsoft describes the CLI in a simple pattern:

- the driver: `dotnet`
- the command: `build`, `run`, `new`, `test`, and so on
- optional arguments and options

Examples:

```bash
dotnet new console -n CliBasics
dotnet build CliBasics
dotnet run --project CliBasics
```

This is useful because once you understand the shape of one command, most other commands feel familiar.

## The small set of commands beginners should know first

You do not need the entire CLI at once. The most useful beginner commands are:

- `dotnet new` to create a project
- `dotnet build` to compile it
- `dotnet run` to build and run it
- `dotnet test` to run tests later
- `dotnet add package` to add dependencies later

Those commands already cover most early learning work.

## Why the CLI matters even if you use an IDE

Editors and IDEs often call the same SDK and CLI underneath. If you understand the CLI, editor output becomes less mysterious. It also means you can reproduce the same workflow in CI, on another machine, or in a terminal-only environment.

## A practical example

```bash
dotnet new console -n CliBasics
dotnet build CliBasics
dotnet run --project CliBasics
```

This sequence creates a console project, compiles it, and runs it. That is the basic edit-build-run loop in its most visible form.

## Practice

Create a new console app with `dotnet new console`, then run it twice: once with `dotnet run` from the project folder and once with `dotnet run --project <path>` from outside the folder.
