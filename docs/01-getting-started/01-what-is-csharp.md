# What Is C#?

C# is a modern, general-purpose programming language designed for the .NET platform. Microsoft positions it as a language that should be approachable for beginners while still being powerful enough for high-performance libraries, large business systems, developer tools, and everyday application code.

That balance is one of the main reasons C# is worth learning seriously. It tries to give you readable syntax, strong tooling, compile-time feedback, memory safety by default, and room to grow into more advanced techniques when you need them.

## Where C# fits

C# is the language. .NET is the platform around it.

When you write C# code, you are not only learning syntax. You are also learning how that syntax connects to:

- the compiler that checks and translates your code
- the runtime that executes the program
- the standard libraries that provide useful types and APIs
- the SDK tools that build, run, test, and publish projects

That is why the language feels practical early. Even a tiny C# program can use a mature runtime and a rich standard library immediately.

## What kind of language C# is

C# is strongly typed, case-sensitive, and compiled. It supports several styles of programming instead of forcing only one.

You will see all of these throughout the repository:

- object-oriented programming with classes, interfaces, and inheritance
- procedural code with statements, loops, and functions
- functional-flavored techniques such as pattern matching, LINQ, and immutability-friendly constructs

Microsoft's C# overview also emphasizes that the language keeps evolving. Features such as top-level statements, pattern matching, records, collection expressions, and async workflows make modern C# look different from older tutorials. That is normal. The language has grown while keeping most earlier code valid.

## A first tiny example

```csharp
Console.WriteLine("C# runs on .NET");
```

This single line already shows an important C# idea: beginner code can be very small. In modern C#, simple programs often start with top-level statements instead of a full `Program` class and `Main` method. The compiler can synthesize the missing ceremony for you.

## Why beginners often get confused here

Many beginner mistakes come from mixing these ideas together:

- thinking C# and .NET are the same thing
- assuming all tutorials use the same program shape
- expecting source code to run directly without a build or runtime model

Clearing up those ideas now makes every later chapter easier.

## Practice

Write one sentence that explains the difference between a language and a platform. Then explain where C# belongs in that sentence.
