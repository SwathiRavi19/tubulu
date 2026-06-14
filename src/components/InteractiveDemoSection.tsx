"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, ShoppingCart, CreditCard, MapPin, CheckCircle2, PlayCircle, PauseCircle } from "lucide-react";

const steps = [
  { id: 1, title: "Browse Products", desc: "Find what you love.", icon: Search },
  { id: 2, title: "Add to Cart", desc: "Review your choices.", icon: ShoppingCart },
  { id: 3, title: "Make Payment", desc: "Fast & secure.", icon: CreditCard },
  { id: 4, title: "Track Delivery", desc: "Live GPS tracking.", icon: MapPin },
  { id: 5, title: "Order Delivered", desc: "Enjoy your items!", icon: CheckCircle2 },
];

export default function InteractiveDemoSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-24 px-6 lg:px-20 relative z-10 overflow-hidden bg-black/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            See the App in <span className="text-gradient">Action</span>
          </motion.h2>
          <p className="text-white/60 text-lg">
            Experience our seamless five-step ordering journey designed to get you what you need, instantly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          
          {/* Left: Step Indicators */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {steps.map((step) => (
              <div 
                key={step.id}
                onClick={() => { setActiveStep(step.id); setIsPlaying(false); }}
                className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${activeStep === step.id ? 'bg-white/10 border-primary shadow-lg shadow-primary/20 scale-105' : 'bg-transparent border-transparent hover:bg-white/5 opacity-50 hover:opacity-100'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activeStep === step.id ? 'bg-primary text-white' : 'bg-white/10 text-white/50'}`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-bold ${activeStep === step.id ? 'text-white' : 'text-white/70'}`}>{step.title}</h4>
                  <p className="text-sm text-white/50">{step.desc}</p>
                </div>
                {activeStep === step.id && (
                  <motion.div layoutId="activeIndicator" className="absolute left-0 w-1 h-12 bg-primary rounded-r-full" />
                )}
              </div>
            ))}

            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="mt-8 flex items-center justify-center gap-2 w-max mx-auto lg:mx-0 px-6 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isPlaying ? <PauseCircle className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
              {isPlaying ? "Pause Demo" : "Play Demo"}
            </button>
          </div>

          {/* Right: Interactive Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center relative perspective-1000">
             {/* Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
             
             <motion.div 
               className="relative w-[320px] h-[650px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-2xl glass flex flex-col overflow-hidden"
             >
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
                  <div className="w-24 h-6 bg-black rounded-b-2xl"></div>
                </div>

                {/* Screen Content Wrapper */}
                <div className="flex-1 w-full bg-slate-50 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    
                    {/* Step 1: Browse */}
                    {activeStep === 1 && (
                      <motion.div 
                        key="step1" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, filter: "blur(10px)" }} className="absolute inset-0 bg-slate-50 p-4 pt-12 text-black"
                      >
                         <div className="w-full h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-3 mb-6"><Search className="w-4 h-4 text-gray-400 mr-2"/><div className="w-1/2 h-2 bg-gray-200 rounded"></div></div>
                         <div className="w-full h-32 bg-primary/10 rounded-2xl mb-4 border border-primary/20"></div>
                         <div className="flex gap-4 mb-4">
                           <div className="w-1/2 h-40 bg-white rounded-2xl shadow-sm border border-gray-100 p-2"><div className="w-full h-24 bg-gray-100 rounded-xl mb-2"></div><div className="w-3/4 h-2 bg-gray-300 rounded mb-1"></div><div className="w-1/2 h-2 bg-gray-200 rounded"></div></div>
                           <div className="w-1/2 h-40 bg-white rounded-2xl shadow-sm border border-gray-100 p-2"><div className="w-full h-24 bg-gray-100 rounded-xl mb-2"></div><div className="w-3/4 h-2 bg-gray-300 rounded mb-1"></div><div className="w-1/2 h-2 bg-gray-200 rounded"></div></div>
                         </div>
                      </motion.div>
                    )}

                    {/* Step 2: Cart */}
                    {activeStep === 2 && (
                      <motion.div 
                        key="step2" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="absolute inset-0 bg-slate-50 p-4 pt-12 text-black flex flex-col"
                      >
                         <h3 className="font-bold text-center mb-6 text-lg">Your Cart</h3>
                         <div className="space-y-3 mb-auto">
                            <div className="w-full h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center p-2"><div className="w-16 h-16 bg-gray-100 rounded-xl mr-3"></div><div className="flex-1"><div className="w-1/2 h-3 bg-gray-300 rounded mb-2"></div><div className="w-1/4 h-3 bg-primary rounded"></div></div></div>
                            <div className="w-full h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center p-2"><div className="w-16 h-16 bg-gray-100 rounded-xl mr-3"></div><div className="flex-1"><div className="w-1/2 h-3 bg-gray-300 rounded mb-2"></div><div className="w-1/4 h-3 bg-primary rounded"></div></div></div>
                         </div>
                         <div className="w-full h-14 bg-primary rounded-2xl mt-4 flex items-center justify-center text-white font-bold animate-pulse">Proceed to Checkout</div>
                      </motion.div>
                    )}

                    {/* Step 3: Payment */}
                    {activeStep === 3 && (
                      <motion.div 
                        key="step3" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }} className="absolute inset-0 bg-slate-50 p-4 pt-12 text-black flex flex-col"
                      >
                         <h3 className="font-bold text-center mb-6 text-lg">Payment</h3>
                         <div className="w-full h-48 bg-gradient-to-tr from-gray-900 to-gray-700 rounded-2xl shadow-lg mb-6 relative overflow-hidden">
                            <div className="absolute top-4 right-4 w-12 h-8 bg-white/20 rounded"></div>
                            <div className="absolute bottom-4 left-4 w-3/4 h-4 bg-white/20 rounded"></div>
                         </div>
                         <div className="w-full h-16 bg-white border border-gray-200 rounded-2xl mb-3"></div>
                         <div className="w-full h-16 bg-white border border-gray-200 rounded-2xl mb-auto"></div>
                         <div className="w-full h-14 bg-black rounded-2xl mt-4 flex items-center justify-center text-white font-bold relative overflow-hidden">
                            <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute inset-0 bg-white/20 skew-x-12"></motion.div>
                            Processing...
                         </div>
                      </motion.div>
                    )}

                    {/* Step 4: Tracking */}
                    {activeStep === 4 && (
                      <motion.div 
                        key="step4" initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="absolute inset-0 bg-[#e5e3df] text-black overflow-hidden flex flex-col"
                      >
                         <div className="absolute inset-0">
                           <div className="absolute top-1/2 left-0 w-full h-4 bg-white -rotate-12"></div>
                           <motion.div 
                             animate={{ x: [0, 150, 200], y: [0, -30, 50] }} 
                             transition={{ duration: 4, ease: "linear" }}
                             className="absolute top-[40%] left-[20%] w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-primary z-20"
                           >
                             <span className="text-xl">🛵</span>
                           </motion.div>
                         </div>
                         <div className="mt-auto relative z-30 bg-white rounded-t-3xl p-5 shadow-lg h-48 flex flex-col justify-end">
                            <div className="flex justify-between items-center mb-4"><div className="w-1/2 h-6 bg-gray-200 rounded"></div><div className="w-1/4 h-6 bg-primary/20 rounded"></div></div>
                            <div className="w-full h-16 bg-gray-50 rounded-xl border border-gray-100 flex items-center p-2"><div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div><div className="w-1/2 h-3 bg-gray-300 rounded"></div></div>
                         </div>
                      </motion.div>
                    )}

                    {/* Step 5: Delivered */}
                    {activeStep === 5 && (
                      <motion.div 
                        key="step5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-primary flex flex-col items-center justify-center text-white p-6 text-center"
                      >
                         <motion.div 
                           initial={{ scale: 0, rotate: -180 }} 
                           animate={{ scale: 1, rotate: 0 }} 
                           transition={{ type: "spring", bounce: 0.5 }}
                           className="w-24 h-24 bg-white text-primary rounded-full flex items-center justify-center shadow-2xl mb-6"
                         >
                            <CheckCircle2 className="w-12 h-12" />
                         </motion.div>
                         <h3 className="text-3xl font-bold mb-2">Delivered!</h3>
                         <p className="text-white/80">Enjoy your order.</p>
                         <div className="w-full h-14 bg-white/20 rounded-2xl mt-12 flex items-center justify-center font-bold">Rate Your Experience</div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
