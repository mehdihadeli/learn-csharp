## Methods

Methods are one of the primary ways behavior is packaged in C#. A method signature tells callers what data is needed, what result will come back, and where side effects may happen.

### Design lens

Method-related features are easiest to judge from the caller’s point of view. The question is not only whether the syntax works, but whether the API feels understandable and stable.

- Start from the signature.
- Think about how callers will read and use the member.
- Prefer readability over clever syntax.

### Example

```csharp
static int Square(int value)
{
    return value * value;
}

Console.WriteLine(Square(4));
```

Look at both the declaration and the call site. A method feature is only useful if it improves the relationship between those two points.

### API note

Convenient syntax should not come at the cost of a confusing API surface.

### Practice

Rewrite the example with a different method name or signature and notice how the call site changes.
