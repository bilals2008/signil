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

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AthletesPage;
