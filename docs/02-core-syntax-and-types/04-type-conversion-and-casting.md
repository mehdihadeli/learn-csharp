# Type Conversion and Casting

Programs constantly move values between types. C# provides multiple conversion paths, and each one says something about safety, intent, and risk.

This topic matters because real programs rarely keep data in one perfect type from start to finish. User input arrives as text, calculations may change numeric precision, and reference values may need to be treated as more specific runtime types.

## Implicit conversions

An implicit conversion happens automatically when the compiler can prove it is safe or standard enough not to require extra syntax.

```csharp
int count = 10;
double total = count;
```

Here, converting `int` to `double` is allowed implicitly because no precision is lost for this kind of widening conversion.

The general idea is that the compiler permits implicit conversions when they are expected, safe enough, and unlikely to surprise you.

Other examples include assigning a derived type to a base-type variable or assigning `null` to a nullable reference type.

## Explicit conversions

An explicit conversion, or cast, is required when information might be lost or when the compiler needs you to state intent clearly.

```csharp
double total = 19.75;
int roundedDown = (int)total;

Console.WriteLine(roundedDown);
```

The cast makes the narrowing conversion visible. It also reminds the reader that something potentially important happened.

In this case, the decimal portion is discarded. That is exactly why C# requires an explicit cast: the conversion changes the meaning of the value.

## Conversion does not always mean casting

Beginners often use the word “cast” for every type change, but C# uses several different mechanisms:

- implicit conversion
- explicit cast
- parsing from text
- helper methods such as `Convert.ToInt32`
- pattern matching for safe runtime type checks

## Parsing is another form of conversion

Text often needs to be converted into typed values.

```csharp
int parsed = int.Parse("42");
bool isValid = int.TryParse("42", out int safeParsed);
```

In real programs, `TryParse` is often safer when input may be invalid.

That is especially true when the value comes from:

- console input
- files
- HTTP requests
- configuration
- databases or external systems

If invalid input is possible, parsing needs an error-handling strategy.

## Numeric conversion example

```csharp
int items = 3;
decimal pricePerItem = 9.99m;
decimal subtotal = items * pricePerItem;
double approximate = (double)subtotal;

Console.WriteLine(subtotal);
Console.WriteLine(approximate);
```

This example is useful because it shows that the same “number” can move through different numeric types depending on the operation.

## Casting reference types

Reference-type casting is different from numeric conversion. It is about whether a runtime object can be treated as another compatible type.

Pattern matching is often the clearest modern form:

```csharp
object value = "hello";

if (value is string text)
{
    Console.WriteLine(text.Length);
}
```

Pattern matching is usually clearer than a direct cast because it both checks and introduces a strongly typed variable in one step.

For example, compare these approaches:

```csharp
object item = "hello";

if (item is string text)
{
    Console.WriteLine(text.ToUpper());
}
```

```csharp
object item = "hello";
string text = (string)item;
Console.WriteLine(text.ToUpper());
```

The second version assumes the cast will succeed. The first version proves it.

## Safe versus unsafe assumptions

One of the biggest habits to build here is this: do not force a conversion unless you understand what guarantees make it valid.

Ask questions such as:

- can this text fail to parse
- can this cast throw at runtime
- can this numeric conversion lose data
- is the conversion reversible or not

## Common mistakes

A conversion that compiles is not automatically a conversion that preserves meaning. Be especially careful with:

- narrowing numeric casts
- parsing user input
- casts that assume a runtime type without checking

Also be careful not to confuse “changing representation” with “preserving meaning.” A value can survive a conversion syntactically while still becoming less precise or less valid for the domain.

## Summary

Conversions are where the type system becomes practical. They force you to think about:

- safety
- precision
- runtime reality
- external input

Good C# code makes risky conversions visible and handles uncertain conversions deliberately.

## Practice

Write one example of an implicit conversion, one explicit cast, and one parse operation. Then explain why each uses a different syntax.

As a second exercise, write a small console sample that reads text input, tries to parse it to an `int`, and prints different output for valid and invalid input.
