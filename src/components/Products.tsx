import { products } from '../data/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Product } from '../types';

const ProductCard = ({ product }: { product: Product }) => {
  const [ref, isVisible] = useScrollAnimation({ direction: 'up', delay: 200 });

  return (
    <section ref={ref} className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition ${isVisible}`}>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm md:text-base">{product.description}</p>
      </div>
    </section>
  )
};

export const Products = () => {


  return (
    <section  id="products" className="py-12 md:py-16 bg-yellow-50">
      <div className={`max-w-7xl mx-auto px-4 md:px-6`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center">Delícias que conquistam</h2>
        <p className='text-base md:text-lg font-semibold text-center mb-8 md:mb-12'>Nossos produtos mais amados</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};