import Navbar from './components/Navbar/Navbar'
import './App.css'
import Header from './components/Navbar/Header/Header'
import AboutUs from './components/AboutUs/AboutUs'
import SpecialMenu from './components/SpecialMenu/SpecialMenu'
import Chef from './components/Chef/Chef'
import Intro from './container/Intro/Intro'
import Laurels from './container/Laurels/Laurels'
import Gallery from './container/Gallery/Gallery'

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
    </div>
  )

}

export default App
