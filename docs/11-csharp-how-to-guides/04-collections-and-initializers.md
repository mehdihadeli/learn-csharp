# Collections and Initializers

Object and collection initializers make C# code more expressive by separating construction from member assignment. They are small language features, but they improve readability in many everyday cases.

## Object initializers

Object initializers let you set properties or fields when creating an object.

```csharp
var course = new Course
{
    Title = "Learn C#",
    DurationInHours = 12,
    IsPublished = true
};
```

This is often clearer than constructing an object and then assigning members one line at a time afterward.

## Collection initializers

Collection initializers let you populate a collection at creation time.

```csharp
var scores = new List<int> { 10, 20, 30, 40 };

var capitals = new Dictionary<string, string>
{
    ["Iran"] = "Tehran",
    ["Japan"] = "Tokyo"
};
```

These forms are concise and easy to scan when the initial data is part of the example or the configuration.

## Readability comes first

Initializers are helpful when the setup is declarative. If construction has many invariants or requires validation, constructors or factory methods may express the intent more safely.

## A practical guideline

Use initializers when:

- the object has a simple setup phase
- the configured members are easy to understand at a glance
- the initialized data is part of the example, test, or configuration

Be more cautious when:

- required members are easy to forget
- object validity depends on a sequence of operations
- mutation after construction would be misleading

## Practice

Create one example that uses an object initializer and one that uses a collection initializer. Then decide whether either example would be clearer as a constructor call instead.
