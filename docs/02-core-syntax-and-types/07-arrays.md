## Arrays

Arrays are one of the core built-in collection types in C#. They offer indexed access and predictable layout, which makes them a foundational structure even when higher-level collections are used elsewhere.

### Core rules

Type-related topics matter because the compiler is part of how C# teaches you. It constantly checks whether the operations you are asking for make sense for the values involved.

- Focus on the rules the compiler enforces.
- Notice how the type model changes what operations are legal.
- Use examples to connect syntax with behavior.

### Example

```csharp
int[] scores = { 90, 85, 100 };
Console.WriteLine(scores[1]);
Console.WriteLine(scores.Length);
```

After running the example, change a literal, a declared type, or an operator and see what the compiler reports. Type-system intuition grows from these small experiments.

### Common mistakes

Arrays do not grow automatically. If the size is unknown or changes often, another collection type may fit better.

### Practice

Change the values and let the compiler show you where the type rules become important.
