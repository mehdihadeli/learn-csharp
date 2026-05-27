# LINQ to Objects and Deferred Execution

LINQ to Objects means using LINQ against in-memory collections such as arrays, lists, dictionaries, and other sequences that implement `IEnumerable<T>`. This is the best place to learn core LINQ behavior because the data is local and the execution model is easier to observe.

Original Microsoft Learn reference: [Microsoft Learn LINQ for C#](https://learn.microsoft.com/dotnet/csharp/linq/).

## Why this chapter matters

Many LINQ mistakes come from not knowing when a query actually runs. Deferred execution is one of the most important LINQ ideas because it affects correctness, performance, and surprising behavior.

## Building a query is not always executing a query

Many LINQ operators are deferred. They return a sequence object that describes work to do later. The actual work happens when the sequence is enumerated.

```mermaid
flowchart LR
    A["Build query"] --> B["No full execution yet"]
    B --> C["Enumerate result"]
    C --> D["Query work happens now"]
```

```csharp
List<int> numbers = [1, 2, 3, 4, 5];

IEnumerable<int> query = numbers.Where(number => number > 2);

numbers.Add(6);

foreach (int number in query)
{
    Console.WriteLine(number);
}
```

The output includes `6` because the query was not materialized when it was created. The `Where` filter ran when the `foreach` loop enumerated the query.

That is the key lesson: creating the query and running the query are often separate moments.

## Immediate execution

Some operators force immediate execution because they need a final answer or a concrete collection.

- `ToList`, `ToArray`, and `ToDictionary` materialize results
- `Count`, `Any`, `All`, `First`, and `Single` compute answers immediately
- `Sum`, `Min`, `Max`, and `Average` aggregate immediately

```csharp
List<int> numbers = [1, 2, 3, 4, 5];

List<int> materialized = numbers.Where(number => number > 2).ToList();
numbers.Add(6);

Console.WriteLine(string.Join(", ", materialized));
```

This time the output does not include `6` because the query result was captured in a list before the source changed.

## Deferred versus immediate execution

This distinction is easier to remember if you think of two categories:

- deferred operators build query steps for later
- immediate operators force a result now

Examples of deferred operators include `Where`, `Select`, and `OrderBy`.

Examples of immediate operators include `ToList`, `Count`, `First`, and `Sum`.

## Projection shapes the result

Projection means transforming each input element into a different output value. `Select` is the most common projection operator.

```csharp
var products = new[]
{
    new { Name = "Book", Price = 20m, Quantity = 2 },
    new { Name = "Pen", Price = 5m, Quantity = 5 }
};

var summaries = products.Select(product => new
{
    product.Name,
    Total = product.Price * product.Quantity
});
```

Projection is one of the reasons LINQ feels powerful. It lets you move from raw data to the exact shape needed by the next step.

## Multiple enumeration matters too

If a deferred query is enumerated several times, its logic may run several times.

```csharp
IEnumerable<int> query = numbers.Where(number => number > 2);

Console.WriteLine(query.Count());
Console.WriteLine(query.Count());
```

That may be fine for a small list, but it can be wasteful or surprising when the query is expensive.

If you need stable repeated access, materializing once may be better.

## Why deferred execution matters

Deferred execution is useful because:

- it avoids unnecessary work until results are needed
- it allows query composition in stages
- it can reflect updates to the source sequence

It can also surprise you because:

- the query might run more than once if enumerated multiple times
- side effects inside lambdas become harder to reason about
- source mutations can change later results

## Common mistakes

Avoid side effects inside LINQ queries. A query that mutates state while it filters or projects values becomes harder to understand and debug. If the work is effect-heavy, a regular loop is often a better fit.

Also be careful with multiple enumeration. If a query is expensive and you need the results more than once, materialize it deliberately.

## Summary

- LINQ to Objects works over in-memory `IEnumerable<T>` sequences
- many LINQ operators are deferred until enumeration
- immediate operators force results now
- materialization captures a snapshot of the current results
- understanding deferred execution is essential for avoiding subtle LINQ bugs

## Practice

Create a query over a list, enumerate it once, change the source list, and enumerate it again. Then repeat the same experiment after adding `ToList()` and compare the behavior.

As a second exercise, identify one query in your own code where multiple enumeration could be a problem and explain whether materializing the result would improve clarity or performance.
