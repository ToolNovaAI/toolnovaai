export function buildWriterPrompt({
  prompt,
  content = "",
  tone = "Professional",
  language = "English",
  length = "Medium",
}: {
  prompt: string;
  content?: string;
  tone?: string;
  language?: string;
  length?: string;
}) {
  return `
You are a professional AI writing assistant.

Language: ${language}
Tone: ${tone}
Length: ${length}

User Request:
${prompt}

Existing Content:
${content}

Generate high-quality content.
`.trim();
}