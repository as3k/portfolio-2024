import assert from "node:assert/strict";
import test from "node:test";

import { selectHomepagePosts } from "../homepage-blog.js";

const posts = [
  { slug: "newest", meta: { date: "2026-09-28" } },
  { slug: "pinned", meta: { date: "2026-09-27" } },
  { slug: "recent", meta: { date: "2026-09-26" } },
  { slug: "older", meta: { date: "2026-09-25" } },
  { slug: "oldest", meta: { date: "2026-09-24" } },
];

test("selects the pinned post and three newest posts without duplicates", () => {
  const selection = selectHomepagePosts(posts, "pinned");

  assert.equal(selection.featured.slug, "pinned");
  assert.deepEqual(selection.recent.map((post) => post.slug), ["newest", "recent", "older"]);
});

test("excludes the pinned post even when it is the newest post", () => {
  const selection = selectHomepagePosts(posts, "newest");

  assert.equal(selection.featured.slug, "newest");
  assert.deepEqual(selection.recent.map((post) => post.slug), ["pinned", "recent", "older"]);
});

test("returns all available recent posts when fewer than three remain", () => {
  const selection = selectHomepagePosts(posts.slice(0, 2), "pinned");

  assert.deepEqual(selection.recent.map((post) => post.slug), ["newest"]);
});
