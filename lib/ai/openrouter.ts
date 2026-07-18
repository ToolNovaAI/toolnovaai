import { env } from "@/lib/env";
import { AIResponse } from "./types";

interface OpenRouterMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface GenerateOptions {
  systemPrompt?: string;
  userPrompt: string;
  temperature?: number;
  maxTokens?: number;
}

export async function generateAIText({
  systemPrompt = "You are a helpful AI assistant.",
  userPrompt,
  temperature = 0.7,
  maxTokens = 1200,
}: GenerateOptions): Promise<AIResponse> {
  try {
    const messages: OpenRouterMessage[] = [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: userPrompt,
      },
    ];

    const response = await fetch(
      `${env.OPENROUTER_BASE_URL}/chat/completions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3005",
          "X-Title": "ToolNovaAI",
        },
        body: JSON.stringify({
          model: env.OPENROUTER_MODEL,
          messages,
          temperature,
          max_tokens: maxTokens,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();

      return {
        success: false,
        error,
      };
    }

    const data = await response.json();

    return {
      success: true,
      text: data.choices?.[0]?.message?.content ?? "",
    };
  } catch (error) {
    console.error("OpenRouter Error:", error);

    return {
      success: false,
      error: "Failed to generate AI response.",
    };
  }
}