# Your First Program

Your first C# program should teach the development loop, not bury you in ceremony. A small console program is enough to introduce source code, compilation, program output, and the relationship between your code and the runtime.

## The smallest useful example

```csharp
Console.WriteLine("Hello, C#");
```

This works because modern C# supports top-level statements. For simple programs, you can write executable statements directly instead of first declaring a `Program` class and `Main` method.

## What this line actually shows

Even this tiny program teaches several important ideas:

- `Console` is a .NET type from the standard libraries
- `WriteLine` is a method call
- the string literal is the data being printed
- the semicolon ends the statement

That is a good example of how C# often lets you start small while still learning real language structure.

## A slightly richer first program

Microsoft's console tutorial commonly expands the first example into user interaction:

```csharp
Console.WriteLine("What is your name?");
string? name = Console.ReadLine();
Console.WriteLine($"Hello, {name}!");
```

This version introduces:

- output with `WriteLine`
- input with `ReadLine`
- variables
- interpolated strings
- nullable awareness through `string?`

That is a much better learning step than jumping immediately into bigger program structure.

## The real lesson of a first program

The most important outcome is not memorizing the exact text of `Hello, World!`. It is understanding the loop:

1. write or edit code
2. run the program
3. observe the result
4. change the code and run again

That loop is how you will learn the rest of the language.

## Practice

Change the output text, add one input line with `Console.ReadLine()`, and run the program again. Notice how small code changes affect the output immediately.
