## Language Versions

Language versioning explains why two valid C# code samples can look different. Newer versions add syntax and analysis features, but a project only gets them when its compiler settings allow them.

### Why this topic matters

This section helps you build the mental map around C# before the language details become dense. A clear understanding here makes later chapters feel connected instead of fragmented.

- Syntax availability depends on compiler configuration.
- A newer SDK does not automatically mean every project uses the newest language mode.
- Version awareness helps when reading older or mixed codebases.

### Try this

```xml
<PropertyGroup>
  <LangVersion>latest</LangVersion>
</PropertyGroup>
```

Read the example as part of a workflow, not just as isolated code. The surrounding command or tool behavior is part of what you are learning.

### What to do next

Keep setup and terminology straight. Many early frustrations come from mixing tool concepts together.

### Practice

Create a tiny console app and run the command sequence yourself so the environment becomes familiar.
