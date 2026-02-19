"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/discussions", label: "Discussions" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar(): React.ReactNode {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="32" height="32" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="navBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2D6A4F"/><stop offset="100%" stopColor="#1B4332"/></linearGradient>
              <linearGradient id="navLeaf" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FFFFFF"/><stop offset="100%" stopColor="#E2E8D9"/></linearGradient>
              <linearGradient id="navGold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#D4A017"/><stop offset="100%" stopColor="#E8B92F"/></linearGradient>
            </defs>
            <rect width="200" height="200" rx="40" fill="url(#navBg)"/>
            <g transform="translate(100, 25)">
              <path d="M 0 150 C 0 150, -30 90, -20 50 C -10 10, 20 -5, 30 0 C 40 5, 35 25, 25 45 C 15 65, 5 70, 0 75 C 5 65, 15 45, 22 30 C 18 45, 8 65, 0 80" fill="url(#navLeaf)" opacity="0.95"/>
              <path d="M 0 150 C 0 150, 30 90, 20 50 C 10 10, -20 -5, -30 0 C -40 5, -35 25, -25 45 C -15 65, -5 70, 0 75 C -5 65, -15 45, -22 30 C -18 45, -8 65, 0 80" fill="url(#navLeaf)" opacity="0.75"/>
              <line x1="0" y1="0" x2="0" y2="145" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="0" cy="155" r="6" fill="url(#navGold)"/>
            </g>
          </svg>
          <span className="text-xl font-extrabold font-serif tracking-tight">Eloquium</span>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm rounded-lg transition ${
                  isActive
                    ? "bg-brand-light text-brand-accent font-semibold"
                    : "text-brand-muted hover:text-brand-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center relative">
            <svg className="absolute left-3 text-brand-muted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 text-sm bg-brand-light rounded-full border-none outline-none focus:ring-2 focus:ring-brand-accent/20 w-44"
            />
          </div>
          <Link
            href="/creator"
            className="px-5 py-2 bg-brand-accent text-white text-sm font-semibold rounded-full hover:bg-brand-accent-light transition"
          >
            Start Writing
          </Link>
          <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-white text-xs font-bold">
            U
          </div>
        </div>
      </div>
    </nav>
  );
}
