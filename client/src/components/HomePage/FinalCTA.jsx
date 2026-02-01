import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton'

// Pre-generate stable stardust particles outside the component
const STARDUST = [...Array(12)].map((_, i) => ({
    id: i,
    top: `${(i * 11) % 100}%`,
    left: `${(i * 19) % 100}%`,
    duration: 8 + (i % 12),
    delay: i % 5,
    size: (i % 3) + 1
}));

const FinalCTA = () => {
    return (
        <section className="relative w-full bg-[#163146] py-32 lg:py-48 px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center overflow-hidden">

            {/* Premium Dark Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-b from-[#163146] to-[#0a1824] -z-10" />

            {/* Advanced Ambient Glows */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] bg-[#986a41] blur-[150px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] bg-[#163146] blur-[180px] rounded-full pointer-events-none"
            />

            {/* Decorative Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#faf7f2 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Stardust Particle System */}
            {STARDUST.map(star => (
                <motion.div
                    key={star.id}
                    animate={{
                        opacity: [0, 0.4, 0],
                        scale: [0.5, 1, 0.5],
                        y: [0, -40, 0]
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay
                    }}
                    className="absolute bg-white rounded-full pointer-events-none blur-[0.5px]"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size
                    }}
                />
            ))}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="max-w-5xl w-full flex flex-col items-center gap-12 relative z-10"
            >
                {/* Visual Accent */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    className="h-1.5 rounded-full bg-linear-to-r from-transparent via-[#986a41] to-transparent mb-4"
                />

                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-black tracking-tighter leading-tight max-w-4xl">
                    Whether you're an athlete looking for guidance or an advisor ready to share your expertise, <span className="text-[#986a41] font-serif italic font-medium">Signil</span> is building the platform that will transform NIL opportunities.
                </h2>

                {/* CTA Button Group */}
                <div className="flex flex-col items-center gap-10 pt-4">
                    <div className="relative group">
                        {/* Magnetic Glow Effect */}
                        <div className="absolute -inset-1 border border-[#986a41]/50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <MagneticButton className="group bg-[#986a41] hover:bg-[#855c3a] text-white px-8 md:px-11 py-3.5 md:py-4.5 text-base md:text-lg font-black rounded-full transition-all shadow-2xl shadow-[#986a41]/30 hover:shadow-[#986a41]/50 flex items-center gap-4 active:scale-95 border-b-4 border-[#7a5435]">
                            Join the Limited Waitlist
                            <motion.svg
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-4 h-4 md:w-5 md:h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </motion.svg>
                        </MagneticButton>
                    </div>

                    {/* Footer Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest"
                    >
                        Join 500+ athletes & advisors already on the list
                    </motion.div>
                </div>
            </motion.div>
            {/* Decorative bottom border accent */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#986a41]/30 to-transparent" />
        </section>
    );
};

export default FinalCTA;
