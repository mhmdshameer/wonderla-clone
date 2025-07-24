import CategorySidebar from '../components/CategorySidebar'
import FooterSlider from '../components/FooterSlider'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <CategorySidebar onSelect={(category) => console.log(category)}/>
        <FooterSlider/>
  </div>
  )
}

export default Home