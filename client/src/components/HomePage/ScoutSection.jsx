import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, ShieldCheck, Zap, CornerDownLeft, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

// Pre-generate stable particles for background to satisfy purity rules
const SCOUT_PARTICLES = [...Array(8)].map((_, i) => ({
    id: i,
    top: `${(i * 13) % 100}%`, // Deterministic "random" positions
    left: `${(i * 17) % 100}%`,
    duration: 15 + (i % 10),
    delay: i % 5
}));

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    }
};

const ScoutSection = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            role: 'scout',
            content: "Hi, I'm Scout—here to help you explore everything NIL, whether you're an athlete, advisor, school, or just curious about how it all works. I can guide you through what Signil offers and answer any questions along the way. What would you like to know?"
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatContainerRef = useRef(null);

    const scrollToBottom = (behavior = "smooth") => {
        if (chatContainerRef.current) {
            const { scrollHeight, clientHeight } = chatContainerRef.current;
            chatContainerRef.current.scrollTo({
                top: scrollHeight - clientHeight,
                behavior
            });
        }
    };

    useEffect(() => {
        // Only scroll if it's NOT the first mount
        if (messages.length > 1 || isTyping) {
            scrollToBottom();
        }
    }, [messages, isTyping]);

    const handleSendMessage = (e) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            role: 'user',
            content: inputValue
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulated Auto-reply
        setTimeout(() => {
            const scoutReply = {
                id: Date.now() + 1,
                role: 'scout',
                content: "That's a great question! I'm currently in 'mock mode', but in the full version of Signil, I'll analyze your specific profile and connect you with the most relevant advisors instantly. Would you like to join the waitlist to be among the first to try it?"
            };
            setMessages(prev => [...prev, scoutReply]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <section className="relative w-full bg-[#10202F] py-12 lg:py-40 px-5 sm:px-8 lg:px-12 flex justify-center text-[#faf7f2] overflow-hidden">

            {/* Premium Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-0 right-0 w-[600px] h-[600px] blur-[120px] rounded-full"
                    style={{ background: 'radial-gradient(circle, #986a41 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.05, 0.15, 0.05]
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                    className="absolute bottom-0 left-0 w-[700px] h-[700px] blur-[150px] rounded-full"
                    style={{ background: 'radial-gradient(circle, #163146 0%, transparent 70%)' }}
                />

                {/* Subtle Grid Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #faf7f2 1px, transparent 1px)',
                        backgroundSize: '48px 48px'
                    }}
                />

                {/* Floating Ambient Particles */}
                {SCOUT_PARTICLES.map(p => (
                    <motion.div
                        key={p.id}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0, 0.2, 0]
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay
                        }}
                        className="absolute w-1.5 h-1.5 bg-[#986a41] rounded-full blur-[1px]"
                        style={{ top: p.top, left: p.left }}
                    />
                ))}
            </div>

            <div className="max-w-7xl w-full flex flex-col gap-10 lg:gap-24 relative z-10">

                {/* Heading Area */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center space-y-8" // Added back the className for the motion.div
                >
                    <div className="flex flex-col gap-8 items-center"> {/* Added items-center for centering */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-3 bg-[#986a41]/10 border border-[#986a41]/20 px-6 py-2.5 rounded-full w-fit"
                        >
                            <div className="w-2 h-2 rounded-full bg-[#986a41] animate-pulse" />
                            <span className="text-[#986a41] text-xs font-black uppercase tracking-[0.2em]">Signil's AI Assistant</span>
                        </motion.div>

                        <motion.h2
                            variants={itemVariants}
                            className="text-2xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9] text-white" // Added text-white
                        >
                            Meet <span className="text-[#986a41] italic font-serif font-medium">Scout</span>. <br />
                            Your bridge to the right team.
                        </motion.h2>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Scout helps identify your specific needs and connects you with the perfect advisors for your NIL journey.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

                    {/* Left: Feature Cards */}
                    <div className="flex flex-col gap-10">
                        {scoutFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
                                className="group relative p-5 lg:p-10 rounded-[2.5rem] bg-white/2 border border-white/5 hover:bg-white/5 hover:border-[#986a41]/30 transition-all duration-700 flex flex-col sm:flex-row gap-4 lg:gap-8 shadow-2xl"
                            >
                                <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#10202F] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <feature.icon className="w-8 h-8 text-[#986a41]" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-[#986a41] transition-colors duration-500">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Bottom Corner Accent */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="w-2 h-2 rounded-full bg-[#986a41]/50 shadow-[0_0_15px_#986a41]" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Scout Chat Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                        className="relative perspective-2000"
                    >
                        {/* Interactive Glow */}
                        <motion.div
                            animate={{ opacity: [0.05, 0.15, 0.05] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -inset-10 bg-[#986a41] blur-[100px] rounded-[4rem] -z-10"
                        />

                        <div className="bg-[#faf7f2] rounded-[3rem] p-3 shadow-[0_50px_120px_-20px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden font-sans">
                            {/* Window Header */}
                            <div className="bg-[#f4f1ea] px-8 py-6 rounded-t-[2.5rem] border-b border-gray-200/80 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-2xl bg-[#1a2e41] flex items-center justify-center text-[#986a41] shadow-2xl">
                                            <MessageSquare className="w-6 h-6" />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-[3px] border-[#f4f1ea] shadow-lg animate-pulse" />
                                    </div>
                                    <div>
                                        <span className="text-[#1a2e41] font-black text-base block tracking-tight">Scout AI Intelligence</span>
                                        <span className="text-green-600 text-[11px] font-black uppercase tracking-[0.1em]">Active Protocol</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-2.5 h-2.5 rounded-full bg-gray-300/60" />
                                    ))}
                                </div>
                            </div>

                            {/* Chat Body */}
                            <div
                                ref={chatContainerRef}
                                className="p-4 md:p-10 space-y-8 h-[400px] lg:h-[520px] overflow-y-auto flex flex-col bg-[#faf7f2] rounded-b-[2.5rem] scrollbar-hide"
                            >
                                <AnimatePresence initial={false}>
                                    {messages.map((msg) => (
                                        <motion.div
                                            key={msg.id}
                                            initial={{ opacity: 0, y: 20, scale: 0.9, rotate: msg.role === 'user' ? 2 : -2 }}
                                            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                            className={`flex gap-5 items-start ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                        >
                                            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black shrink-0 text-[11px] shadow-2xl ${msg.role === 'scout' ? 'bg-[#1a2e41]' : 'bg-[#986a41]'}`}>
                                                {msg.role === 'scout' ? 'AI' : <User className="w-5 h-5" />}
                                            </div>
                                            <div className={`p-3 md:p-7 rounded-[2.5rem] shadow-[0_15px_45px_-10px_rgba(0,0,0,0.08)] border text-[16px] leading-[1.6] relative max-w-[88%] transition-all duration-300 ${msg.role === 'scout'
                                                ? 'bg-white rounded-tl-none border-gray-100 text-[#1a2e41]'
                                                : 'bg-[#1a2e41] rounded-tr-none border-white/5 text-white'
                                                }`}>
                                                <span className={`font-black text-[10px] block mb-3 uppercase tracking-[0.15em] ${msg.role === 'scout' ? 'text-[#986a41]' : 'text-[#986a41]'}`}>
                                                    {msg.role === 'scout' ? 'Scout Intelligence' : 'Authenticated User'}
                                                </span>
                                                {msg.content}
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-5 items-start"
                                    >
                                        <div className="w-11 h-11 rounded-2xl bg-[#1a2e41] flex items-center justify-center text-white font-black shrink-0 text-[11px] shadow-2xl">
                                            AI
                                        </div>
                                        <div className="bg-white p-6 rounded-[2.5rem] rounded-tl-none border border-gray-100 flex gap-2">
                                            {[1, 2, 3].map(i => (
                                                <motion.div
                                                    key={i}
                                                    animate={{
                                                        scale: [0.8, 1.2, 0.8],
                                                        opacity: [0.3, 1, 0.3]
                                                    }}
                                                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                                                    className="w-2 h-2 rounded-full bg-[#1a2e41]/40"
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Chat Footer/Input */}
                            <div className="p-8 border-t border-gray-100 bg-white/50 backdrop-blur-md">
                                <form onSubmit={handleSendMessage} className="relative group">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Ask Scout about NIL connections..."
                                        className="w-full bg-white border border-gray-200 rounded-[2rem] px-8 py-6 pr-16 text-base focus:outline-none focus:ring-8 focus:ring-[#986a41]/10 focus:border-[#986a41]/40 transition-all shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] text-[#1a2e41] placeholder:text-gray-400 font-medium"
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.1, rotate: -10 }}
                                        whileTap={{ scale: 0.9 }}
                                        type="submit"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3.5 bg-[#1a2e41] hover:bg-[#986a41] text-white rounded-2xl shadow-2xl transition-all duration-300"
                                    >
                                        <CornerDownLeft className="w-5 h-5" />
                                    </motion.button>
                                </form>
                            </div>
                        </div>

                        {/* Floating elements for extra depth */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-16 -right-16 w-40 h-40 bg-linear-to-br from-[#986a41] to-transparent opacity-10 rounded-full blur-[80px]"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ScoutSection;
