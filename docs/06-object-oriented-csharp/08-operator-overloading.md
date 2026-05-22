# Operator Overloading

Operator overloading lets a custom type participate in built-in operator syntax such as `+`, `-`, `==`, or `<`. This can make domain code more natural, but only when the meaning stays obvious to readers.

The question is not whether operator overloading is possible. The real question is whether the overloaded operator communicates the same meaning that readers already expect.

## A Natural Example

For some domain types, `+` clearly represents combination.

```csharp
public readonly record struct Money(decimal Amount)
{
    public static Money operator +(Money left, Money right)
    {
        return new Money(left.Amount + right.Amount);
    }
}
```

Adding two money values feels intuitive because readers already associate `+` with numeric combination.

## When It Helps

Operator overloading can improve readability when:

- the type has a clear mathematical or structural meaning
- the operator matches ordinary intuition
- the result type and behavior are unsurprising

Examples often include numeric wrappers, vectors, date-like intervals, and similar value-oriented domain types.

## When It Hurts

Operator overloading becomes a problem when the meaning is too domain-specific or too clever. If a reader cannot predict what `+` does for the type, the overload harms clarity instead of helping it.

## Equality Needs Extra Care

If you overload equality-related operators, the type should present a very coherent idea of value equality. Otherwise callers can become confused about whether they are comparing identity, state, or something else.

## Common Mistake

Do not overload operators just to make a type feel advanced. Overload them when the operator genuinely matches the mental model of the domain.

## Practice

Think of one custom type where `+` would feel natural and one where it would feel misleading. Explain the difference from the reader's point of view.
