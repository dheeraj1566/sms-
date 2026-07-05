import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Projects from '@/pages/Projects'
import Gallery from '@/pages/Gallery'
import Process from '@/pages/Process'
import Testimonials from '@/pages/Testimonials'
import WhyChooseUsPage from '@/pages/WhyChooseUs'
import FAQs from '@/pages/FAQs'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/process" element={<Process />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
