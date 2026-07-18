export interface AIWriterRequest {
  prompt: string;
  content?: string;
  tone?: string;
  language?: string;
  length?: string;
}

export interface AIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AIResponse {
  success: boolean;
  text?: string;
  error?: string;
}