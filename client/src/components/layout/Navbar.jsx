// File: client/src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        // Simple throttle to run at most every 50ms
        let timeoutId = null;
        const throttledScroll = () => {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    handleScroll();
                    timeoutId = null;
                }, 50);
            }
        };

        window.addEventListener('scroll', throttledScroll);
        return () => {
            window.removeEventListener('scroll', throttledScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
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

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/athletes" className="text-[15px] font-medium text-[#163146] hover:text-[#986a41] transition-colors">
                        Athletes
                    </Link>
                    <Link to="/advisors" className="text-[15px] font-medium text-[#163146] hover:text-[#986a41] transition-colors">
                        Advisors & Agents
                    </Link>
                </div>

                {/* CTA Button & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Button className="rounded-full px-6 py-2 font-semibold text-white bg-[#986a41] hover:bg-[#855a35] transition-colors shadow-md text-sm">
                        Join Waitlist
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-[#163146] hover:text-[#986a41] transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full mt-4 px-6 md:hidden">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-4">
                            <Link
                                to="/athletes"
                                className="text-[15px] font-medium text-[#163146] hover:text-[#986a41] transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Athletes
                            </Link>
                            <Link
                                to="/advisors"
                                className="text-[15px] font-medium text-[#163146] hover:text-[#986a41] transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Advisors & Agents
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
