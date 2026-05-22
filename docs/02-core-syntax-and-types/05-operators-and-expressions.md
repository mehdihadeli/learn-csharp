## Operators and Expressions

Expressions are how C# computes values, and operators are how those computations are combined. This is one of the most important foundations in the language because nearly every statement depends on it.

### Core rules

Type-related topics matter because the compiler is part of how C# teaches you. It constantly checks whether the operations you are asking for make sense for the values involved.

- Focus on the rules the compiler enforces.
- Notice how the type model changes what operations are legal.
- Use examples to connect syntax with behavior.

### Example

```csharp
int x = 10;
int y = 3;
int sum = x + y;
bool larger = x > y;

Console.WriteLine($"sum = {sum}, larger = {larger}");
```

After running the example, change a literal, a declared type, or an operator and see what the compiler reports. Type-system intuition grows from these small experiments.

### Common mistakes

Complex expressions become error-prone quickly. If an expression needs explanation, break it into named intermediate values.

### Practice

Change the values and let the compiler show you where the type rules become important.
