# What's New in C# 13

C# 13 shipped with .NET 9 and continued the trend of improving expressiveness while also unlocking more advanced scenarios for `ref struct`, spans, and library authors.

## Broadly useful additions

Some of the most practical C# 13 additions include:

- `params` collections, which extend `params` beyond array-only scenarios
- improved `lock` support with `System.Threading.Lock`
- implicit index access with `^` in object initializers
- partial properties and indexers

```csharp
public static void PrintAll(params ReadOnlySpan<string> values)
{
    foreach (string value in values)
    {
        Console.WriteLine(value);
    }
}
```

This direction reflects a larger theme in C# 13: making high-performance and modern collection-based APIs feel more natural.

## Advanced additions

Microsoft's C# 13 documentation also highlights:

- `allows ref struct` constraints
- `ref struct` interface support
- `ref` and `unsafe` usage in more async and iterator scenarios
- overload resolution priority for library authors
- the `field` keyword as a preview feature in that release cycle

These features are more specialized, but they show how the language keeps expanding support for safe high-performance code.

## Adoption guidance

Most application developers should adopt the broadly useful features first and treat the advanced low-level additions as tools for specific scenarios, not default habits.

## Practice

Review one existing helper API and ask whether a new `params` collection or partial member feature would actually improve it, or whether the older form is already clear enough.
