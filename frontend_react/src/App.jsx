import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BondsSection from './components/BondsSection'
import OtherProductsSection from './components/OtherProductsSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import About from './pages/About'
import Bonds from './pages/Bonds'
import BondsIPO from './pages/BondsIPO'
import OtherProducts from './pages/OtherProducts'
import StructuredProducts from './pages/StructuredProducts'
import Insurance from './pages/Insurance'
import EstatePlanning from './pages/EstatePlanning'
import NPS from './pages/NPS'
import Loans from './pages/Loans'
import Careers from './pages/Careers'
import FAQ from './pages/FAQ'
import Login from './pages/Login'
import Signup from './pages/Signup'

function Home() {
  return (
    <main>
      <HeroSection />
      <BondsSection />
      <OtherProductsSection />
      <FeaturesSection />
      <HowItWorksSection />
    </main>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bonds" element={<Bonds />} />
            <Route path="/bonds-ipo" element={<BondsIPO />} />
            <Route path="/other-products" element={<OtherProducts />} />
            <Route path="/other-products/structured-products" element={<StructuredProducts />} />
            <Route path="/other-products/insurance" element={<Insurance />} />
            <Route path="/other-products/estate-planning" element={<EstatePlanning />} />
            <Route path="/nps" element={<NPS />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
