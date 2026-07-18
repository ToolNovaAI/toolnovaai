export interface GenerateContentRequest {
  prompt: string;
  content?: string;
  tone?: string;
  language?: string;
  length?: string;
}

export interface GenerateContentResponse {
  success: boolean;
  data?: {
    text: string;
  };
  error?: string;
}

export async function generateContent(
  payload: GenerateContentRequest
): Promise<string> {
  const response = await fetch("/api/ai/writer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result: GenerateContentResponse =
    await response.json();

  if (!response.ok || !result.success) {
    throw new Error(
      result.error ?? "Failed to generate content."
    );
  }

  return result.data?.text ?? "";
}