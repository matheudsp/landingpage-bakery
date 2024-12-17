
import { Locate, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <section aria-labelledby="contact-heading" className="mb-8" id="contact">
          <h2 id="contact-heading" className="text-2xl font-bold text-black mb-6">
            Localização
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Locate className="w-5 h-5 text-black" />
                <span className="text-black font-semibold">Como chegar</span>
              </div>
              <div className='flex items-center justify-center'>
                <iframe className='w-full h-full rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1665.832127771118!2d-43.02770764834325!3d-6.765119234061433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7837d36c565878d%3A0xb8bdcba0766a4f5d!2sBolo%20%26%20cia!5e0!3m2!1spt-BR!2sbr!4v1734105139414!5m2!1spt-BR!2sbr" loading="lazy" >
                </iframe>
              </div>

            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-black" />
                <span className="text-black font-semibold">Endereço</span>
              </div>
              <address className="text-black not-italic">
                Rua das Delícias, 123<br />
                Bairro Doce<br />
                São Paulo - SP
              </address>
              <div>

              </div>
            </div>

          </div>
        </section>

      </div>
    </footer>
  );
};