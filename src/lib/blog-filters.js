export function filterPosts(posts, query, tag = "all") {
  const normalizedQuery = query.trim().toLowerCase();
  const selectedTags = Array.isArray(tag) ? tag : [tag];

  return posts.filter((post) => {
    const tags = post.meta.tags || [];
    const matchesTag = selectedTags.includes("all") || selectedTags.some((selectedTag) => tags.includes(selectedTag));
    const searchable = [post.meta.title, post.meta.excerpt, ...tags]
      .join(" ")
      .toLowerCase();
    const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);

    return matchesTag && matchesQuery;
  });
}
