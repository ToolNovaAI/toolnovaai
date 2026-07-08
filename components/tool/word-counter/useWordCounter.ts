import { useMemo, useState } from "react";

import {
  calculateAverageWordLength,
  calculateReadingTime,
  calculateSpeakingTime,
  countCharacters,
  countCharactersWithoutSpaces,
  countParagraphs,
  countSentences,
  countWords,
  findLongestWord,
} from "@/lib/text";

export function useWordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const words = countWords(text);

 return {
  words,
  characters: countCharacters(text),
  charactersNoSpaces: countCharactersWithoutSpaces(text),
  sentences: countSentences(text),
  paragraphs: countParagraphs(text),
  readingTime: calculateReadingTime(words),
  speakingTime: calculateSpeakingTime(words),
  averageWordLength: calculateAverageWordLength(text),
  longestWord: findLongestWord(text),
};
  }, [text]);

  function clear() {
    setText("");
  }

  return {
  text,
  setText,
  clear,
  ...stats,
};
}