# Repository Agent Guide

## Purpose

This repository is a docs-first C# learning project.

- The main learning content lives under `docs/`.
- The root `README.md` is a GitHub landing page and navigation index.
- The VitePress site publishes the `docs/` content as the primary learning experience.
- The `notebooks/` folder provides runnable companions for the same chapters and sections.
- Use `Git Bash` as the preferred terminal for repository commands.

## Content Rules

- Keep explanations detailed, beginner-friendly, and technically correct.
- Prefer guidance aligned with the official Microsoft C# language reference.
- When a C# concept has multiple common forms or calling styles, mention the main valid approaches.
- Avoid turning the material into shallow summaries; this repo is meant to teach concepts, not just list syntax.

## Chapter Planning Sources

- Use these Microsoft Learn hubs to derive chapter groups and child topics before introducing new sections under `docs/`.
- `https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp`
- `https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals`
- `https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/`
- `https://learn.microsoft.com/en-us/dotnet/csharp/linq/`
- `https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/`
- `https://learn.microsoft.com/en-us/dotnet/csharp`
- `https://learn.microsoft.com/en-us/dotnet/csharp/how-to/`
- `https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/`
- `https://learn.microsoft.com/en-us/dotnet/csharp/roslyn-sdk/`
- `https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide`
- When chapter names differ, prefer the repository's existing naming and ordering unless a structural change is explicitly requested.

## File Ownership

- Update `docs/` when changing lesson content.
- Update `notebooks/` when interactive examples should change.
- Update `README.md` only for repository-level navigation, structure, setup notes, or license/project metadata.
- Keep the existing chapter and section ordering stable unless a structural change is explicitly requested.

## Validation

- Markdown/content-only changes: check markdown diagnostics.
- Notebook changes: ensure `.ipynb` files remain valid JSON.
- VitePress config or site behavior changes: run `npm run build`.
