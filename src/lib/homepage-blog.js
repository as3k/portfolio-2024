export function selectHomepagePosts(posts, pinnedSlug, recentLimit = 3) {
  const featured = posts.find((post) => post.slug === pinnedSlug) || null;
  const recent = posts
    .filter((post) => post.slug !== pinnedSlug)
    .slice(0, recentLimit);

  return { featured, recent };
}
