# Claude Repository Notes

## Project Summary

This repository is a structured C# learning guide with Docusaurus-based documentation publishing.

The repository uses this split:

- `docs/` contains the actual learning material
- `notebooks/` contains runnable notebook companions
- `README.md` is the root navigation page for GitHub readers
- `.github/workflows/deploy-docs.yml` deploys the docs site to GitHub Pages

## Important Working Assumptions

- Treat `docs/` as the source of truth for lesson content.
- Treat `notebooks/` as the runnable companion surface.
- Treat the root `README.md` as a lightweight index, not a second copy of the book.
- Preserve the chapter-based folder structure and numbered filenames.

## Tooling Expectations

- Node `>=20` is required by `package.json`.
- Docusaurus uses the classic preset with docs served from `/`.
- The repo includes a webpack plugin filter workaround in `docusaurus.config.js`; do not remove it casually.
