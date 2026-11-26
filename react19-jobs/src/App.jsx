import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router';
import MainLayout from './layouts/MainLayout';
import ProductsPage from './pages/ProductsPage';
import AddProductPage from './pages/AddProductPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<ProductsPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="add-product" element={<AddProductPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;