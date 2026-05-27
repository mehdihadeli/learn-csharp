# Delegates, Events, and Command-Line Input

This guide brings together three practical topics that show up often in small tools and console programs. Delegates model executable behavior, events model notifications, and command-line input gives a program an external interface.

## Delegates as callable values

A delegate is a type that represents a method signature. You can store a method in a variable, pass it to another method, and combine it with other methods.

```csharp
Action<string> write = Console.WriteLine;
write("Hello from a delegate");
```

Delegates become especially useful when you want to pass behavior into reusable code.

## Events for notifications

Events build on delegates but restrict invocation so that only the declaring type can raise the event. Other code can subscribe and unsubscribe.

```csharp
var timer = new Countdown();
timer.Finished += () => Console.WriteLine("Done");

public class Countdown
{
    public event Action? Finished;

    public void Complete()
    {
        Finished?.Invoke();
    }
}
```

The event pattern helps separate the source of a state change from the code that reacts to it.

## Command-line arguments

Console applications often receive input through `args`.

```csharp
static void Main(string[] args)
{
    if (args.Length == 0)
    {
        Console.WriteLine("Please provide a name.");
        return;
    }

    Console.WriteLine($"Hello, {args[0]}!");
}
```

Good command-line handling means validating argument count, parsing values carefully, and giving clear feedback when input is missing or invalid.

## Common mistakes

Do not forget to unsubscribe from events when object lifetimes matter and long-lived publishers can keep subscribers alive unnecessarily. Also do not trust command-line input just because it came from your own machine. It is still external input.

## Practice

Write a tiny console program that accepts one command-line argument and raises an event when processing finishes.
