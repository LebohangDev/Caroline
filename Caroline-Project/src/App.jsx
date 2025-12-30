import { useState } from 'react'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import About from './About/About'
import Product from './Product/Product'
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer'

function App() {
  const [activeNav, setActiveNav] = useState('Home')

  return (
    <div className="app">
      <div className="header">
        <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>

      <div className="main">
        <div className={activeNav === 'Home' ? 'activeNav' : 'notActiveNav'}>
          <Home />
        </div>

        <div className={activeNav === 'About' ? 'activeNav' : 'notActiveNav'}>
          <About />
        </div>

        <div className={activeNav === 'Product' ? 'activeNav' : 'notActiveNav'}>
          <Product />
        </div>

        <div className={activeNav === 'Gallery' ? 'activeNav' : 'notActiveNav'}>
          <Gallery />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
