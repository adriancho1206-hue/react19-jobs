import { Suspense, useState } from 'react';
import ProductsList from '../components/ProductsList';

const fetchProducts = () =>
  fetch('http://localhost:5000/Products').then((res) => {
    if (!res.ok) throw new Error('Error al cargar los productos');
    return res.json();
  });


const productsPromise = fetchProducts();

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  return (
    <section className="bg-blue-50 px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Catálogo de Productos</h1>

          {/* Selector opcional para filtrar por categoría */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 bg-white text-gray-700"
          >
            <option value="Todas">Todas</option>
            <option value="Electrónica">Electrónica</option>
          </select>
        </div>

        <Suspense fallback={<p className="text-center py-10 text-gray-600">Cargando catálogo...</p>}>
          <ProductsList
            productsPromise={productsPromise}
            isHome={false}
            selectedCategory={selectedCategory}
          />
        </Suspense>
      </div>
    </section>
  );
};

export default ProductsPage;