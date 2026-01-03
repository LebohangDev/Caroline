import { useState, useEffect } from 'react'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import About from './About/About'
import Product from './Product/Product'
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer'
import PaymentSuccess from './paymentPopups/PaymentSuccess'
import PaymentCancel from './paymentPopups/PaymentCancel'

function App() {
  const [activeNav, setActiveNav] = useState('Home')
  const [paymentActive, setPaymentActive] = useState(false);


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");
    if (payment === "success") setPaymentActive("PaymentSuccess");
    if (payment === "cancel") setPaymentActive("PaymentCancel");
  }, []);

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

      <div className={paymentActive === 'PaymentSuccess' ? 'activeSection' : 'notActiveSection'}>
        <PaymentSuccess setPaymentActive={setPaymentActive} />
      </div>

      <div className={paymentActive === 'PaymentCancel' ? 'activeSection' : 'notActiveSection'}>
        <PaymentCancel setPaymentActive={setPaymentActive} />
      </div>
    </div>


  )
}

export default App
