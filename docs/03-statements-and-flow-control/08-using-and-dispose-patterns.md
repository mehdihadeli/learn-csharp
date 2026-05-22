## using and Dispose Patterns

Some objects need timely cleanup because they hold external resources rather than only managed memory. C# provides dedicated syntax so that cleanup intent stays visible in the code.

### How to read it

Flow-control features are best learned by tracing execution. Ask what runs first, what conditions are tested, and what code becomes unreachable in each path.

- Trace the execution path step by step.
- Notice where scope begins and ends.
- Choose the construct that makes the path easiest to explain.

### Example path

```csharp
using var writer = new StringWriter();
writer.WriteLine("Disposable resource in use");
Console.WriteLine(writer.ToString());
```

Before executing the example, try to predict the exact path the runtime will take. That habit makes flow-control bugs easier to spot.

### Control-flow caution

When control flow becomes hard to explain aloud, it is often also hard to maintain.

### Practice

Walk through the example line by line and predict the execution path before you run it.
