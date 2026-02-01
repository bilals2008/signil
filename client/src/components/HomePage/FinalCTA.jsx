import React from 'react';
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
    return (
        <section className="w-full bg-[#163146] py-32 px-4 flex flex-col items-center text-center text-white">
            <div className="max-w-4xl w-full flex flex-col items-center gap-10">

                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl font-light font-sans leading-relaxed tracking-wide">
                    Whether you're an athlete looking for guidance or an advisor ready to
                    share your expertise, Signil is building the platform that will transform
                    NIL opportunities.
                </h2>

                {/* CTA Button */}
                <Button className="bg-[#b18150] hover:bg-[#966b41] text-white rounded-full px-10 py-7 text-lg font-medium transition-all shadow-lg hover:shadow-[#b18150]/20 mt-4">
                    Join the Limited Waitlist
                </Button>

                {/* Footer Note */}
                <p className="text-gray-400 text-sm font-light mt-8 tracking-wide">
                    Coming soon to campuses nationwide • Early access available Fall 2025
                </p>

            </div>
        </section>
    );
};

export default FinalCTA;
