# Anonymous Types

Anonymous types let you create a small object with properties without first declaring a named class or record. They are useful when you want a temporary shaped result and a dedicated named type would add more ceremony than value.

They are especially common in projections, quick transformations, and LINQ queries.

## A basic example

```csharp
var summary = new { Name = "Ada", Score = 95 };
Console.WriteLine(summary.Name);
```

The compiler creates a type behind the scenes with readable properties such as `Name` and `Score`.

## Why anonymous types exist

Sometimes code needs a short-lived container for a few values, but those values do not deserve a permanent named model type.

Anonymous types let you say, in effect:

"I need an object with these properties right here, and only for this local scenario."

## The mental model

```mermaid
flowchart LR
    A["Existing data"] --> B["Projection"]
    B --> C["Anonymous type with selected properties"]
```

This is why they appear so often in LINQ: they are a natural way to project one shape of data into another temporary shape.

## A slightly richer example

```csharp
var customer = new
{
    Id = 10,
    FullName = "Lina Rahimi",
    IsPreferred = true
};

Console.WriteLine(customer.FullName);
```

This creates a strongly typed object, even though the type has no explicit name in your code.

## Anonymous types are still strongly typed

This is important: anonymous types are not the same as `dynamic`.

The compiler knows the properties and their types. You still get compile-time checking inside the scope where the variable is known.

That means anonymous types are convenient, but they are not loosely typed magic.

## Where they are most useful

Anonymous types are especially useful for:

- LINQ projections
- local transformations
- grouping a few values temporarily
- preparing data for display or internal processing

For example:

```csharp
var products = new[]
{
    new { Name = "Book", Price = 20m },
    new { Name = "Pen", Price = 5m }
};
```

## When a named type is better

If the data shape needs to travel across methods, across layers, or become part of a public API, a named type is usually better.

That is because anonymous types are mainly for local convenience. They are awkward as a broader design boundary.

## Anonymous types versus tuples

Both anonymous types and tuples can group values quickly, but they emphasize different things.

- anonymous types are often better when named properties improve readability
- tuples are often better for lightweight value grouping and deconstruction-style workflows

If property names like `Name` and `Price` improve understanding, anonymous types may read better.

## Limitations to remember

Anonymous types are most comfortable when they stay local. They are not usually the right choice for:

- public return types
- reusable domain models
- shared contracts between components

They solve a local shape problem, not a long-term modeling problem.

## Common beginner mistakes

- Using anonymous types where a named type should represent stable meaning.
- Confusing anonymous types with `dynamic`.
- Letting temporary anonymous shapes spread too far through the code.
- Avoiding a real model type when the data shape clearly matters beyond one local operation.

## Summary

- anonymous types create short-lived shaped objects without a named type declaration
- they are strongly typed and known to the compiler
- they are especially useful for LINQ and local projections
- named types are better for public APIs and long-lived models
- anonymous types are best treated as local convenience tools

## Practice

Create an anonymous type with three properties and explain why the compiler still knows those property names and types.

As a second exercise, compare an anonymous type and a named record for the same data and explain which one better fits a local projection versus a reusable domain model.
