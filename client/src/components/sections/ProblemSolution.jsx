// File: client/src/components/sections/ProblemSolution.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProblemSolution = () => {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
            {/* The Problem */}
            <div className="bg-[#faf7f2] flex flex-col items-center justify-center p-12 md:p-24 text-center gap-8">
                <div className="bg-[#1a2e41] text-white text-xs font-bold tracking-widest px-6 py-2 rounded-full uppercase">
                    The Problem
                </div>
                <h2 className="text-[#1a2e41] text-4xl md:text-5xl font-serif font-medium leading-tight">
                    NIL athletes have the spotlight, <br className="hidden md:block" />
                    <span className="opacity-70">but not the support.</span>
                </h2>
                <p className="text-gray-600 max-w-md text-lg leading-relaxed font-light">
                    In a high-stakes, fast-changing era, most college athletes are navigating contracts, branding, and financial decisions without trusted guidance.
                </p>
            </div>

            {/* The Solution */}
            <div className="bg-[#1a2e41] flex flex-col items-center justify-center p-12 md:p-24 text-center gap-8 text-white relative overflow-hidden">
                <div className="bg-[#b18150] text-white text-xs font-bold tracking-widest px-6 py-2 rounded-full uppercase">
                    The Solution
                </div>
                <h2 className="text-white text-4xl md:text-5xl font-serif font-medium leading-tight">
                    Signil gives athletes the team <br className="hidden md:block" />
                    <span className="text-[#b18150]">they deserve, off the field.</span>
                </h2>
                <p className="text-gray-300 max-w-md text-lg leading-relaxed font-light">
                    Our AI-powered platform connects athletes with vetted advisors, empowering them to protect their future and own their success.
                </p>

                {/* Minimal Pattern Overlay */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            </div>
        </section>
    );
};

export default ProblemSolution;
