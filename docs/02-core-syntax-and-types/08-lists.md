# Lists

`List<T>` is one of the most common collection types in C#. It stores an ordered sequence of elements of the same type, but unlike an array, it can grow and shrink as the program runs.

That makes lists a natural next step after arrays. Arrays teach indexing and ordered storage. Lists teach those same ideas in a more flexible form.

## Why lists matter

Real programs often do not know the exact number of items ahead of time. You may read user names from input, gather matching search results, build a shopping cart, or collect log messages as work progresses.

In those cases, a fixed-size array can feel awkward. `List<T>` is designed for that everyday "ordered but variable-sized" scenario.

## A simple list

```csharp
List<string> names = new() { "Ava", "Noah", "Mina" };

Console.WriteLine(names[0]);
Console.WriteLine(names.Count);
```

This looks familiar if you already understand arrays.

- elements stay in order
- indexing starts at `0`
- all elements have the same type

The difference is that a list is meant to change size over time.

## Adding and removing items

```csharp
List<int> scores = new();

scores.Add(10);
scores.Add(20);
scores.Add(30);

scores.Remove(20);
```

After these operations, the list contains `10` and `30`.

This is one of the core reasons to choose `List<T>`: you can build the collection gradually instead of deciding the size up front.

## Accessing items by index

Lists support indexing just like arrays.

```csharp
List<string> colors = new() { "red", "green", "blue" };

Console.WriteLine(colors[1]);
colors[1] = "yellow";
Console.WriteLine(colors[1]);
```

That means lists work well when order matters and you often want the element at a specific position.

## Iterating through a list

You can use either `for` or `foreach`.

```csharp
List<string> names = new() { "Ava", "Noah", "Mina" };

for (int i = 0; i < names.Count; i++)
{
    Console.WriteLine($"Index {i}: {names[i]}");
}

foreach (string name in names)
{
    Console.WriteLine(name);
}
```

Use `for` when the index matters. Use `foreach` when you only care about the values.

## Lists versus arrays

Arrays and lists are related, but they are not interchangeable.

- arrays have fixed length after creation
- lists can grow and shrink
- arrays use `Length`
- lists use `Count`

As a rule of thumb:

- choose an array when the size is known and stable
- choose `List<T>` when the size changes during normal program flow

## A worked example

```csharp
List<string> tasks = new();

tasks.Add("Read chapter 2");
tasks.Add("Run the sample");
tasks.Add("Change one line and re-run");

Console.WriteLine($"Total tasks: {tasks.Count}");

foreach (string task in tasks)
{
    Console.WriteLine(task);
}
```

This is a realistic beginner pattern: start empty, add values as the program decides what belongs in the collection, then iterate over the result.

## Common mistakes

Lists are easier to resize than arrays, but they still require valid indices. If you read or write an index outside the allowed range, the program fails.

Other common mistakes include:

- assuming `Count` is the same property name as array `Length`
- choosing a list when a dictionary lookup by key would fit better
- modifying a list in confusing ways while iterating through it
- forgetting that `List<T>` is a reference type, so assigning it copies the reference, not the full contents

## Summary

`List<T>` is a good fit when you need:

- ordered data
- indexed access
- a size that can change over time

It is one of the most useful everyday collection types in C#.

## Practice

Create a `List<string>` with three names, add a fourth name, remove one name, and print the final list.

As a second exercise, create both an array and a list containing similar values, then explain which one would be better if new values must be added later.
