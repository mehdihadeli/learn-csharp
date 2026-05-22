## Extension Methods

Extension methods allow API design to grow outward without modifying the original type. They are especially useful for fluent-style helper methods and query APIs.

### Design lens

Method-related features are easiest to judge from the caller’s point of view. The question is not only whether the syntax works, but whether the API feels understandable and stable.

- Start from the signature.
- Think about how callers will read and use the member.
- Prefer readability over clever syntax.

### Example

```csharp
static class StringExtensions
{
    public static bool IsShort(this string value) => value.Length < 5;
}

Console.WriteLine("cat".IsShort());
```

Look at both the declaration and the call site. A method feature is only useful if it improves the relationship between those two points.

### API note

Convenient syntax should not come at the cost of a confusing API surface.

### Practice

Rewrite the example with a different method name or signature and notice how the call site changes.
