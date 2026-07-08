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
/**
 * Calculate estimated speaking time (130 words/minute).
 */
export function calculateSpeakingTime(words: number): number {
  if (words === 0) return 0;

  return Math.ceil(words / 130);
}
/**
 * Calculate average word length.
 */
export function calculateAverageWordLength(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) return 0;

  const totalCharacters = words.reduce(
    (sum, word) => sum + word.length,
    0
  );

  return Number((totalCharacters / words.length).toFixed(1));
}

/**
 * Find the longest word.
 */
export function findLongestWord(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) return "";

  return words.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
}