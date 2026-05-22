## Built-in Value Types

Built-in value types are the language’s basic units for numeric, logical, and character data. They behave differently from reference types because the value itself is stored directly.

### Core rules

Type-related topics matter because the compiler is part of how C# teaches you. It constantly checks whether the operations you are asking for make sense for the values involved.

- Focus on the rules the compiler enforces.
- Notice how the type model changes what operations are legal.
- Use examples to connect syntax with behavior.

### Example

```csharp
int quantity = 12;
double price = 19.95;
bool inStock = true;
char grade = 'A';

Console.WriteLine($"{quantity}, {price}, {inStock}, {grade}");
```

After running the example, change a literal, a declared type, or an operator and see what the compiler reports. Type-system intuition grows from these small experiments.

### Common mistakes

Do not choose numeric types casually. Precision, overflow, and intended meaning matter more than simply using the first type that compiles.

### Practice

Change the values and let the compiler show you where the type rules become important.
