# Constructors

Constructors define how an object is created. They are the point where a type can demand required input, assign initial state, and reject invalid values before the object starts being used.

This is important because object-oriented design is not only about having members. It is also about making sure an object begins life in a valid state.

## Basic Purpose

When code uses `new`, the constructor runs. Its job is to prepare the new instance.

```csharp
class User
{
    public User(string name)
    {
        Name = name;
    }

    public string Name { get; }
}
```

This constructor makes `Name` required. A `User` object cannot be created without one.

## Constructors and Invariants

An invariant is a rule that should remain true for every valid instance of a type. Constructors are one of the best places to enforce those rules.

```csharp
class Temperature
{
    public Temperature(double celsius)
    {
        if (celsius < -273.15)
            throw new ArgumentOutOfRangeException(nameof(celsius));

        Celsius = celsius;
    }

    public double Celsius { get; }
}
```

The constructor prevents impossible values from entering the object in the first place.

## Overloaded Constructors

Sometimes a type can be created in more than one valid way. In those cases, you can use constructor overloads.

```csharp
class Report
{
    public Report(string title)
    {
        Title = title;
        CreatedAt = DateTime.UtcNow;
    }

    public Report(string title, DateTime createdAt)
    {
        Title = title;
        CreatedAt = createdAt;
    }

    public string Title { get; }
    public DateTime CreatedAt { get; }
}
```

Overloads should represent genuinely useful creation choices, not just duplicate logic with slightly different shapes.

## Primary Design Questions

When writing a constructor, ask:

- what information is truly required to create a valid instance
- what values can safely be optional or defaulted
- whether object creation is becoming too complex for a constructor alone

If constructor logic becomes large or confusing, that can be a sign that a factory method, builder, or smaller model is needed.

## Common Mistake

Do not use constructors only to assign values mechanically. Use them to protect object validity. If invalid state can enter during construction, every later member may need defensive checks.

## Practice

Write a type with two required values and one validation rule, then place that rule in the constructor so invalid objects cannot be created.
