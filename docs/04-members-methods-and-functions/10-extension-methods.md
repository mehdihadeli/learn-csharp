# Extension Methods

Extension methods let you add callable methods to an existing type without modifying the original type's source code.

This is especially useful when:

- the type belongs to the .NET library or another library you do not control
- you want a helper to read like an instance method
- you want to build a fluent API style

Extension methods are common in LINQ and many utility libraries.

## The core idea

An extension method is really a static method written in a static class, but C# lets you call it using instance-method syntax.

```csharp
static class StringExtensions
{
    public static bool IsShort(this string value) => value.Length < 5;
}

Console.WriteLine("cat".IsShort());
```

The method is static, but the call looks like it belongs to `string`.

## How extension syntax works

The first parameter is marked with `this`.

```csharp
public static bool IsShort(this string value)
```

That tells the compiler:

- this is an extension method
- the method extends `string`
- the instance on the left side of the call becomes the first argument

## Extension method flow at a glance

```mermaid
flowchart LR
    A["Instance-style call"] --> B["Compiler resolves extension method"]
    B --> C["Static method receives instance as first parameter"]
    C --> D["Method runs and returns result"]
```

This is why extension methods are a syntax convenience layered on top of static methods.

## Why they are useful

Extension methods can make helper code more readable.

Compare these styles:

```csharp
bool result = StringUtilities.IsShort("cat");
```

```csharp
bool result = "cat".IsShort();
```

The second version often reads more naturally when the helper conceptually operates on the string itself.

## A worked example

Suppose you want a reusable helper that converts a string into title case-like display formatting for a simple scenario.

```csharp
static class TextExtensions
{
    public static string ToLabel(this string value)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            return string.Empty;
        }

        return char.ToUpper(value[0]) + value[1..].ToLower();
    }
}

Console.WriteLine("csharp".ToLabel());
```

This reads naturally because the operation is conceptually “something you do to a string.”

## Extension methods and namespaces

An extension method becomes available when:

- the containing static class is in scope through its namespace
- the compiler can find the extension method definition

This means extension methods are not global magic. Namespace imports still matter.

## When extension methods are a good fit

Use them when:

- the helper clearly belongs with the target type conceptually
- instance-style calling improves readability
- you cannot or should not change the original type

Avoid them when:

- the method is not really related to the extended type
- a normal static helper is clearer
- the name could confuse readers into thinking the method is part of the original type API

## A useful mental model

Think of an extension method as borrowed instance syntax for a static helper.

That is the correct balance:

- it feels like an instance method at the call site
- but it is still really a static method at heart

## Common mistakes

- Overusing extension methods for helpers that are only loosely related to the extended type.
- Making extension methods so broad that they clutter IntelliSense and confuse discovery.
- Forgetting that real instance methods take precedence over extension methods.
- Assuming extension methods can access private internals of the original type. They cannot.

## Summary

Extension methods let you add instance-style helper calls to existing types through static methods.

The main ideas are:

- they are declared in static classes
- the first parameter uses `this`
- they improve readability when the helper naturally belongs with the type
- they are a design convenience, not a way to truly modify the original type

Used carefully, extension methods can make APIs feel expressive without changing the original class.

## Practice

Write an extension method for `string` named `IsLongerThan` that takes an `int length` and returns whether the string is longer than that value.

As a second exercise, compare an extension-method call and a static helper-method call for the same operation, then decide which reads better and why.
