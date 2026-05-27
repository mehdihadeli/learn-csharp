# Operators and Expressions

Expressions are how C# computes values. Operators are the symbols and keywords that combine those values into meaningful work. Almost every statement depends on expressions, so this topic sits at the center of everyday C# code.

If variables are the nouns of a program, expressions are the actions and decisions built from them. This is where data becomes logic.

## A simple example

```csharp
int x = 10;
int y = 3;
int sum = x + y;
bool larger = x > y;

Console.WriteLine($"sum = {sum}, larger = {larger}");
```

This short sample uses arithmetic and comparison operators. It also shows that expressions can produce different kinds of results, such as numbers and Booleans.

That point matters because beginners often assume expressions only mean “math.” In C#, expressions cover much more than arithmetic. They can produce strings, Booleans, objects, tuples, lambdas, and more.

## Common categories of operators

At this stage, the most useful operator families to recognize are:

- arithmetic operators such as `+`, `-`, `*`, `/`, and `%`
- comparison operators such as `>`, `<`, `==`, and `!=`
- logical operators such as `&&`, `||`, and `!`
- assignment operators such as `=`, `+=`, and `??=`
- null-handling operators such as `??` and `?.`

Each family exists for a different kind of question:

- arithmetic asks “what is the new numeric value?”
- comparison asks “is this relationship true?”
- logical asks “how do truth values combine?”
- assignment asks “where does the result go?”

## Operator precedence

Microsoft's operator reference emphasizes that operators do not all run in the same order. Higher-precedence operators are evaluated before lower-precedence ones unless parentheses change the order.

```csharp
var a = 2 + 2 * 2;
var b = (2 + 2) * 2;

Console.WriteLine($"a = {a}, b = {b}");
```

Without parentheses, multiplication happens before addition.

That means reading expressions is not just left to right. You must also know which operators bind more tightly.

For beginners, the safest habit is simple: if an expression requires thought, add parentheses.

## Associativity also matters

When operators have the same precedence, associativity determines grouping.

Most binary operators are left-associative. Assignment operators are right-associative.

That means code like `x = y = z` is grouped as `x = (y = z)`.

Associativity matters less often than precedence, but when it matters, it can change the result dramatically.

```csharp
int a = 13 / 5 / 2;
int b = 13 / (5 / 2);

Console.WriteLine($"a = {a}, b = {b}");
```

These expressions look similar, but they do not evaluate to the same result.

## Conditional evaluation

Some operators do not always evaluate every operand. For example, `&&`, `||`, `??`, and null-conditional operators can short-circuit.

That behavior is important for both correctness and performance.

```csharp
string? name = null;

if (name is not null && name.Length > 0)
{
    Console.WriteLine(name);
}
```

The second part runs only if the first part is true. That is why this expression is safe.

## Expressions can be small or composed

Some expressions are tiny:

```csharp
42
isReady
count + 1
```

Some combine many ideas:

```csharp
string message = score >= 60 ? "Passed" : "Failed";
```

The more ideas an expression combines, the more important readability becomes.

## A worked example

```csharp
int score = 72;
bool passed = score >= 60;
string result = passed ? "Passed" : "Failed";

Console.WriteLine($"Score: {score}");
Console.WriteLine($"Passed: {passed}");
Console.WriteLine($"Result: {result}");
```

This sample connects three layers:

- numeric comparison
- Boolean result
- conditional expression based on that result

## A practical rule

If an expression becomes hard to read, split it into named intermediate values. The compiler will still optimize many simple cases, and the code becomes easier for humans to follow.

For example, this:

```csharp
bool isEligible = age >= 18 && hasId && !isSuspended;
```

may be perfectly readable. But if the condition grows larger, intermediate names often make the logic clearer.

```csharp
bool isOldEnough = age >= 18;
bool hasRequiredDocuments = hasId;
bool canProceed = isOldEnough && hasRequiredDocuments && !isSuspended;
```

## Common mistakes

- relying on precedence when parentheses would make intent clearer
- mixing too many ideas into one expression
- confusing `=` with `==`
- forgetting that integer division discards the fractional part
- writing conditions that are technically correct but difficult to read

## Summary

Expressions are where values are combined, compared, transformed, and tested. Learning operators well pays off in every later chapter because almost every language feature eventually uses them.

## Practice

Write one expression where precedence matters and then rewrite it with parentheses. Explain why the second version may be easier to read even when both are equivalent.

As a second exercise, write one example each of an arithmetic expression, a comparison expression, a logical expression, and a conditional expression.
