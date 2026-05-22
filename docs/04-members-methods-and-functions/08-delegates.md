## Delegates

Delegates are the formal type system feature behind callback-style behavior. They provide a way to refer to executable code with compile-time shape checking.

### Design lens

Method-related features are easiest to judge from the caller’s point of view. The question is not only whether the syntax works, but whether the API feels understandable and stable.

- Start from the signature.
- Think about how callers will read and use the member.
- Prefer readability over clever syntax.

### Example

```csharp
delegate int Operation(int left, int right);
Operation add = (a, b) => a + b;
Console.WriteLine(add(3, 4));
```

Look at both the declaration and the call site. A method feature is only useful if it improves the relationship between those two points.

### API note

Convenient syntax should not come at the cost of a confusing API surface.

### Practice

Rewrite the example with a different method name or signature and notice how the call site changes.
