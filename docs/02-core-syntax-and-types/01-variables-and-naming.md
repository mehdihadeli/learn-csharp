## Variables and Naming

Variables let you store values under a name so later code can read or update them. In C#, the type system is deeply involved in this process, so naming and declaration style affect both readability and safety.

### Core rules

Type-related topics matter because the compiler is part of how C# teaches you. It constantly checks whether the operations you are asking for make sense for the values involved.

- Focus on the rules the compiler enforces.
- Notice how the type model changes what operations are legal.
- Use examples to connect syntax with behavior.

### Example

```csharp
int orderCount = 42;
string productName = "Notebook";
bool isActive = true;

Console.WriteLine($"{productName}: {orderCount}, active = {isActive}");
```

After running the example, change a literal, a declared type, or an operator and see what the compiler reports. Type-system intuition grows from these small experiments.

### Common mistakes

Avoid names like `data` or `value` when the variable has a clearer business meaning. The compiler checks types, but only you can make names communicate intent.

### Practice

Change the values and let the compiler show you where the type rules become important.
