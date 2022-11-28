export const limitText = (text, limit) =>
  text.length > limit ? text.slice(0, limit) + "..." : text;
