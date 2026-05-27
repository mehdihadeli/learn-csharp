# Sets

In C#, the most common set type is `HashSet<T>`. A set stores unique values. If you try to add the same value more than once, the collection keeps only one copy.

This makes sets useful for a different reason than lists or dictionaries.

- a list focuses on order and position
- a dictionary focuses on key-to-value lookup
- a set focuses on uniqueness and membership

## Why sets matter

Many programming tasks are really about questions like these:

- have we already seen this value?
- is this item selected?
- which values are unique?

If duplicates are not meaningful, a set can model the problem more directly than a list.

## A simple set

```csharp
HashSet<string> tags = new() { "csharp", "dotnet" };

tags.Add("collections");
tags.Add("csharp");

Console.WriteLine(tags.Count);
```

The count does not grow for the second `"csharp"` because the value was already present.

That is the most important beginner idea about sets: duplicates are ignored.

## Membership checks

One of the strongest reasons to use a set is checking whether a value is already present.

```csharp
HashSet<int> selectedIds = new() { 3, 7, 10 };

if (selectedIds.Contains(7))
{
    Console.WriteLine("7 is selected.");
}
```

This reads naturally because the collection is designed around the idea of membership.

## Adding and removing values

```csharp
HashSet<string> completedSteps = new();

completedSteps.Add("install-sdk");
completedSteps.Add("create-project");
completedSteps.Remove("install-sdk");
```

The operations are simple, but the meaning is different from list operations. You are not managing positions. You are managing whether values belong to the set.

## Set operations

Sets also support operations that match set thinking, such as union and intersection.

```csharp
HashSet<int> left = new() { 1, 2, 3 };
HashSet<int> right = new() { 3, 4, 5 };

left.UnionWith(right);

foreach (int value in left)
{
    Console.WriteLine(value);
}
```

After the union, `left` contains all unique values from both sets.

This is more advanced than basic add-and-check operations, but it shows why sets are more than "lists with duplicates removed." They represent a different style of thinking about data.

## Sets versus lists

Choose a list when:

- order matters
- duplicates matter
- you need indexed access

Choose a set when:

- uniqueness matters
- membership checks are common
- duplicates should not be stored

For example, a music playlist usually belongs in a list because order matters. A collection of allowed role names often belongs in a set because uniqueness matters more than order.

## A worked example

```csharp
HashSet<string> visitedPages = new();

visitedPages.Add("/home");
visitedPages.Add("/products");
visitedPages.Add("/home");

Console.WriteLine($"Unique pages visited: {visitedPages.Count}");
Console.WriteLine($"Visited /products? {visitedPages.Contains("/products")}");
```

This is a natural set scenario because visiting the same page twice does not create a new kind of page.

## Common mistakes

The biggest mistake is choosing a set when order or duplicates actually matter.

Other common mistakes include:

- expecting values to remain in a meaningful positional order
- using a set when a dictionary key-to-value relationship is needed
- forgetting that duplicate additions are ignored rather than stored again

## Summary

`HashSet<T>` is a good fit when you need:

- unique values
- fast membership-style thinking
- duplicate prevention

It is especially useful for "already seen," "selected," and "allowed values" style problems.

## Practice

Create a set of favorite topics, try adding the same topic twice, and print the final count.

As a second exercise, compare a `List<string>` and a `HashSet<string>` for storing usernames, then explain which one better matches a uniqueness requirement.
