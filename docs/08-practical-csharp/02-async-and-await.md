# async and await

Asynchronous programming lets a program represent work that completes later without blocking the current thread while it waits. In real applications, this matters because programs often wait for network responses, file I/O, databases, timers, and external services.

`async` and `await` make that waiting readable.

## Why this matters in practical code

Without asynchronous code, applications can become less responsive or less scalable when they spend time waiting.

Common practical scenarios include:

- loading data from a web API
- reading or writing files
- waiting for database results
- coordinating several operations that may complete later

## A simple example

```csharp
static async Task<int> GetValueAsync()
{
    await Task.Delay(100);
    return 42;
}

Console.WriteLine(await GetValueAsync());
```

This looks almost like sequential code, but the delay does not block the current thread while the operation is waiting.

## A mental model

```mermaid
flowchart LR
    A["Start async operation"] --> B["await waiting point"]
    B --> C["Operation completes later"]
    C --> D["Method continues"]
```

`await` does not mean "run on another thread." It means "pause here until the awaited task finishes, then continue."

## A more practical example

```csharp
using System.Text.Json;

static async Task<string[]> LoadTagsAsync(string filePath)
{
    if (!File.Exists(filePath))
        return [];

    string json = await File.ReadAllTextAsync(filePath);
    return JsonSerializer.Deserialize<string[]>(json) ?? [];
}
```

This example connects async programming to real file and JSON work.

It also shows an important point: practical async code often includes validation and fallback behavior, not only the happy path.

## `Task` and `Task<T>`

Most async methods return one of these:

- `Task` for asynchronous work with no result value
- `Task<T>` for asynchronous work that eventually produces a value

That return type is part of the method contract. It tells callers that the work is asynchronous and should normally be awaited.

## Error handling still matters

Async code still uses ordinary `try` and `catch`.

```csharp
try
{
    string text = await File.ReadAllTextAsync("settings.json");
    Console.WriteLine(text);
}
catch (IOException ex)
{
    Console.WriteLine($"File error: {ex.Message}");
}
```

This is one reason `await` is easier to work with than older callback-based styles. The structure of the code remains familiar.

## Practical guidance

Use async code when the operation spends time waiting for external work.

Good candidates include:

- file I/O
- network calls
- database calls
- timers and delays

Less suitable cases include tiny synchronous operations that do not actually wait for anything meaningful.

## A warning about blocking

Avoid forcing async work back into blocking code with `.Result` or `.Wait()` unless you have a very specific reason and understand the consequences.

Blocking defeats much of the point of async design and can create responsiveness or deadlock problems.

## Common beginner mistakes

- Treating async as if it were only about parallelism.
- Calling `.Result` or `.Wait()` without understanding the cost.
- Marking methods `async` when they do not really need asynchronous behavior.
- Forgetting to `await` a task that should actually complete before continuing.

## Summary

- `async` and `await` help code represent waiting without blocking the current thread
- practical async code often involves file, network, or database operations
- `Task` and `Task<T>` are the standard async return types
- `try` and `catch` still work naturally in async code
- blocking async code with `.Result` or `.Wait()` is usually the wrong direction

## Practice

Write one small method that reads a file asynchronously and returns its contents.

As a second exercise, explain why `await File.ReadAllTextAsync(...)` is a better fit for waiting I/O than calling `File.ReadAllText(...)` inside a method that should stay responsive.
