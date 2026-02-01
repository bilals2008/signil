// File: client/src/pages/Home/HomePage.jsx
import React, { useState, useEffect } from 'react'
import { User, CheckCircle, BrainCircuit } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProblemSolution from '@/components/HomePage/ProblemSolution'
import FeaturesSection from '@/components/HomePage/FeaturesSection'
import ScoutSection from '@/components/HomePage/ScoutSection'
import FoundersNote from '@/components/HomePage/FoundersNote'
import FinalCTA from '@/components/HomePage/FinalCTA'
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
      <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-center px-5 sm:px-8 lg:px-12 overflow-hidden pt-12 lg:pt-24 pb-8 lg:pb-16 bg-[#fdfdfd]">

        {/* Reference-style Background: Dot Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
          style={{ backgroundImage: 'radial-gradient(#163146 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        {/* Decorative Watermark - Only on Desktop */}
        <div className="absolute bottom-10 right-10 select-none pointer-events-none opacity-[0.02] -z-10 overflow-hidden hidden lg:block">
          <span className="text-[15rem] font-bold tracking-tighter text-[#163146] leading-none">
            2026
          </span>
        </div>

        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Column: Typography & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6 lg:space-y-10 mt-6 lg:mt-0"
          >
            {/* Top Tagline */}
            <div className="flex items-center gap-3 lg:gap-4 text-[#163146]/60 text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase">
              <div className="w-8 lg:w-12 h-px bg-[#986a41]/40" />
              NIL Management Evolved
            </div>

            {/* Main Heading */}
            <h1 className="text-[2.6rem] sm:text-5xl md:text-7xl xl:text-[6.5rem] font-bold tracking-tight text-[#163146] leading-[1.1] lg:leading-[1.05]">
              Empowering
              <br />
              <span className="text-[#986a41] font-serif italic font-medium">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="inline-block"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              to Win Off the Field
            </h1>

            {/* Subheadline */}
            <p className="text-base lg:text-xl text-slate-500 max-w-lg font-light leading-relaxed">
              Architecting the future of NIL. We match athletes with trusted advisors — <span className="text-[#163146] font-medium border-b border-[#986a41]/30">fast, smart, and free.</span>
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-8">
              <MagneticButton className="bg-[#163146] hover:bg-[#0f2333] text-white px-7 lg:px-10 py-4 lg:py-5 text-sm lg:text-base font-semibold rounded-full flex items-center gap-2.5 transition-all">
                Join Waitlist
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </MagneticButton>

              <button className="text-[#163146] font-semibold text-sm lg:text-base flex items-center gap-2 hover:gap-3 transition-all duration-300">
                How it Works
                <svg className="w-4 h-4 text-[#986a41]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Community Card - Visible on Mobile too */}
            <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-slate-100 w-fit lg:hidden">
              <div className="flex -space-x-2.5">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`/src/assets/avatar-${i}.png`} alt="Athlete" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-[11px] font-bold text-[#163146]">Joined by 200+ Athletes</p>
            </div>

            {/* Feature List: Grid on Mobile, Flex on Desktop */}
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center gap-x-6 gap-y-3 pt-6 lg:pt-8 border-t border-slate-100">
              {[
                { icon: User, text: "Free for Athletes" },
                { icon: CheckCircle, text: "Vetted Pros" },
                { icon: BrainCircuit, text: "AI Matching" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 group cursor-default">
                  <item.icon className="w-3.5 h-3.5 text-[#986a41]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#163146]/70 whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Section - Hidden on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main Image Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(22,49,70,0.15)] bg-white p-2">
              <div className="rounded-4xl overflow-hidden aspect-4/5">
                <img
                  src="/src/assets/hero-athlete.png"
                  alt="NIL Success"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Floating UI Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-8 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 flex items-center gap-4 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-[#986a41]/10 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-[#986a41]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Match Accuracy</p>
                  <p className="text-sm font-bold text-[#163146]">98.4% AI Match</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 -left-12 bg-[#163146] text-white rounded-2xl shadow-xl p-4 z-20 min-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-[#163146] bg-slate-200 overflow-hidden shadow-md">
                        <img
                          src={`/src/assets/avatar-${i}.png`}
                          alt="Athlete"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 font-medium leading-none mb-1">Join the community</p>
                    <p className="text-xs font-bold text-white tracking-tight">200+ Athletes</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative background framing */}
            <div className="absolute -inset-10 border border-[#986a41]/10 rounded-[4rem] -z-10 animate-spin-slow opacity-50"
              style={{ animationDuration: '30s' }} />
          </motion.div>
        </div>
      </section>

      <ProblemSolution />

      <FeaturesSection />

      <ScoutSection />

      <FoundersNote />
      <FinalCTA />

      <Footer />
    </div>
  )
}

export default HomePage
