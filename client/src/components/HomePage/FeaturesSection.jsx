// File: client/src/components/sections/FeaturesSection.jsx
import React from 'react';
import { Users, TrendingUp, Handshake } from 'lucide-react';

const features = [
    {
        icon: Users,
        title: "AI Matchmaking That Works Like a Team Scout",
        points: [
            "Scout recommends the best connections based on your sport, goals, and experience.",
            "Whether you're just starting or already monetizing, Scout adapts your matches accordingly.",
            "Scout works in the background to find top connections for you."
        ]
    },
    {
        icon: TrendingUp,
        title: "Advisor Tools That Actually Deliver ROI",
        points: [
            "Manage outreach, messages, and follow-ups in one place.",
            "Top athletes, advisors, and agents get higher profile rankings and better exposure.",
            "Use data to spot patterns in athlete interest, so you can adjust your profile for greater impact."
        ]
    },
    {
        icon: Handshake,
        title: "Compliance & Trust Built Into the Platform",
        points: [
            "Signil's verification process to receive trust and legitimacy.",
            "NCAA ready: Built to meet NCAA's NIL regulations and school requirements.",
            "Personal info and contracts are safely stored and protected."
        ]
    }
];

const FeaturesSection = () => {
    return (
        <section className="w-full bg-[#faf7f2] py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="max-w-7xl w-full flex flex-col gap-16">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-serif text-center font-medium leading-tight text-[#163146]">
                    Built for <span className="text-[#986a41]">athletes</span>. Trusted by <span className="text-[#986a41]">advisors</span>.
                    <br className="hidden md:block" />
                    Designed for the <span className="text-[#986a41]">NIL</span> era.
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col gap-8 items-center md:items-start text-center md:text-left">

                            {/* Icon Card */}
                            <div className="w-full aspect-square bg-[#1a2e41] rounded-xl flex items-center justify-center shadow-lg">
                                <feature.icon className="w-24 h-24 text-[#986a41] stroke-[1.5]" />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-serif font-medium text-[#163146] leading-snug">
                                    {feature.title}
                                </h3>

                                <ul className="flex flex-col gap-3">
                                    {feature.points.map((point, i) => (
                                        <li key={i} className="text-gray-600 text-[15px] leading-relaxed relative pl-4">
                                            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-[#986a41] rounded-full" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
