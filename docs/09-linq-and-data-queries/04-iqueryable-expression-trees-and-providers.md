# IQueryable, Expression Trees, and Providers

At first glance, `IEnumerable<T>` and `IQueryable<T>` can look almost identical. Both support LINQ operators. Both let you write query pipelines. The difference is in what those pipelines mean.

## `IEnumerable<T>` versus `IQueryable<T>`

`IEnumerable<T>` is for in-memory enumeration. LINQ operators usually receive delegates and execute them directly against local data.

`IQueryable<T>` represents a query that can be translated by a provider. Instead of executing your lambda bodies directly, the provider inspects the query structure and converts it into another form, often SQL.

That means the same-looking query can have very different execution behavior.

## Expression trees

An expression tree is a data structure that represents code as data. Instead of only saying, "run this lambda," an expression tree can say, "here is the structure of the lambda so another component can inspect it."

That is what makes remote query providers possible. A provider can examine an expression tree and translate it into a backend-specific query language.

## Why providers matter

When a query is handled by a provider, not every .NET operation is translatable. A provider may understand comparisons, projections, and some method calls, but it may reject custom logic that only makes sense in local memory.

```csharp
IQueryable<Customer> customers = dbContext.Customers;

var activeCustomers = customers
    .Where(customer => customer.IsActive)
    .OrderBy(customer => customer.LastName)
    .Select(customer => new
    {
        customer.Id,
        customer.LastName
    });
```

This style is usually translatable because the operations are simple and provider-friendly.

By contrast, a query that calls arbitrary local helper methods may fail translation or force client-side evaluation, depending on the provider.

## Performance consequences

With `IQueryable<T>`, query shape affects what work runs remotely and what data must cross process or network boundaries. That makes correctness and performance tightly connected.

Important questions include:

- does the filter run on the server or after the data is loaded
- are you selecting only the fields you need
- are you materializing too early with `ToList()`
- are you accidentally composing a query that the provider cannot translate

## A practical rule

Use `IEnumerable<T>` when the data is already local and you want normal in-memory LINQ behavior. Use `IQueryable<T>` when you are intentionally composing a provider-translated query and understand the provider's limitations.

## Practice

Take one query written for a list and ask which parts would still make sense if the source were remote. Identify any helper methods or operations that would be risky to depend on in a provider-translated query.
