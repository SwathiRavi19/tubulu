"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Download, ShoppingBag, Store, LayoutGrid, Star } from "lucide-react";

const stats = [
  { label: "Downloads", value: 100, suffix: "K+", icon: Download, color: "text-primary", bg: "bg-primary/20" },
  { label: "Orders Delivered", value: 50, suffix: "K+", icon: ShoppingBag, color: "text-secondary", bg: "bg-secondary/20" },
  { label: "Partner Stores", value: 500, suffix: "+", icon: Store, color: "text-green-500", bg: "bg-green-500/20" },
  { label: "Categories", value: 50, suffix: "+", icon: LayoutGrid, color: "text-blue-500", bg: "bg-blue-500/20" },
  { label: "User Rating", value: 4.9, suffix: "★", icon: Star, color: "text-yellow-500", bg: "bg-yellow-500/20", isFloat: true },
];

function AnimatedCounter({ value, isFloat = false }: { value: number, isFloat?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{isFloat ? count.toFixed(1) : Math.floor(count)}</span>;
}

export default function AppStatisticsSection() {
  return (
    <section className="py-20 px-6 lg:px-20 relative z-10 border-y border-white/5 bg-white/[0.02]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none blur-2xl"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-card flex flex-col items-center justify-center text-center p-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center font-mono">
                <AnimatedCounter value={stat.value} isFloat={stat.isFloat} />
                <span className={stat.color}>{stat.suffix}</span>
              </div>
              
              <p className="text-white/50 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
