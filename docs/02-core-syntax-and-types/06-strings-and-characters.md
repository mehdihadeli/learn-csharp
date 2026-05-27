# Strings and Characters

Text handling appears everywhere in real programs. C# separates single-character values from text sequences with two different types: `char` and `string`.

That distinction looks small, but it helps prevent confusion. A single character, a word, a sentence, and a block of JSON text are not the same kind of data even though they all feel like “text” in everyday language.

## `char` versus `string`

`char` represents one UTF-16 code unit. `string` represents a sequence of zero or more characters.

```csharp
char firstLetter = 'C';
string title = "C# Fundamentals";
string updated = title.Replace("Fundamentals", "Basics");

Console.WriteLine($"{firstLetter} {updated}");
```

Single quotes create a `char`. Double quotes create a `string`.

This is one of the earliest type boundaries beginners encounter in text processing:

```csharp
char grade = 'A';
string message = "A";
```

The values may look similar on screen, but they are not interchangeable types.

## Strings are immutable

Microsoft's string reference emphasizes that strings cannot be changed in place. Operations that look like modifications create new strings instead.

```csharp
string text = "h";
text += "ello";
```

After this code, `text` refers to a new string containing `"hello"`.

This matters for both correctness and performance. Correctness improves because strings behave predictably. Performance matters because repeated modifications can create many temporary string objects.

## Reading characters from a string

You can access individual characters by index:

```csharp
string word = "code";
char secondLetter = word[1];

Console.WriteLine(secondLetter); // o
```

This is useful when you need to inspect text one character at a time.

## Common string literal forms

Modern C# supports several useful string literal styles:

- ordinary quoted strings: `"hello"`
- verbatim strings: `@"c:\docs\notes.txt"`
- raw string literals for multiline or quote-heavy text

Choose the literal form that makes the text easiest to read.

For example:

```csharp
string filePath = @"c:\logs\app.txt";

string json = """
{
    "name": "Mina",
    "age": 28
}
""";
```

The goal is not to show every string feature at once. The goal is to reduce unnecessary visual noise when the text itself is important.

## Working with strings

Some of the most common operations include:

- concatenation with `+`
- interpolation with `$"..."`
- indexing with `text[index]`
- methods like `Replace`, `Split`, `Trim`, and `Contains`

Examples:

```csharp
string firstName = "Sara";
string lastName = "Ahmadi";

string fullName = firstName + " " + lastName;
string greeting = $"Hello, {fullName}!";
string cleaned = "  hello  ".Trim();
string[] parts = "red,green,blue".Split(',');
```

These operations appear constantly in real programs, especially when working with input, display text, files, and APIs.

## `Split` is often the first real parsing step

Microsoft's `String.Split` guidance is especially useful for beginners because it shows how raw text turns into structured pieces.

```csharp
string values = "apples, oranges, bananas";
string[] items = values.Split(',', StringSplitOptions.TrimEntries);

foreach (string item in items)
{
    Console.WriteLine(item);
}
```

This simple operation introduces a powerful idea: text can be transformed into a collection of typed parts that the program can process one by one.

## A worked example

```csharp
string courseTitle = "C# Fundamentals";
char first = courseTitle[0];
string updatedTitle = courseTitle.Replace("Fundamentals", "Basics");
string message = $"{first}: {updatedTitle}";

Console.WriteLine(message);
```

This example combines several ideas from the chapter:

- reading a single character
- using a string method
- understanding immutability
- formatting output with interpolation

## Common mistakes

Because strings are immutable, repeated modification in tight loops can create extra allocations. Correctness comes first, but this is worth remembering when code becomes performance-sensitive.

Also remember that string equality in C# compares string contents, not object identity. That behavior is intuitive, but it is different from many other reference types.

Other common mistakes include:

- confusing `char` with `string`
- forgetting that valid indices start at `0`
- assuming text input is already trimmed or clean
- overusing string concatenation when interpolation is clearer

## Summary

Strings and characters look simple on the surface, but they teach several foundational ideas:

- text has different granularities
- strings are immutable
- string literals come in multiple useful forms
- text often needs to be split, trimmed, replaced, and formatted before it is useful

## Practice

Write one example that uses a `char`, one that uses string interpolation, and one that uses `Split`. Then explain why all three are text-related but not the same operation.

As a second exercise, parse a comma-separated string of names, trim the entries, and print them one per line.
