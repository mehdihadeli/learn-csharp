# Threading, Tasks, and Parallel Programming

.NET supports several ways to do work concurrently. C# `async` and `await` are the most common entry point, but the platform also includes threads, tasks, cancellation, timers, channels, locks, and parallel loops.

## Key ideas

- A thread is an operating-system execution path.
- A `Task` represents an asynchronous operation or scheduled work.
- `CancellationToken` communicates cooperative cancellation.
- `lock` protects shared mutable state from concurrent access.
- Parallel programming can improve throughput for CPU-bound work, but it can also add contention and complexity.

## Example

```csharp
using CancellationTokenSource source = new(TimeSpan.FromSeconds(5));

Task<int> work = Task.Run(() => CountItems(source.Token));
int result = await work;
```

Tasks are not the same thing as threads. A task is an abstraction for work; the runtime decides how that work is scheduled.

## Practice

Take a synchronous loop and identify whether it is I/O-bound or CPU-bound before deciding whether async, parallelism, or neither is appropriate.
