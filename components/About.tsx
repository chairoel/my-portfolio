import React from "react";
import Section from "./Section";
import Card from "./Card";

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Engineer focused on reliable bus‑side integrations"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-xl font-semibold">Who am I?</h3>
          <p className="mt-3 text-white/70">
            Android & React‑Native developer specialized in USB ↔ RS‑485, LED
            running text, and telemetry.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Android",
              "React‑Native",
              "Kotlin",
              "JNI",
              "CMake",
              "MQTT",
              "SQLite",
            ].map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold">Quick Facts</h3>
          <ul className="mt-3 list-inside list-disc text-white/70">
            <li>Built OBU 3.0 apps deployed across 200+ buses.</li>
            <li>
              Vendor/Device ID mapping for CH34x, CP210x, PL2303, FTDI, CDC.
            </li>
            <li>Async permission & reconnection strategies for stable USB.</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
