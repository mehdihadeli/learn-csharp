## Type Conversion and Casting

Every non-trivial program moves values between types. C# provides several conversion paths, and each one communicates something about safety, intent, and possible data loss.

### Core rules

Type-related topics matter because the compiler is part of how C# teaches you. It constantly checks whether the operations you are asking for make sense for the values involved.

- Focus on the rules the compiler enforces.
- Notice how the type model changes what operations are legal.
- Use examples to connect syntax with behavior.

### Example

```csharp
double total = 19.75;
int roundedDown = (int)total;
int parsed = int.Parse("42");

Console.WriteLine($"{roundedDown}, {parsed}");
```

After running the example, change a literal, a declared type, or an operator and see what the compiler reports. Type-system intuition grows from these small experiments.

### Common mistakes

A conversion that compiles is not always a conversion that preserves meaning. Be especially careful when text, precision, or narrowing casts are involved.

### Practice

Change the values and let the compiler show you where the type rules become important.
