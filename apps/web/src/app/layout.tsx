import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Openly — A calmer space for creators",
  description: "Blog, vlog, and discuss. Own your audience. Get paid fairly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-brand-bg text-brand-dark font-sans antialiased">{children}</body>
    </html>
  );
}
