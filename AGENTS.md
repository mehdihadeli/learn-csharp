# Repository Agent Guide

## Purpose

This repository is a docs-first C# learning project.

- The main learning content lives under `docs/`.
- The root `README.md` is a GitHub landing page and navigation index.
- The Docusaurus site publishes the `docs/` content as the primary learning experience.
- The `notebooks/` folder provides runnable companions for the same chapters and sections.

## Content Rules

- Keep explanations detailed, beginner-friendly, and technically correct.
- Prefer guidance aligned with the official Microsoft C# language reference.
- When a C# concept has multiple common forms or calling styles, mention the main valid approaches.
- Avoid turning the material into shallow summaries; this repo is meant to teach concepts, not just list syntax.

## File Ownership

- Update `docs/` when changing lesson content.
- Update `notebooks/` when interactive examples should change.
- Update `README.md` only for repository-level navigation, structure, setup notes, or license/project metadata.
- Keep the existing chapter and section ordering stable unless a structural change is explicitly requested.

## Validation

- Markdown/content-only changes: check markdown diagnostics.
- Notebook changes: ensure `.ipynb` files remain valid JSON.
- Docusaurus config or site behavior changes: run `npm run build`.
