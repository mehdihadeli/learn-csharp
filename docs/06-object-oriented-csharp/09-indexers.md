# Indexers

Indexers let an object use bracket syntax like an array, list, or dictionary. They are useful when the object naturally represents lookup by position or key.

Instead of forcing callers to use a method such as `GetDay(1)`, an indexer can make access feel more direct and familiar.

## Basic Form

```csharp
class WeekDays
{
    private readonly string[] _days = ["Mon", "Tue", "Wed"];

    public string this[int index]
    {
        get { return _days[index]; }
    }
}
```

The keyword `this` inside the member declaration signals that the object itself can be indexed.

## When Indexers Fit Well

Indexers are a good fit when:

- the type represents a collection-like view of data
- positional or keyed access is central to how callers think about the object
- bracket syntax is clearer than a named method

Examples include wrappers around arrays, grid-like structures, caches, and domain types that expose logical lookup behavior.

## Read-Only Versus Read-Write

An indexer can support only reading or both reading and writing.

```csharp
class ScoreBoard
{
    private readonly Dictionary<string, int> _scores = new();

    public int this[string name]
    {
        get { return _scores[name]; }
        set { _scores[name] = value; }
    }
}
```

This lets callers write `board["Mina"] = 10;` instead of calling a separate setter method.

## Design Guidance

Use indexers when the bracket syntax truly matches the mental model of the type. If callers need a descriptive verb to understand the action, a normal method is often better.

## Common Mistake

Do not add an indexer just because a type contains a collection internally. The question is whether the object itself should be treated as indexable.

## Practice

Take one collection-like type and decide whether an indexer would make its API clearer or more confusing. Explain your choice based on caller readability.
