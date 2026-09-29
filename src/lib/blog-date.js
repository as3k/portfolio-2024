export function formatBlogDate(date) {
  const [year, month, day] = String(date).split("-");

  return `${month}/${day}/${year}`;
}
