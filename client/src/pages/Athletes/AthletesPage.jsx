// File: client/src/pages/Athletes/AthletesPage.jsx
import React, { useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Shield, Aperture, DollarSign, ArrowRight, Check, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
    {
        icon: Shield,
        title: "LEGAL PROTECTION",
        tag: "Safety First",
        description: "Expert guidance on NCAA compliance, contract review, and eligibility. Secure your future with ironclad protection.",
        color: "from-blue-500/10 to-transparent"
    },
    {
        icon: Aperture,
        title: "BRAND BUILDING",
        tag: "Digital Legacy",
        description: "Personal branding strategies to help you stand out. Modern tactics for a modern athlete's career.",
        color: "from-[#986a41]/10 to-transparent"
    },
    {
        icon: DollarSign,
        title: "FINANCIAL GROWTH",
        tag: "Wealth Management",
        description: "Financial advisors specializing in tax planning and long-term wealth. Build more than just success.",
        color: "from-emerald-500/10 to-transparent"
    }
];

const AthletesPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen w-full bg-[#fdfdfd] flex flex-col font-sans selection:bg-[#163146] selection:text-white overflow-x-hidden">
            <Navbar />

            {/* Dynamic Mesh Background Overlay */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    style={{ y: backgroundY }}
                    className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#163146]/5 rounded-full blur-[120px] mix-blend-multiply opacity-60"
                />
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
                    className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-[#986a41]/5 rounded-full blur-[120px] mix-blend-multiply opacity-40"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* Elite Hero Section */}
                    <header className="flex flex-col items-center text-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm mb-10"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#986a41] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#986a41]"></span>
                            </span>
                            <span className="text-[#163146] text-[10px] font-bold tracking-[0.2em] uppercase">NIL Excellence</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-[#163146] mb-10 leading-[0.95] tracking-tight"
                        >
                            Elevating the <br />
                            <span className="italic text-[#986a41] relative">
                                Modern Athlete
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#986a41]/20 origin-left"
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-500 text-lg md:text-xl font-light max-w-3xl leading-relaxed mx-auto italic"
                        >
                            Navigate your NIL journey with precision. We pair elite talent with the expert guidance needed to build a sustainable, protected legacy.
                        </motion.p>
                    </header>

                    {/* Modern Bento Grid */}
                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-12 auto-rows-[280px] md:auto-rows-[320px] gap-6 mb-40"
                    >
                        {/* Feature 1 - Hero Card */}
                        <motion.div
                            variants={itemVariants}
                            className="md:col-span-8 md:row-span-2 group relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-[2.5rem] border border-gray-100/80 p-12 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(22,49,70,0.08)] hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#163146]/[0.02] to-transparent pointer-events-none" />
                            <div className="relative h-full flex flex-col justify-between z-10">
                                <div className="space-y-8">
                                    <div className="w-16 h-16 rounded-2xl bg-[#163146] flex items-center justify-center text-white shadow-2xl shadow-[#163146]/20 group-hover:scale-110 transition-transform duration-500">
                                        <Shield className="w-8 h-8 stroke-[1.25]" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-4xl font-serif text-[#163146] tracking-tight">{features[0].title}</h3>
                                            <Sparkles className="w-5 h-5 text-[#986a41] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                        <p className="text-[#986a41] text-xs font-bold tracking-[0.15em] uppercase italic opacity-80">{features[0].tag}</p>
                                    </div>
                                    <p className="text-gray-500 text-xl font-light leading-relaxed max-w-lg">
                                        {features[0].description}
                                    </p>
                                </div>
                                <div className="mt-12 p-8 bg-gray-50/50 rounded-3xl border border-gray-100/50 flex items-center justify-center overflow-hidden">
                                    <div className="w-full flex flex-col gap-4 opacity-40 group-hover:opacity-80 transition-opacity duration-700">
                                        <div className="h-2 w-1/3 bg-[#163146]/20 rounded-full" />
                                        <div className="h-2 w-full bg-gradient-to-r from-[#163146]/10 to-transparent rounded-full" />
                                        <div className="h-2 w-2/3 bg-[#163146]/10 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature 2 & 3 - Side Cards */}
                        <div className="md:col-span-4 md:row-span-2 flex flex-col gap-6">
                            {features.slice(1).map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="flex-1 group relative bg-white/60 backdrop-blur-sm rounded-[2.5rem] border border-gray-100/80 p-10 flex flex-col justify-between hover:shadow-[0_40px_80px_-20px_rgba(22,49,70,0.08)] hover:-translate-y-1 transition-all duration-700"
                                >
                                    <div className="space-y-6">
                                        <div className="w-14 h-14 rounded-2xl bg-[#986a41]/10 flex items-center justify-center text-[#986a41] group-hover:bg-[#986a41] group-hover:text-white transition-all duration-500">
                                            <feature.icon className="w-7 h-7 stroke-[1.25]" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-serif text-[#163146] tracking-tight">{feature.title}</h3>
                                            <p className="text-[#986a41]/60 text-[10px] font-black tracking-widest uppercase">{feature.tag}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 font-light leading-relaxed text-balance">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Elite Pricing Section */}
                    <section className="relative py-32 rounded-[4rem] bg-[#163146] overflow-hidden shadow-[0_50px_100px_-20px_rgba(22,49,70,0.3)]">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/[0.03] to-transparent pointer-events-none" />
                        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#986a41]/20 rounded-full blur-[100px] opacity-40" />
                        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/[0.05] rounded-full blur-[100px] opacity-20" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-20 px-8 md:px-20 max-w-6xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 text-center lg:text-left space-y-8"
                            >
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg">
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">Membership</span>
                                    </div>
                                    <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight">
                                        <span className="text-[#986a41] italic font-medium">Athlete</span> <br />
                                        Membership
                                    </h2>
                                    <p className="text-white/60 font-light max-w-md mx-auto lg:mx-0 text-xl leading-relaxed">
                                        Premium resources for athletes who demand the best in NIL representation and protection.
                                    </p>
                                </div>
                                <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 border-t border-white/5 w-fit">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#163146] bg-gray-100 overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="User" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-white/40 text-xs font-medium tracking-wide uppercase">Join 200+ elite talent</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full max-w-lg"
                            >
                                <div className="group relative bg-white rounded-[3rem] p-12 md:p-16 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.4)] transition-all duration-700 hover:-translate-y-2">
                                    <div className="absolute top-8 right-12">
                                        <span className="text-[#986a41] text-[10px] font-black tracking-widest uppercase py-1.5 px-4 bg-[#986a41]/10 rounded-full">WAITLIST OPEN</span>
                                    </div>
                                    <div className="mb-12 space-y-2">
                                        <h3 className="text-4xl font-serif font-medium text-[#163146] tracking-tight">ASSOCIATE</h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-8xl font-serif font-bold text-[#163146] tracking-tighter">$0</span>
                                            <span className="text-gray-400 font-light text-xl tracking-tight">/ lifetime</span>
                                        </div>
                                    </div>
                                    <ul className="grid grid-cols-1 gap-6 mb-16">
                                        {[
                                            "Personalized Advisor Matching",
                                            "Unlimited Secure Messaging",
                                            "Contract & Opportunity Screening",
                                            "Brand Growth Digital Resources",
                                            "Exclusive NIL Marketplace Access"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-5 group/item">
                                                <div className="mt-1.5 w-5 h-5 rounded-full bg-[#163146]/5 flex items-center justify-center shrink-0 group-hover/item:bg-[#986a41]/10 transition-colors">
                                                    <Check className="w-3 h-3 text-[#986a41]" strokeWidth={3} />
                                                </div>
                                                <span className="text-gray-600 font-light text-lg leading-tight tracking-tight">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="group w-full relative h-20 bg-[#163146] text-white rounded-[1.5rem] font-bold text-xl overflow-hidden transition-all duration-500 active:scale-[0.98]">
                                        <div className="absolute inset-0 bg-[#986a41] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
                                        <div className="relative z-10 flex items-center justify-center gap-3">
                                            Join the Waitlist
                                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AthletesPage;
