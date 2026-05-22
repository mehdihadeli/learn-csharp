# Polymorphism

Polymorphism means code can work with a common abstraction while different concrete types provide different behavior. In C#, this often appears through virtual methods, interfaces, and base-class references.

The practical benefit is that caller code does not need a long chain of `if` or `switch` statements to decide which type-specific behavior to run.

## Runtime Dispatch

With polymorphism, the variable type seen by the caller can be more general than the actual runtime object.

```csharp
Animal animal = new Dog();
animal.Speak();

class Animal
{
    public virtual void Speak()
    {
        Console.WriteLine("Animal");
    }
}

class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Dog");
    }
}
```

Even though the variable is typed as `Animal`, the runtime calls `Dog.Speak()` because the actual object is a `Dog`.

## Why It Matters

Polymorphism helps systems stay open to extension. New behaviors can often be introduced by adding a new implementation rather than rewriting existing caller logic.

For example, payment processing, notifications, and document export are all common places where polymorphism keeps code cleaner.

## Polymorphism Without Inheritance Chains

Although inheritance is one route to polymorphism, interfaces are often even more useful in application design.

```csharp
interface INotifier
{
    void Send(string message);
}

class EmailNotifier : INotifier
{
    public void Send(string message)
    {
        Console.WriteLine($"Email: {message}");
    }
}
```

Caller code can depend on `INotifier` without needing to know whether the implementation is email, SMS, or something else.

## Design Benefit

Good polymorphism shifts variation into the types themselves. That usually makes the caller simpler because the object is responsible for its own behavior.

## Common Mistake

Do not add abstraction layers just to sound object-oriented. Polymorphism helps when there is real variation in behavior. If there is only one stable implementation, an extra abstraction may add noise without value.

## Practice

Take a branch-heavy example such as exporting data in two formats and sketch how polymorphism could replace the branching logic.
