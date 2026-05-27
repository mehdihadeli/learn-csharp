# LINQ Overview

LINQ stands for Language Integrated Query. The name matters because LINQ is not just one helper class or one library feature. It is a combination of language syntax, extension methods, delegates, generic interfaces, and library conventions that lets C# describe data operations in a consistent way.

Before LINQ, many data-heavy tasks were still possible, but the code was often more repetitive. Filtering, sorting, grouping, and projecting values usually required explicit loops and temporary collections. LINQ gives those operations a shared vocabulary that works across arrays, lists, dictionaries, XML, databases, and other data sources.

## Why LINQ matters

LINQ changes how you think about data-oriented code.

- It encourages you to describe what result you want instead of how to build it step by step.
- It makes common data operations readable and composable.
- It helps the same query ideas work across different data sources.
- It reduces boilerplate loops when the intent is filtering, transformation, or aggregation.

That does not mean loops become obsolete. A `foreach` loop is still often clearer when the work is stateful, imperative, or performance-critical. LINQ is strongest when you are expressing a data pipeline.

## Core LINQ operations

Most LINQ code combines a small set of ideas:

- filtering with `Where`
- projection with `Select`
- ordering with `OrderBy` and `ThenBy`
- aggregation with `Count`, `Sum`, `Max`, and `Aggregate`
- element selection with `First`, `Single`, and `Last`
- grouping with `GroupBy`

```csharp
string[] names = ["Lina", "Omid", "Sara", "Reza"];

IEnumerable<string> shortNames = names
    .Where(name => name.Length <= 4)
    .OrderBy(name => name)
    .Select(name => name.ToUpperInvariant());

foreach (string name in shortNames)
{
    Console.WriteLine(name);
}
```

This example creates a pipeline that filters, sorts, and transforms the source values. Each step returns another sequence, which allows the next step to build on the previous one.

## A useful mental model

An effective beginner mental model is:

- the source sequence provides items
- each LINQ operator builds a new step in the pipeline
- execution usually happens only when the result is actually enumerated

That last point is especially important. Many LINQ queries are descriptions of work, not immediate work. The difference between building a query and executing a query affects correctness, performance, and debugging.

## LINQ is more than in-memory collections

Most learners should begin with arrays and lists because the behavior is easier to see. However, LINQ was designed so the same query style can also work with providers that translate queries into other forms, such as SQL.

That is why this chapter separates `IEnumerable<T>` and `IQueryable<T>`. They look similar at the call site, but they do not always behave the same way under the hood.

## Common beginner mistakes

Do not assume that every LINQ method executes immediately. Do not assume that every query is cheap just because it reads cleanly. Do not assume that `First`, `Single`, or `Last` are interchangeable. Their semantics are different, and the wrong choice can hide bugs.

## Practice

Take a loop that filters and transforms a list into another list. Rewrite it with `Where` and `Select`, then explain which version is easier to read and why.
