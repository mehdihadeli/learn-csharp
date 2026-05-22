## Generics

Generics make C# reusable without giving up strong typing. They allow library code and application code to express type relationships precisely.

### Where it fits

Organization features do not exist only for large codebases. Learning them early helps you build habits that keep small projects understandable as they grow.

- Relate the topic to code boundaries.
- Think about how teams discover and reuse code.
- Use the feature to reduce confusion, not add ceremony.

### Example

```csharp
List<string> names = new() { "Ava", "Noah" };
Console.WriteLine(names[0]);
```

This kind of code often feels simple in isolation, but its value becomes obvious when a project has many files, many types, or many collaborators.

### Boundary advice

Small visibility or naming shortcuts can become long-term maintenance costs.

### Practice

Look at a real project tree and identify where this feature affects visibility, naming, or dependencies.
