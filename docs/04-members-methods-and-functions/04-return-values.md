## Return Values

A return value communicates a result back to the caller. Good method design keeps return values meaningful so callers can understand what happened without digging through hidden state.

### Design lens

Method-related features are easiest to judge from the caller’s point of view. The question is not only whether the syntax works, but whether the API feels understandable and stable.

- Start from the signature.
- Think about how callers will read and use the member.
- Prefer readability over clever syntax.

### Example

```csharp
static decimal ApplyDiscount(decimal price)
{
    return price * 0.9m;
}

Console.WriteLine(ApplyDiscount(100m));
```

Look at both the declaration and the call site. A method feature is only useful if it improves the relationship between those two points.

### API note

Convenient syntax should not come at the cost of a confusing API surface.

### Practice

Rewrite the example with a different method name or signature and notice how the call site changes.
