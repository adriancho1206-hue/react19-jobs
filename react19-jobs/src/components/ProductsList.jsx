import { use } from 'react';
import ProductsCard from './ProductsCard';

const ProductsList = ({ productsPromise, isHome = false, selectedCategory = 'Todas' }) => {
  const products = use(productsPromise);

  const filtered =
    selectedCategory === 'Todas'
      ? products
      : products.filter((item) => item.category === selectedCategory);

  const itemsToShow = isHome ? filtered.slice(0, 3) : filtered;

  if (itemsToShow.length === 0) {
    return <p className="text-center text-gray-600 py-8">No hay productos en esta categoría.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {itemsToShow.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;