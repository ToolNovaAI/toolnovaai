import {
  Bot,
  Search,
  Sparkles,
  MessageCircle,
  Share2,
  Code2,
  Type,
  Image,
  FileText,
} from "lucide-react";

export const workspaceIcons = {
  bot: Bot,
  search: Search,
  sparkles: Sparkles,
  "message-circle": MessageCircle,
  share2: Share2,
  code2: Code2,
  type: Type,
  image: Image,
  "file-text": FileText,
} as const;

export type WorkspaceIconKey = keyof typeof workspaceIcons;