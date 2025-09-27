import React from 'react';
import Section from './Section';
import Card from './Card';

export default function Testimonials(){
  return (
    <Section id="testimonials" title="Testimonials" subtitle="What people say">
      <div className="grid gap-6 md:grid-cols-2">
        {[1,2,3,4].map(i => (
          <Card key={i}>
            <p className="text-white/80">“Chairul built a rock‑solid mobile + hardware stack for our buses.”</p>
            <div className="mt-4 flex items-center gap-3">
              <img className="size-10 rounded-full object-cover" src={`https://i.pravatar.cc/100?img=${i}`} />
              <div>
                <div className="font-medium">Happy Partner</div>
                <div className="text-xs text-white/60">Company • Role</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
