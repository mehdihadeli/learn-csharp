## Documentation Comments

Documentation comments turn source-level intent into something tools can surface for other developers. They matter most when you want an API to be understandable without reading its implementation.

### Real-world angle

Practical topics connect language features to actual programs. They are where syntax starts interacting with files, tasks, libraries, diagnostics, and operational concerns.

- Tie the concept to real application behavior.
- Include failure and maintenance considerations.
- Connect syntax to the relevant library APIs.

### Example

```csharp
/// <summary>
/// Adds two numbers together.
/// </summary>
int Add(int left, int right) => left + right;
```

Treat the example as a seed for a realistic task. Add validation, error handling, or a surrounding API call so the concept connects to actual application behavior.

### Production note

Real-world code must handle environment, failures, and maintenance, not just the happy path.

### Practice

Combine this topic with one nearby .NET API so it feels like application code instead of isolated syntax.
