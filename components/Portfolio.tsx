import React from 'react';
import Section from './Section';
import Card from './Card';

export default function Portfolio(){
  return (
    <Section id="portfolio" title="Selected Work" subtitle="A few projects I’m proud of">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3,4,5,6].map(i => (
          <Card key={i} className="p-0 overflow-hidden">
            <img alt={`Project ${i}`} className="h-44 w-full object-cover" src={`https://picsum.photos/seed/obu-${i}/800/400`} />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">Project {i}</h4>
                <a href="#" className="inline-flex items-center gap-1 text-sm text-indigo-300 hover:text-white">View</a>
              </div>
              <p className="mt-1 text-sm text-white/70">Short description of the project and its impact.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["React‑Native","Android","USB"].map(t => <span key={t} className="text-xs text-white/70">#{t}</span>)}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
