import Link from "next/link";

const footerLinks = [
  { href: "#", label: "About" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Help" },
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
];

export default function Footer(): React.ReactNode {
  return (
    <footer className="border-t border-brand-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ftBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2D6A4F"/><stop offset="100%" stopColor="#1B4332"/></linearGradient>
              <linearGradient id="ftLeaf" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FFFFFF"/><stop offset="100%" stopColor="#E2E8D9"/></linearGradient>
              <linearGradient id="ftGold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#D4A017"/><stop offset="100%" stopColor="#E8B92F"/></linearGradient>
            </defs>
            <rect width="200" height="200" rx="40" fill="url(#ftBg)"/>
            <g transform="translate(100, 25)">
              <path d="M 0 150 C 0 150, -30 90, -20 50 C -10 10, 20 -5, 30 0 C 40 5, 35 25, 25 45 C 15 65, 5 70, 0 75 C 5 65, 15 45, 22 30 C 18 45, 8 65, 0 80" fill="url(#ftLeaf)" opacity="0.95"/>
              <path d="M 0 150 C 0 150, 30 90, 20 50 C 10 10, -20 -5, -30 0 C -40 5, -35 25, -25 45 C -15 65, -5 70, 0 75 C -5 65, -15 45, -22 30 C -18 45, -8 65, 0 80" fill="url(#ftLeaf)" opacity="0.75"/>
              <line x1="0" y1="0" x2="0" y2="145" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="0" cy="155" r="6" fill="url(#ftGold)"/>
            </g>
          </svg>
          <span className="text-sm font-serif font-bold">Eloquium</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-brand-muted hover:text-brand-dark transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <span className="text-sm text-brand-muted">&copy; 2026 Eloquium</span>
      </div>
    </footer>
  );
}
