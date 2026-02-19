export const colors = {
  bg: "#FAFDF7",
  card: "#FFFFFF",
  accent: "#2D6A4F",
  accentLight: "#40916C",
  accentDark: "#1B4332",
  dark: "#1B1B1B",
  text: "#2D2D2D",
  muted: "#6B7280",
  light: "#F0F5EC",
  border: "#E2E8D9",
  yellow: "#FEF9E7",
  yellowDark: "#D4A017",
  yellowBorder: "#F5E6A3",
  white: "#FFFFFF",
  error: "#DC2626",
  success: "#16A34A",
  warning: "#F59E0B",
} as const;

export const typography = {
  serif: "Georgia, 'Times New Roman', serif",
  sans: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', monospace",
} as const;

export const spacing = {
  0: 0, 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 10: 40, 12: 48, 16: 64, 20: 80,
} as const;

export const radius = {
  sm: 8, md: 12, lg: 16, xl: 20, "2xl": 24, full: 9999,
} as const;

export const shadows = {
  sm: "0 1px 2px rgba(0,0,0,0.05)",
  md: "0 4px 12px rgba(0,0,0,0.08)",
  lg: "0 8px 24px rgba(0,0,0,0.12)",
  accent: "0 4px 20px rgba(45,106,79,0.25)",
} as const;
