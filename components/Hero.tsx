"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0f1221] to-[#0f1221]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.06]" />
      <div className="container relative grid grid-cols-1 items-center gap-10 py-24 md:grid-cols-2">
        <motion.div {...fadeUp}>
          <Pill>React‑Native • Android • IoT</Pill>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
            Hi, I’m Chairul—
            <span className="bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
              {" "}
              Mobile & Hardware Integrator
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            Building Transjakarta’s OBU apps, RS‑485 USB integrations, and
            robust real‑time systems.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-[#0f1221] shadow hover:shadow-lg"
            >
              View Work <ExternalLink className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-medium hover:bg-white/5"
            >
              Contact
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-white/70">
            <a
              href="https://github.com/chairoel"
              target="_blank"
              className="hover:text-white inline-flex items-center gap-2"
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              href="#"
              className="hover:text-white inline-flex items-center gap-2"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-white inline-flex items-center gap-2"
            >
              <Twitter className="size-4" />
              Twitter/X
            </a>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="order-first md:order-none">
          <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl md:w-80">
            <Image
              src="https://avatars.githubusercontent.com/chairoel?size=400"
              alt="Portrait"
              width={320}
              height={320}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-white/80">
            <div className="surface p-4">
              <div className="text-2xl font-bold">8+ yrs</div>
              <div className="text-xs">Experience</div>
            </div>
            <div className="surface p-4">
              <div className="text-2xl font-bold">30+</div>
              <div className="text-xs">Projects</div>
            </div>
            <div className="surface p-4">
              <div className="text-2xl font-bold">Realtime</div>
              <div className="text-xs">IoT / MQTT</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
