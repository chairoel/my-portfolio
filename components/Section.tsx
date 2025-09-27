import React from "react";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h2>
          {subtitle && <p className="mt-2 text-white/60">{subtitle}</p>}
          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500" />
        </div>
        {children}
      </div>
    </section>
  );
}
