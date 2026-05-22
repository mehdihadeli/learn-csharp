## Tuples

Tuples let you group multiple values quickly without designing a dedicated type first. They are especially useful when you want to return or pass small bundles of related data.

### Core rules

Type-related topics matter because the compiler is part of how C# teaches you. It constantly checks whether the operations you are asking for make sense for the values involved.

- Focus on the rules the compiler enforces.
- Notice how the type model changes what operations are legal.
- Use examples to connect syntax with behavior.

### Example

```csharp
(string Name, int Age) person = ("Mina", 28);
Console.WriteLine($"{person.Name} is {person.Age}");
```

After running the example, change a literal, a declared type, or an operator and see what the compiler reports. Type-system intuition grows from these small experiments.

### Common mistakes

Tuples are convenient, but overusing them for long-lived domain concepts can make code less self-explanatory than a named type would be.

### Practice

Change the values and let the compiler show you where the type rules become important.
