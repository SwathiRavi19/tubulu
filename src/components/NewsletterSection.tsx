"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Gift, Zap, DollarSign, Star, Send, CheckCircle2 } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email || phone) {
      setIsSubscribed(true);
    }
  };

  return (
    <section className="py-24 px-6 lg:px-20 relative z-10">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card border border-white/10 p-8 lg:p-16 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-primary/20 via-secondary/10 to-transparent blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          {/* Confetti (only shown on success) */}
          <AnimatePresence>
            {isSubscribed && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
              >
                 {[...Array(20)].map((_, i) => (
                   <motion.div
                     key={i}
                     initial={{ top: "100%", left: `${Math.random() * 100}%`, scale: 0 }}
                     animate={{ top: "-10%", rotate: Math.random() * 360, scale: Math.random() * 1.5 + 0.5 }}
                     transition={{ duration: 2 + Math.random() * 2, ease: "easeOut" }}
                     className={`absolute w-3 h-3 ${['bg-primary', 'bg-secondary', 'bg-accent', 'bg-yellow-400'][Math.floor(Math.random()*4)]} rounded-sm`}
                   />
                 ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Never Miss an <br />
                <span className="text-gradient">Exclusive Offer</span>
              </h2>
              <p className="text-white/60 text-lg mb-10">
                Subscribe to receive the latest discounts, product launches, and special rewards directly to your inbox.
              </p>

              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubscribe} 
                    className="flex flex-col gap-4 max-w-md"
                  >
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <input 
                        type="tel" 
                        placeholder="Mobile Number (Optional)" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                      <button type="submit" className="flex-1 bg-primary text-white font-bold py-4 rounded-2xl hover:bg-primary/90 transition-colors flex justify-center items-center gap-2 glow-shadow">
                        <Send className="w-5 h-5" /> Subscribe Now
                      </button>
                      <button type="button" className="flex-1 bg-white/10 border border-white/10 text-white font-bold py-4 rounded-2xl hover:bg-white/20 transition-colors flex justify-center items-center backdrop-blur-md">
                        Download App
                      </button>
                    </div>
                    <p className="text-xs text-white/40 text-center mt-2">No spam. Unsubscribe anytime.</p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/20 rounded-3xl p-8 text-center max-w-md"
                  >
                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">You're Subscribed!</h3>
                    <p className="text-white/60">Check your inbox for your exclusive welcome offer.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Content - Offer Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Gift, title: "Get $20 Welcome Bonus", desc: "Instantly credited to your wallet.", bg: "from-pink-500/20 to-rose-500/5", color: "text-pink-400" },
                { icon: Zap, title: "Early Access to Flash Sales", desc: "Beat the crowd to the best deals.", bg: "from-yellow-500/20 to-amber-500/5", color: "text-yellow-400" },
                { icon: DollarSign, title: "Exclusive Coupons", desc: "Extra discounts just for you.", bg: "from-green-500/20 to-emerald-500/5", color: "text-green-400" },
                { icon: Star, title: "Premium Member Rewards", desc: "Earn double points on orders.", bg: "from-primary/20 to-indigo-500/5", color: "text-primary" },
              ].map((offer, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-black/60 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/30 transition-colors cursor-default"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${offer.bg} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <offer.icon className={`w-8 h-8 mb-4 ${offer.color}`} />
                    <h4 className="font-bold text-lg leading-tight mb-2">{offer.title}</h4>
                    <p className="text-sm text-white/50">{offer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
