/**
 * Count words in a string.
 */
export function countWords(text: string): number {
  const trimmed = text.trim();

  if (!trimmed) return 0;

  return trimmed.split(/\s+/).filter(Boolean).length;
}

/**
 * Count all characters (including spaces).
 */
export function countCharacters(text: string): number {
  return text.length;
}

/**
 * Count characters excluding whitespace.
 */
export function countCharactersWithoutSpaces(text: string): number {
  return text.replace(/\s/g, "").length;
}

/**
 * Count sentences.
 */
export function countSentences(text: string): number {
  const matches = text.match(/[.!?]+/g);
  return matches ? matches.length : 0;
}

/**
 * Count paragraphs.
 */
export function countParagraphs(text: string): number {
  return text
    .split(/\n+/)
    .filter((paragraph) => paragraph.trim().length > 0).length;
}

/**
 * Calculate estimated reading time (200 words/minute).
 */
export function calculateReadingTime(words: number): number {
  if (words === 0) return 0;

  return Math.ceil(words / 200);
}