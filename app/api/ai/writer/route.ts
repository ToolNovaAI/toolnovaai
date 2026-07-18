import { NextRequest, NextResponse } from "next/server";

import { buildWriterPrompt, generateAIText } from "@/lib/ai";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      prompt,
      content = "",
      tone = "Professional",
      language = "English",
      length = "Medium",
    } = body;

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "Prompt is required.",
        },
        {
          status: 400,
        }
      );
    }

    const userPrompt = buildWriterPrompt({
      prompt,
      content,
      tone,
      language,
      length,
    });

    const result = await generateAIText({
      systemPrompt:
        "You are ToolNovaAI, a professional AI writing assistant that creates high-quality, SEO-friendly, original content.",
      userPrompt,
      temperature: 0.7,
      maxTokens: 1200,
    });

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        text: result.text,
      },
    });
  } catch (error) {
    console.error("AI Writer API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}