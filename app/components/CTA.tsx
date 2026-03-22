import { SITE } from '../content';

export default function CTA() {
  return (
    <section className="py-24 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10172a] border border-[#1c2642] rounded-3xl p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Stop chasing updates.<br />Start shipping with clarity.
          </h2>
          <p className="text-[#7c8fad] mb-10">
            14-day free trial · Card required at signup · Your 3PLs join for free
          </p>
          <a 
            href={SITE.ctaUrl}
            className="inline-block bg-[#06b6d4] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0891b2] transition-colors"
          >
            Start your free trial →
          </a>
        </div>
      </div>
    </section>
  );
}
