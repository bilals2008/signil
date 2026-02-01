import React from 'react';
import { MessageSquare, ShieldCheck, Zap, ArrowRight, CornerDownLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const scoutFeatures = [
    {
        icon: MessageSquare,
        title: "Personalized Matching",
        description: "Our AI understands your sport, goals, and specific needs to recommend the most qualified advisors for your situation."
    },
    {
        icon: ShieldCheck,
        title: "Verified Professionals Only",
        description: "Every advisor on Signil is verified and credentialed through Signil's very own process, ensuring you receive guidance from qualified experts."
    },
    {
        icon: Zap,
        title: "Fast Connections",
        description: "Get matched with the right advisors in minutes, not days, allowing you to take advantage of time-sensitive opportunities."
    }
];

const ScoutSection = () => {
    return (
        <section className="w-full bg-[#10202F] py-24 px-4 sm:px-6 lg:px-8 flex justify-center text-[#faf7f2]">
            <div className="max-w-7xl w-full flex flex-col gap-16">

                {/* Heading */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
                        Meet <span className="text-[#986a41]">Scout</span>, Your AI Assistant
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
                        Scout helps identify your specific needs and connects you with the perfect advisors for your NIL journey.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Feature Cards */}
                    <div className="flex flex-col gap-6">
                        {scoutFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-[#1a2e41] p-6 rounded-xl border border-white/5 hover:border-[#986a41]/30 transition-colors flex gap-5 group">
                                <div className="mt-1 w-12 h-12 rounded-full bg-[#10202F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                    <feature.icon className="w-5 h-5 text-[#986a41]" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-serif font-medium text-[#986a41]">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Scout Chat Mockup */}
                    <div className="bg-[#faf7f2] rounded-2xl p-2 shadow-2xl relative overflow-hidden font-sans">
                        {/* Header */}
                        <div className="bg-[#f4f1ea] px-6 py-4 rounded-t-xl border-b border-gray-200 flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[#1a2e41] font-semibold">Scout</span>
                        </div>

                        {/* Chat Body */}
                        <div className="p-6 md:p-8 space-y-6 h-[400px] flex flex-col bg-[#faf7f2] rounded-b-xl border border-white/50">

                            {/* Scout Message */}
                            <div className="flex gap-4 items-start max-w-[90%]">
                                <div className="w-8 h-8 rounded-full bg-[#1a2e41] flex items-center justify-center text-white font-bold shrink-0 text-xs">
                                    AI
                                </div>
                                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-[#1a2e41] text-[15px] leading-relaxed">
                                    <span className="font-semibold block mb-1">Scout</span>
                                    Hi, I'm Scout—here to help you explore everything NIL, whether you're an athlete, advisor, school, or just curious about how it all works. I can guide you through what Signil offers and answer any questions along the way. What would you like to know?
                                </div>
                            </div>

                            {/* User Options (Floating Pill Style similar to site) */}
                            <div className="flex flex-wrap gap-2 ml-12">
                                {['Athletes', 'Advisors & Agents', 'Institutions', 'Join Waitlist'].map((opt, i) => (
                                    <button key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-[#1a2e41] hover:bg-[#1a2e41] hover:text-white transition-colors shadow-sm">
                                        {opt}
                                    </button>
                                ))}
                            </div>

                            {/* Input Field (Bottom) */}
                            <div className="mt-auto relative">
                                <input
                                    type="text"
                                    placeholder="Ask about NIL opportunities..."
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#986a41]/20 shadow-sm text-[#1a2e41]"
                                    disabled
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
                                    <CornerDownLeft className="w-4 h-4" />
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ScoutSection;
