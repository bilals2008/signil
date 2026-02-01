import React from 'react';
import { motion } from 'framer-motion';

const FoundersNote = () => {
    return (
        <section className="relative w-full bg-[#faf7f2] py-12 lg:py-40 px-5 sm:px-8 lg:px-12 flex flex-col items-center overflow-hidden">

            {/* Subtle Premium Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
                style={{
                    backgroundImage: 'radial-gradient(#163146 1px, transparent 1px)',
                    backgroundSize: '48px 48px'
                }}
            />

            {/* Tactile Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply pointer-events-none -z-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-[#986a41]/20 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl w-full relative"
            >
                {/* Decoration: Subtle Glow */}
                <div className="absolute -inset-px bg-linear-to-r from-slate-200 via-slate-100 to-slate-200 rounded-full blur-[2px] opacity-20 group-hover:opacity-40 transition-opacity" />

                <div className="bg-white/70 backdrop-blur-md border border-[#986a41]/10 rounded-[3rem] p-5 md:p-16 lg:p-24 shadow-[0_40px_100px_-30px_rgba(152,106,65,0.12)] flex flex-col items-center gap-10 md:gap-16 text-center relative overflow-hidden group">

                    {/* Top Accent Line with animation */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-transparent via-[#986a41]/40 to-transparent origin-center"
                    />

                    {/* Pill Label */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 bg-[#986a41] text-white text-[10px] sm:text-[11px] font-black tracking-[0.4em] px-8 py-3.5 rounded-full uppercase shadow-2xl shadow-[#986a41]/30"
                    >
                        A Letter from the Founders
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-[#163146] text-2xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none max-w-2xl">
                        From Confusion to Confidence <br />
                        <span className="text-[#986a41] font-serif italic font-medium">One Connection</span> at a Time
                    </h2>

                    {/* Body Text */}
                    <div className="flex flex-col gap-6 md:gap-10 text-[#163146]/80 text-sm md:text-2xl font-light leading-relaxed max-w-3xl">
                        <p className="relative">
                            We're Ryan and Saurav, two recent graduates who saw a system full of promise, but burdened with confusion and missed opportunities. We spoke with countless athletes navigating overwhelming contracts and confusing NIL deals, and advisors eager to help but struggling to reach the people who needed them most.
                        </p>
                        <p>
                            That disconnect fueled the creation of Signil, a platform designed to bridge the gap, bringing clarity, fairness, and trusted support to athletes, advisors, agents, and institutions alike.
                        </p>
                        <motion.p
                            initial={{ opacity: 0.5 }}
                            whileInView={{ opacity: 1 }}
                            className="font-bold text-[#163146] italic bg-[#986a41]/5 p-5 md:p-8 rounded-4xl border border-[#986a41]/10"
                        >
                            Signil is the platform we wish existed for our friends and every athlete stepping into the future of NIL, because everyone deserves a team they can trust.
                        </motion.p>
                    </div>

                    {/* Sign-off */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-4 flex flex-col items-center gap-4"
                    >
                        <div className="w-16 h-px bg-[#986a41]/40 mb-2" />
                        <p className="text-[#163146] font-black text-xl tracking-tight">Join us in this journey,</p>

                        {/* Animated Signature Effect */}
                        <div className="relative group/sig">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                                className="text-[#986a41] font-serif text-4xl md:text-6xl italic font-medium mt-2 whitespace-nowrap overflow-hidden"
                            >
                                Ryan & Saurav
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2 }}
                                className="absolute -bottom-2 -right-8 w-6 h-6 rounded-full border-2 border-[#986a41]/30 flex items-center justify-center"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#986a41]/60" />
                            </motion.div>
                        </div>

                        <div className="inline-block px-6 py-2 rounded-xl bg-[#163146]/5 text-[#163146]/60 text-xs uppercase tracking-[0.2em] font-black mt-4 border border-[#163146]/5">
                            Co-Founders, Signil
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default FoundersNote;
