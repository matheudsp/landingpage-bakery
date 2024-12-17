import { WHATSAPP_BASE_URL, WHATSAPP_NUMBER } from '../data/constants';

export const Hero = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80"
          alt="Bakery showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Sabores que Encantam
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
          Deliciosos produtos artesanais feitos com amor e os melhores ingredientes
        </p>
        <a
          href={`${WHATSAPP_BASE_URL}/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20fazer%20uma%20encomenda`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-500 transition"
        >
          Fazer Encomenda
        </a>
      </div>
    </div>
  );
};