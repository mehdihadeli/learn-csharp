# Enums

Enums represent a closed set of named constants. They improve readability because they replace unexplained numeric codes with meaningful names.

Whenever a program has a small known set of choices, an enum is often a strong fit. It tells both the compiler and the reader that the value should come from a controlled list rather than from any arbitrary number.

## A simple enum

```csharp
enum OrderStatus
{
    Pending,
    Paid,
    Shipped
}

OrderStatus status = OrderStatus.Paid;
Console.WriteLine(status);
```

This is much clearer than using raw integers such as `0`, `1`, or `2` with no names attached.

It also improves related code such as method parameters and switch logic because the intent becomes visible immediately.

## Enums are still numeric underneath

Microsoft's enum reference emphasizes an important detail: enums are backed by integral values. By default, the first member is `0`, and the next members increase by one unless you assign values explicitly.

That means this is valid:

```csharp
int numericValue = (int)OrderStatus.Paid;
Console.WriteLine(numericValue);
```

That numeric foundation is useful, but it also means you should not forget that enum values can be cast from numbers, including numbers that do not correspond to defined names.

## Why zero matters

The official docs also warn that `0` deserves special attention. Because `(E)0` is the default value for any enum type, it is usually wise to define a member with value `0`, such as `None`, `Unknown`, or `Pending`, depending on the meaning.

Otherwise, code can end up with enum values that compile but do not correspond to a defined member.

For example:

```csharp
enum ConnectionState
{
    None = 0,
    Connecting = 1,
    Connected = 2,
    Failed = 3
}
```

Defining a meaningful zero value makes defaults easier to reason about.

## Flags enums are different

Some enums represent mutually exclusive choices. Others represent combinations of flags. When an enum is intended for bitwise combinations, use `[Flags]` and values that are powers of two.

That is a more advanced pattern, but it is important to know that not all enums model the same kind of data.

```csharp
[Flags]
enum FileAccessMode
{
    None = 0,
    Read = 1,
    Write = 2,
    Execute = 4
}
```

Here, values can be combined, such as `Read | Write`.

## Enums work well with branching

Enums become especially helpful when used with `switch` statements or `switch` expressions because the code reads like a list of named states.

```csharp
string message = status switch
{
    OrderStatus.Pending => "Waiting for payment.",
    OrderStatus.Paid => "Ready to prepare shipment.",
    OrderStatus.Shipped => "Already sent to the customer.",
    _ => "Unknown status."
};
```

This is far easier to understand than switching on raw numbers.

## A worked example

```csharp
enum TrafficLight
{
    Red = 0,
    Yellow = 1,
    Green = 2
}

TrafficLight current = TrafficLight.Green;

Console.WriteLine(current);
Console.WriteLine((int)current);
```

This example is good for beginners because it shows both sides of an enum:

- the readable named form
- the underlying numeric representation

## Common mistakes

Enums make sets of values clearer, but they are still numbers underneath. Invalid numeric values can still exist if code casts carelessly or accepts unchecked input.

Other common mistakes include:

- forgetting to define a meaningful zero value
- using enums for data that is not really a closed set
- using raw numeric casts without validation
- confusing normal enums with flags-style enums

## Summary

Enums help model fixed choices clearly. They make code more readable, safer, and easier to branch on, especially when compared with magic numbers.

## Practice

Define an enum for a small closed set such as order status, difficulty level, or traffic light state. Decide what the zero value should represent and why.

As a second exercise, write a `switch` expression that turns an enum value into a user-friendly message.
