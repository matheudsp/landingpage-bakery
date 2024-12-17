
import { kits, WHATSAPP_BASE_URL, WHATSAPP_NUMBER } from '../data/constants';
import type { Kit } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const KitCard = ({ kit }: { kit: Kit }) => {
  const [ref, isVisible] = useScrollAnimation({ direction: 'up', delay: 200 });

  return (
    <section ref={ref} className={`bg-yellow-50 rounded-lg overflow-hidden shadow-lg ${isVisible}`}>
      <img src={kit.image} alt={kit.title} className="w-full h-48 object-cover" />
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{kit.title}</h3>
        <p className="text-gray-600 mb-4 text-sm md:text-base">{kit.description}</p>
        <p className="text-yellow-600 font-bold text-sm md:text-base">{kit.price}</p>
        <a
          href={`${WHATSAPP_BASE_URL}/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20kits`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-yellow-400 text-black px-4 md:px-6 py-2 rounded-full hover:bg-yellow-500 transition text-sm md:text-base"
        >
          Encomendar
        </a>
      </div>
    </section>
  )
}

export const Kits = () => {
  return (
    <section id="kits" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Kits exclusivos </h2>
        <p className='text-base md:text-lg font-semibold text-center mb-8 md:mb-12'>A combinação perfeita para sua ocasião</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {kits.map((kit) => (
            <KitCard key={kit.title} kit={kit} />
          ))}
        </div>
      </div>
    </section>
  );
};