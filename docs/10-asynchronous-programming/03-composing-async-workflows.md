# Composing Async Workflows

Real async code is usually more than one awaited call. A useful application often combines validation, data retrieval, transformation, error handling, logging, cancellation, and result construction into one larger workflow.

The goal is not just to make the code asynchronous. The goal is to keep the flow understandable as the workflow grows.

## Compose small async methods

Async workflows become easier to maintain when each method does one clear job and returns a task that represents that job.

```csharp
public static async Task<OrderSummary> BuildOrderSummaryAsync(int orderId)
{
    Order order = await GetOrderAsync(orderId);
    Customer customer = await GetCustomerAsync(order.CustomerId);
    decimal total = CalculateTotal(order);

    return new OrderSummary(order.Id, customer.Name, total);
}
```

This method composes async steps with a synchronous calculation step. That is normal. Async methods do not need every line to be asynchronous.

## Keep naming honest

In .NET, async methods are usually named with the `Async` suffix. That convention matters because it helps readers understand what kind of method they are calling and what return type to expect.

Examples:

- `LoadSettingsAsync`
- `ReadFileAsync`
- `SendEmailAsync`

If a method returns `Task` or `Task<T>`, the `Async` suffix usually improves clarity.

## Control flow still matters

`await` makes async workflows readable, but it does not remove the need for good structure. If a method becomes hard to scan, extract meaningful helpers instead of leaving one long chain of awaited steps in a single method.

That also makes testing easier because each step can be validated in isolation.

## Cancellation belongs in the design

Many real async methods should accept a `CancellationToken`, especially if they perform I/O, long-running work, or user-triggered operations. Cancellation is easier to add early than late.

## Common mistakes

Do not create long async methods that mix validation, networking, parsing, logging, and mutation with no clear structure. If you cannot explain the steps in one sentence each, the method probably needs smaller pieces.

## Practice

Take one async workflow and split it into named helper methods. Make sure each helper's name explains its role in the larger operation.
