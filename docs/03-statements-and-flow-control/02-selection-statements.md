## Selection Statements

Selection statements are what let a program make decisions. In C#, the best choice often depends on whether you are testing raw conditions, known values, or richer structural patterns.

### How to read it

Flow-control features are best learned by tracing execution. Ask what runs first, what conditions are tested, and what code becomes unreachable in each path.

- Trace the execution path step by step.
- Notice where scope begins and ends.
- Choose the construct that makes the path easiest to explain.

### Example path

```csharp
int score = 82;

if (score >= 90)
    Console.WriteLine("A");
else if (score >= 80)
    Console.WriteLine("B");
else
    Console.WriteLine("Needs improvement");
```

Before executing the example, try to predict the exact path the runtime will take. That habit makes flow-control bugs easier to spot.

### Control-flow caution

When control flow becomes hard to explain aloud, it is often also hard to maintain.

### Practice

Walk through the example line by line and predict the execution path before you run it.
