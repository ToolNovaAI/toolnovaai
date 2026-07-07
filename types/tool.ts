export interface ToolStat {
  label: string;
  value: string | number;
}

export interface ToolAction {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
}