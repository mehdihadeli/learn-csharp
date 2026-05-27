# LINQ to Objects and Deferred Execution

LINQ to Objects means using LINQ against in-memory collections such as arrays, lists, dictionaries, and other sequences that implement `IEnumerable<T>`. This is the best place to learn core LINQ behavior because the data is local and the execution model is easier to observe.

## Building a query is not always executing a query

Many LINQ operators are deferred. They return a sequence object that describes work to do later. The actual work happens when the sequence is enumerated.

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

## Projection shapes the result

Projection means transforming each input element into a different output value. `Select` is the most common projection operator.

```csharp
var summaries = products.Select(product => new
{
    product.Name,
    Total = product.Price * product.Quantity
});
```

Projection is one of the reasons LINQ feels powerful. It lets you move from raw data to the exact shape needed by the next step.

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

## Practice

Create a query over a list, enumerate it once, change the source list, and enumerate it again. Then repeat the same experiment after adding `ToList()` and compare the behavior.
