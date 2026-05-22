## Strings and Characters

Text handling is everywhere in real programs, so it is important to understand both `char` and `string`. Their syntax looks simple, but immutability and encoding details shape how text code behaves.

### Core rules

Type-related topics matter because the compiler is part of how C# teaches you. It constantly checks whether the operations you are asking for make sense for the values involved.

- Focus on the rules the compiler enforces.
- Notice how the type model changes what operations are legal.
- Use examples to connect syntax with behavior.

### Example

```csharp
char firstLetter = 'C';
string title = "C# Fundamentals";
string updated = title.Replace("Fundamentals", "Basics");

Console.WriteLine($"{firstLetter} {updated}");
```

After running the example, change a literal, a declared type, or an operator and see what the compiler reports. Type-system intuition grows from these small experiments.

### Common mistakes

Because strings are immutable, repeated modifications can create extra allocations. Correctness comes first, but performance-aware text code should remember this.

### Practice

Change the values and let the compiler show you where the type rules become important.
