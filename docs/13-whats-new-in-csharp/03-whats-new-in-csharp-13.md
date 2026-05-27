# What's New in C# 13

C# 13 shipped with .NET 9 and continued the trend of improving expressiveness while also unlocking more advanced scenarios for `ref struct`, spans, and library authors.

Original Microsoft Learn reference: [Microsoft Learn What's new in C#](https://learn.microsoft.com/dotnet/csharp/whats-new/).

## A practical theme for C# 13

Many C# 13 features are best understood as language support for cleaner modern APIs, especially where performance-sensitive code and expressive APIs meet.

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

## A practical way to adopt C# 13

Most application developers should adopt the broadly useful features first and treat the advanced low-level additions as tools for specific scenarios, not default habits.

That usually means:

- pay attention first to features that simplify public APIs or common application code
- adopt the more specialized low-level features only when your code genuinely works in those domains

## Summary

- C# 13 continued the trend toward expressive modern APIs
- some features help ordinary application code, while others target advanced library or performance scenarios
- `params` collections are one of the clearest examples of practical everyday value
- low-level language power should be adopted when needed, not just because it exists
- the best adoption strategy is selective rather than feature-collection driven

## Practice

Review one existing helper API and ask whether a new `params` collection or partial member feature would actually improve it, or whether the older form is already clear enough.

As a second exercise, explain why a team might deliberately adopt only one or two C# 13 features instead of trying to use everything new immediately.
