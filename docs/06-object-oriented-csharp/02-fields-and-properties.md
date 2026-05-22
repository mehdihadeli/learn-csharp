# Fields and Properties

Fields and properties are both ways to expose or store data on an object, but they serve different purposes. A field is the underlying storage. A property is a member that controls how callers read or write that storage.

This distinction matters because object-oriented design is not only about holding values. It is also about deciding what other code is allowed to know and how state can change over time.

## What a Field Does

A field is a variable that belongs to an object or type. Fields are often used internally to keep the real storage private.

```csharp
class Counter
{
    private int _count;

    public void Increment()
    {
        _count++;
    }
}
```

Here, `_count` is implementation detail. Outside code cannot change it directly.

## What a Property Does

A property looks like a field from the caller's point of view, but it is actually member syntax. That means the type can decide how reading and writing should behave.

```csharp
class Counter
{
    private int _count;

    public int Count
    {
        get { return _count; }
    }

    public void Increment()
    {
        _count++;
    }
}
```

The caller can read `Count`, but only the object itself can change `_count`.

## Why Properties Are Preferred in Public APIs

Properties give you room to evolve a type without changing how callers use it. A property can later add validation, logging, lazy initialization, or computed behavior while keeping the same external shape.

For that reason, public data is usually exposed through properties rather than public fields.

```csharp
class Product
{
    private decimal _price;

    public decimal Price
    {
        get { return _price; }
        set
        {
            if (value < 0)
                throw new ArgumentOutOfRangeException(nameof(value));

            _price = value;
        }
    }
}
```

If `Price` had been a public field, adding validation later would have been harder without changing the API shape.

## Common Property Forms

In real C# code, you will see several common property styles:

- read-only properties for values that should not change after construction
- read-write properties for normal mutable state
- computed properties that return a value derived from other state
- auto-properties when no custom logic is needed yet

```csharp
class Rectangle
{
    public double Width { get; set; }
    public double Height { get; set; }
    public double Area => Width * Height;
}
```

`Area` is a computed property. It does not store separate data. It calculates the value when read.

## Design Guidance

Use fields mainly for internal state. Use properties when the value is part of the object's public or protected surface. This helps preserve encapsulation and keeps the type flexible as requirements change.

## Common Mistake

Do not expose public fields just because they are shorter to write. That shortcut often turns implementation detail into public contract too early.

## Practice

Take a class with one public field and refactor it into a private field plus a property. Then ask what new behavior the property makes possible.
