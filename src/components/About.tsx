
import { Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
  const [ref, isVisible] = useScrollAnimation({ direction: 'fade', delay: 400 });
  return (
    <section ref={ref} id="about" className={`py-12 md:py-16 bg-white ${isVisible}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold "> Nossa História</h2>
            <p className='text-base md:text-lg font-semibold mb-4'>Paixão em cada detalhe desde 2010</p>
            <p className="text-gray-600 mb-6">
              Desde 2010, a Sweet Delights tem se dedicado a criar momentos doces e especiais para nossos clientes. 
              Nossa padaria artesanal combina técnicas tradicionais com inovação, usando apenas ingredientes 
              selecionados de alta qualidade.
            </p>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span>Segunda a Sexta: 7h às 20h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span>Sábados: 7h às 18h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span>Domingos: 7h às 12h</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1556217477-d325251ece38?auto=format&fit=crop&q=80"
              alt="Nossa padaria"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};