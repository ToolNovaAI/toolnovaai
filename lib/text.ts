/**
 * Average reading speed (words per minute).
 */
const READING_WPM = 200;

/**
 * Average speaking speed (words per minute).
 */
const SPEAKING_WPM = 130;

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
 * Count lines.
 */
export function countLines(text: string): number {
  if (!text) return 0;

  return text.split("\n").length;
}

/**
 * Count sentences.
 */
export function countSentences(text: string): number {
  if (!text.trim()) return 0;

  return text
    .split(/[.!?]+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean).length;
}

/**
 * Count paragraphs.
 */
export function countParagraphs(text: string): number {
  if (!text.trim()) return 0;

  return text
    .split(/\n\s*\n/)
    .filter((paragraph) => paragraph.trim().length > 0).length;
}

/**
 * Calculate estimated reading time.
 */
export function calculateReadingTime(words: number): number {
  if (words === 0) return 0;

  return Math.ceil(words / READING_WPM);
}

/**
 * Calculate estimated speaking time.
 */
export function calculateSpeakingTime(words: number): number {
  if (words === 0) return 0;

  return Math.ceil(words / SPEAKING_WPM);
}

/**
 * Estimate AI tokens.
 * Approximation:
 * 1 token ≈ 4 characters.
 */
export function estimateTokens(text: string): number {
  if (!text) return 0;

  return Math.ceil(text.length / 4);
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

/**
 * Check whether text is empty after trimming.
 */
export function isTextEmpty(text: string): boolean {
  return text.trim().length === 0;
}

/**
 * Truncate text to a maximum length.
 */
export function truncateText(
  text: string,
  maxLength: number
): string {
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength).trimEnd() + "...";
}