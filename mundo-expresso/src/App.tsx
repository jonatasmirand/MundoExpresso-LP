import Benefits from './components/Benefits'
import Categories from './components/Categories'
import Faq from './components/Faq'
import FlashSale from './components/FlashSale'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import ProductGrid from './components/ProductGrid'
import Testimonials from './components/Testimonials'
import Topbar from './components/Topbar'
import './App.css'

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Categories />
        <ProductGrid />
        <FlashSale />
        <Testimonials />
        <Newsletter />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App
