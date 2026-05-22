## using Directives

Using directives affect how names are resolved inside a file. They are a small syntax feature with an outsized impact on readability and how much fully qualified naming you need.

### Where it fits

Organization features do not exist only for large codebases. Learning them early helps you build habits that keep small projects understandable as they grow.

- Relate the topic to code boundaries.
- Think about how teams discover and reuse code.
- Use the feature to reduce confusion, not add ceremony.

### Example

```csharp
using System.Text;
using ProjectAlias = LearnCSharp.Models;
```

This kind of code often feels simple in isolation, but its value becomes obvious when a project has many files, many types, or many collaborators.

### Boundary advice

Small visibility or naming shortcuts can become long-term maintenance costs.

### Practice

Look at a real project tree and identify where this feature affects visibility, naming, or dependencies.
