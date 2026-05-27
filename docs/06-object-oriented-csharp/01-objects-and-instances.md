# Objects and Instances

One of the most important ideas in object-oriented programming is the difference between a type and an object. A type is a definition. It describes what members exist and what kind of data and behavior are possible. An object, also called an instance, is one actual runtime value created from that definition.

This distinction matters because many beginner mistakes happen when code treats a type as if it were already a living object. In C#, the type describes the shape. The instance is the real thing your program works with while it runs.

## Type versus instance

When you write a class, you are describing a model.

```csharp
class Customer
{
    public Customer(string name)
    {
        Name = name;
    }

    public string Name { get; }
}
```

That code defines what a `Customer` object looks like. It does not create any customers yet.

Objects appear only when code uses `new`.

```csharp
var firstCustomer = new Customer("Lina");
var secondCustomer = new Customer("Omid");

Console.WriteLine(firstCustomer.Name);
Console.WriteLine(secondCustomer.Name);
```

Both variables use the same type, but they refer to different objects. That is why one object can store `"Lina"` while the other stores `"Omid"`.

## A visual mental model

```mermaid
flowchart LR
    A["Type definition\nCustomer"] --> B["new Customer(\"Lina\")"]
    A --> C["new Customer(\"Omid\")"]
    B --> D["Object 1\nName = Lina"]
    C --> E["Object 2\nName = Omid"]
```

The important idea is that many objects can come from one type definition.

## Why instances matter

Instances are where object-oriented design becomes practical. If a type models a bank account, order, book, or user, the instance is the specific account, the specific order, the specific book, or the specific user your program is handling right now.

State belongs to the object, not to the type definition.

If one `Order` has been paid and another has not, the difference is not in the `Order` class itself. The difference is in the data stored inside each instance.

That is why good object design asks questions like:

- what data belongs to each individual object
- what behavior should operate on that data
- whether the object should be mutable or mostly read-only
- whether multiple objects of the same type should be able to hold different values safely

## Variables and object references

For class types, a variable usually holds a reference to an object rather than containing the full object data directly. That means two variables can refer to the same object.

```csharp
var account = new Account("A-100");
var alias = account;

account.Rename("A-200");
Console.WriteLine(alias.Number);

class Account
{
    public Account(string number)
    {
        Number = number;
    }

    public string Number { get; private set; }

    public void Rename(string number)
    {
        Number = number;
    }
}
```

The output is `A-200` because `account` and `alias` refer to the same runtime object.

## Identity versus equal-looking data

Two objects can contain the same values and still be different objects.

```csharp
var first = new Customer("Lina");
var second = new Customer("Lina");

Console.WriteLine(first.Name == second.Name);
Console.WriteLine(ReferenceEquals(first, second));
```

The names are equal as text, but the objects are different instances.

That distinction becomes important when you reason about updates, sharing, caching, and comparisons.

## Objects and lifetime

An object exists only after construction and only as long as the program still needs it. From a beginner point of view, the useful takeaway is simple:

- the type exists in source code as a definition
- the object exists at runtime after construction
- variables let code access that object

This mental model makes later topics such as constructors, properties, methods, inheritance, and polymorphism much easier to understand.

## A fuller example

```csharp
var cart1 = new ShoppingCart();
var cart2 = new ShoppingCart();

cart1.AddItem("Notebook");
cart2.AddItem("Pen");
cart2.AddItem("Pencil");

Console.WriteLine(cart1.ItemCount);
Console.WriteLine(cart2.ItemCount);

class ShoppingCart
{
    private int _itemCount;

    public int ItemCount => _itemCount;

    public void AddItem(string itemName)
    {
        _itemCount++;
    }
}
```

Even though both objects use the same type, they keep separate state.

## Common beginner mistakes

- Treating a class name as if it were already an object.
- Forgetting that different instances of the same type can hold different values.
- Forgetting that two variables can refer to the same object.
- Assuming equal-looking data always means the same object.

## Summary

- a type defines what is possible
- an object is one actual runtime instance of that type
- `new` creates a new instance
- class variables usually store references to objects
- state belongs to instances, not to the type definition itself

## Practice

Create two objects from the same type and give them different values.

As a second exercise, create two variables that point to the same object, modify the object through one variable, and explain why the change is visible through the other variable.
