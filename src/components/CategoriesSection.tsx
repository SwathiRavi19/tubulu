"use client";

import { motion } from "framer-motion";
import { ShoppingCart, UtensilsCrossed, Shirt, Laptop, Pill, Home, Gift } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    icon: ShoppingCart,
    title: "Groceries",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
    color: "from-green-500/20 to-emerald-500/5",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Restaurants",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400",
    color: "from-orange-500/20 to-red-500/5",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]",
    colSpan: "md:col-span-2",
  },
  {
    icon: Shirt,
    title: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=400",
    color: "from-pink-500/20 to-rose-500/5",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]",
  },
  {
    icon: Laptop,
    title: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=400",
    color: "from-blue-500/20 to-cyan-500/5",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    icon: Pill,
    title: "Medicines",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
    color: "from-teal-500/20 to-emerald-500/5",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.3)]",
  },
  {
    icon: Home,
    title: "Home Essentials",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400",
    color: "from-purple-500/20 to-fuchsia-500/5",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
    colSpan: "md:col-span-2",
  },
  {
    icon: Gift,
    title: "Gifts & More",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400",
    color: "from-yellow-500/20 to-amber-500/5",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]",
  },
];

export default function CategoriesSection() {
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
            Everything You Need, <br className="hidden sm:block" />
            <span className="text-gradient">Delivered Instantly</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            From groceries and fashion to electronics and daily essentials, get anything delivered to your doorstep in minutes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} category={cat} index={idx} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center glass-card border border-white/10 bg-white/5 max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-50 blur-xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8">Whatever You Need, We Deliver.</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors shadow-lg glow-shadow">
                Download App
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-md">
                Start Ordering
              </button>
              <button className="px-8 py-4 bg-transparent text-white/80 font-bold rounded-full hover:text-white transition-colors border border-transparent hover:border-white/10">
                Explore Categories
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CategoryCard({ category, index }: { category: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-3xl group cursor-pointer border border-white/10 ${category.colSpan || ''} ${category.glow} transition-all duration-500`}
    >
      {/* Background Image with Parallax effect */}
      <motion.div 
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img src={category.image} alt={category.title} className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
      </motion.div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 mix-blend-multiply`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-end z-10">
        <motion.div 
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 w-12 h-12 rounded-xl backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 text-white"
        >
          <category.icon className="w-6 h-6" />
        </motion.div>
        <motion.h3 
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors"
        >
          {category.title}
        </motion.h3>
      </div>

      {/* Hover Reveal Line */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
      />
    </motion.div>
  );
}
