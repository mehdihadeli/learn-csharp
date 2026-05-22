# Abstract Classes

An abstract class is a base class that cannot be instantiated directly. It exists to define shared structure and behavior for derived classes while still leaving some parts incomplete.

This makes abstract classes useful when related types have meaningful common behavior, but no single base implementation is complete enough to stand on its own.

## Core Idea

An abstract member says, in effect, "every derived type must provide this behavior." A concrete member in the same abstract class says, "this shared behavior belongs here once for everyone."

```csharp
abstract class Shape
{
    public abstract double Area();

    public void PrintArea()
    {
        Console.WriteLine(Area());
    }
}
```

`Shape` cannot be created directly, but derived types can inherit `PrintArea()` and must implement `Area()`.

## Why Use an Abstract Class

Abstract classes are useful when you want both:

- shared implementation
- required specialization in derived types

If you only need a contract and no shared behavior, an interface is often enough. If you need both contract and reusable base logic, an abstract class may fit better.

## Example With a Derived Type

```csharp
abstract class Shape
{
    public abstract double Area();
}

class Circle : Shape
{
    public Circle(double radius)
    {
        Radius = radius;
    }

    public double Radius { get; }

    public override double Area()
    {
        return Math.PI * Radius * Radius;
    }
}
```

The abstract base defines what every shape must provide, while the concrete derived class supplies the real calculation.

## Design Tradeoff

Abstract classes create stronger coupling than interfaces because derived classes inherit implementation and base-type assumptions. That can be helpful, but it also means the base class should be designed carefully.

## Common Mistake

Do not choose an abstract class automatically whenever multiple types seem related. Use it when the shared behavior is real, stable, and worth centralizing.

## Practice

Model a small family of related types and decide whether they need an interface, an abstract class, or neither. Explain your reasoning using shared behavior and required specialization.
