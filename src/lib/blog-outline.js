function getHeadingText(value) {
  return String(value)
    .replace(/[*_`]/g, "")
    .trim();
}

export function getHeadingId(value) {
  return getHeadingText(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function extractBlogHeadings(content) {
  return [...String(content).matchAll(/^##\s+(.+)$/gm)].map((match) => {
    const title = getHeadingText(match[1]);

    return { id: getHeadingId(title), title };
  });
}
