# Type Conversion and Parsing

Real applications rarely receive values in exactly the type they need. Input often arrives as text, objects, bytes, JSON values, or loosely typed data. Conversion and parsing are the bridge between that raw input and the strongly typed code you want to write.

## Prefer safe parsing APIs

If a value may be invalid, prefer `TryParse`-style APIs over methods that throw on failure.

```csharp
string input = "42";

if (int.TryParse(input, out int number))
{
    Console.WriteLine(number * 2);
}
else
{
    Console.WriteLine("Invalid number");
}
```

This pattern is easier to control than relying on exceptions for ordinary bad input.

## Parsing is different from casting

Parsing turns one representation into another, often from text into a typed value. Casting changes how the compiler and runtime view an existing value.

Examples:

- parsing: `"123"` to `int`
- explicit numeric conversion: `double` to `int`
- reference or pattern cast: `object` to a specific runtime type

## Safe casting patterns

Pattern matching is usually the clearest modern way to test and extract a type.

```csharp
object value = 10;

if (value is int count)
{
    Console.WriteLine(count + 5);
}
```

Use `as` when working with nullable reference conversions and then check for `null` explicitly.

## Conversion design in your own types

Sometimes a type benefits from custom conversion operators, but use them carefully. A conversion should feel unsurprising. If the conversion can lose meaning, throw, or require complex rules, an explicit method is often better than an operator.

## Practice

Write code that reads a string, tries to parse it as an `int`, and if that fails, reports the problem without throwing an exception.
