## Pattern Combinators

Pattern combinators extend pattern matching with composition. They let you express richer intent directly in the language rather than spreading the logic across nested conditionals.

### What changes at compile time

Advanced features often affect how the compiler interprets code rather than only how the code looks. That is why they deserve deliberate use and small experiments first.

- Understand the compiler impact before using the syntax.
- Compare the feature with simpler alternatives.
- Use advanced features when they clarify code, not just because they exist.

### Example

```csharp
int temperature = 22;
if (temperature is > 18 and < 30)
{
    Console.WriteLine("Comfortable");
}
```

Use small experiments here. Advanced features are easiest to learn when you isolate them and watch how the compiler or runtime responds.

### Use carefully

Advanced syntax should earn its place by improving clarity, correctness, or performance.

### Practice

Use the feature in a tiny isolated example first, then decide whether it truly improves a larger design.
