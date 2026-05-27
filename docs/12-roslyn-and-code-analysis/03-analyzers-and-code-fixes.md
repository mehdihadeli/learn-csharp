# Analyzers and Code Fixes

Analyzers let teams move coding guidance out of documents and into the compiler pipeline. Instead of hoping every developer remembers a rule, an analyzer can detect the issue automatically and report a diagnostic in the editor or build output.

## What analyzers do

An analyzer inspects code and reports diagnostics when it finds a pattern worth flagging. That pattern might be:

- a correctness issue
- a performance risk
- an API misuse
- a style rule
- a library-specific recommendation

## What code fixes do

A code fix is the guided repair for a diagnostic. It turns a warning or suggestion into an actionable refactoring the developer can apply directly.

This pairing matters because diagnostics without remediation can become noisy. A good code fix reduces friction and helps teams adopt rules instead of ignoring them.

## Severity and intent

Not every rule should be an error. Some diagnostics are suggestions or informational hints. Choosing severity well is part of good engineering judgment.

If every rule is treated like a build-breaking failure, developers often stop trusting the tool. If every rule is too weak, important problems are ignored.

## Practical examples

Common analyzer scenarios include:

- discouraging synchronous blocking in async code
- requiring `StringComparison` in string comparisons
- preventing obsolete API usage
- enforcing naming or design conventions

## Practice

Think of one mistake your team could detect automatically. Describe what the diagnostic message should say and whether the rule should be a suggestion, warning, or error.
