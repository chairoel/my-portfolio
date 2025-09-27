import React from 'react';
import Section from './Section';
import Card from './Card';

export default function Blog(){
  return (
    <Section id="blog" title="Blog" subtitle="Writing & notes">
      <div className="grid gap-6 md:grid-cols-3">
        {[1,2,3].map(i => (
          <Card key={i} className="p-0 overflow-hidden">
            <img className="h-40 w-full object-cover" src={`https://picsum.photos/seed/blog-${i}/800/400`} />
            <div className="p-5">
              <h4 className="text-lg font-semibold">Post title {i}</h4>
              <p className="mt-2 text-sm text-white/70">A short intro to the article and why it matters.</p>
              <a href="#" className="mt-3 inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-white">Read more</a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
