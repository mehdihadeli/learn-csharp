## Enums

Enums represent a closed set of named constants. They make code easier to read because they replace unexplained numeric values with domain words.

### Core rules

Type-related topics matter because the compiler is part of how C# teaches you. It constantly checks whether the operations you are asking for make sense for the values involved.

- Focus on the rules the compiler enforces.
- Notice how the type model changes what operations are legal.
- Use examples to connect syntax with behavior.

### Example

```csharp
enum OrderStatus { Pending, Paid, Shipped }

OrderStatus status = OrderStatus.Paid;
Console.WriteLine(status);
```

After running the example, change a literal, a declared type, or an operator and see what the compiler reports. Type-system intuition grows from these small experiments.

### Common mistakes

Enums make sets of values clearer, but they are still backed by numbers. That means invalid numeric values can still exist if code is careless.

### Practice

Change the values and let the compiler show you where the type rules become important.
