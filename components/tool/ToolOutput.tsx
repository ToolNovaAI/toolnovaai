interface ToolOutputProps {
  title?: string;
  value: string;
  placeholder?: string;
  children?: React.ReactNode;
}

export default function ToolOutput({
  title = "Output",
  value,
  placeholder = "Your result will appear here...",
  children,
}: ToolOutputProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4">
        <h2 className="text-lg font-semibold text-white">
          {title}
        </h2>
      </div>

      {/* Output */}
      <div className="p-6">
        <textarea
          readOnly
          value={value}
          placeholder={placeholder}
          className="
            min-h-[260px]
            w-full
            resize-none
            rounded-2xl
            border
            border-white/10
            bg-black/20
            p-4
            font-mono
            text-sm
            leading-7
            text-zinc-200
            outline-none
          "
        />

        {children && (
          <div className="mt-6">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}