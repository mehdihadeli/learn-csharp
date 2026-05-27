# Async Exceptions and Task Composition

Asynchronous code does not remove failures. It changes where and when you observe them. A task can complete successfully, be canceled, or fault with an exception. Understanding that lifecycle is essential for writing reliable async code.

## Faulted tasks

When an exception happens inside an async method, the task becomes faulted. The exception is stored on the task and rethrown when the task is awaited.

```csharp
try
{
    await ProcessOrderAsync();
}
catch (InvalidOperationException ex)
{
    Console.WriteLine(ex.Message);
}
```

This feels natural because `await` rethrows the failure in a way that works with normal `try` and `catch` logic.

## `Task.WhenAll` and failures

`Task.WhenAll` completes successfully only if every task completes successfully. If one or more tasks fail, the combined operation fails.

That behavior is useful because it prevents you from quietly ignoring part of a coordinated workflow.

## `Task.WhenAny` and follow-up logic

`Task.WhenAny` only tells you which task completed first. It does not automatically mean that the winning task succeeded. You still need to inspect or await the returned task to observe success, cancellation, or failure correctly.

## Prefer `await` over continuation-heavy code

Older task code often used `ContinueWith`. That style still exists, but `await` is usually clearer because it preserves normal control flow and exception handling.

In most application code, if you are choosing between `await` and manually chained continuations, `await` is the better default.

## Common mistakes

Do not forget to observe task failures. Fire-and-forget task code can hide exceptions unless you have a deliberate strategy for background work, logging, and lifetime management.

Do not assume `WhenAny` means success. Do not assume `WhenAll` reports only one failure in a meaningful way for diagnosis. When debugging, inspect the individual tasks as well.

## Practice

Write a small example with two tasks where one succeeds and one throws. Observe what happens when you await each task individually and when you coordinate them with `Task.WhenAll`.
