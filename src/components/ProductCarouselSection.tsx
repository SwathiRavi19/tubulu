"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  { name: "Margherita Pizza", category: "Food", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=300&q=80", price: "$14.99" },
  { name: "Premium Burger", category: "Food", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80", price: "$8.99" },
  { name: "Fresh Vegetables", category: "Groceries", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=300&q=80", price: "$12.50" },
  { name: "Organic Fruits", category: "Groceries", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=300&q=80", price: "$15.00" },
  { name: "iPhone 15 Pro", category: "Electronics", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=300&q=80", price: "$999.00" },
  { name: "MacBook Air", category: "Electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80", price: "$1199.00" },
  { name: "Sony Headphones", category: "Electronics", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=300&q=80", price: "$349.99" },
  { name: "Designer Watch", category: "Fashion", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=300&q=80", price: "$199.00" },
  { name: "Vitamins & Meds", category: "Medicines", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80", price: "$24.99" },
  { name: "Fresh Roses", category: "Gifts", image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=300&q=80", price: "$39.99" },
  { name: "Chocolate Cake", category: "Bakery", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80", price: "$29.00" },
  { name: "Luxury Gift Box", category: "Gifts", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=300&q=80", price: "$89.99" },
];

export default function ProductCarouselSection() {
  return (
    <section className="py-24 overflow-hidden relative z-10">
      <div className="container mx-auto px-6 lg:px-20 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Discover Endless <span className="text-gradient">Possibilities</span></h2>
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-8">
        {/* Left/Right Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scroll Left */}
        <div className="flex w-[200%]">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-6 px-3"
          >
            {[...products, ...products].slice(0, 12).map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Scroll Right */}
        <div className="flex w-[200%] -ml-[100%]">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="flex gap-6 px-3"
          >
            {[...products, ...products].slice(12, 24).map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: any }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className="w-[280px] shrink-0 p-2"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="glass-card bg-white/5 p-4 rounded-3xl cursor-pointer hover:border-primary/50 transition-colors duration-300 relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
        <div className="relative z-10 w-full h-40 rounded-2xl overflow-hidden mb-4 bg-gray-900 border border-white/5">
           <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
           <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold border border-white/10">
              {product.price}
           </div>
        </div>
        <div className="relative z-10">
          <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">{product.category}</p>
          <h4 className="font-bold text-lg text-white group-hover:text-primary transition-colors">{product.name}</h4>
        </div>
      </motion.div>
    </motion.div>
  );
}
