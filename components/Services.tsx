import React from 'react';
import Section from './Section';
import Card from './Card';

export default function Services(){
  const items = [
    { title: 'Mobile Development', desc: 'Android/React‑Native apps with native modules and reliability.' },
    { title: 'Hardware Integration', desc: 'USB ↔ RS‑485 comms, LED display protocols, diagnostics.' },
    { title: 'DevOps & Tooling', desc: 'Release flows, CodePush, CI/CD, performance profiling.' }
  ];
  return (
    <Section id="services" title="Services" subtitle="What I can help you with">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map(s => (
          <Card key={s.title}><h4 className="text-lg font-semibold">{s.title}</h4><p className="mt-2 text-white/70">{s.desc}</p></Card>
        ))}
      </div>
    </Section>
  );
}
