import { HOW_IT_WORKS } from '../content';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#10172a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Up and running in no time.
        </h2>
        <p className="text-center text-[#7c8fad] mb-16">
          Invite your 3PLs once — they handle the rest. You get real-time visibility without chasing anyone.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((item, index) => (
            <div 
              key={index}
              className="bg-[#080c14] border border-[#1c2642] rounded-2xl p-8"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-white mb-2">{item.step}</h3>
              <p className="text-[#7c8fad]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
