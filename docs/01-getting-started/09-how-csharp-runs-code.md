## How C# Runs Code

C# code does not run as raw source. It moves through compilation and runtime stages, and that pipeline explains why the language can be portable while still running efficiently on the target machine.

### Why this topic matters

This section helps you build the mental map around C# before the language details become dense. A clear understanding here makes later chapters feel connected instead of fragmented.

- Compilation and execution are separate stages.
- The runtime adds services that ordinary application code depends on.
- This pipeline explains why diagnostics can appear at different stages.

### Try this

```text
C# source -> compiler -> IL -> .NET runtime -> machine code
```

Read the example as part of a workflow, not just as isolated code. The surrounding command or tool behavior is part of what you are learning.

### What to do next

Keep setup and terminology straight. Many early frustrations come from mixing tool concepts together.

### Practice

Create a tiny console app and run the command sequence yourself so the environment becomes familiar.
