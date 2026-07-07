"use client";

import ToolActions from "../ToolActions";

interface WordCounterInputProps {
  text: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export default function WordCounterInput({
  text,
  onChange,
  onClear,
}: WordCounterInputProps) {
  async function handleCopy() {
    if (!text.trim()) return;

    await navigator.clipboard.writeText(text);
  }

  return (
    <div className="space-y-6">
      <textarea
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Start typing or paste your text here..."
        className="
          min-h-[320px]
          w-full
          resize-y
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          text-base
          leading-7
          text-white
          placeholder:text-zinc-500
          backdrop-blur-xl
          outline-none
          transition-all
          duration-300
          focus:border-cyan-500/40
          focus:ring-2
          focus:ring-cyan-500/20
        "
      />

      <ToolActions
        actions={[
          {
            label: "Copy",
            onClick: handleCopy,
            disabled: text.length === 0,
          },
          {
            label: "Clear",
            onClick: onClear,
            variant: "danger",
            disabled: text.length === 0,
          },
        ]}
      />
    </div>
  );
}