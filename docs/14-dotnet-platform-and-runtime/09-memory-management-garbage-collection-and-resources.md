# Memory Management, Garbage Collection, and Resources

.NET uses automatic memory management for managed objects. The garbage collector tracks reachable objects and reclaims memory for objects that are no longer used.

## Key ideas

- Managed memory is reclaimed by the garbage collector.
- Value types and reference types have different storage and copying behavior.
- `IDisposable` is for prompt cleanup of external resources such as files, streams, handles, and sockets.
- `using` statements and declarations make disposal reliable.
- Large allocations, object lifetimes, and unnecessary retention can affect performance.

## Example

```csharp
using StreamReader reader = File.OpenText("notes.txt");
string text = reader.ReadToEnd();
```

The `using` declaration ensures the stream is disposed when the variable leaves scope.

## Practice

Find one type in the .NET API reference that implements `IDisposable`. Explain what resource it owns and why waiting for garbage collection would not be enough.
