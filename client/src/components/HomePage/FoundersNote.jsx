import React from 'react';

const FoundersNote = () => {
    return (
        <section className="w-full bg-[#faf7f2] py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="max-w-3xl w-full flex flex-col items-center gap-10">

                {/* Pill Label */}
                <div className="bg-[#b18150] text-white text-[11px] font-bold tracking-[0.2em] px-5 py-2 rounded-full uppercase">
                    A Letter from the Founders
                </div>

                {/* Heading */}
                <h2 className="text-[#1a2e41] text-4xl md:text-5xl font-serif leading-tight">
                    From Confusion to Confidence <br />
                    One <span className="text-[#b18150]">Connection</span> at a Time
                </h2>

                {/* Body Text */}
                <div className="flex flex-col gap-6 text-[#1a2e41]/80 text-lg font-light leading-relaxed">
                    <p>
                        We're Ryan and Saurav, two recent graduates who saw a system full of promise, but burdened with confusion and missed opportunities. We spoke with countless athletes navigating overwhelming contracts and confusing NIL deals, and advisors eager to help but struggling to reach the people who needed them most.
                    </p>
                    <p>
                        That disconnect fueled the creation of Signil, a platform designed to bridge the gap, bringing clarity, fairness, and trusted support to athletes, advisors, agents, and institutions alike.
                    </p>
                    <p>
                        Signil is the platform we wish existed for our friends and every athlete stepping into the future of NIL, because everyone deserves a team they can trust.
                    </p>
                </div>

                {/* Sign-off */}
                <div className="mt-4 flex flex-col gap-2">
                    <p className="text-[#1a2e41] font-medium text-lg">Join us in this journey,</p>
                    <div className="text-[#b18150] font-serif text-xl italic">Ryan & Saurav</div>
                    <div className="text-[#1a2e41]/60 text-sm uppercase tracking-wider font-semibold">Co-Founders, Signil</div>
                </div>

            </div>
        </section>
    );
};

export default FoundersNote;
