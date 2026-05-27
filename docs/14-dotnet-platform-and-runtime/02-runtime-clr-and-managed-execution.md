# Runtime, CLR, and Managed Execution

The .NET runtime is the execution environment for managed code. It loads assemblies, verifies and executes code, manages memory, handles exceptions, and provides services that C# programs depend on.

## Key ideas

- Managed code runs under runtime services such as garbage collection and exception handling.
- Assemblies contain compiled code and metadata that the runtime can inspect.
- The Common Language Runtime, or CLR, is the runtime model behind modern .NET execution.
- Just-in-time compilation turns intermediate language into native machine code when needed.

## Why it matters

Many C# features are language syntax over runtime behavior. `try` and `catch` depend on the runtime exception model. `using` often works with `IDisposable`. Generics, reflection, async tasks, and type loading all rely on runtime services.

## Example

```bash
dotnet build
dotnet run
```

The first command compiles the project. The second command starts the runtime with the built assembly and any required dependencies.

## Practice

Build a console project and inspect the output folder. Notice the `.dll`, `.deps.json`, and `.runtimeconfig.json` files. Each one participates in how .NET finds dependencies and runs the program.
