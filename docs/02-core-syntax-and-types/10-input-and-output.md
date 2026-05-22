## Input and Output

Console input and output are a simple but useful bridge between code and user interaction. They are often the first place where data type conversion and validation become visible.

### Core rules

Type-related topics matter because the compiler is part of how C# teaches you. It constantly checks whether the operations you are asking for make sense for the values involved.

- Focus on the rules the compiler enforces.
- Notice how the type model changes what operations are legal.
- Use examples to connect syntax with behavior.

### Example

```csharp
Console.Write("What is your name? ");
string? name = Console.ReadLine();
Console.WriteLine($"Hello, {name}");
```

After running the example, change a literal, a declared type, or an operator and see what the compiler reports. Type-system intuition grows from these small experiments.

### Common mistakes

Console input always arrives as text. Real applications should validate and parse carefully instead of assuming input is already valid.

### Practice

Change the values and let the compiler show you where the type rules become important.
