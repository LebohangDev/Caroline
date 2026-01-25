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
    const handleHashScroll = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      let sectionId = '';

      // Check Hash first
      if (hash) {
        sectionId = hash.replace('#', '').toLowerCase();
      }
      // Then check Path (e.g. /product or /Caroline/product)
      else if (path && path !== '/') {
        // Extract the last segment of the path
        const pathSegments = path.split('/').filter(p => p);
        if (pathSegments.length > 0) {
          sectionId = pathSegments[pathSegments.length - 1].toLowerCase();
        }
      }

      if (sectionId) {
        // Capitalize for activeNav state
        const sectionName = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
        const validSections = ['Home', 'About', 'Product', 'Gallery'];

        if (validSections.includes(sectionName)) {
          setActiveNav(sectionName);
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    };

    // Handle initial load
    handleHashScroll();

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
