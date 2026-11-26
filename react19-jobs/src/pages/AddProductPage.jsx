import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useNavigate } from 'react-router';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold py-2 px-4 rounded-lg"
    >
      {pending ? 'Guardando...' : 'Guardar Producto'}
    </button>
  );
};

const AddProductPage = () => {
  const navigate = useNavigate();

  const createProductAction = async (_prevState, formData) => {
    const newProduct = {
      name: formData.get('name')?.trim(),
      category: formData.get('category'),
      price: Number(formData.get('price')),
      stock: Number(formData.get('stock')),
      description: formData.get('description')?.trim(),
    };

    if (!newProduct.name || newProduct.price <= 0) {
      return { error: 'Ingresa un nombre válido y un precio mayor a 0.' };
    }

    const res = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });

    if (!res.ok) {
      return { error: 'No se pudo guardar el producto en el servidor.' };
    }

    navigate('/products');
    return { error: null };
  };

  const [state, formAction] = useActionState(createProductAction, { error: null });

  return (
    <section className="bg-blue-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Agregar Producto</h1>

        {state.error && (
          <p className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm">{state.error}</p>
        )}

        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
              name="name"
              type="text"
              required
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Ej. Lámpara de escritorio LED"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
              <select name="category" defaultValue="Electrónica" className="w-full border rounded-lg px-3 py-2">
                <option value="Electrónica">Electrónica</option>
                <option value="Hogar">Hogar</option>
                <option value="Accesorios">Accesorios</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Precio (USD)</label>
              <input name="price" type="number" step="0.01" required className="w-full border rounded-lg px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
              <input name="stock" type="number" defaultValue="10" required className="w-full border rounded-lg px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea
              name="description"
              rows="4"
              required
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Características principales del producto..."
            />
          </div>

          <SubmitButton />
        </form>
      </div>
    </section>
  );
};

export default AddProductPage;