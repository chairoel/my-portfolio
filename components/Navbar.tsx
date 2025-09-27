'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0f1221]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0f1221]/60">
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="font-bold">CHAIRUL.</a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          {[
            ['Home','#home'],['About','#about'],['Services','#services'],['Portfolio','#portfolio'],
            ['Resume','#resume'],['Testimonials','#testimonials'],['Blog','#blog'],['Contact','#contact']
          ].map(([label,href]) => (
            <a key={label} href={href} className="hover:text-white">{label}</a>
          ))}
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-indigo-600/80 px-4 py-2 text-sm font-medium hover:bg-indigo-600">
          Hire Me <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
