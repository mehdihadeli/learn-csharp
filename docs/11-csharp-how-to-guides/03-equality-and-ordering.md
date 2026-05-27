# Equality and Ordering

Equality feels simple until a program needs correct behavior in dictionaries, sets, searches, tests, and sorting rules. At that point, the difference between identity, value equality, and ordering semantics becomes important.

## Reference equality versus value equality

For many class types, two variables can refer to different objects even if those objects contain the same data. That is reference identity. Value equality asks whether the values should be considered equal based on their contents.

```csharp
var left = new Person("Lina", 30);
var right = new Person("Lina", 30);

Console.WriteLine(ReferenceEquals(left, right));
Console.WriteLine(left.Equals(right));

public sealed record Person(string Name, int Age);
```

Because `Person` is a record, `Equals` uses value-based comparison by default.

## Why ordering is a separate decision

Two values can be equal or not equal, but ordering answers a different question: which value should come first. Ordering matters for sorting, binary search, range logic, and business rules.

In .NET, ordering is often expressed with:

- `IComparable<T>` on the type itself
- `IComparer<T>` when different orderings are needed
- LINQ operators such as `OrderBy` and `ThenBy`

## Keep equality rules consistent

If you override equality for a type, the hash code contract matters too. Equal values must produce the same hash code. Otherwise collections such as `Dictionary<TKey, TValue>` and `HashSet<T>` can behave incorrectly.

## Common mistakes

Do not define equality casually for mutable types without thinking through the consequences. If the fields used for equality can change after insertion into a hash-based collection, the object can become difficult to find again.

## Practice

Choose a simple business type such as `Money`, `Coordinate`, or `Person`. Describe what should make two values equal and what ordering, if any, would be meaningful.
