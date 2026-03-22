import { SITE } from '../content';

export default function Hero() {
  return (
    <section className="bg-[#080c14] py-32 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-block border border-[#1c2642] text-[#7c8fad] rounded-full text-sm px-4 py-1 mb-6">
          14-day free trial · No charge before day 14
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Your freight.<br />Fully under control.
        </h1>
        
        <p className="text-lg text-[#7c8fad] max-w-2xl mx-auto mb-10">
          {SITE.subTagline}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <a 
            href={SITE.ctaUrl}
            className="bg-[#06b6d4] text-black px-8 py-3 rounded-full font-bold hover:bg-[#0891b2] transition-colors"
          >
            Start free trial →
          </a>
          <a 
            href="#how-it-works"
            className="border border-[#1c2642] text-white px-8 py-3 rounded-full hover:bg-[#1c2642] transition-colors"
          >
            See how it works
          </a>
        </div>
        
        <p className="text-sm text-[#7c8fad] mt-6">
          Starting at $79/mo · Your 3PLs join free
        </p>
      </div>
    </section>
  );
}
