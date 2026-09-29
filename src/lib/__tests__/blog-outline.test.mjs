import assert from "node:assert/strict";
import test from "node:test";
import { extractBlogHeadings, getHeadingId } from "../blog-outline.js";

test("creates stable anchors from article headings", () => {
  assert.equal(getHeadingId("One Task Needs One Brain"), "one-task-needs-one-brain");
});

test("extracts second-level headings for an article table of contents", () => {
  const content = "Opening copy.\n\n## The Original Goal\n\nMore copy.\n\n## What I Am Learning";

  assert.deepEqual(extractBlogHeadings(content), [
    { id: "the-original-goal", title: "The Original Goal" },
    { id: "what-i-am-learning", title: "What I Am Learning" },
  ]);
});
