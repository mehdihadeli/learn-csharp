# Inheritance

Inheritance allows one class to reuse and specialize another class. In C#, a derived class can inherit members from a base class and optionally override some of that behavior.

This can be useful, but it should represent a real conceptual relationship. Inheritance is strongest when the derived type truly is a more specific form of the base type.

## Basic Shape

The base class defines common members, and the derived class extends or customizes them.

```csharp
class Animal
{
    public virtual void Speak()
    {
        Console.WriteLine("Animal sound");
    }
}

class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Woof");
    }
}
```

`Dog` inherits from `Animal`, so every `Dog` object is also an `Animal` from the type system's point of view.

## What Inheritance Gives You

Inheritance can provide:

- shared members defined once in the base class
- specialized behavior in derived classes
- a common type that multiple related classes can be treated as

That shared type becomes especially useful when combined with polymorphism.

## When It Fits Well

Inheritance usually fits best when the relationship is stable and easy to explain in plain language. If you can honestly say "a dog is an animal" or "a savings account is a bank account," the model may be reasonable.

If the relationship is really "uses a" or "has a," composition is often the better design.

## A Risk to Watch For

Inheritance can accidentally couple classes too tightly. Once a base class becomes widely shared, changing it can affect many derived classes at once.

That is one reason inheritance should not be used just to avoid repeating a few lines of code.

## Prefer Meaning Over Convenience

When deciding whether to inherit, ask:

- does the derived type truly satisfy the meaning of the base type
- should callers be able to treat every derived object as the base type safely
- would composition express the relationship more honestly

## Common Mistake

Do not use inheritance as the default form of reuse. Shared code is not enough reason by itself. The relationship also needs to make sense in the model.

## Practice

Think of one example where inheritance fits naturally and one where composition would be better. Explain why in terms of meaning, not only code reuse.
