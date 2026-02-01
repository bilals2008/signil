import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const AdvisorsPage = () => {
    return (
        <div className="min-h-screen w-full bg-[#faf7f2] flex flex-col font-sans">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="max-w-4xl w-full flex flex-col items-center gap-6 text-center">

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight">
                        <span className="text-[#1a2e41]">Empowering </span>
                        <span className="text-[#b18150]">Advisors</span>
                    </h1>

                    {/* Description */}
                    <p className="text-[#1a2e41]/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                        Connect with the right athletes, build your NIL advisory practice, and make a real impact on the future of college sports.
                    </p>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AdvisorsPage;
