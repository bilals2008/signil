// File: client/src/components/HomePage/ProblemSolution.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const ProblemSolution = () => {
    return (
        <section className="w-full relative py-10 lg:py-36 px-5 sm:px-8 lg:px-12 bg-[#fdfdfd] overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#986a41]/5 rounded-full blur-[120px] opacity-20" />
                <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#163146]/5 rounded-full blur-[120px] opacity-20" />

                {/* Floating Elements */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 5 + i, repeat: Infinity }}
                        className="absolute w-1 h-1 bg-[#986a41]/20 rounded-full"
                        style={{ left: `${20 + i * 30}%`, top: `${30 + i * 20}%` }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:gap-20">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative group cursor-default"
                    >
                        {/* Elite Badge Shadow/Glow */}
                        <div className="absolute -inset-[1px] bg-linear-to-r from-slate-200 via-slate-100 to-slate-200 rounded-full blur-[2px] opacity-20 group-hover:opacity-40 transition-opacity" />

                        <div className="relative px-6 py-2 rounded-full border border-slate-200/60 bg-white shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)] flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#163146]/20 animate-pulse" />
                            <span className="text-[10px] font-black tracking-[0.45em] uppercase text-[#163146]/60">The Landscape</span>
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-5xl lg:text-7xl font-extrabold tracking-[-0.035em] text-[#163146] leading-[1.05]"
                    >
                        Bridging the <span className="text-[#986a41] italic font-serif font-medium tracking-normal">NIL Gap</span>
                    </motion.h2>
                </div>

                {/* Bento Content Grid */}
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 relative items-stretch">

                    {/* The Problem Card - Bento Item 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative"
                    >
                        {/* Elite Border Effect */}
                        <div className="absolute -inset-[1px] bg-linear-to-b from-slate-200/50 to-transparent rounded-4xl -z-10 opacity-50" />

                        <div className="h-full bg-linear-to-b from-white via-white to-slate-50/20 backdrop-blur-3xl p-5 lg:p-12 rounded-4xl border border-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06),inset_0_0_20px_rgba(255,255,255,0.5)] flex flex-col gap-5 lg:gap-10 relative overflow-hidden group">
                            {/* Micro-dot grid */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#163146 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                            <div className="flex items-center justify-between relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-xs">
                                    <AlertCircle className="w-5 h-5 text-slate-400 stroke-[1.25]" />
                                </div>
                                <div className="px-3 py-1 rounded-full border border-red-100 bg-red-50/30 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                                    <span className="text-[9px] font-bold text-red-500 tracking-widest uppercase">State: Unstable</span>
                                </div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <h3 className="text-xl lg:text-[2.2rem] font-bold text-[#163146] leading-[1.1] tracking-tight">
                                    NIL athletes have the spotlight, <br />
                                    <span className="text-slate-300 font-medium italic">but not the support.</span>
                                </h3>
                                <p className="text-slate-500 text-sm lg:text-lg leading-relaxed font-light tracking-wide max-w-sm">
                                    In a high-stakes, fast-changing era, most college athletes are navigating contracts, branding, and financial decisions without trusted guidance.
                                </p>
                            </div>

                            <div className="mt-auto pt-4 relative z-10">
                                <div className="flex items-center gap-1 opacity-[0.15]">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="h-0.5 w-4 bg-[#163146] rounded-full" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* The Solution Card - Bento Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="lg:col-span-7 relative"
                    >
                        {/* Elite Border Highlight */}
                        <div className="absolute -inset-[1px] bg-linear-to-b from-[#986a41]/30 to-transparent rounded-4xl -z-10" />

                        <div className="h-full bg-linear-to-br from-[#163146] via-[#1c3e5a] to-[#0f2333] p-5 lg:p-12 rounded-4xl shadow-[0_40px_80px_-20px_rgba(22,49,70,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col gap-5 lg:gap-10 overflow-hidden relative border border-white/5 group">
                            {/* Elite Glow Pattern */}
                            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#986a41]/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#986a41]/20 transition-colors duration-1000" />
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                            <div className="flex items-center justify-between relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-inner">
                                    <CheckCircle2 className="w-5 h-5 text-[#986a41] stroke-[1.5]" />
                                </div>
                                <div className="px-3 py-1 rounded-full border border-[#986a41]/20 bg-[#986a41]/10 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#986a41] shadow-[0_0_8px_#986a41]" />
                                    <span className="text-[9px] font-bold text-[#986a41] tracking-widest uppercase">State: Optimized</span>
                                </div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <h3 className="text-xl lg:text-[2.2rem] font-bold text-white leading-[1.1] tracking-tight">
                                    Signil simplifies the journey, <br />
                                    <span className="text-[#986a41] italic font-serif">from start to finish.</span>
                                </h3>
                                <p className="text-white/70 text-sm lg:text-lg leading-relaxed font-light tracking-wide max-w-xl">
                                    We provide a comprehensive platform to manage your NIL deals, legal reviews, and financial health—so you can focus on the game.
                                </p>
                            </div>

                            <div className="mt-auto pt-4 relative z-10">
                                <motion.button
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-5 text-white font-bold text-[11px] tracking-[0.35em] uppercase group/btn"
                                >
                                    Get Started Free
                                    <div className="flex items-center">
                                        <div className="w-8 h-px bg-white/20 group-hover/btn:w-12 transition-all duration-500" />
                                        <span className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md group-hover/btn:border-[#986a41]/50 group-hover/btn:bg-[#986a41]/10 transition-all shadow-xl">
                                            <ArrowRight className="w-4 h-4 text-[#986a41]" />
                                        </span>
                                    </div>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
