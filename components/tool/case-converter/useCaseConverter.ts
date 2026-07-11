"use client";

import { useMemo, useState } from "react";

function toTitleCase(text: string) {
  return text.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

function toSentenceCase(text: string) {
  if (!text.trim()) return "";

  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function toCamelCase(text: string) {
  return text
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

function toPascalCase(text: string) {
  return text
    .toLowerCase()
    .split(/[\s_-]+/)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

function toSnakeCase(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "_");
}

function toKebabCase(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-");
}

function toConstantCase(text: string) {
  return text
    .trim()
    .toUpperCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "_");
}

export function useCaseConverter() {
  const [text, setText] = useState("");

  const output = useMemo(
    () => ({
      uppercase: text.toUpperCase(),
      lowercase: text.toLowerCase(),
      titlecase: toTitleCase(text),
      sentencecase: toSentenceCase(text),
      camelcase: toCamelCase(text),
      pascalcase: toPascalCase(text),
      snakecase: toSnakeCase(text),
      kebabcase: toKebabCase(text),
      constantcase: toConstantCase(text),
    }),
    [text]
  );

  function clear() {
    setText("");
  }

  return {
    text,
    setText,
    clear,
    output,
  };
}