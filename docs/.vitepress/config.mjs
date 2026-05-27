import { defineConfig } from "vitepress";
import { fileURLToPath } from "node:url";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(configDir, "..");
const title = "Learn C#";
const description = "A structured, docs-first C# learning path";

function stripNumericPrefix(segment) {
  return segment.replace(/^\d{2}-/, "");
}

function stripExtension(fileName) {
  return fileName.replace(/\.md$/, "");
}

function titleFromSegment(segment) {
  return stripNumericPrefix(segment)
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function readDocTitle(relativeFilePath) {
  const content = readFileSync(path.join(docsDir, relativeFilePath), "utf8");
  const frontmatterTitleMatch = content.match(
    /^---[\s\S]*?^title:\s*(.+)$[\s\S]*?^---/m,
  );

  if (frontmatterTitleMatch) {
    return frontmatterTitleMatch[1].trim().replace(/^['\"]|['\"]$/g, "");
  }

  const headingMatch = content.match(/^#{1,2}\s+(.+)$/m);
  if (headingMatch) {
    return headingMatch[1].trim();
  }

  return titleFromSegment(stripExtension(path.basename(relativeFilePath)));
}

function getMarkdownFiles(currentDir = docsDir, prefix = "") {
  return readdirSync(currentDir, { withFileTypes: true })
    .filter((entry) => entry.name !== ".vitepress")
    .flatMap((entry) => {
      const absolutePath = path.join(currentDir, entry.name);
      const relativePath = prefix
        ? path.posix.join(prefix, entry.name)
        : entry.name;

      if (entry.isDirectory()) {
        return getMarkdownFiles(absolutePath, relativePath);
      }

      return entry.isFile() && entry.name.endsWith(".md") ? [relativePath] : [];
    })
    .sort((left, right) => left.localeCompare(right));
}

function toCleanDocPath(relativeFilePath) {
  if (relativeFilePath === "00-introduction.md") {
    return "index.md";
  }

  const segments = relativeFilePath.split("/").map(stripNumericPrefix);
  const fileName = segments.pop();

  return [...segments, fileName].join("/");
}

function toRoutePath(relativeFilePath) {
  const cleanDocPath = toCleanDocPath(relativeFilePath);

  if (cleanDocPath === "index.md") {
    return "/";
  }

  return `/${stripExtension(cleanDocPath)}`;
}

function buildRewrites(markdownFiles) {
  return Object.fromEntries(
    markdownFiles.map((relativeFilePath) => [
      relativeFilePath,
      toCleanDocPath(relativeFilePath),
    ]),
  );
}

function buildSidebar(markdownFiles) {
  const filesBySection = new Map();

  for (const relativeFilePath of markdownFiles) {
    if (relativeFilePath === "00-introduction.md") {
      continue;
    }

    const [sectionDir] = relativeFilePath.split("/");
    if (!filesBySection.has(sectionDir)) {
      filesBySection.set(sectionDir, []);
    }

    filesBySection.get(sectionDir).push(relativeFilePath);
  }

  return [...filesBySection.entries()].map(([sectionDir, sectionFiles]) => ({
    text: titleFromSegment(sectionDir),
    collapsed: true,
    items: sectionFiles.map((relativeFilePath) => ({
      text: readDocTitle(relativeFilePath),
      link: toRoutePath(relativeFilePath),
    })),
  }));
}

const markdownFiles = getMarkdownFiles();

export default defineConfig({
  title,
  description,
  srcDir: docsDir,
  base: "/learn-csharp/",
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  rewrites: buildRewrites(markdownFiles),
  themeConfig: {
    nav: [
      { text: "Introduction", link: "/" },
      { text: "GitHub", link: "https://github.com/mehdihadeli/learn-csharp" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/mehdihadeli/learn-csharp" },
    ],
    sidebar: buildSidebar(markdownFiles),
    outline: { level: [2, 3], label: "On this page" },
    docFooter: {
      prev: "Previous",
      next: "Next",
    },
    search: {
      provider: "local",
    },
    footer: {
      message: "Built with VitePress and published on GitHub Pages.",
      copyright: `Copyright ${new Date().getFullYear()} Learn C#`,
    },
  },
  sitemap: {
    hostname: "https://mehdihadeli.github.io/learn-csharp/",
  },
});
