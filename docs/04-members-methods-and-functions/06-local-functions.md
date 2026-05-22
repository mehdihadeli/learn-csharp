## Local Functions

Local functions let you keep helper behavior close to the logic that needs it. That makes them useful for readability, validation helpers, and recursive support code.

### Design lens

Method-related features are easiest to judge from the caller’s point of view. The question is not only whether the syntax works, but whether the API feels understandable and stable.

- Start from the signature.
- Think about how callers will read and use the member.
- Prefer readability over clever syntax.

### Example

```csharp
static int Factorial(int value)
{
    int Impl(int n) => n <= 1 ? 1 : n * Impl(n - 1);
    return Impl(value);
}

Console.WriteLine(Factorial(5));
```

Look at both the declaration and the call site. A method feature is only useful if it improves the relationship between those two points.

### API note

Convenient syntax should not come at the cost of a confusing API surface.

### Practice

Rewrite the example with a different method name or signature and notice how the call site changes.
