# Collections and Initializers

Object and collection initializers make C# code more expressive by separating construction from member assignment. They are small language features, but they improve readability in many everyday cases.

Original Microsoft Learn reference: [Object and collection initializers](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/object-and-collection-initializers).

## Why these features matter in practice

Initializers are helpful because real code often spends a lot of time setting up objects, test data, options, and collections. A clear setup block is usually easier to scan than a long series of assignment statements.

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

Object initializers work best when the object has a simple setup phase and the chosen values should be visible together.

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

## A mental model

```mermaid
flowchart LR
    A["Construct object or collection"] --> B["Apply initializer values"]
    B --> C["Ready-to-use setup"]
```

The important point is that initializer syntax makes setup declarative and easy to read.

## Readability comes first

Initializers are helpful when the setup is declarative. If construction has many invariants or requires validation, constructors or factory methods may express the intent more safely.

That is why readability and object validity both matter here. Initializers are not automatically the right answer just because they are shorter.

## A more practical example

```csharp
var dashboard = new DashboardOptions
{
    Title = "Sales Overview",
    RefreshSeconds = 30,
    Widgets =
    {
        "Revenue",
        "Top Products",
        "Regions"
    }
};

class DashboardOptions
{
    public string Title { get; set; } = string.Empty;
    public int RefreshSeconds { get; set; }
    public List<string> Widgets { get; } = new();
}
```

This is easier to scan than constructing the object and then populating every piece manually afterward.

## A practical guideline

Use initializers when:

- the object has a simple setup phase
- the configured members are easy to understand at a glance
- the initialized data is part of the example, test, or configuration

Be more cautious when:

- required members are easy to forget
- object validity depends on a sequence of operations
- mutation after construction would be misleading

## Practical guidance

Use initializers when:

- the setup is declarative
- the chosen values should be visible together
- the object or collection is configuration-like, example-like, or test-like

Use constructors or factories when:

- important invariants must be enforced at creation time
- required data should never be forgotten
- object validity depends on more than assigning a few members

## Summary

- object and collection initializers improve readability for many setup scenarios
- they are strongest when the setup is simple and declarative
- constructors and factories are still better when validity rules matter strongly
- initializers should help clarify setup, not weaken design rules
- the right choice depends on both readability and correctness

## Practice

Create one example that uses an object initializer and one that uses a collection initializer. Then decide whether either example would be clearer as a constructor call instead.

As a second exercise, explain one case where an initializer improves readability and one case where it would hide an important construction rule.
