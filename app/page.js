import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Tranning from './components/Training'
import About from './components/About'
import Testimonials from './components/Testimonials'

function page() {
  return (
    <div>
      <Hero />
      <Features />
      <Tranning />
      <About />
      <Testimonials />
    </div>
  )
}

export default page
