## Projects and Assemblies

Projects describe build intent, while assemblies are compiled outputs that other code can reference or execute. Distinguishing the two helps when navigating .NET tooling.

### Where it fits

Organization features do not exist only for large codebases. Learning them early helps you build habits that keep small projects understandable as they grow.

- Relate the topic to code boundaries.
- Think about how teams discover and reuse code.
- Use the feature to reduce confusion, not add ceremony.

### Example

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net9.0</TargetFramework>
  </PropertyGroup>
</Project>
```

This kind of code often feels simple in isolation, but its value becomes obvious when a project has many files, many types, or many collaborators.

### Boundary advice

Small visibility or naming shortcuts can become long-term maintenance costs.

### Practice

Look at a real project tree and identify where this feature affects visibility, naming, or dependencies.
