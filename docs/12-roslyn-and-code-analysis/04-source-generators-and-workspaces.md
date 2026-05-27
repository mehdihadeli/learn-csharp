# Source Generators and Workspaces

Source generators and workspaces sit at two powerful ends of the Roslyn platform. Source generators participate in compilation by adding generated code. Workspaces model entire solutions so tools can analyze and edit code across many files and projects.

## Source generators

A source generator inspects the compilation and adds new source code during build. This is useful when repetitive boilerplate can be derived from existing declarations, attributes, or metadata.

Typical scenarios include:

- generating serialization helpers
- generating strongly typed APIs from metadata
- creating registration or mapping code
- reducing runtime reflection in favor of compile-time code generation

Incremental generators improve efficiency by recalculating only the parts that changed.

## Workspaces

The workspace APIs represent documents, projects, and solutions. They are used by tools that need to understand or modify code across a larger scope than one file.

Examples include:

- rename across a solution
- batch refactorings
- tooling that edits project-wide code
- custom analysis over many documents

## The difference in intent

Source generators are about producing code as part of compilation. Workspaces are about understanding and editing code in the broader development environment.

That difference is important because developers sometimes confuse source generation with general code transformation. They solve related but different problems.

## Practice

Choose one repetitive coding pattern you have seen before. Decide whether it is better solved by a source generator, a workspace-based refactoring, or ordinary library code.
