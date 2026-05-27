# Installation and Setup

Before learning syntax seriously, you need a working development environment. Good setup is not glamorous, but it removes a large number of beginner problems before they happen.

## What you need

For the workflow used in this repository, the practical starting point is:

- the .NET SDK
- a terminal where `dotnet` works
- an editor such as Visual Studio Code or Visual Studio

Microsoft's current getting-started guidance also points beginners toward VS Code plus C# tooling as a lightweight cross-platform path.

## Verify the SDK first

Always verify the SDK before assuming the editor is the problem.

```bash
dotnet --version
dotnet --info
```

If those commands fail, fix that first. Editor integration depends on a working SDK and CLI underneath.

`dotnet --version` gives you a quick confirmation that the SDK is installed. `dotnet --info` gives more complete details, including installed runtimes and SDK paths.

## Why terminal-first setup helps

Beginners often rely on editor buttons too early. That makes it harder to tell whether a problem comes from the code, the SDK, the editor, or an extension.

A terminal-first check gives you a more reliable baseline:

- can the SDK be found
- can projects be created
- can projects build and run

Once that works, the editor becomes a convenience layer instead of a mystery box.

## A practical first check

```bash
dotnet new console -n SetupCheck
dotnet run --project SetupCheck
```

If this works, your environment is already capable of basic C# development.

## Common setup mistakes

The most common issues are:

- installing only a runtime instead of the SDK
- having `dotnet` missing from the shell `PATH`
- using an editor extension without a matching local SDK
- mixing multiple SDK versions without understanding which one the project uses

## Practice

Run `dotnet --version` and `dotnet --info` on your machine. Write down the SDK version and one runtime version you see in the output.
