import assert from "node:assert/strict";
import test from "node:test";

import { filterPosts } from "../blog-filters.js";

const posts = [
  {
    slug: "router",
    meta: {
      title: "A Smart AI Router",
      excerpt: "Session coherence matters more than per-request routing.",
      tags: ["ai-systems", "internal-tools"],
    },
  },
  {
    slug: "cli",
    meta: {
      title: "Why I Designed a CLI Like a Product",
      excerpt: "Infrastructure tools deserve UX attention.",
      tags: ["cli", "ux"],
    },
  },
];

test("search finds posts by title, excerpt, or tag", () => {
  assert.deepEqual(filterPosts(posts, "router", "all").map((post) => post.slug), ["router"]);
  assert.deepEqual(filterPosts(posts, "coherence", "all").map((post) => post.slug), ["router"]);
  assert.deepEqual(filterPosts(posts, "internal-tools", "all").map((post) => post.slug), ["router"]);
});

test("tag filters show only posts with the selected tag", () => {
  assert.deepEqual(filterPosts(posts, "", "ux").map((post) => post.slug), ["cli"]);
});

test("topic filters can combine related tags under one human-facing label", () => {
  assert.deepEqual(
    filterPosts(posts, "", ["ai-systems", "internal-tools"]).map((post) => post.slug),
    ["router"],
  );
});
