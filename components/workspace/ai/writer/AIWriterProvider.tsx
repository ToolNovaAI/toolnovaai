"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

import { useAIWriter } from "@/hooks/useAIWriter";

type AIWriterContextType = ReturnType<typeof useAIWriter>;

const AIWriterContext =
  createContext<AIWriterContextType | null>(null);

interface AIWriterProviderProps {
  children: ReactNode;
}

export function AIWriterProvider({
  children,
}: AIWriterProviderProps) {
  const writer = useAIWriter();

  return (
    <AIWriterContext.Provider value={writer}>
      {children}
    </AIWriterContext.Provider>
  );
}

export function useAIWriterContext() {
  const context = useContext(AIWriterContext);

  if (!context) {
    throw new Error(
      "useAIWriterContext must be used inside AIWriterProvider."
    );
  }

  return context;
}