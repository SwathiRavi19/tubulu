"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle, MapPin, CreditCard, HeadphonesIcon } from "lucide-react";

export default function SecurityTrustSection() {
  return (
    <section className="py-24 px-6 lg:px-20 relative z-10">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent pointer-events-none blur-3xl"></div>

      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Your Trust and Security <span className="text-gradient">Come First</span>
          </motion.h2>
          <p className="text-white/60 text-lg mb-12">
            Every order, payment, and personal detail is protected with industry-leading security.
          </p>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card flex flex-col md:flex-row justify-around items-center py-6 px-4 mb-16 border-white/10 bg-white/5 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10"
          >
            <div className="flex-1 text-center py-2">
              <h3 className="text-3xl font-bold text-white mb-1">100K+</h3>
              <p className="text-sm text-white/50 uppercase tracking-widest font-semibold">Happy Customers</p>
            </div>
            <div className="flex-1 text-center py-2">
              <h3 className="text-3xl font-bold text-white mb-1">1M+</h3>
              <p className="text-sm text-white/50 uppercase tracking-widest font-semibold">Secure Transactions</p>
            </div>
            <div className="flex-1 text-center py-2">
              <h3 className="text-3xl font-bold text-green-400 mb-1">99.9%</h3>
              <p className="text-sm text-white/50 uppercase tracking-widest font-semibold">Payment Success Rate</p>
            </div>
          </motion.div>
        </div>

        {/* 6 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Lock, title: "End-to-End Secure Payments", color: "text-green-400" },
            { icon: ShieldCheck, title: "Advanced Data Protection", color: "text-blue-400" },
            { icon: CheckCircle, title: "Verified Stores and Sellers", color: "text-primary" },
            { icon: MapPin, title: "Real-Time Order Tracking", color: "text-yellow-400" },
            { icon: CreditCard, title: "Multiple Trusted Payment Methods", color: "text-secondary" },
            { icon: HeadphonesIcon, title: "24/7 Customer Support", color: "text-purple-400" },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card relative group overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-center gap-4">
                 <div className="relative">
                    {/* Animated Badge */}
                    <div className="absolute -inset-2 bg-white/5 rounded-full blur-sm group-hover:bg-white/10 transition-colors"></div>
                    <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                 </div>
                 <h4 className="font-bold text-lg leading-tight flex-1 group-hover:text-white/90">{feature.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">Trusted by thousands of users every day.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
