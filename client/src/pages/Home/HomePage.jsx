// File: client/src/pages/Home/HomePage.jsx
import React, { useState, useEffect } from 'react'
import { User, CheckCircle, BrainCircuit } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProblemSolution from '@/components/sections/ProblemSolution'
import FeaturesSection from '@/components/sections/FeaturesSection'
import ScoutSection from '@/components/sections/ScoutSection'
import { motion, AnimatePresence } from 'framer-motion'

const words = ["In", "Athletes", "Agents", "Advisors", "Institutions"];

const HomePage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#fdfdfd] flex flex-col relative overflow-x-hidden font-sans">

      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8 md:gap-10">

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-[#163146] leading-[1.1]">
            <span>Empowering</span>
            <br />
            <span className="text-[#986a41] italic font-semibold inline-block min-w-[120px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            <span>to Win Off the Field</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl font-light">
            We match NIL athletes with trusted advisors - <span className="font-bold text-[#986a41]">fast, smart, and free</span>
          </p>

          {/* Feature Points */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-2 w-full">
            <div className="flex items-center gap-2 text-[#163146]/80 font-medium">
              <User className="w-5 h-5 text-[#986a41]" />
              <span>Free for Athletes</span>
            </div>
            <div className="flex items-center gap-2 text-[#163146]/80 font-medium">
              <CheckCircle className="w-5 h-5 text-[#986a41]" />
              <span>Vetted Professionals</span>
            </div>
            <div className="flex items-center gap-2 text-[#163146]/80 font-medium">
              <BrainCircuit className="w-5 h-5 text-[#986a41]" />
              <span>AI-Powered Matching</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <MagneticButton className="bg-[#986a41] hover:bg-[#855a35] text-white shadow-lg shadow-[#986a41]/20 font-semibold px-10 py-4 text-lg">
              Join the Limited Waitlist
            </MagneticButton>
          </div>

        </div>
      </div> {/* Closing Hero Section */}

      <ProblemSolution />

      <FeaturesSection />

      <ScoutSection />

      <Footer />
    </div>
  )
}

export default HomePage
