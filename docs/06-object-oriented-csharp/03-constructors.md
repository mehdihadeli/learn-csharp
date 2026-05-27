# Constructors

Constructors define how an object begins its life. They are the point where a type can demand required information, set up initial state, and reject invalid values before the object is used anywhere else.

That makes constructors one of the most important tools for protecting object validity.

## What a constructor does

When code uses `new`, C# allocates the object and then runs the constructor.

```mermaid
flowchart LR
    A["new User(\"Lina\")"] --> B["Allocate object"]
    B --> C["Run constructor"]
    C --> D["Assign validated state"]
    D --> E["Object ready to use"]
```

The constructor is where the type says, in effect, "if this object exists, these minimum rules have already been satisfied."

## Basic constructor example

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

## Constructors and invariants

An invariant is a rule that should always be true for any valid instance of a type. Constructors are one of the best places to enforce invariants because they run before normal object use begins.

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

This prevents impossible values from ever entering the object.

## Required data versus optional data

Good constructors express the difference between values the object truly needs and values that can be safely defaulted.

```csharp
class BlogPost
{
    public BlogPost(string title, string content)
    {
        Title = title;
        Content = content;
        CreatedAt = DateTime.UtcNow;
    }

    public string Title { get; }
    public string Content { get; }
    public DateTime CreatedAt { get; }
}
```

In this example, `Title` and `Content` are required from the caller, while `CreatedAt` is safely chosen by the object itself.

## Constructor overloads

Sometimes a type can be created in more than one valid way. Constructor overloads let the type support those different entry points.

```csharp
class Report
{
    public Report(string title)
        : this(title, DateTime.UtcNow)
    {
    }

    public Report(string title, DateTime createdAt)
    {
        if (string.IsNullOrWhiteSpace(title))
            throw new ArgumentException("Title is required.", nameof(title));

        Title = title;
        CreatedAt = createdAt;
    }

    public string Title { get; }
    public DateTime CreatedAt { get; }
}
```

The first constructor delegates to the second one. That avoids duplicating logic.

## Constructor chaining

When several constructors share setup logic, chaining them keeps the design cleaner. The `: this(...)` syntax means one constructor calls another constructor in the same type.

That is usually better than copying validation and assignment code into multiple places.

## Constructor parameters versus settable properties

A useful design question is whether a value is required for a valid object or merely optional configuration.

- If a value is required, it usually belongs in the constructor.
- If a value is optional or changeable later, a property may be more appropriate.

This distinction helps your object communicate its rules clearly.

## A fuller example

```csharp
class BankAccount
{
    public BankAccount(string accountNumber, string ownerName, decimal openingBalance)
    {
        if (string.IsNullOrWhiteSpace(accountNumber))
            throw new ArgumentException("Account number is required.", nameof(accountNumber));

        if (string.IsNullOrWhiteSpace(ownerName))
            throw new ArgumentException("Owner name is required.", nameof(ownerName));

        if (openingBalance < 0)
            throw new ArgumentOutOfRangeException(nameof(openingBalance));

        AccountNumber = accountNumber;
        OwnerName = ownerName;
        Balance = openingBalance;
    }

    public string AccountNumber { get; }
    public string OwnerName { get; }
    public decimal Balance { get; private set; }
}
```

This constructor does more than copy values. It protects the validity of every future `BankAccount` object.

## When constructors become too heavy

If constructor logic becomes long, branching, or hard to understand, that can signal a design problem. Common possibilities are:

- too many required values
- too many responsibilities in one type
- creation rules that may fit a factory method better
- setup logic that belongs in collaborating services instead of the object itself

The lesson is not "constructors should be tiny." The lesson is that constructors should be focused on valid creation.

## Common beginner mistakes

- Leaving required values out of the constructor and hoping callers remember to assign them later.
- Accepting invalid data and planning to check it somewhere else.
- Duplicating the same setup logic across multiple overloads.
- Putting unrelated business workflows into the constructor.

## Summary

- constructors run during object creation
- they assign initial state and enforce required rules
- they are a strong place to protect invariants
- overloads should represent real creation choices
- constructor chaining helps avoid duplicated setup logic

## Practice

Write a type with two required values and one validation rule, then place that rule in the constructor so invalid objects cannot be created.

As a second exercise, create two constructor overloads where one forwards to the other, and explain why that design is clearer than duplicating the assignment logic.
