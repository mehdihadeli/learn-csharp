# Arrays

Arrays are one of the core built-in collection types in C#. They store a fixed-size sequence of elements of the same type and provide indexed access starting at `0`.

Even when you later use `List<T>`, dictionaries, or more advanced collections, arrays remain important because they teach indexing, fixed-size storage, and how collections behave as reference types.

## Single-dimensional arrays

```csharp
int[] scores = [90, 85, 100];

Console.WriteLine(scores[1]);
Console.WriteLine(scores.Length);
```

This is the most common array shape. Each element has the same type, and the array length is fixed after creation.

In this example:

- `scores[1]` accesses the second element
- `Length` tells you how many elements the array contains
- the valid indices are `0`, `1`, and `2`

That zero-based indexing pattern appears across much of C# and .NET.

## Arrays are reference types

This is easy to miss. The elements may be value types, but the array itself is a reference type. That means assigning an array variable copies the reference, not the whole array contents.

```csharp
int[] left = [1, 2, 3];
int[] right = left;
right[0] = 99;

Console.WriteLine(left[0]);
```

The output is `99` because both variables refer to the same array object.

This surprises many beginners because the array elements look like plain data. But the container itself is still a shared object.

## Arrays have default values

If you create an array with a size but without explicit element values, each element starts with the default value of its element type.

```csharp
int[] numbers = new int[3];
string[] names = new string[3];
```

The `int` values start as `0`. The `string` elements start as `null`.

This is why arrays are often initialized immediately when you want every element to start in a meaningful state.

## Iterating through arrays

You can process arrays with either `for` or `foreach`.

```csharp
int[] scores = [90, 85, 100];

for (int i = 0; i < scores.Length; i++)
{
    Console.WriteLine($"Index {i}: {scores[i]}");
}

foreach (int score in scores)
{
    Console.WriteLine(score);
}
```

Use `for` when you need the index. Use `foreach` when you only need the values.

## Beyond one dimension

Microsoft's array reference distinguishes between:

- single-dimensional arrays
- multidimensional arrays such as `int[,]`
- jagged arrays such as `int[][]`

Beginners most often need single-dimensional arrays first. Jagged and multidimensional arrays are useful later when the data shape truly requires them.

Example shapes:

```csharp
int[] oneDimension = [1, 2, 3];
int[,] grid = { { 1, 2 }, { 3, 4 } };
int[][] rows =
[
    [1, 2, 3],
    [4, 5]
];
```

The last example is jagged because each inner array may have a different length.

## Arrays and nullability

Because arrays are reference types, the array itself can be nullable, and reference-type elements inside the array can also be nullable.

That means these are different ideas:

- a missing array
- a present array that contains missing elements

This distinction becomes important when working with APIs and external data.

## A worked example

```csharp
string[] weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

Console.WriteLine($"First day: {weekDays[0]}");
Console.WriteLine($"Number of days: {weekDays.Length}");

foreach (string day in weekDays)
{
    Console.WriteLine(day);
}
```

This example reinforces the most important beginner ideas:

- fixed-size sequence
- indexing
- length
- iteration

## Common mistakes

Arrays do not grow automatically. If the number of elements changes often, a `List<T>` is frequently a better fit.

Also watch for off-by-one errors. Valid indices go from `0` to `Length - 1`.

Other common mistakes include:

- forgetting that the array itself is shared when assigned to another variable
- reading an element before checking the index range
- choosing an array when the size is unknown or frequently changing

## Summary

Arrays are simple, but they teach many core collection ideas at once:

- sequences
- indexing
- fixed length
- iteration
- reference semantics of the container

## Practice

Create an array of five numbers, print each one with a loop, then change one element through a second variable that references the same array.

As a second exercise, create both a single-dimensional array and a jagged array, then explain the difference in shape.
