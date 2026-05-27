# Logging, Diagnostics, and Observability

.NET includes APIs and tools for understanding what a program is doing while it runs. Logging, metrics, traces, dumps, counters, and analyzers help you diagnose behavior that cannot be understood from source code alone.

## Key ideas

- Logging records meaningful application events.
- Metrics measure numeric behavior over time.
- Tracing follows operations across async calls and process boundaries.
- Diagnostic tools can inspect CPU, memory, exceptions, counters, and dumps.
- Code analyzers find problems before runtime.

## Example

```csharp
using Microsoft.Extensions.Logging;

ILogger logger = LoggerFactory
    .Create(builder => builder.AddConsole())
    .CreateLogger("Demo");

logger.LogInformation("Processed {Count} records", 42);
```

Structured log values are easier to query than one long formatted string.

## Practice

Add one meaningful log message to a console program. Include a named value in the message template instead of concatenating strings.
