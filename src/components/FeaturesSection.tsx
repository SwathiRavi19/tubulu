"use client";

import { motion } from "framer-motion";
import { Zap, Map, ShieldCheck, Sparkles, Smartphone, Headset } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Our optimized routing algorithm ensures your orders arrive faster than ever.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Map,
    title: "Real-Time Tracking",
    description: "Watch your delivery arrive in real-time with precise GPS tracking.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Bank-grade encryption keeps your transactions safe and secure.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description: "AI-powered suggestions tailored to your unique preferences.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Smartphone,
    title: "Easy Ordering",
    description: "A seamless, intuitive interface designed for effortless navigation.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Headset,
    title: "24/7 Customer Support",
    description: "Our dedicated team is always ready to assist you anytime, anywhere.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 lg:px-20 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Built for the <span className="text-gradient">Future</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            Discover the powerful features that make our platform the preferred choice for millions of users worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card relative overflow-hidden group cursor-pointer"
    >
      {/* Hover Gradient Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Glow Effect */}
      <div className={`absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${feature.bg}`} />

      <div className="relative z-10 flex flex-col items-start text-left h-full">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 glass ${feature.bg} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <feature.icon className={`w-6 h-6 ${feature.color}`} />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-white/60 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
