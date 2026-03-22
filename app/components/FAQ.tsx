'use client';

import { useState } from 'react';
import { FAQ } from '../content';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#080c14] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Questions answered.
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-0">
          {FAQ.map((item, index) => (
            <div 
              key={index}
              className="border-b border-[#1c2642] py-5 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold">{item.q}</h3>
                <span className="text-[#7c8fad] ml-4">
                  {openIndex === index ? '▲' : '▼'}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-[#7c8fad] mt-3">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
