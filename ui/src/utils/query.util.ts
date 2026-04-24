export function createQuery(
  params: Record<string, string | number | boolean | undefined | null>
) {
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (
      value !== undefined &&
      value !== null &&
      value !== "false" &&
      value !== false
    ) {
      query.append(key, String(value));
    }
  }

  return "?" + query.toString();
}
