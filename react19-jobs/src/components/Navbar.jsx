import { NavLink } from 'react-router';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white bg-black hover:bg-gray-900 rounded-md px-3 py-2 text-sm font-medium'
      : 'text-white hover:bg-gray-900 rounded-md px-3 py-2 text-sm font-medium';

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="text-white text-xl font-bold">
            Catálogo Varios
          </NavLink>

          <div className="flex space-x-2">
            <NavLink to="/" className={linkClass}>
              Inicio
            </NavLink>
            <NavLink to="/products" className={linkClass}>
              Productos
            </NavLink>
            <NavLink to="/add-product" className={linkClass}>
              Agregar
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;