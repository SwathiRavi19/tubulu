"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Product Designer",
    image: "SJ",
    content: "The most intuitive delivery app I've ever used. The UI is absolutely stunning and the tracking is incredibly accurate.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "MC",
    content: "Blazing fast performance. I can place my usual order in literally three taps. Game changer for busy workdays.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    image: "ER",
    content: "The customer service is unmatched. Had a minor issue with my address and it was resolved in seconds via the in-app chat.",
    rating: 5,
  },
  {
    name: "David Smith",
    role: "Startup Founder",
    image: "DS",
    content: "A masterclass in modern app design. Every interaction feels premium and thoughtfully crafted. Highly recommended.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 mb-16">
         <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Loved by <span className="text-gradient">Thousands</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        {/* Gradient Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-6 px-6 w-max"
        >
          {/* Duplicate for seamless infinite scroll */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div key={idx} className="glass-card w-[400px] shrink-0 hover:border-primary/50 transition-colors duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/80 mb-6 text-lg">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-lg">
                  {t.image}
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-white/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
