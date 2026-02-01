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
      <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-center px-5 sm:px-8 lg:px-12 overflow-hidden pt-6 lg:pt-24 pb-6 lg:pb-16 bg-[#fdfdfd]">

        {/* Premium Background: Radial Gradient + Dot Grid */}
        <div className="absolute inset-0 bg-[#fdfdfd] overflow-hidden -z-10">
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              background: 'radial-gradient(circle at 70% 30%, #986a4108 0%, transparent 70%), radial-gradient(circle at 20% 80%, #16314605 0%, transparent 60%)'
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.035 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#163146 1.2px, transparent 1.2px)',
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        {/* Decorative Watermark - Only on Desktop */}
        <div className="absolute bottom-10 right-10 select-none pointer-events-none opacity-[0.02] -z-10 overflow-hidden hidden lg:block">
          <span className="text-[15rem] font-bold tracking-tighter text-[#163146] leading-none">
            2026
          </span>
        </div>

        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Typography & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-4 lg:space-y-10 mt-6 lg:mt-0 max-w-2xl lg:max-w-none"
          >
            {/* Top Tagline */}
            <div className="flex items-center gap-3 lg:gap-4 text-[#163146]/60 text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase">
              <div className="w-8 lg:w-12 h-px bg-[#986a41]/40" />
              NIL Management Evolved
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.8rem] font-extrabold tracking-tighter text-[#163146] leading-[1.1] lg:leading-[1]">
              Empowering
              <br />
              <span className="relative inline-block mt-2">
                <span className="text-[#986a41] font-serif italic font-medium pr-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[index]}
                      initial={{ opacity: 0, y: 20, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -20, rotateX: 90 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.23, 1, 0.32, 1],
                        rotateX: { duration: 0.5 }
                      }}
                      className="inline-block"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-[#986a41]/20 rounded-full"
                />
              </span>
              <br />
              to Win Off the Field
            </h1>

            {/* Subheadline */}
            <p className="text-base lg:text-xl text-slate-500 max-w-lg font-light leading-relaxed">
              Architecting the future of NIL. We match athletes with trusted advisors — <span className="text-[#163146] font-medium border-b border-[#986a41]/30">fast, smart, and free.</span>
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-8 pt-4">
              <MagneticButton className="group bg-[#163146] hover:bg-[#0f2333] text-white px-8 lg:px-12 py-3 lg:py-6 text-sm lg:text-base font-bold rounded-full flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#163146]/20 hover:shadow-2xl hover:shadow-[#163146]/30 active:scale-95 w-full sm:w-auto">
                Join Waitlist
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </MagneticButton>

              <button className="group text-[#163146] font-bold text-sm lg:text-base flex items-center justify-center gap-2 px-4 py-2 rounded-full hover:bg-[#163146]/5 transition-all duration-300 w-full sm:w-auto">
                How it Works
                <div className="w-8 h-8 rounded-full bg-[#986a41]/10 flex items-center justify-center group-hover:bg-[#986a41]/20 transition-colors">
                  <svg className="w-4 h-4 text-[#986a41] group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Redundant Community Card removed to favor the premium floating UI */}

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

          {/* Right Column: Visual Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative lg:block"
          >
            {/* Main Image Container with Parallax-ready feel */}
            <div className="relative group perspective-1000">
              <motion.div
                whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(22,49,70,0.2)] bg-white p-2.5 lg:p-3"
              >
                <div className="rounded-[2.5rem] overflow-hidden aspect-4/5 bg-slate-50 relative">
                  {/* Subtle Aura/Shadow Glow */}
                  <div className="absolute inset-0 bg-linear-to-tr from-[#163146]/10 to-transparent pointer-events-none" />

                  <img
                    src="/src/assets/hero-athlete.png"
                    alt="NIL Success"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out opacity-20 lg:opacity-100"
                  />
                </div>
              </motion.div>

              {/* Floating UI Elements - More interactive */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="absolute top-12 -right-6 lg:-right-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 lg:p-5 border border-white/50 flex items-center gap-4 z-20 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-[#986a41]/10 flex items-center justify-center">
                  <BrainCircuit className="w-6 h-6 text-[#986a41]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#986a41]/60 mb-0.5">Match Accuracy</p>
                  <p className="text-sm lg:text-base font-black text-[#163146]">98.4% AI Match</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ y: 5, scale: 1.05 }}
                className="absolute bottom-16 -left-6 lg:-left-16 bg-[#163146] text-white rounded-4xl shadow-2xl p-5 lg:p-6 z-20 min-w-[220px] cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border-2 border-[#163146] bg-slate-200 overflow-hidden shadow-xl ring-2 ring-[#986a41]/20">
                        <img
                          src={`/src/assets/avatar-${i}.png`}
                          alt="Athlete"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider leading-none mb-1.5">Elite Community</p>
                    <p className="text-sm lg:text-base font-black text-white tracking-tight">2,400+ Athletes</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative background framing */}
            <div className="absolute -inset-10 lg:-inset-20 border-[1.5px] border-[#986a41]/10 rounded-[5rem] -z-20 animate-spin-slow opacity-30 lg:opacity-60"
              style={{ animationDuration: '40s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial from-[#986a41]/5 to-transparent -z-20 blur-3xl opacity-50" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#163146]/30">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-[#986a41]/40 to-transparent" />
        </motion.div>
      </section>

      <ProblemSolution />

      <FeaturesSection />

      <ScoutSection />

      <FoundersNote />
      <FinalCTA />

      <Footer />
    </div >
  )
}

export default HomePage
