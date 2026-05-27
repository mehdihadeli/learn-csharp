# Starting and Coordinating Tasks

One of the biggest practical async lessons is that the placement of `await` changes program behavior. If two pieces of work are independent, you can often start both tasks first and await them later. If you await each one immediately, you may accidentally serialize work that could have overlapped.

## Sequential versus coordinated work

This version runs sequentially:

```csharp
string profile = await GetProfileAsync();
string orders = await GetOrdersAsync();
```

If `GetProfileAsync` and `GetOrdersAsync` are independent, you can start both first:

```csharp
Task<string> profileTask = GetProfileAsync();
Task<string> ordersTask = GetOrdersAsync();

string profile = await profileTask;
string orders = await ordersTask;
```

The second version still awaits both results, but it gives both operations a chance to begin before the first wait completes.

## `Task.WhenAll`

`Task.WhenAll` is useful when you want to wait for all tasks in a group to finish.

```csharp
Task<string> profileTask = GetProfileAsync();
Task<string> ordersTask = GetOrdersAsync();

await Task.WhenAll(profileTask, ordersTask);

Console.WriteLine(profileTask.Result);
Console.WriteLine(ordersTask.Result);
```

After `Task.WhenAll` completes successfully, the individual tasks are already complete, so reading their results is safe.

## `Task.WhenAny`

`Task.WhenAny` is useful when you want to react to whichever task finishes first. This can support timeout logic, fastest-response wins patterns, or staged fallback behavior.

## Coordinating tasks intentionally

When you keep task references in variables, the code becomes explicit about what started, what is still running, and what you are waiting on. That is often easier to reason about than deeply nested awaits.

At the same time, do not start background tasks casually and forget them. Unobserved failures and unclear lifetime management create fragile code.

## Common mistakes

The classic mistake is accidental serialization: starting one async operation, awaiting it immediately, then starting the next operation even though they were independent.

Another mistake is starting too many operations at once without understanding resource limits. Concurrency can improve throughput, but unbounded concurrency can overwhelm APIs, sockets, databases, or memory.

## Practice

Look at an async workflow that makes several remote calls. Identify which steps depend on earlier results and which could safely start in parallel.
