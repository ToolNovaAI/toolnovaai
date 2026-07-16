"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const STORAGE_KEY = "toolnova-ai-writer";

const READING_WPM = 200;
const SPEAKING_WPM = 130;

export interface AIWriterStats {
  words: number;
  characters: number;
  readingTime: number;
  speakingTime: number;
}

export interface AIWriterState {
  title: string;
  content: string;
}

export type SaveStatus =
  | "idle"
  | "saving"
  | "saved";

const countWords = (text: string) =>
  text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

const countCharacters = (text: string) =>
  text.length;

const calculateReadingTime = (
  words: number
) =>
  words === 0
    ? 0
    : Math.max(
        1,
        Math.ceil(words / READING_WPM)
      );

const calculateSpeakingTime = (
  words: number
) =>
  words === 0
    ? 0
    : Math.max(
        1,
        Math.ceil(words / SPEAKING_WPM)
      );

export function useAIWriter() {
  const [state, setState] =
    useState<AIWriterState>({
      title: "Untitled Document",
      content: "",
    });

  const [history, setHistory] =
    useState<string[]>([]);

  const [future, setFuture] =
    useState<string[]>([]);

  const [lastSaved, setLastSaved] =
    useState<Date | null>(null);

  const [saveStatus, setSaveStatus] =
    useState<SaveStatus>("idle");

  const timeout =
    useRef<ReturnType<
      typeof setTimeout
    > | null>(null);

  // -----------------------------
  // Load Draft
  // -----------------------------

  useEffect(() => {
    const draft =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!draft) return;

    try {
      const parsed: AIWriterState =
        JSON.parse(draft);

      setState(parsed);

      setHistory([
        parsed.content,
      ]);

      setLastSaved(new Date());
    } catch (error) {
      console.error(
        "Failed to load draft",
        error
      );
    }
  }, []);

  // -----------------------------
  // Auto Save
  // -----------------------------

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current =
      setTimeout(() => {
        setSaveStatus(
          "saving"
        );

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(state)
        );

        setLastSaved(
          new Date()
        );

        setSaveStatus(
          "saved"
        );

        setTimeout(() => {
          setSaveStatus(
            "idle"
          );
        }, 2000);
      }, 5000);

    return () => {
      if (timeout.current) {
        clearTimeout(
          timeout.current
        );
      }
    };
  }, [state]);

  // -----------------------------
  // Title
  // -----------------------------

  const setTitle =
    useCallback(
      (title: string) => {
        setState((prev) => ({
          ...prev,
          title,
        }));
      },
      []
    );
      // -----------------------------
  // Content
  // -----------------------------

  const setContent = useCallback(
    (content: string) => {
      setHistory((prev) => {
        if (
          prev.length === 0 ||
          prev[prev.length - 1] !== state.content
        ) {
          return [...prev, state.content];
        }

        return prev;
      });

      setFuture([]);

      setState((prev) => ({
        ...prev,
        content,
      }));
    },
    [state.content]
  );

  // -----------------------------
  // New Document
  // -----------------------------

  const clear = useCallback(() => {
    setHistory([]);

    setFuture([]);

    setState({
      title: "Untitled Document",
      content: "",
    });

    setSaveStatus("idle");
  }, []);

  // -----------------------------
  // Undo
  // -----------------------------

  const undo = useCallback(() => {
    setHistory((prevHistory) => {
      if (prevHistory.length === 0) {
        return prevHistory;
      }

      const previous =
        prevHistory[prevHistory.length - 1];

      setFuture((prevFuture) => [
        state.content,
        ...prevFuture,
      ]);

      setState((prev) => ({
        ...prev,
        content: previous,
      }));

      return prevHistory.slice(0, -1);
    });
  }, [state.content]);

  // -----------------------------
  // Redo
  // -----------------------------

  const redo = useCallback(() => {
    setFuture((prevFuture) => {
      if (prevFuture.length === 0) {
        return prevFuture;
      }

      const next = prevFuture[0];

      setHistory((prevHistory) => [
        ...prevHistory,
        state.content,
      ]);

      setState((prev) => ({
        ...prev,
        content: next,
      }));

      return prevFuture.slice(1);
    });
  }, [state.content]);

  // -----------------------------
  // Copy
  // -----------------------------

  const copy = useCallback(async () => {
    if (!state.content.trim()) return;

    await navigator.clipboard.writeText(
      state.content
    );
  }, [state.content]);

  // -----------------------------
  // Download
  // -----------------------------

  const download = useCallback(() => {
    const blob = new Blob(
      [state.content],
      {
        type: "text/plain;charset=utf-8",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download = `${state.title}.txt`;

    link.click();

    URL.revokeObjectURL(url);
  }, [state]);

  // -----------------------------
  // Manual Save
  // -----------------------------

  const save = useCallback(() => {
    setSaveStatus("saving");

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );

    setLastSaved(new Date());

    setSaveStatus("saved");

    setTimeout(() => {
      setSaveStatus("idle");
    }, 2000);
  }, [state]);

  // -----------------------------
  // Manual Load
  // -----------------------------

  const load = useCallback(() => {
    const draft =
      localStorage.getItem(STORAGE_KEY);

    if (!draft) return;

    try {
      const parsed: AIWriterState =
        JSON.parse(draft);

      setState(parsed);

      setHistory([parsed.content]);

      setFuture([]);

      setLastSaved(new Date());
    } catch (error) {
      console.error(
        "Failed to load draft",
        error
      );
    }
  }, []);
    // -----------------------------
  // Statistics
  // -----------------------------

  const stats: AIWriterStats = useMemo(() => {
    const words = countWords(state.content);

    return {
      words,
      characters: countCharacters(state.content),
      readingTime: calculateReadingTime(words),
      speakingTime: calculateSpeakingTime(words),
    };
  }, [state.content]);

  // -----------------------------
  // Return
  // -----------------------------

  return {
    // State
    title: state.title,
    content: state.content,

    // Analytics
    stats,

    // Save Status
    saveStatus,
    lastSaved,

    // Editor
    setTitle,
    setContent,
    clear,

    // History
    undo,
    redo,

    // Storage
    save,
    load,

    // Utilities
    copy,
    download,
  };
}