import { useState } from 'react';
import { Link } from 'react-router';
import { FaTag, FaBoxOpen } from 'react-icons/fa';
import Card from './Card';

const ProductsCard = ({ product }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const description = showFullDesc
    ? product.description
    : `${product.description.substring(0, 85)}...`;

  return (
    <Card>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
        <span className="inline-flex items-center gap-1 font-medium text-indigo-600">
          <FaTag />
          {product.category}
        </span>
        <span className="inline-flex items-center gap-1">
          <FaBoxOpen />
          Stock: {product.stock}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>

      <p className="text-gray-600 mb-2">{description}</p>

      <button
        type="button"
        onClick={() => setShowFullDesc((prev) => !prev)}
        className="text-indigo-500 hover:text-indigo-700 text-sm mb-4"
      >
        {showFullDesc ? 'Ver menos' : 'Ver más'}
      </button>

      <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
        <span className="text-lg font-extrabold text-gray-900">
          ${Number(product.price).toFixed(2)}
        </span>

        <Link
          to={`/products/${product.id}`}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg"
        >
          Detalle
        </Link>
      </div>
    </Card>
  );
};

export default ProductsCard;