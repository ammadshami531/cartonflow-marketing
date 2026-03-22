import { COMPARISON } from '../content';

export default function Comparison() {
  return (
    <section className="bg-[#080c14] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How CartonFlow stacks up.
        </h2>
        
        <div className="overflow-hidden rounded-2xl border border-[#1c2642]">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0c1a2e]">
                <th className="text-left py-4 px-6 text-white">Feature</th>
                <th className="text-left py-4 px-6 text-[#06b6d4] font-bold">CartonFlow</th>
                <th className="text-left py-4 px-6 text-white">Flexport</th>
                <th className="text-left py-4 px-6 text-white">ShipStation</th>
                <th className="text-left py-4 px-6 text-white">Spreadsheets</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, index) => (
                <tr 
                  key={index}
                  className={index % 2 === 0 ? 'bg-[#10172a]' : 'bg-[#080c14]'}
                >
                  <td className="py-4 px-6 text-[#7c8fad]">{row.feature}</td>
                  <td className="py-4 px-6 text-white font-medium">{row.cartonflow}</td>
                  <td className="py-4 px-6 text-[#7c8fad]">{row.flexport}</td>
                  <td className="py-4 px-6 text-[#7c8fad]">{row.shipstation}</td>
                  <td className="py-4 px-6 text-[#7c8fad]">{row.spreadsheets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
