"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, LayoutGrid, MapPin, MessageSquare, Gift } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 px-6 lg:px-20 relative z-10">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why Choose <span className="text-gradient">Us</span>
          </motion.h2>
          <p className="text-white/60 text-lg">
            We don't just deliver products; we deliver an exceptional experience tailored to your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Top 3 Large Cards */}
          {[
            { icon: Zap, title: "Lightning Fast Delivery", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "hover:border-yellow-400/50" },
            { icon: ShieldCheck, title: "Secure & Safe Payments", color: "text-green-400", bg: "bg-green-400/10", border: "hover:border-green-400/50" },
            { icon: LayoutGrid, title: "Everything in One App", color: "text-primary", bg: "bg-primary/10", border: "hover:border-primary/50" },
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 flex flex-col items-center text-center group cursor-pointer border border-white/10 ${feature.border} transition-all duration-300 hover:-translate-y-2`}
            >
              <div className={`w-20 h-20 rounded-3xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-10 h-10 ${feature.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/50">Experience unparalleled service and reliability designed specifically for your daily needs.</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bottom 3 Smaller Cards */}
          {[
            { icon: MapPin, title: "Real-Time Tracking" },
            { icon: MessageSquare, title: "24/7 Customer Support" },
            { icon: Gift, title: "Exclusive Offers & Rewards" },
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
              className="glass-card p-6 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-lg">{feature.title}</h4>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-8">Join thousands of happy users and experience the future of delivery.</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
              Download App
            </button>
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors glow-shadow">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-md">
              Use Our App
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
