import CategorySidebar from '../components/CategorySidebar'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <CategorySidebar onSelect={(category) => console.log(category)}/>
  </div>
  )
}

export default Home