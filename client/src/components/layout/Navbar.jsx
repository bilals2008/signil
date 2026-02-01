// File: client/src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'; // Assuming shadcn button is available or I'll use standard tailwind if not

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center transition-all duration-300 ${scrolled ? 'top-4' : 'top-6'}`}>
            <nav className="bg-white rounded-full px-10 py-4 shadow-md flex items-center justify-between gap-12 transition-all duration-300">
                {/* Logo */}
                <div className="flex items-center gap-6">
                    <a href="/" className="text-2xl font-serif font-bold tracking-tight hover:opacity-90 transition-opacity flex items-center">
                        <span className="text-[#163146]">sign</span>
                        <span className="text-[#986a41]">il</span>
                    </a>

                    {/* Vertical Separator */}
                    <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/athletes" className="text-[15px] font-medium text-[#163146] hover:text-[#986a41] transition-colors">
                        Athletes
                    </Link>
                    <Link to="/advisors" className="text-[15px] font-medium text-[#163146] hover:text-[#986a41] transition-colors">
                        Advisors & Agents
                    </Link>
                    <a href="#" className="text-[15px] font-medium text-[#163146] hover:text-[#986a41] transition-colors">
                        Institutions
                    </a>
                </div>

                {/* CTA Button */}
                <Button className="rounded-full px-6 py-2 font-semibold text-white bg-[#986a41] hover:bg-[#855a35] transition-colors shadow-md">
                    Join Waitlist
                </Button>
            </nav>
        </div>
    );
};

export default Navbar;
