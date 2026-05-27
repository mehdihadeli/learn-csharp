# Strings and Text Processing

Strings appear everywhere: user input, file paths, logs, commands, JSON payloads, URLs, identifiers, and messages shown to users. That is why string handling deserves a practical guide instead of being treated as a small syntax topic.

## Remember that strings are immutable

In C#, a string cannot be changed in place. Operations that seem to modify a string actually create a new string.

```csharp
string original = "learn csharp";
string upper = original.ToUpperInvariant();

Console.WriteLine(original);
Console.WriteLine(upper);
```

This matters for correctness and performance. If you repeatedly build large strings in a loop, `StringBuilder` may be a better fit.

## Common text operations

Everyday string work usually involves:

- checking contents with `Contains`, `StartsWith`, and `EndsWith`
- splitting with `Split`
- joining with `string.Join`
- trimming with `Trim`, `TrimStart`, and `TrimEnd`
- replacing text with `Replace`
- formatting values into output strings

```csharp
string csv = "Ada,Grace,Lina";
string[] names = csv.Split(',');

foreach (string name in names)
{
    Console.WriteLine(name.Trim());
}
```

## Compare strings deliberately

String comparison is one of the most common sources of subtle bugs. Decide whether the comparison should be culture-sensitive or ordinal, and whether casing should matter.

```csharp
bool isMatch = fileName.Equals(
    "report.txt",
    StringComparison.OrdinalIgnoreCase);
```

For identifiers, keys, protocol values, and many technical comparisons, `StringComparison.Ordinal` or `StringComparison.OrdinalIgnoreCase` is usually the safest default.

## Culture matters

Human-facing text can behave differently under different cultures. Sorting, casing, and formatting rules are not always universal. That is why text intended for display and text intended for technical comparison should not always be handled the same way.

## Practice

Take one input string that contains extra spaces, mixed casing, and comma-separated values. Normalize it, split it, and compare the results using an explicit `StringComparison` value.
