## Unsafe Code and Pointers

Unsafe code allows direct memory-oriented operations that ordinary C# blocks. It is powerful, but the gain comes with fewer safety guarantees and more responsibility.

### What changes at compile time

Advanced features often affect how the compiler interprets code rather than only how the code looks. That is why they deserve deliberate use and small experiments first.

- Understand the compiler impact before using the syntax.
- Compare the feature with simpler alternatives.
- Use advanced features when they clarify code, not just because they exist.

### Example

```csharp
unsafe
{
    int value = 10;
    int* pointer = &value;
    Console.WriteLine(*pointer);
}
```

Use small experiments here. Advanced features are easiest to learn when you isolate them and watch how the compiler or runtime responds.

### Use carefully

Advanced syntax should earn its place by improving clarity, correctness, or performance.

### Practice

Use the feature in a tiny isolated example first, then decide whether it truly improves a larger design.
