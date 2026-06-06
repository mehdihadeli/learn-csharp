# Query Expressions and Method Syntax

LINQ has two main surface styles: query expressions and method syntax. Query expressions use keywords such as `from`, `where`, and `select`. Method syntax uses chained extension methods such as `Where`, `Select`, and `OrderBy`.

Original Microsoft Learn reference: [Query expression basics](https://learn.microsoft.com/en-us/dotnet/csharp/linq/get-started/query-expression-basics).

Both styles are valid. Both are important. Good C# developers should be able to read and write each one.

## The relationship between the two styles

Query expressions and method syntax are not two different query engines. Query expressions are translated by the compiler into method-call patterns.

That means method syntax is the underlying model you must understand even if query syntax feels more natural at first.

```mermaid
flowchart LR
    A["Query expression"] --> B["Compiler translation"]
    B --> C["LINQ method calls"]
```

## Query expressions

Query expressions often feel natural when the code reads like a data query.

```csharp
int[] numbers = [1, 2, 3, 4, 5, 6];

var evenSquares =
    from number in numbers
    where number % 2 == 0
    orderby number descending
    select number * number;

foreach (int value in evenSquares)
{
    Console.WriteLine(value);
}
```

This style is often easier to scan when the query contains multiple clauses or resembles SQL-like reasoning.

## Method syntax

The same logic can be written with method calls:

```csharp
int[] numbers = [1, 2, 3, 4, 5, 6];

var evenSquares = numbers
    .Where(number => number % 2 == 0)
    .OrderByDescending(number => number)
    .Select(number => number * number);
```

Method syntax is more uniform because every operator is written the same way: a method call over a sequence. It also exposes operators that have no direct query-expression syntax, such as `Distinct`, `Skip`, `Take`, and `Aggregate`.

Method syntax also makes it easier to compose queries gradually because each call is explicit and chainable.

## How the compiler sees query expressions

Query expressions are translated by the compiler into method calls. They are syntax sugar over LINQ method patterns. That means query expressions are not a separate execution engine. They eventually become calls such as `Where`, `Select`, `Join`, `GroupBy`, and `SelectMany`.

This is why understanding method syntax is non-negotiable, even if query syntax feels friendlier at first.

## Side-by-side mental comparison

Query syntax often feels like:

- describe the query in clauses
- read from source to selected result

Method syntax often feels like:

- take a sequence
- apply operators one by one
- build a fluent transformation pipeline

## When each style is clearer

Query expressions are often clearer when:

- the query has multiple clauses
- joins or groupings are involved
- the code benefits from a more declarative, left-to-right reading flow

Method syntax is often clearer when:

- the pipeline is short
- you need operators that only exist as methods
- you want to compose the query gradually with variables or conditional logic

## A fuller comparison example

Query expression version:

```csharp
var results =
    from order in orders
    where order.Total >= 100m
    orderby order.Total descending
    select order.Customer;
```

Method syntax version:

```csharp
var results = orders
    .Where(order => order.Total >= 100m)
    .OrderByDescending(order => order.Total)
    .Select(order => order.Customer);
```

These queries express the same idea. The practical question is which version your team will read faster and maintain more safely in that context.

## Mixing styles carefully

It is legal to combine the two styles, but do it with restraint. One common pattern is to use query syntax for the core query shape and then continue with method syntax for a final operator.

```csharp
var query =
    (from name in names
     where name.StartsWith("A", StringComparison.OrdinalIgnoreCase)
     select name)
    .Distinct()
    .ToList();
```

This is fine when it improves clarity. It becomes a problem when the reader has to mentally switch styles too often.

## Practical guidance

In many codebases, method syntax becomes the dominant day-to-day style because it covers all operators uniformly. But query syntax still deserves attention because it can be especially readable for joins, groupings, and clause-heavy queries.

The most important rule is consistency and readability within the current codebase.

## Common mistakes

Do not argue that one style is always better. The useful question is which style makes the current query easier to read, maintain, and modify.

Another mistake is learning only query syntax and then feeling lost when method syntax appears everywhere in real code. Both matter.

## Summary

- LINQ supports both query expressions and method syntax
- query syntax is translated by the compiler into method-call patterns
- query expressions can be especially readable for clause-heavy queries
- method syntax is more uniform and exposes all operators directly
- the best style is the one that makes the current query clearest for the team

## Practice

Write one query with query-expression syntax and then rewrite it with method syntax. Compare the two versions and explain which one would be easier for another developer to maintain.

As a second exercise, find one query where query syntax feels clearer and one where method syntax feels clearer, then explain why the difference exists.
