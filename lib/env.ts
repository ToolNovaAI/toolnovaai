export const env = {
  OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY!,
  OPENROUTER_MODEL:
    process.env.OPENROUTER_MODEL ??
    "deepseek/deepseek-chat-v3-0324:free",
  OPENROUTER_BASE_URL:
    process.env.OPENROUTER_BASE_URL ??
    "https://openrouter.ai/api/v1",
  NEXT_PUBLIC_APP_URL:
    process.env.NEXT_PUBLIC_APP_URL ??
    "http://localhost:3005",
};

if (!env.OPENROUTER_API_KEY) {
  throw new Error("Missing OPENROUTER_API_KEY");
}