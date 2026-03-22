import { FEATURES } from '../content';

export default function Features() {
  return (
    <section className="bg-[#080c14] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Everything you need to run freight.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#10172a] border border-[#1c2642] rounded-2xl p-8"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-white mt-4 mb-2 flex items-center gap-2">
                {feature.title}
                {feature.badge === 'PRO' && (
                  <span className="bg-[#06b6d4] text-black text-xs px-2 py-0.5 rounded-full">
                    PRO
                  </span>
                )}
              </h3>
              <p className="text-[#7c8fad]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
