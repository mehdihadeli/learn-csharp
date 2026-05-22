# Interfaces in Practice

Interfaces define contracts. They say what operations a type must support without saying how the type must implement them. In practice, that makes interfaces one of the most important tools for decoupling parts of a system.

The value of an interface is not in the syntax alone. The value appears when one part of the program can depend on a capability without being tied to one concrete class.

## A Simple Contract

```csharp
ILogger logger = new ConsoleLogger();
logger.Log("Started");

interface ILogger
{
    void Log(string message);
}

class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine(message);
    }
}
```

The caller only needs `ILogger`. It does not need to know whether the implementation writes to the console, a file, or a remote service.

## Why This Helps in Real Code

Interfaces are useful when you want:

- multiple implementations of the same capability
- easier substitution in tests or development environments
- looser coupling between components

For example, a service might depend on `IClock`, `ILogger`, or `IPaymentGateway` rather than concrete classes.

## Design Question

The most important design question is not "can I make an interface here?" It is "does another part of the system benefit from depending on a capability instead of a specific class?"

If the answer is yes, an interface may clarify the design. If the answer is no, creating one too early can add unnecessary ceremony.

## Interfaces and Testing

Interfaces often make testing easier because a test can replace a production implementation with a fake or stub. That matters when the real dependency is slow, expensive, or hard to control.

## Common Mistake

Do not create an interface for every class automatically. Interfaces are most valuable at boundaries where substitution or decoupling is genuinely useful.

## Practice

Pick one service-like class and ask whether callers would benefit from depending on an interface instead of the concrete type. Explain why or why not.
