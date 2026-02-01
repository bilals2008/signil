// File: client/src/pages/Advisors/AdvisorsPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { UserPlus, BadgeCheck, LayoutGrid, Star, Target, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdvisorsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('advisors');

    useEffect(() => {
        if (location.hash === '#agents') {
            setActiveTab('agents');
        } else {
            setActiveTab('advisors');
        }
    }, [location.hash]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        navigate(`#${tab}`);
    };

    const content = {
        advisors: {
            title: "Advisors",
            cards: [
                {
                    icon: UserPlus,
                    title: "CONNECT WITH ATHLETES",
                    description: "Our AI matching system connects you with athletes whose needs align perfectly with your expertise and experience."
                },
                {
                    icon: BadgeCheck,
                    title: "VERIFIED STATUS",
                    description: "Earn Signil's verification badge by completing our thorough vetting process, building instant trust with athletes and their families."
                },
                {
                    icon: LayoutGrid,
                    title: "GROW YOUR PRACTICE",
                    description: "Access our advisor dashboard with client management tools, educational resources, and insights to build a thriving NIL advisory practice."
                }
            ]
        },
        agents: {
            title: "Agents",
            cards: [
                {
                    icon: Star,
                    title: "CONNECT WITH PURPOSE",
                    description: "We don't throw you into a pool of noise, Signil curates connections where value and trust come first."
                },
                {
                    icon: BadgeCheck,
                    title: "VERIFIED STATUS",
                    description: "Earn Signil's verification badge by completing our thorough vetting process, building instant trust with athletes and their families."
                },
                {
                    icon: Target,
                    title: "SMART ATHLETE DISCOVERY",
                    description: "Signil's AI surfaces athletes based on your specialization, no more cold outreach, just warm, qualified leads."
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
        <div className="min-h-screen w-full bg-[#faf7f2] flex flex-col font-sans">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="max-w-6xl w-full flex flex-col items-center gap-12 text-center">

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight">
                        <span className="text-[#1a2e41]">Empowering </span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="text-[#b18150] inline-block"
                            >
                                {content[activeTab].title}
                            </motion.span>
                        </AnimatePresence>
                    </h1>

                    {/* Description */}
                    <p className="text-[#1a2e41]/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl bg-[#faf7f2] relative z-20">
                        Connect with the right athletes, build your NIL advisory practice, and make a real impact on the future of college sports.
                    </p>

                    {/* Tab Toggle (Refined Design) */}
                    <div className="inline-flex bg-white rounded-full overflow-hidden shadow-sm mt-4">
                        <button
                            onClick={() => handleTabChange('advisors')}
                            className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${activeTab === 'advisors'
                                ? 'bg-[#1a2e41] text-[#b18150]'
                                : 'bg-transparent text-[#b18150] hover:bg-gray-100'
                                }`}
                        >
                            Advisors
                        </button>
                        <button
                            onClick={() => handleTabChange('agents')}
                            className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${activeTab === 'agents'
                                ? 'bg-[#1a2e41] text-[#faf7f2]'
                                : 'bg-transparent text-[#b18150] hover:bg-gray-100'
                                }`}
                        >
                            Agents
                        </button>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12 mb-32">
                        <AnimatePresence mode='wait'>
                            {content[activeTab].cards.map((card, idx) => (
                                <motion.div
                                    key={activeTab + idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="flex flex-col rounded-xl overflow-hidden shadow-md bg-white h-full"
                                >
                                    {/* Card Header (Dark Navy) */}
                                    <div className="bg-[#1a2e41] py-4 px-2 flex items-center justify-center min-h-16">
                                        <span className="text-white font-bold text-sm tracking-widest uppercase text-center">
                                            {card.title}
                                        </span>
                                    </div>

                                    {/* Card Body (White) */}
                                    <div className="p-8 flex flex-col items-center text-center gap-6 flex-1">
                                        <card.icon className="w-10 h-10 text-[#b18150] stroke-[1.5]" />
                                        <p className="text-[#1a2e41] text-base leading-relaxed font-light">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Pricing Section (Dark Navy Background) */}
            <div className="w-full bg-[#163146] py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="max-w-7xl w-full flex flex-col items-center gap-12">

                    {/* Dynamic Pricing Title */}
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-serif text-white">
                            <span className="text-[#986a41]">
                                {activeTab === 'advisors' ? 'Advisor' : 'Agent'}
                            </span> Pricing Tiers
                        </h2>
                        <p className="text-gray-300 font-light text-lg">
                            Choose the plan that's right for your practice
                        </p>
                    </div>

                    {/* Pricing Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
                        {pricingTiers.map((tier, idx) => (
                            <div
                                key={idx}
                                className={`relative flex flex-col bg-white rounded-xl overflow-hidden ${tier.isBestValue ? 'ring-2 ring-[#986a41]' : ''}`}
                            >
                                {tier.isBestValue && (
                                    <div className="bg-white text-[#986a41] font-bold text-xs uppercase tracking-widest text-center py-2 pt-4">
                                        (BEST VALUE)
                                    </div>
                                )}

                                <div className={`p-6 flex flex-col items-center text-center gap-4 flex-1 ${tier.isBestValue ? 'pt-2' : 'pt-8'}`}>
                                    <h3 className="text-[#163146] font-serif font-bold text-xl uppercase tracking-wide">
                                        {tier.name}
                                    </h3>

                                    <div className="min-h-[60px] flex flex-col justify-center">
                                        {tier.price.includes('soon') ? (
                                            <span className="text-gray-500 italic font-medium">{tier.price}</span>
                                        ) : (
                                            <div className="flex items-baseline justify-center gap-1 text-[#163146]">
                                                <span className="text-4xl font-serif font-bold">{tier.price}</span>
                                                <span className="text-gray-500 font-medium text-sm">{tier.period}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Features List */}
                                    <ul className="flex flex-col gap-3 text-left w-full mt-4 flex-1">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-[#163146]/80 font-medium leading-tight">
                                                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full bg-[#986a41] hover:bg-[#855a35] text-white font-semibold rounded-full py-3 text-sm transition-colors shadow-md mt-6">
                                        {tier.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AdvisorsPage;
