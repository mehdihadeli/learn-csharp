# Memory Management, Garbage Collection, and Resources

.NET uses automatic memory management for managed objects. The garbage collector tracks reachable objects and reclaims memory for objects that are no longer used.

Original Microsoft Learn reference: [Microsoft Learn Introduction to .NET](https://learn.microsoft.com/dotnet/core/introduction).

## A practical mental model

```mermaid
flowchart LR
    A["Object allocation"] --> B["Object remains reachable"]
    B --> C["Object becomes unreachable"]
    C --> D["Garbage collector reclaims memory"]
```

## Key ideas

- Managed memory is reclaimed by the garbage collector.
- Value types and reference types have different storage and copying behavior.
- `IDisposable` is for prompt cleanup of external resources such as files, streams, handles, and sockets.
- `using` statements and declarations make disposal reliable.
- Large allocations, object lifetimes, and unnecessary retention can affect performance.

## Managed memory and external resources are not the same thing

One of the most important lessons in .NET resource management is that memory cleanup and resource cleanup are related but not identical.

The garbage collector reclaims managed memory. It does not replace the need to release external resources promptly.

Examples of external resources include:

- file handles
- database connections
- sockets
- native handles
- streams connected to system resources

## Example

```csharp
using StreamReader reader = File.OpenText("notes.txt");
string text = reader.ReadToEnd();
```

The `using` declaration ensures the stream is disposed when the variable leaves scope.

## Why object lifetime matters

Performance issues often come less from one allocation and more from retention patterns.

Questions worth asking include:

- how long do these objects stay reachable
- are large objects being created repeatedly
- are caches, event subscriptions, or collections holding references longer than intended

## Practical guidance

Good memory and resource handling usually means:

- let the garbage collector handle ordinary managed object cleanup
- dispose external resources deterministically
- avoid retaining references longer than necessary
- optimize allocations only when measurement shows a real issue

## Summary

- the garbage collector reclaims managed memory for unreachable objects
- resource cleanup for files, sockets, and similar handles still requires explicit disposal patterns
- `IDisposable` and `using` exist for prompt resource cleanup
- performance problems often depend on lifetime and retention patterns, not only raw allocation counts

## Practice

Find one type in the .NET API reference that implements `IDisposable`. Explain what resource it owns and why waiting for garbage collection would not be enough.

As a second exercise, describe one memory problem caused by object retention and one resource problem caused by failing to dispose promptly.
