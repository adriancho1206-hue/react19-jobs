import Hero from "../components/Hero"
import ProductsCard from "../components/ProductsCard"
import ProductsList from "../components/ProductsList"
import ViewAllJobs from "../components/ViewAllJobs"
const HomePages = () => {
  return (
   <>
    <Hero/>
    <HomeCards/>
    <ProductsList isHome={true}/>
    <ViewAllJobs/>
</>
  )
}

export default HomePages
