# Common Type System and Base Class Library

The Common Type System defines how .NET understands types, values, objects, inheritance, interfaces, arrays, delegates, and generics. The Base Class Library supplies the everyday APIs that C# programs use.

## Key ideas

- C# primitive aliases such as `int`, `string`, and `bool` map to .NET types such as `System.Int32`, `System.String`, and `System.Boolean`.
- Value types and reference types are runtime concepts, not only C# syntax categories.
- Generics are supported by the runtime and are used throughout the standard library.
- The base libraries include collections, I/O, text, dates, diagnostics, networking primitives, and more.

## Example

```csharp
int count = 3;
System.Int32 sameCount = count;

List<string> names = ["Ada", "Grace"];
Console.WriteLine(names.Count);
```

The language aliases make code pleasant to read, while the runtime and libraries provide the actual type definitions and behavior.

## Practice

Pick five C# keywords or aliases you use often and find the corresponding `System.*` type or library API in the .NET API reference.
