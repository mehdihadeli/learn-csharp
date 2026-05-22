## lock Statement

When multiple threads can touch shared state, you need coordination. The `lock` statement is one of the most direct synchronization tools in the language.

### How to read it

Flow-control features are best learned by tracing execution. Ask what runs first, what conditions are tested, and what code becomes unreachable in each path.

- Trace the execution path step by step.
- Notice where scope begins and ends.
- Choose the construct that makes the path easiest to explain.

### Example path

```csharp
object gate = new();
int counter = 0;

lock (gate)
{
    counter++;
}
```

Before executing the example, try to predict the exact path the runtime will take. That habit makes flow-control bugs easier to spot.

### Control-flow caution

When control flow becomes hard to explain aloud, it is often also hard to maintain.

### Practice

Walk through the example line by line and predict the execution path before you run it.
