# Publishing, Deployment, and Versioning

Building creates output for development. Publishing creates output intended to run somewhere else. .NET publishing options affect size, portability, startup time, runtime requirements, and compatibility.

## Key ideas

- Framework-dependent apps require a compatible .NET runtime on the target machine.
- Self-contained apps include the runtime with the app.
- Single-file publishing bundles output into one executable file.
- Trimming can reduce size but may affect reflection-heavy code.
- Versioning includes SDK versions, target frameworks, runtime versions, package versions, and assembly versions.

## Example

```bash
dotnet publish -c Release
dotnet publish -c Release --self-contained true
```

Choose publishing settings based on the environment where the program will run, not only on local convenience.

## Practice

Publish a small console app and compare the output of a normal framework-dependent publish with a self-contained publish.
