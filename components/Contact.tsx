'use client';
import React, { useState } from 'react';
import Section from './Section';
import Card from './Card';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact(){
  const [status,setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch('/api/contact', { method:'POST', body: JSON.stringify(data) });
    setStatus(res.ok ? 'sent' : 'error');
  }

  return (
    <Section id="contact" title="Contact" subtitle="Let’s build something reliable">
      <div className="grid gap-6 md:grid-cols-5">
        <div className="md:col-span-2 space-y-4">
          <Card>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 size-5"/>
              <div>
                <div className="font-medium">Email</div>
                <a className="text-white/70 hover:text-white" href="mailto:chairul@example.com">chairul@example.com</a>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <Phone className="mt-1 size-5"/>
              <div>
                <div className="font-medium">Phone</div>
                <a className="text-white/70 hover:text-white" href="tel:+628123456789">+62 812‑3456‑789</a>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 size-5"/>
              <div>
                <div className="font-medium">Location</div>
                <div className="text-white/70">Jakarta, Indonesia</div>
              </div>
            </div>
          </Card>
        </div>
        <Card className="md:col-span-3">
          <form className="grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-2 md:grid-cols-2">
              <input name="name" placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40" />
              <input name="email" placeholder="Your email" type="email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40" />
            </div>
            <input name="subject" placeholder="Subject" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40" />
            <textarea name="message" placeholder="Your message" rows={5} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40" />
            <button disabled={status=='sending'} type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-[#0f1221] hover:shadow disabled:opacity-60">
              {status=='sending' ? 'Sending…' : status=='sent' ? 'Sent ✓' : 'Send Message'} <ArrowRight className="size-4" />
            </button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
