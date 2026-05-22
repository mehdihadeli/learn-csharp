## Pattern Matching

Pattern matching lets conditions express shape, type, and content instead of only boolean comparisons. It is one of the clearest examples of modern C# becoming more expressive over time.

### How to read it

Flow-control features are best learned by tracing execution. Ask what runs first, what conditions are tested, and what code becomes unreachable in each path.

- Trace the execution path step by step.
- Notice where scope begins and ends.
- Choose the construct that makes the path easiest to explain.

### Example path

```csharp
object value = 10;

if (value is int number && number > 5)
{
    Console.WriteLine($"Large integer: {number}");
}
```

Before executing the example, try to predict the exact path the runtime will take. That habit makes flow-control bugs easier to spot.

### Control-flow caution

When control flow becomes hard to explain aloud, it is often also hard to maintain.

### Practice

Walk through the example line by line and predict the execution path before you run it.
