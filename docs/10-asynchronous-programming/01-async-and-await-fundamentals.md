# async and await Fundamentals

Asynchronous programming matters because many real programs spend time waiting. They wait for network responses, file I/O, timers, database calls, process output, or other external work. If a program blocks a thread during that wait, the application can become less responsive and less scalable.

`async` and `await` let C# express this waiting in a readable way. Instead of manually wiring callbacks, continuation objects, or thread logic, you can write code that reads almost like ordinary sequential code while still allowing the runtime to use threads efficiently.

## The Task-based Asynchronous Pattern

Modern C# async code is built around `Task` and `Task<T>`.

- `Task` represents an asynchronous operation that eventually completes without returning a value.
- `Task<T>` represents an asynchronous operation that eventually completes with a value of type `T`.
- `await` pauses the current async method until the task completes.
- `async` marks a method that can use `await`.

```csharp
static async Task Main()
{
    string data = await DownloadTextAsync();
    Console.WriteLine(data);
}

static async Task<string> DownloadTextAsync()
{
    await Task.Delay(500);
    return "Finished async work";
}
```

The code looks sequential, but the method does not block a thread while waiting for `Task.Delay` to complete.

## Async is not the same as parallel

These ideas are related, but they are not identical.

- Asynchronous programming is mainly about not blocking while waiting.
- Parallel programming is mainly about doing multiple CPU-bound operations at the same time.

A web request, file read, or database call is often a good async candidate because the program spends most of the time waiting. A CPU-heavy computation may need parallelism instead.

## Why `await` improves clarity

Before `async` and `await`, asynchronous code often required nested continuations and state passed through callbacks. That style works, but it is harder to read and maintain.

`await` keeps control flow visible. It also preserves familiar constructs such as `try`, `catch`, `using`, loops, and local variables.

## Common mistakes

Avoid using `.Result` and `.Wait()` on tasks unless you have a very specific reason and understand the consequences. Those APIs block the current thread and can create responsiveness problems or deadlock-prone code.

Also avoid marking methods `async` when they do not `await` anything meaningful. That often signals unclear design or unnecessary overhead.

## Practice

Take one synchronous method that currently waits on I/O and imagine how its signature would change if it became asynchronous. Identify what the return type should be: `Task`, `Task<T>`, or neither.
