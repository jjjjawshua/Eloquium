export const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
export const isValidUsername = (u: string) => /^[a-zA-Z0-9_]{3,30}$/.test(u);
export const isValidVlogDuration = (s: number) => s > 0 && s <= 60;
