import React from 'react';
import Section from './Section';
import Card from './Card';

export default function Resume(){
  return (
    <Section id="resume" title="Resume" subtitle="Experience & Education">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h4 className="text-lg font-semibold">Experience</h4>
          <ol className="mt-4 space-y-4">
            <li>
              <div className="font-medium">Mobile Engineer – Transit Systems</div>
              <div className="text-xs text-white/60">2018 — Present</div>
              <p className="mt-2 text-white/70">Leading OBU app development, USB integrations, and real‑time telemetry.</p>
            </li>
            <li>
              <div className="font-medium">Android Developer – Various</div>
              <div className="text-xs text-white/60">2015 — 2018</div>
              <p className="mt-2 text-white/70">Shipped multiple apps with native modules and offline‑first data.</p>
            </li>
          </ol>
        </Card>
        <Card>
          <h4 className="text-lg font-semibold">Education</h4>
          <ol className="mt-4 space-y-4">
            <li>
              <div className="font-medium">B.Sc. in Computer Science</div>
              <div className="text-xs text-white/60">2011 — 2015</div>
              <p className="mt-2 text-white/70">Focus on systems programming and embedded integrations.</p>
            </li>
          </ol>
        </Card>
      </div>
    </Section>
  );
}
