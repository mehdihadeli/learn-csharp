## Reference Types and Nullability

Reference types store references to objects, not the objects themselves. Modern nullability annotations make that relationship explicit and let the compiler help you reason about missing values.

### Core rules

Type-related topics matter because the compiler is part of how C# teaches you. It constantly checks whether the operations you are asking for make sense for the values involved.

- Focus on the rules the compiler enforces.
- Notice how the type model changes what operations are legal.
- Use examples to connect syntax with behavior.

### Example

```csharp
string? middleName = null;
string displayName = middleName ?? "Unknown";

Console.WriteLine(displayName);
```

After running the example, change a literal, a declared type, or an operator and see what the compiler reports. Type-system intuition grows from these small experiments.

### Common mistakes

Nullable annotations help, but they do not remove the need to think about object lifetimes and valid absence states.

### Practice

Change the values and let the compiler show you where the type rules become important.
