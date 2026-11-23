import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router'
import HomePages from './pages/HomePages';
import MainLayout from './layouts/MainLayout'
import jobsPage from './pages/jobsPage'
import NotFoundPage from './pages/NotFoundPage';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path= "/" element={<MainLayout/>} >
    <Route index element={ <HomePages/> }/>
    <Route path= "jobs" element= {<jobsPage/>}/>
    <Route path= "*" element= { <NotFoundPage/> }/>
  </Route>
  
)
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
