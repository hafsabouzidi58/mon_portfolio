'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ cvUrl }: { cvUrl?: string }) {
  const [active, setActive] = useState('#home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Expériences', href: '#experiences' },
    { name: 'Projets', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="#home" className="text-xl font-black tracking-wider text-white flex items-center gap-2">
          <span className="text-[#f43f5e]">◆</span> HAFSA BOUZIDI
        </Link>

        {/* LIENS DE NAVIGATION */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`hover:text-white transition-colors ${
                active === link.href ? 'text-[#f43f5e] font-semibold' : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* BOUTON ACTION */}
        {cvUrl && (
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#f43f5e] text-white text-xs font-bold rounded-full hover:bg-[#e11d48] hover:shadow-[0_0_20px_rgba(244,63,94,0.5)] transition-all duration-300"
          >
            Download CV
          </a>
        )}
      </div>
    </nav>
  );
}