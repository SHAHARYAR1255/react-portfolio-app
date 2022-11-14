import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
// import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Experience from './components/experience/Experience';
import About from './components/about/About';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      {/* <Services /> */}
      <Testimonials />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App