# Security, Cryptography, and Safe Code

.NET provides APIs and platform guidance for writing safer code. Security is not a single feature; it appears in input handling, secrets, cryptography, dependency updates, file access, networking, and deployment choices.

## Key ideas

- Validate and normalize input at trust boundaries.
- Do not store secrets in source code or committed configuration files.
- Prefer established cryptography APIs over custom algorithms.
- Keep packages and runtimes updated for security fixes.
- Use safe C# by default; reserve `unsafe` code for narrow, justified scenarios.

## Example

```csharp
using System.Security.Cryptography;

byte[] bytes = RandomNumberGenerator.GetBytes(32);
string token = Convert.ToBase64String(bytes);
```

Security-sensitive randomness should come from cryptographic APIs, not from `Random`.

## Practice

Review a small program and list every place it reads input, opens a file, loads configuration, or depends on a package. Each item is part of the program's security surface.
