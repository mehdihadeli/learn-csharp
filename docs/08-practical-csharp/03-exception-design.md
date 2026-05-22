## Exception Design

Exception design is about deciding when to fail, how to signal that failure, and how much context to preserve. It is an API design topic as much as a syntax topic.

### Real-world angle

Practical topics connect language features to actual programs. They are where syntax starts interacting with files, tasks, libraries, diagnostics, and operational concerns.

- Tie the concept to real application behavior.
- Include failure and maintenance considerations.
- Connect syntax to the relevant library APIs.

### Example

```csharp
static decimal Divide(decimal left, decimal right)
{
    if (right == 0)
        throw new DivideByZeroException();
    return left / right;
}
```

Treat the example as a seed for a realistic task. Add validation, error handling, or a surrounding API call so the concept connects to actual application behavior.

### Production note

Real-world code must handle environment, failures, and maintenance, not just the happy path.

### Practice

Combine this topic with one nearby .NET API so it feels like application code instead of isolated syntax.
