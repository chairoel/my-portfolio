import React from 'react';

export default function Footer(){
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-white/60">© {new Date().getFullYear()} Chairul. All rights reserved.</div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="https://github.com/chairoel" target="_blank" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Twitter/X</a>
        </div>
      </div>
    </footer>
  );
}
