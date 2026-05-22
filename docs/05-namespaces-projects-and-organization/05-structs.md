## Structs

Structs are value types, so they are copied by value and are often appropriate for small models with clear value semantics. They are not just “small classes.”

### Where it fits

Organization features do not exist only for large codebases. Learning them early helps you build habits that keep small projects understandable as they grow.

- Relate the topic to code boundaries.
- Think about how teams discover and reuse code.
- Use the feature to reduce confusion, not add ceremony.

### Example

```csharp
public readonly struct Point
{
    public int X { get; }
    public int Y { get; }
    public Point(int x, int y) => (X, Y) = (x, y);
}
```

This kind of code often feels simple in isolation, but its value becomes obvious when a project has many files, many types, or many collaborators.

### Boundary advice

Small visibility or naming shortcuts can become long-term maintenance costs.

### Practice

Look at a real project tree and identify where this feature affects visibility, naming, or dependencies.
