# What's New in C# 12

C# 12 was the language version that shipped with .NET 8. It added features that improved day-to-day expressiveness, especially around construction, collection creation, and low-level performance-oriented scenarios.

## Primary constructors

One of the most visible additions was primary constructors for classes and structs, not only for records.

```csharp
public class Course(string title)
{
    public string Title { get; } = title;
}
```

This syntax reduces boilerplate when constructor parameters naturally belong to the type's setup logic.

## Collection expressions

Collection expressions introduced a concise way to create arrays, lists, spans, and similar collection-like values.

```csharp
int[] values = [1, 2, 3, 4];
List<string> names = ["Ada", "Lina", "Sara"];
int[] combined = [.. values, 5, 6];
```

This is one of the most practical C# 12 features because it improves readability in many ordinary code paths.

## Other important additions

Microsoft's C# 12 documentation also highlights:

- `ref readonly` parameters
- default values for lambda parameters
- aliasing any type with `using`
- inline arrays for specialized performance scenarios
- the `Experimental` attribute

Some of these features matter mainly to library authors or performance-sensitive code, while collection expressions and primary constructors have broader everyday value.

## Adoption guidance

Use new syntax when it genuinely clarifies code. Do not rewrite working code just to chase novelty. A feature earns its place when it reduces boilerplate or makes intent easier to read.

## Practice

Take a class with a simple constructor and one collection initialization example. Rewrite them using C# 12 syntax and compare readability.
