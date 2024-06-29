import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkflowSection from './components/WorkflowSection'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'



function App() {

  return (
    <>
    <Navbar/>
    <div className="max-w-5xl mx-auto pt-20 px-6">
    <HeroSection/>
    <FeatureSection/>
    <WorkflowSection/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </div>
    </>
  )
}

export default App
