import { NavLink } from 'react-router'

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white bg-black hover:bg-green-900 rounded-md px-3 py-2 text-sm font-medium'
      : 'text-white hover:bg-green-900 rounded-md px-3 py-2 text-sm font-medium'
  return (
    <nav
  style={{ background: 'linear-gradient(to right, rgb(4, 120, 87), #16a34a, #0d9488)' }}
  className="text-white border-b border-emerald-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="text-white text-xl font-bold">
            Catálogo Productos
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