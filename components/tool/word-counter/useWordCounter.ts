import { useMemo, useState } from "react";

import {
  calculateReadingTime,
  countCharacters,
  countCharactersWithoutSpaces,
  countParagraphs,
  countSentences,
  countWords,
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