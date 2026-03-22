import { TESTIMONIALS } from '../content';

export default function Testimonials() {
  return (
    <section className="bg-[#10172a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          The tool that replaced 100 emails a week.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#080c14] border border-[#1c2642] rounded-2xl p-8"
            >
              <div className="text-[#f59e0b] mb-4">★★★★★</div>
              <p className="text-white mb-6">"{testimonial.quote}"</p>
              {testimonial.badge && (
                <div className="bg-[#0c1a2e] text-[#06b6d4] border border-[#06b6d4] text-sm px-3 py-1 rounded-full inline-block mb-4">
                  {testimonial.badge}
                </div>
              )}
              {testimonial.name && (
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-[#7c8fad] text-sm">{testimonial.role}</p>
                </div>
              )}
              {!testimonial.name && (
                <p className="text-[#7c8fad] text-sm">{testimonial.role}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
