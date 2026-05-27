# Query Expressions and Method Syntax

LINQ has two main surface styles: query expressions and method syntax. Query expressions use keywords such as `from`, `where`, and `select`. Method syntax uses chained extension methods such as `Where`, `Select`, and `OrderBy`.

Both styles are valid. Both are important. Good C# developers should be able to read and write each one.

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

## How the compiler sees query expressions

Query expressions are translated by the compiler into method calls. They are syntax sugar over LINQ method patterns. That means query expressions are not a separate execution engine. They eventually become calls such as `Where`, `Select`, `Join`, `GroupBy`, and `SelectMany`.

This is why understanding method syntax is non-negotiable, even if query syntax feels friendlier at first.

## When each style is clearer

Query expressions are often clearer when:

- the query has multiple clauses
- joins or groupings are involved
- the code benefits from a more declarative, left-to-right reading flow

Method syntax is often clearer when:

- the pipeline is short
- you need operators that only exist as methods
- you want to compose the query gradually with variables or conditional logic

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

## Common mistakes

Do not argue that one style is always better. The useful question is which style makes the current query easier to read, maintain, and modify.

## Practice

Write one query with query-expression syntax and then rewrite it with method syntax. Compare the two versions and explain which one would be easier for another developer to maintain.
