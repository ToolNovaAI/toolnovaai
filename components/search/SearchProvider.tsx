"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import SearchModal from "./SearchModal";

interface SearchContextValue {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export function useSearchModal() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(
      "useSearchModal must be used inside SearchProvider"
    );
  }

  return context;
}

interface SearchProviderProps {
  children: ReactNode;
}

export default function SearchProvider({
  children,
}: SearchProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Ctrl + K / Cmd + K
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        toggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [toggle]);

  const value = useMemo(
    () => ({
      open,
      close,
      toggle,
    }),
    [open, close, toggle]
  );

  return (
    <SearchContext.Provider value={value}>
      {children}

      <SearchModal
        open={isOpen}
        onClose={close}
      />
    </SearchContext.Provider>
  );
}