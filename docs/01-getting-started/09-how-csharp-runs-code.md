# How C# Runs Code

C# source code does not run directly as raw text. It goes through compilation and runtime stages. Understanding that pipeline helps explain why C# can be both portable and efficient.

## The basic pipeline

The simplest model is:

```text
C# source -> compiler -> IL -> .NET runtime -> machine code
```

Here is what each stage means:

- you write C# source files
- the compiler checks the code and produces assemblies containing intermediate language and metadata
- the .NET runtime loads those assemblies
- the runtime prepares and executes code for the current machine

Microsoft's .NET introduction emphasizes that the runtime is not only an execution engine. It also provides services such as garbage collection, exception handling, type loading, and execution support that ordinary programs depend on.

## Why this model matters

This explains several common beginner questions:

- why compile-time errors happen before the program runs
- why runtime exceptions still happen after successful compilation
- why the same C# code can run on different operating systems
- why library and runtime versions matter alongside source code

## What the runtime adds

When your app runs on .NET, it gains services such as:

- automatic memory management through garbage collection
- exception handling infrastructure
- type and metadata loading
- support for async tasks and many library features

That is why C# programs feel higher level than writing raw machine-specific code.

## A practical way to think about it

Compilation answers: "Is this code valid enough to produce a program?"

Runtime execution answers: "What happens when this program actually runs with real data, real files, real timing, and real environment conditions?"

Both stages matter. They solve different problems.

## Practice

Take one compiler error and one runtime exception you have seen or can imagine. Explain why only one of them can be caught before execution starts.
