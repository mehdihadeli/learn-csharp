# Serialization with System.Text.Json

Serialization turns objects into a data format and deserialization turns that format back into objects. In modern .NET, `System.Text.Json` is the built-in JSON serializer used in many everyday scenarios.

Original Microsoft Learn reference: [JSON serialization and deserialization in .NET overview](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/overview).

This matters in practical code because JSON appears everywhere: web APIs, configuration files, caches, logs, and message-based systems.

## A basic example

```csharp
using System.Text.Json;

var payload = new { Name = "C#", Level = "Beginner" };
string json = JsonSerializer.Serialize(payload);
Console.WriteLine(json);
```

This turns an object into a JSON string.

## Deserializing back into a type

```csharp
using System.Text.Json;

string json = """
{
  "name": "Lina",
  "age": 28
}
""";

Person? person = JsonSerializer.Deserialize<Person>(json);

Console.WriteLine(person?.Name);

record Person(string Name, int Age);
```

This shows the other half of the process: reading structured JSON into a typed object.

## A mental model

```mermaid
flowchart LR
    A[".NET object"] --> B["Serialize"]
    B --> C["JSON text"]
    C --> D["Deserialize"]
    D --> E[".NET object"]
```

Serialization and deserialization are opposite directions of the same idea.

## Why this is practical

Serialization is often combined with nearby APIs such as:

- file I/O
- HTTP requests and responses
- configuration loading
- caching or persistence

For example, saving settings to a file is a very common beginner-friendly use case.

## A more realistic example

```csharp
using System.Text.Json;

var settings = new AppSettings("Light", 20);
string json = JsonSerializer.Serialize(settings, new JsonSerializerOptions
{
    WriteIndented = true
});

File.WriteAllText("settings.json", json);

record AppSettings(string Theme, int PageSize);
```

This connects JSON serialization directly to a practical file scenario.

## Options matter

`JsonSerializerOptions` lets you control behavior such as formatting and naming policies.

One common example is pretty-printing:

```csharp
new JsonSerializerOptions
{
    WriteIndented = true
}
```

That is useful for human-readable files, though compact JSON may be preferable for network traffic or storage efficiency.

## Error handling matters too

Deserialization can fail if the JSON is malformed or does not match the expected shape.

```csharp
try
{
    Person? person = JsonSerializer.Deserialize<Person>(json);
}
catch (JsonException ex)
{
    Console.WriteLine($"Invalid JSON: {ex.Message}");
}
```

In real applications, malformed input is a normal possibility, not an edge-case fantasy.

## Practical guidance

Serialization works best when:

- your model types are clear and stable enough for the data contract
- you handle invalid incoming data deliberately
- you decide whether human readability or compactness matters more
- you keep the serialized shape aligned with how the data is actually used

## Common beginner mistakes

- Assuming deserialization always succeeds.
- Forgetting to handle malformed or partial JSON.
- Treating anonymous types as long-term contracts when a named type would be clearer.
- Ignoring serializer options that affect readability or compatibility.

## Summary

- `System.Text.Json` serializes objects to JSON and deserializes JSON back into objects
- it is widely used in practical .NET work such as APIs and configuration
- file I/O and JSON often appear together in real applications
- serializer options affect output shape and readability
- deserialization should be treated as input handling that can fail

## Practice

Create a small settings type, serialize it to JSON, and write it to a file.

As a second exercise, read the file back, deserialize it, and explain what kinds of errors the program should handle if the file contents are wrong.
