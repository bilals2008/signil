// File: client/src/pages/Advisors/AdvisorsPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { UserPlus, BadgeCheck, LayoutGrid, Star, Target, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdvisorsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const activeTab = location.hash === '#agents' ? 'agents' : 'advisors';

    const handleTabChange = (tab) => {
        navigate(`#${tab}`);
    };

    const content = {
        advisors: {
            title: "Advisors",
            cards: [
                {
                    icon: UserPlus,
                    title: "CONNECT WITH ATHLETES",
                    description: "Our AI matching system connects you with athletes whose needs align perfectly with your expertise and experience.",
                    size: "md:col-span-2"
                },
                {
                    icon: BadgeCheck,
                    title: "VERIFIED STATUS",
                    description: "Earn Signil's verification badge by completing our thorough vetting process.",
                    size: "md:col-span-1"
                },
                {
                    icon: LayoutGrid,
                    title: "GROW YOUR PRACTICE",
                    description: "Access our advisor dashboard with client management tools, educational resources, and insights to build a thriving NIL advisory practice.",
                    size: "md:col-span-3"
                }
            ]
        },
        agents: {
            title: "Agents",
            cards: [
                {
                    icon: Star,
                    title: "CONNECT WITH PURPOSE",
                    description: "Signil curates connections where value and trust come first.",
                    size: "md:col-span-1"
                },
                {
                    icon: Target,
                    title: "SMART ATHLETE DISCOVERY",
                    description: "Signil's AI surfaces athletes based on your specialization, no more cold outreach, just warm, qualified leads.",
                    size: "md:col-span-2"
                },
                {
                    icon: BadgeCheck,
                    title: "VERIFIED STATUS",
                    description: "Earn Signil's verification badge by completing our thorough vetting process, building instant trust with athletes and their families.",
                    size: "md:col-span-3"
                }
            ],
            pricingTitle: "Agent Pricing Tiers"
        }
    };

    const pricingTiers = [
        {
            name: "ASSOCIATE",
            price: "$0",
            period: "/month",
            features: [
                "Access to Scout",
                "Basic profile listing",
                "Standard athlete-matching tools",
                "Secure messaging with matched athletes"
            ],
            buttonText: "Join Waitlist",
            isBestValue: false
        },
        {
            name: "BUSINESS",
            price: "Pricing coming soon",
            period: "",
            features: [
                "Access to Scout",
                "Enhanced profile recommendations",
                "Limited athlete matches",
                "SIGNIL verification badge",
                "Basic analytics dashboard"
            ],
            buttonText: "Join Waitlist",
            isBestValue: false
        },
        {
            name: "CORPORATION",
            price: "Pricing coming soon",
            period: "",
            features: [
                "Access to Scout",
                "Unlimited athlete matching",
                "Advanced analytics dashboard",
                "Priority matching algorithm",
                "Dedicated account manager"
            ],
            buttonText: "Join Waitlist",
            isBestValue: true
        },
        {
            name: "ENTERPRISE",
            price: "Pricing coming soon",
            period: "",
            features: [
                "All Corporation benefits",
                "Multiple user accounts & permissions",
                "Custom branding & white-label portal",
                "Tailored pricing & feature bundles",
                "Full API access for integrations"
            ],
            buttonText: "Join Waitlist",
            isBestValue: false
        }
    ];

    return (
        <div className="min-h-screen w-full bg-[#fafafc] flex flex-col font-sans selection:bg-[#b18150]/30">
            <Navbar />

            {/* Rich Mesh Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-linear-to-br from-[#b18150]/15 via-[#b18150]/05 to-transparent rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-linear-to-tl from-[#1a2e41]/15 via-[#1a2e41]/05 to-transparent rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '10s' }} />
                <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-linear-to-bl from-orange-200/10 to-transparent rounded-full blur-[100px]" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                    {/* Eyebrow / Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 px-5 py-2 rounded-full bg-white border border-[#b18150]/20 shadow-[0_2px_15px_rgba(177,129,80,0.1)] inline-flex items-center gap-2"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#b18150] shadow-[0_0_8px_#b18150]" />
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#1a2e41] uppercase">
                            Elevating Professional Success
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight mb-8">
                        <span className="text-[#1a2e41] block sm:inline">Empowering </span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="text-[#b18150] italic inline-block drop-shadow-sm"
                            >
                                {content[activeTab].title}
                            </motion.span>
                        </AnimatePresence>
                    </h1>

                    {/* Description */}
                    <p className="text-[#1a2e41]/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12 tracking-tight">
                        Connect with the right athletes, build your NIL advisory practice, and make a real impact on the future of college sports.
                    </p>

                    {/* Tab Toggle (Premium Colorized Design) */}
                    <div className="relative p-1 bg-white border border-[#b18150]/20 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] inline-flex gap-1 mb-20 group">
                        {['advisors', 'agents'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`relative px-10 py-4 text-sm font-bold tracking-widest transition-all duration-500 rounded-xl z-10 ${activeTab === tab
                                    ? 'text-white'
                                    : 'text-[#1a2e41]/60 hover:text-[#1a2e41]'
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTabBadge"
                                        className="absolute inset-0 bg-linear-to-br from-[#1a2e41] to-[#2a4a68] rounded-xl shadow-lg shadow-[#1a2e41]/30 -z-10"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="capitalize">{tab}</span>
                            </button>
                        ))}
                    </div>

                    {/* Bento Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                        <AnimatePresence mode='wait'>
                            {content[activeTab].cards.map((card, idx) => (
                                <motion.div
                                    key={activeTab + idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
                                    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className={`group relative flex flex-col p-12 rounded-4xl overflow-hidden ${card.size || ''} 
                                        bg-white border border-[#b18150]/10 shadow-[0_10px_40px_rgba(0,0,0,0.03)]
                                        hover:shadow-[0_30px_60px_rgba(177,129,80,0.15)] transition-all duration-700 hover:-translate-y-2`}
                                >
                                    {/* Colorized Glass Highlight */}
                                    <div className="absolute inset-0 bg-linear-to-br from-[#b18150]/05 via-transparent to-[#1a2e41]/03 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                    <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#b18150]/05 rounded-full blur-3xl group-hover:bg-[#b18150]/10 transition-colors duration-700" />

                                    <div className="relative z-10 h-full flex flex-col items-start text-left">
                                        <div className="mb-auto w-full">
                                            <div className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-[#1a2e41] to-[#2a4a68] flex items-center justify-center mb-10 shadow-lg shadow-[#1a2e41]/20 group-hover:shadow-[#b18150]/40 group-hover:from-[#b18150] group-hover:to-[#d4a373] transition-all duration-500">
                                                <card.icon className="w-7 h-7 text-white transition-transform duration-500 group-hover:scale-110 stroke-[1.5]" />
                                                <div className="absolute inset-0 rounded-2xl bg-[#b18150] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                                            </div>
                                            <h3 className="text-[#1a2e41] font-black text-xs tracking-[0.3em] uppercase mb-6 drop-shadow-sm">
                                                {card.title}
                                            </h3>
                                        </div>

                                        <p className="text-[#1a2e41]/80 text-xl leading-tight font-medium tracking-tight transition-colors duration-500">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Corner Detail (Colorized) */}
                                    <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-100 transition-all duration-500">
                                        <div className="w-6 h-6 border-t-2 border-r-2 border-[#b18150] rounded-tr-lg" />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                </div>
            </section>

            {/* Pricing Section (High Contrast Dark Theme) */}
            <section className="relative w-full bg-[#1a2e41] py-32 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(#b18150 2px, transparent 2px)`, backgroundSize: '40px 40px' }}
                />
                <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-[#b18150]/10 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-[#b18150] to-transparent shadow-[0_0_15px_#b18150]" />

                <div className="max-w-7xl mx-auto flex flex-col items-center">

                    <div className="text-center mb-24 space-y-6">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[#b18150] text-sm font-black tracking-[0.4em] uppercase block drop-shadow-[0_0_10px_rgba(177,129,80,0.3)]"
                        >
                            Tailored Solutions
                        </motion.span>
                        <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tight leading-none">
                            <span className="italic font-light text-white/95">
                                {activeTab === 'advisors' ? 'Advisor' : 'Agent'}
                            </span>
                            <span className="text-[#b18150]"> Pricing</span>
                        </h2>
                        <p className="text-white/60 font-medium text-xl max-w-xl mx-auto tracking-tight">
                            Strategic tiers designed to scale with your professional ambitions.
                        </p>
                    </div>

                    {/* Pricing Bento Grid (Colorized) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {pricingTiers.map((tier, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className={`group relative flex flex-col p-10 rounded-4xl border-2 transition-all duration-500
                                    ${tier.isBestValue
                                        ? 'bg-white/10 border-[#b18150] shadow-[0_20px_50px_rgba(177,129,80,0.2)] pt-16'
                                        : 'bg-white/05 border-white/10 hover:border-[#b18150]/40'}`}
                            >
                                {tier.isBestValue && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                                        <div className="px-5 py-2 bg-[#b18150] rounded-full shadow-lg shadow-[#b18150]/40 transform group-hover:scale-110 transition-transform">
                                            <span className="text-[9px] font-black text-white uppercase tracking-[0.25em] whitespace-nowrap">Most Popular</span>
                                        </div>
                                    </div>
                                )}

                                <div className="mb-12 text-left">
                                    <h3 className="text-[#b18150] font-black text-xs tracking-[0.3em] uppercase mb-5">
                                        {tier.name}
                                    </h3>
                                    <div className="flex items-baseline gap-2">
                                        {tier.price.includes('soon') ? (
                                            <span className="text-white text-3xl font-serif italic opacity-60">Coming Soon</span>
                                        ) : (
                                            <>
                                                <span className="text-6xl font-serif font-bold text-white tracking-tighter drop-shadow-md">{tier.price}</span>
                                                <span className="text-white/50 text-sm font-bold tracking-widest">{tier.period}</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <ul className="space-y-5 mb-12 flex-1">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-4 text-base text-white/80 font-medium tracking-tight group-hover:text-white transition-colors duration-300">
                                            <div className="w-2 h-2 rounded-full bg-[#b18150] shadow-[0_0_8px_#b18150] group-hover:scale-125 transition-transform" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500
                                    ${tier.isBestValue
                                        ? 'bg-[#b18150] text-white hover:bg-white hover:text-[#1a2e41] shadow-xl shadow-[#b18150]/20'
                                        : 'bg-white/10 text-white hover:bg-[#b18150] border border-white/20'}`}>
                                    {tier.buttonText}
                                </button>

                                <div className="absolute inset-0 bg-linear-to-br from-[#b18150]/05 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-4xl pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AdvisorsPage;
