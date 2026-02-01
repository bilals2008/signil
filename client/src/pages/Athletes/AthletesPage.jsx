import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Shield, Aperture, DollarSign } from 'lucide-react';

const features = [
    {
        icon: Shield,
        title: "LEGAL PROTECTION",
        description: "Expert guidance on NCAA compliance, contract review, and eligibility, so you never leave money on the table."
    },
    {
        icon: Aperture,
        title: "BRAND BUILDING",
        description: "Personal branding strategies to help you stand out, create content, and attract sponsors."
    },
    {
        icon: DollarSign,
        title: "FINANCIAL GROWTH",
        description: "Financial advisors specializing in tax planning, budgeting, and long-term wealth building."
    }
];

const AthletesPage = () => {
    return (
        <div className="min-h-screen w-full bg-[#fdfdfd] flex flex-col font-sans">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="max-w-6xl w-full flex flex-col items-center gap-16">

                    {/* Header */}
                    <div className="text-center space-y-6 max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-serif font-medium text-[#163146]">
                            Empowering <span className="text-[#986a41]">Athletes</span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                            Navigate your NIL journey with confidence, supported by a team of experts handpicked for your unique goals.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex flex-col rounded-xl overflow-hidden shadow-md bg-white">

                                {/* Card Header (Dark Navy) */}
                                <div className="bg-[#163146] py-4 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm tracking-widest uppercase">
                                        {feature.title}
                                    </span>
                                </div>

                                {/* Card Body (White) */}
                                <div className="p-8 flex flex-col items-center text-center gap-6 h-full border border-t-0 border-gray-100 rounded-b-xl">
                                    {/* Icon */}
                                    <feature.icon className="w-10 h-10 text-[#986a41] stroke-[1.5]" />

                                    {/* Description */}
                                    <p className="text-[#163146] text-base leading-relaxed font-light">
                                        {feature.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Pricing Section */}
                    <div className="w-full bg-[#163146] rounded-3xl py-16 px-6 flex flex-col items-center text-center gap-12 text-white">
                        {/* Section Heading */}
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-serif">
                                <span className="text-[#986a41]">Athlete</span> Pricing
                            </h2>
                            <p className="text-gray-300 font-light max-w-xl mx-auto text-lg">
                                For athletes ready to take control of their NIL journey—smarter, safer, and stronger.
                            </p>
                        </div>

                        {/* Pricing Card */}
                        <div className="bg-white text-[#163146] rounded-xl p-8 shadow-2xl w-full max-w-[420px] flex flex-col items-center gap-6">

                            <div className="space-y-1">
                                <h3 className="font-serif font-bold text-2xl tracking-wide uppercase text-[#163146]">ASSOCIATE</h3>
                                <div className="flex items-baseline justify-center gap-1 text-[#163146]">
                                    <span className="text-5xl font-serif font-bold">$0</span>
                                    <span className="text-gray-500 font-medium">/month</span>
                                </div>
                            </div>

                            {/* Features List */}
                            <ul className="flex flex-col gap-4 text-left w-full px-4">
                                {[
                                    "Personalized Advisor Matching",
                                    "Unlimited Secure Messaging",
                                    "Contract & Opportunity Screening",
                                    "Brand Growth Resources",
                                    "NIL Opportunity Marketplace Access"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                        <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full bg-[#986a41] hover:bg-[#855a35] text-white font-semibold rounded-full py-4 text-lg transition-colors shadow-md mt-2">
                                Join the Waitlist
                            </button>

                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AthletesPage;
