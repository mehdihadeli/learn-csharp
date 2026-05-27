# Dictionaries

`Dictionary<TKey, TValue>` stores values by key. Instead of asking for "the item at index 0," you ask for "the value that belongs to this key."

This is a different collection model from arrays and lists. Arrays and lists are mainly about position. Dictionaries are mainly about lookup.

## Why dictionaries matter

Many real problems are naturally key-based:

- a student's score by student name
- a country capital by country name
- a product by product ID
- a configuration value by setting name

If the question sounds like "find the value for this key," a dictionary is often a better fit than a list.

## A simple dictionary

```csharp
Dictionary<string, string> capitals = new()
{
    ["Japan"] = "Tokyo",
    ["France"] = "Paris"
};

Console.WriteLine(capitals["Japan"]);
```

Here:

- `string` is the key type
- `string` is the value type
- each key points to a value

The first `string` in `Dictionary<string, string>` is not the same role as the second one. This is why dictionary type parameters are named `TKey` and `TValue`.

## Keys should be unique

A dictionary expects each key to identify one value.

```csharp
Dictionary<string, int> scores = new();
scores["Ava"] = 95;
scores["Noah"] = 88;
```

If you assign a value to an existing key, you replace the earlier value for that key.

That behavior is useful, but it also means keys should represent something that really is unique in the collection.

## Safer lookup with `TryGetValue`

Reading a missing key directly can fail, so a common beginner pattern is `TryGetValue`.

```csharp
Dictionary<string, int> scores = new()
{
    ["Ava"] = 95,
    ["Noah"] = 88
};

if (scores.TryGetValue("Ava", out int score))
{
    Console.WriteLine(score);
}
else
{
    Console.WriteLine("Score not found.");
}
```

This pattern is important because it makes "missing data" an explicit case instead of an accidental failure.

## Adding, updating, and removing

```csharp
Dictionary<string, decimal> prices = new();

prices["Notebook"] = 12.99m;
prices["Pen"] = 1.50m;

prices["Pen"] = 1.75m;
prices.Remove("Notebook");
```

This example shows three everyday operations:

- add a key and value
- update a value through the same key
- remove an entry by key

## Iterating through a dictionary

You can iterate through dictionary entries with `foreach`.

```csharp
Dictionary<string, int> scores = new()
{
    ["Ava"] = 95,
    ["Noah"] = 88
};

foreach (KeyValuePair<string, int> pair in scores)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}
```

This is different from list iteration because each element is a key-value pair, not a single standalone value.

## Dictionaries versus lists

Use a list when the main question is about position.

- "what is the first item?"
- "what is the item at index 2?"

Use a dictionary when the main question is about key lookup.

- "what is Ava's score?"
- "what capital belongs to Japan?"

If you find yourself searching through a list again and again to match some key, that is often a sign a dictionary may fit better.

## A worked example

```csharp
Dictionary<string, string> phoneExtensions = new()
{
    ["Support"] = "1001",
    ["Sales"] = "1002",
    ["Billing"] = "1003"
};

if (phoneExtensions.TryGetValue("Sales", out string? extension))
{
    Console.WriteLine($"Sales extension: {extension}");
}
```

This is a good dictionary example because a department name naturally identifies one extension.

## Common mistakes

The most common beginner mistake is treating a dictionary like a list with unusual syntax. A dictionary is not about order-first access. It is about key-based access.

Other common mistakes include:

- assuming a key will always exist
- forgetting that keys should usually be unique
- choosing a dictionary when plain ordered iteration is the main need
- not thinking carefully about what the key should be

## Summary

`Dictionary<TKey, TValue>` is a good fit when you need:

- key-based lookup
- unique identifiers for values
- clearer access by meaning instead of numeric position

It is one of the most useful collections after arrays and lists.

## Practice

Create a dictionary that maps three country names to capitals, then print the capital for one chosen country.

As a second exercise, write a short example that checks whether a key exists by using `TryGetValue`, and explain why that is safer than assuming the key is present.
