# Input and Output

Console input and output are often the first way a beginner sees code interact with the outside world. They are also where several Chapter 2 ideas come together: strings, variables, nullability, and parsing.

That is why this lesson matters more than it may seem at first. Console programs are small, but they expose a real software pattern: data comes in, the program interprets it, and output goes back out in a usable form.

## Basic console output

```csharp
Console.WriteLine("Hello, world!");
Console.Write("Enter your age: ");
```

`WriteLine` prints a line and moves to the next line. `Write` prints without appending a newline.

This small difference matters when building interactive prompts. `Write` is often used before `ReadLine` so the user's input stays on the same line as the question.

## Basic console input

```csharp
Console.Write("What is your name? ");
string? name = Console.ReadLine();
Console.WriteLine($"Hello, {name}");
```

`Console.ReadLine()` returns text, which is why the result type is `string?`. It can be `null`, so the compiler correctly treats it as nullable.

This is a good example of how type information reflects reality. The method does not pretend input is always present and valid.

## Input is text first

One of the most important beginner lessons is that console input arrives as text. If you need a number, date, or Boolean, you must parse it.

```csharp
Console.Write("Enter a number: ");
string? input = Console.ReadLine();

if (int.TryParse(input, out int value))
{
    Console.WriteLine($"Double is {value * 2}");
}
else
{
    Console.WriteLine("That was not a valid integer.");
}
```

This pattern is valuable because it separates two concerns:

- reading input
- validating and converting input

That is the same pattern you will use later with APIs, files, and forms.

## Formatting output clearly

Console output becomes easier to read when you use interpolation and labels.

```csharp
string name = "Nora";
int score = 87;

Console.WriteLine($"Student: {name}");
Console.WriteLine($"Score: {score}");
```

Even in tiny programs, well-formatted output helps you debug and understand program state.

## A complete beginner example

```csharp
Console.Write("Enter your name: ");
string? name = Console.ReadLine();

Console.Write("Enter your age: ");
string? ageText = Console.ReadLine();

if (int.TryParse(ageText, out int age))
{
    Console.WriteLine($"Hello, {name}. Next year you will be {age + 1}.");
}
else
{
    Console.WriteLine("The age you entered was not a valid integer.");
}
```

This single example brings together multiple Chapter 2 topics:

- variables
- strings
- nullable input
- parsing
- expressions
- formatted output

## Why this topic belongs in core syntax

Console I/O is not only about user interaction. It is one of the earliest places where types stop feeling theoretical. A user types text, your code receives a `string?`, and then the compiler and runtime force you to handle conversion and nullability correctly.

That makes console programs excellent practice environments. They are small enough to understand but realistic enough to expose common programming problems.

## Common mistakes

Do not assume console input is already valid. It is always external input, even in tiny learning programs. Parse and validate deliberately.

Other common mistakes include:

- using `int.Parse` directly on uncertain input
- ignoring the nullable return type of `ReadLine`
- printing output without enough context to understand the result
- mixing input, processing, and output into one unreadable block of code

## Summary

Console input and output are simple, but they teach a full programming loop:

1. ask for input
2. receive text
3. validate or convert it
4. display a useful result

That loop appears again and again in larger applications.

## Practice

Write a short console program that asks for a name and a number, then prints a formatted response. Make sure invalid number input is handled gracefully.

As a second exercise, read a comma-separated line from the console, split it into values, trim the entries, and print them back one per line.
