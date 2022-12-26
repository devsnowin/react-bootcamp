export function truncateString(text: string, lines: number) {
  if (text.length > lines) {
    return `${text.slice(0, lines)}...`;
  }
  return text;
}
