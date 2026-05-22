# Objects and Instances

One of the most important ideas in object-oriented programming is the difference between a type and an object. A type is a definition. It describes what data and behavior are available. An object is a concrete runtime value created from that definition.

In C#, classes, records, and structs all define types, but the language only starts doing useful runtime work once code creates actual instances. This distinction matters because many beginner mistakes come from talking about a class as though it were already an object, or from forgetting that different objects created from the same type can hold different state.

## Type Versus Runtime Value

When you write a class, you are describing a shape that instances can have. The class says, "objects of this kind have these members." It does not mean the object already exists.

When you call a constructor with `new`, C# creates a new instance. That instance lives at runtime, can hold its own values, and can be referenced by variables.

```csharp
var firstCustomer = new Customer("Lina");
var secondCustomer = new Customer("Omid");

Console.WriteLine(firstCustomer.Name);
Console.WriteLine(secondCustomer.Name);

class Customer
{
    public Customer(string name)
    {
        Name = name;
    }

    public string Name { get; }
}
```

Both variables use the same type, but they refer to different objects. That is why one object can contain `"Lina"` while the other contains `"Omid"`.

## Why Instances Matter

Instances are where object-oriented design becomes real. If a type models a bank account, order, or user, the instance is the specific bank account, the specific order, or the specific user your program is working with right now.

This is also why state belongs to instances. If one `Order` has been paid and another has not, the difference does not live in the type definition. It lives in the values stored by each object.

In practice, this means you should ask questions such as:

- what data belongs to each object
- what behavior should operate on that data
- whether the object should be mutable or mostly read-only
- how many instances your program is expected to create

## Reference Identity

For class types, variables usually hold references to objects rather than embedding the full object data directly. Two variables can point to the same object, and changes made through one reference are visible through the other.

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

The output shows the updated number because `account` and `alias` refer to the same runtime object.

## A Useful Mental Model

An effective mental model is:

- the type defines what is possible
- the object represents one actual thing in memory at runtime
- the variable stores a way to access that object

That model makes later topics such as constructors, properties, inheritance, and polymorphism much easier to understand.

## Common Beginner Confusion

Do not treat a class name as though it were already the thing itself. `Customer` is a type. `new Customer("Lina")` is an object creation expression. The difference looks small in syntax, but it changes how you reason about state, identity, and behavior.

## Practice

Create two objects from the same type, give them different values, and then explain in plain language what is shared between them and what is not.
