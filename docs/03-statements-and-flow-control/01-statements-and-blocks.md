## Statements and Blocks

Statements are the executable building blocks of C#, and blocks determine grouping and scope. Understanding both is essential before more advanced control-flow patterns make sense.

### How to read it

Flow-control features are best learned by tracing execution. Ask what runs first, what conditions are tested, and what code becomes unreachable in each path.

- Trace the execution path step by step.
- Notice where scope begins and ends.
- Choose the construct that makes the path easiest to explain.

### Example path

```csharp
int age = 20;
if (age >= 18)
{
    Console.WriteLine("Adult");
}
```

Before executing the example, try to predict the exact path the runtime will take. That habit makes flow-control bugs easier to spot.

### Control-flow caution

When control flow becomes hard to explain aloud, it is often also hard to maintain.

### Practice

Walk through the example line by line and predict the execution path before you run it.
