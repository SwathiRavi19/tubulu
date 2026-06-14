"use client";

import { motion } from "framer-motion";
import { MousePointerClick, ShoppingBag, MapPin, Smile } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Choose Items",
    description: "Browse our extensive catalog and select your favorites.",
  },
  {
    icon: ShoppingBag,
    title: "Place Order",
    description: "Securely checkout with multiple payment options.",
  },
  {
    icon: MapPin,
    title: "Track Delivery",
    description: "Follow your order in real-time on the map.",
  },
  {
    icon: Smile,
    title: "Enjoy Service",
    description: "Receive your items fast and enjoy the premium experience.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-6 lg:px-20 relative z-10">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            How It <span className="text-gradient">Works</span>
          </motion.h2>
          <p className="text-white/60 text-lg">
            Four simple steps to get exactly what you need, exactly when you need it.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: "0%" }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                  <div className="w-20 h-20 rounded-2xl glass bg-black flex items-center justify-center relative z-10 border-2 border-white/10 group-hover:border-primary transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  {/* Step number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm z-20 shadow-lg glow-shadow">
                    {idx + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
