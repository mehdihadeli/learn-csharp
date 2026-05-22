# Object and Collection Initializers

Object and collection initializers are syntax features that make instance setup shorter and easier to scan. They are common in data models, options objects, tests, and scenarios where many values are assigned during creation.

The benefit is mainly readability. Instead of calling a constructor and then writing a long sequence of assignments, the setup appears in one compact block.

## Object Initializers

An object initializer assigns properties or fields after construction.

```csharp
var user = new User
{
    Id = 10,
    Name = "Lina"
};

class User
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
}
```

This is especially useful when a type has a parameterless constructor and several assignable properties.

## Collection Initializers

Collection initializers add elements during creation.

```csharp
var names = new List<string>
{
    "Lina",
    "Omid",
    "Sara"
};
```

The same idea can be combined with object creation when a type exposes a collection property.

```csharp
var order = new Order
{
    Id = 10,
    Items = { "Book", "Pen" }
};

class Order
{
    public int Id { get; set; }
    public List<string> Items { get; } = new();
}
```

## Why They Are Useful

Initializers make setup intent visible. They help readers see what values matter for the new object without scrolling through several assignment statements.

They are also common in configuration-heavy code where the important information is the set of chosen values rather than the mechanics of assignment.

## Design Limitation

Initializers work best when the type already allows the relevant properties or collection members to be assigned. If a type should enforce strong invariants at creation time, constructors or factory methods may still be the better choice.

## Common Mistake

Do not use object initializers to bypass important construction rules. If a value is truly required for validity, the constructor should usually express that requirement clearly.

## Practice

Rewrite a multi-line object setup using an initializer, then decide whether the result is genuinely clearer or whether constructor-based creation would better express required state.
