# Tuples

Tuples let you group multiple values quickly without defining a dedicated type first. They are useful when the data belongs together temporarily, especially for method returns, small helper results, and local transformations.

They fill an important gap between “too little structure” and “full custom type.” Sometimes you want more meaning than separate variables, but less ceremony than creating a class or record.

## A simple tuple

```csharp
(string Name, int Age) person = ("Mina", 28);
Console.WriteLine($"{person.Name} is {person.Age}");
```

The tuple stores two values together, and the field names make the result easier to read than `Item1` and `Item2`.

Without field names, the same tuple would still work, but it would communicate less clearly:

```csharp
(string, int) person = ("Mina", 28);
Console.WriteLine(person.Item1);
Console.WriteLine(person.Item2);
```

Named tuple elements are usually easier to learn from and maintain.

## A common use case: returning multiple values

Microsoft's tuple guidance highlights method return values as one of the most useful tuple scenarios.

```csharp
(int Min, int Max) FindLimits(int[] values)
{
    return (values.Min(), values.Max());
}
```

The caller can use the tuple directly or deconstruct it.

```csharp
var (minimum, maximum) = FindLimits([4, 7, 9]);
```

This is cleaner than older patterns such as multiple `out` parameters for many small helper methods.

## Deconstruction

Deconstruction lets you unpack a tuple into separate variables.

```csharp
var person = (Name: "Ava", Age: 22);
var (name, age) = person;

Console.WriteLine(name);
Console.WriteLine(age);
```

This works especially well when the tuple is only needed briefly and the individual parts are more useful than the tuple as a whole.

## Tuples are value types

C# tuples use `System.ValueTuple`, which means tuple values are value types. Assignment copies the tuple value.

That is different from older `System.Tuple` types, which are reference types.

This distinction explains why tuples feel lightweight. They are designed for practical, local grouping of values.

## Field names improve readability, not type identity

Tuple field names are helpful, but tuple assignment and equality are based on element positions and types, not the names.

That means these tuples are compatible because their shapes match:

```csharp
(int Min, int Max) range1 = (1, 10);
(int Start, int End) range2 = range1;
```

The names differ, but the element positions and types align.

## When to use a tuple and when not to

Tuples are strongest when:

- the grouping is local and temporary
- the values are loosely related
- the main goal is convenience and readability

Prefer a named type when:

- the concept has long-term meaning in the domain
- behavior should live with the data
- the same shape appears in many places in the codebase

For example, a method that returns `(int Width, int Height)` is a good tuple candidate. A business concept such as customer profile, invoice, or address usually deserves a named type.

## A worked example

```csharp
(string Name, decimal Price, bool InStock) product = ("Notebook", 12.99m, true);

Console.WriteLine($"{product.Name}: {product.Price:C}, In stock = {product.InStock}");

var (name, price, inStock) = product;
Console.WriteLine($"{name} | {price:C} | {inStock}");
```

This shows both direct field access and deconstruction.

## Common mistakes

Tuples are convenient, but overusing them for important domain concepts can make code less self-explanatory than a record, struct, or class would be.

Other common mistakes include:

- using unnamed tuple elements when names would improve clarity
- returning large or confusing tuples from public APIs
- treating tuples as a replacement for all custom types

## Summary

Tuples are best when you need lightweight structure without long-term complexity. They are especially good for:

- short-lived grouped values
- helper method returns
- local transformations and deconstruction

## Practice

Write one method that returns two values as a tuple. Then decide whether the returned concept is still simple enough for a tuple or deserves a named type.

As a second exercise, write a tuple with named fields, deconstruct it, and explain when the named tuple is clearer than using separate variables from the start.
