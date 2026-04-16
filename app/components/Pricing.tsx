'use client';

import { useState } from 'react';
import { PRICING, SITE } from '../content';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const proPrice = isAnnual ? PRICING.pro.annual : PRICING.pro.monthly;

  return (
    <section className="bg-[#10172a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple pricing. No surprises.
        </h2>
        <p className="text-center text-[#7c8fad] mb-10">
          Your 3PLs and partners always join free.
        </p>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#080c14] border border-[#1c2642] rounded-full p-1 flex">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                !isAnnual
                  ? 'bg-[#6366f1] text-white'
                  : 'text-[#7c8fad] hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                isAnnual
                  ? 'bg-[#6366f1] text-white'
                  : 'text-[#7c8fad] hover:text-white'
              }`}
            >
              Annual <span className="text-xs">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Single Pro Plan */}
        <div className="max-w-md mx-auto">
          <div className="bg-[#080c14] border-2 border-[#6366f1] rounded-2xl p-8 relative">
            <h3 className="text-2xl font-bold text-white mb-4">{PRICING.pro.name}</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">${proPrice}</span>
              <span className="text-[#7c8fad] text-lg">/mo</span>
              {isAnnual && (
                <p className="text-[#7c8fad] text-sm mt-2">
                  Billed ${PRICING.pro.annualTotal} annually
                </p>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {PRICING.pro.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={SITE.ctaUrl}
              className="block w-full text-center bg-[#6366f1] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4f46e5] transition-colors"
            >
              Start 14-day free trial
            </a>
          </div>
        </div>

        <p className="text-center text-[#7c8fad] text-sm mt-10">
          14-day free trial · Your 3PLs join free · Cancel anytime
        </p>
      </div>
    </section>
  );
}
