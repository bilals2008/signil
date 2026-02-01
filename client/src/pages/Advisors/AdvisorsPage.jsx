// File: client/src/pages/Advisors/AdvisorsPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { UserPlus, BadgeCheck, LayoutGrid, Star, Target } from 'lucide-react';
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
            ]
        }
    };

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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
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
                                    <div className="bg-[#1a2e41] py-4 px-2 flex items-center justify-center min-h-[64px]">
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


            <Footer />
        </div>
    );
};

export default AdvisorsPage;
