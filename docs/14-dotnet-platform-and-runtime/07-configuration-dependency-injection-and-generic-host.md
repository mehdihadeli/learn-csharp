# Configuration, Dependency Injection, and Generic Host

Modern .NET libraries share common infrastructure for configuration, dependency injection, logging, and application lifetime management. These concepts are not limited to web applications.

## Key ideas

- Configuration combines values from files, environment variables, command-line arguments, and other providers.
- Dependency injection helps code ask for abstractions instead of constructing every dependency directly.
- The generic host coordinates services, configuration, logging, and lifetime events.
- Worker services and console tools can use the same hosting model as larger applications.

## Example

```csharp
using Microsoft.Extensions.DependencyInjection;

ServiceCollection services = new();
services.AddSingleton<IClock, SystemClock>();

ServiceProvider provider = services.BuildServiceProvider();
IClock clock = provider.GetRequiredService<IClock>();
```

This pattern is most useful when dependencies have interfaces, lifetimes, or configuration-driven behavior.

## Practice

Refactor a class that directly creates a helper object so the helper is passed through the constructor. Then register both types in a `ServiceCollection`.
