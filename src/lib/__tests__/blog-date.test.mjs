import assert from "node:assert/strict";
import test from "node:test";
import { formatBlogDate } from "../blog-date.js";

test("formats ISO blog dates as MM/DD/YYYY", () => {
  assert.equal(formatBlogDate("2026-06-11"), "06/11/2026");
});
