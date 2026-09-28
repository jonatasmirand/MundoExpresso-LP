import About from './components/About'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Objectives from './components/Objectives'
import Reasons from './components/Reasons'
import Services from './components/Services'
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
        <Services />
        <About />
        <Objectives />
        <Reasons />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App
