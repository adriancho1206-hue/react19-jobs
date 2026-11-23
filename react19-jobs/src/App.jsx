import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router'
const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={ <h1>My App</h1> }/>)
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
