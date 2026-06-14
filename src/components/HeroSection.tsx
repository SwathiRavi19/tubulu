"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Download, Play, Star, ShieldCheck, Zap, Clock, CheckCircle2,
  Search, Bell, SlidersHorizontal, Home, ShoppingCart, User, Heart,
  MapPin, Phone, MessageSquare, CreditCard, Apple, ChevronRight,
  Settings, ShoppingBag, Map, ArrowRight, PackageCheck, Bike
} from "lucide-react";

// ─── App Screen Contents ───────────────────────────────────────────────────────
const HomeScreen = () => (
  <div className="flex-1 w-full bg-slate-50 text-slate-900 flex flex-col relative overflow-hidden">
    <div className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-4 pt-10 rounded-b-3xl shadow-md">
      <div className="flex justify-between items-center mb-3">
        <div>
          <p className="text-[10px] opacity-70 uppercase tracking-widest">Good Morning 👋</p>
          <p className="font-bold text-base">What do you need today?</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
          <Bell className="w-4 h-4" />
        </div>
      </div>
      <div className="flex items-center bg-white/20 backdrop-blur-md rounded-xl px-3 py-2 gap-2">
        <Search className="w-4 h-4 text-white/70" />
        <span className="text-sm text-white/70">Search food, grocery…</span>
      </div>
    </div>
    <div className="p-4 flex-1 overflow-hidden">
      <div className="flex gap-3 mb-4">
        {[{ e: "🍔", n: "Food" }, { e: "🛒", n: "Grocery" }, { e: "💊", n: "Pharma" }, { e: "📦", n: "More" }].map((c, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-sm border border-gray-100 ${["bg-orange-50", "bg-green-50", "bg-blue-50", "bg-purple-50"][i]}`}>{c.e}</div>
            <span className="text-[10px] font-semibold text-gray-600">{c.n}</span>
          </div>
        ))}
      </div>
      <div className="h-24 rounded-2xl bg-gradient-to-r from-orange-400 to-red-500 p-4 text-white mb-4 relative overflow-hidden shadow-md">
        <div className="relative z-10">
          <p className="text-[10px] font-bold uppercase opacity-80 mb-1">Limited Offer</p>
          <p className="font-bold text-base leading-tight">50% Off First Order</p>
        </div>
        <div className="absolute -bottom-3 -right-3 text-5xl opacity-40">🍕</div>
      </div>
      {[{ n: "Burger King", t: "15 min", r: "4.8", e: "🍔" }, { n: "Healthy Bowl", t: "12 min", r: "4.9", e: "🥗" }].map((s, i) => (
        <div key={i} className="flex gap-3 bg-white rounded-xl p-2 shadow-sm mb-2 border border-gray-50">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${["bg-orange-100", "bg-green-100"][i]}`}>{s.e}</div>
          <div className="flex flex-col justify-center">
            <p className="font-bold text-xs">{s.n}</p>
            <p className="text-[10px] text-gray-400">⭐ {s.r} • {s.t}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="h-14 bg-white border-t border-gray-100 flex justify-around items-center px-4">
      {[Home, Search, ShoppingCart, User].map((Icon, i) => (
        <div key={i} className={`flex flex-col items-center ${i === 0 ? "text-violet-600" : "text-gray-400"}`}>
          <Icon className="w-5 h-5" />
        </div>
      ))}
    </div>
  </div>
);

const CategoriesScreen = () => (
  <div className="flex-1 w-full bg-slate-50 text-slate-900 flex flex-col overflow-hidden">
    <div className="bg-white p-4 pt-10 border-b border-gray-100 shadow-sm">
      <h2 className="font-bold text-lg text-center">All Categories</h2>
    </div>
    <div className="p-4 grid grid-cols-2 gap-3 overflow-hidden flex-1">
      {[
        { e: "🍕", n: "Food", bg: "from-orange-400 to-red-400" },
        { e: "🛒", n: "Groceries", bg: "from-green-400 to-emerald-500" },
        { e: "👗", n: "Fashion", bg: "from-pink-400 to-rose-500" },
        { e: "💻", n: "Electronics", bg: "from-blue-400 to-cyan-500" },
        { e: "💊", n: "Medicines", bg: "from-teal-400 to-green-500" },
        { e: "🎁", n: "Gifts", bg: "from-purple-400 to-violet-500" },
      ].map((c, i) => (
        <div key={i} className={`rounded-2xl bg-gradient-to-br ${c.bg} p-4 flex flex-col justify-between h-24 relative overflow-hidden shadow-md`}>
          <span className="text-3xl">{c.e}</span>
          <p className="text-white font-bold text-sm">{c.n}</p>
        </div>
      ))}
    </div>
  </div>
);

const CartScreen = () => (
  <div className="flex-1 w-full bg-slate-50 text-slate-900 flex flex-col overflow-hidden">
    <div className="bg-white p-4 pt-10 border-b border-gray-100 shadow-sm text-center font-bold">Your Cart</div>
    <div className="p-4 flex-1 overflow-hidden">
      {[{ n: "Double Cheeseburger", p: "$12.99", e: "🍔", q: 1 }, { n: "Large Fries", p: "$4.50", e: "🍟", q: 2 }, { n: "Soda", p: "$2.00", e: "🥤", q: 1 }].map((item, i) => (
        <div key={i} className="flex gap-3 bg-white rounded-xl p-2 shadow-sm mb-2 border border-gray-100">
          <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">{item.e}</div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="font-bold text-xs leading-tight">{item.n}</p>
            <p className="text-violet-600 font-bold text-xs">{item.p}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-5 h-5 bg-violet-100 rounded flex items-center justify-center text-xs text-violet-600 font-bold">{item.q}</div>
          </div>
        </div>
      ))}
      <div className="mt-3 bg-white rounded-xl p-3 border border-gray-100 shadow-sm space-y-1">
        <div className="flex justify-between text-xs text-gray-500"><span>Subtotal</span><span>$21.99</span></div>
        <div className="flex justify-between text-xs text-gray-500"><span>Delivery</span><span>$2.00</span></div>
        <div className="flex justify-between text-sm font-bold border-t border-gray-100 pt-1 mt-1"><span>Total</span><span>$23.99</span></div>
      </div>
    </div>
    <div className="p-4 bg-white border-t border-gray-100">
      <button className="w-full bg-violet-600 text-white font-bold py-3 rounded-xl shadow-md text-sm">Checkout →</button>
    </div>
  </div>
);

const PaymentScreen = () => (
  <div className="flex-1 w-full bg-slate-50 text-slate-900 flex flex-col overflow-hidden">
    <div className="bg-white p-4 pt-10 border-b border-gray-100 shadow-sm text-center font-bold">Payment</div>
    <div className="p-4 flex-1 overflow-hidden">
      <div className="w-full h-36 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-700 text-white p-4 flex flex-col justify-between shadow-xl mb-4">
        <div className="flex justify-between items-center">
          <span className="font-mono text-xs tracking-widest opacity-70">VISA</span>
          <div className="flex -space-x-2"><div className="w-6 h-6 bg-yellow-400 rounded-full opacity-80" /><div className="w-6 h-6 bg-orange-500 rounded-full opacity-80" /></div>
        </div>
        <div>
          <p className="font-mono text-xs tracking-wider opacity-60">•••• •••• •••• 4242</p>
          <p className="text-xs font-bold mt-1">Alex Smith</p>
        </div>
      </div>
      <div className="space-y-2">
        {["Apple Pay", "Google Pay", "UPI"].map((m, i) => (
          <div key={i} className={`flex items-center justify-between p-3 rounded-xl border ${i === 0 ? "border-violet-300 bg-violet-50" : "border-gray-100 bg-white"} shadow-sm`}>
            <span className="font-semibold text-xs">{m}</span>
            {i === 0 ? <CheckCircle2 className="w-4 h-4 text-violet-600" /> : <div className="w-4 h-4 rounded-full border-2 border-gray-300" />}
          </div>
        ))}
      </div>
    </div>
    <div className="p-4">
      <button className="w-full bg-black text-white font-bold py-3 rounded-xl shadow-md text-sm relative overflow-hidden">
        <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute inset-0 bg-white/20 skew-x-12" />
        Pay $23.99
      </button>
    </div>
  </div>
);

const TrackingScreen = () => (
  <div className="flex-1 w-full text-slate-900 flex flex-col relative overflow-hidden bg-[#e5e3df]">
    {/* Map */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-full h-6 bg-white/60 -rotate-6" />
      <div className="absolute top-1/2 left-0 w-full h-4 bg-white/60 rotate-3" />
      <div className="absolute top-[10%] left-[30%] w-4 h-4 bg-white/60 rounded-full" />
      <svg className="absolute inset-0 w-full h-full">
        <path d="M60,80 Q140,180 220,300" fill="none" stroke="#7c3aed" strokeWidth="3" strokeDasharray="6 3" />
      </svg>
      {/* Static store pin */}
      <div className="absolute top-[80px] left-[60px] w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center shadow-lg z-10">
        <ShoppingBag className="w-4 h-4" />
      </div>
      {/* Destination pin */}
      <div className="absolute bottom-[160px] right-[40px] w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
        <MapPin className="w-4 h-4" />
      </div>
      {/* Animated delivery bike */}
      <motion.div
        animate={{ x: [0, 80, 160], y: [0, 40, 80], rotate: [0, 5, 0] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-[120px] left-[80px] w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-violet-400 z-20"
      >
        <span className="text-lg">🛵</span>
      </motion.div>
    </div>
    {/* Card */}
    <div className="mt-auto relative z-20 bg-white rounded-t-3xl p-4 shadow-xl">
      <div className="w-8 h-1 bg-gray-200 rounded-full mx-auto mb-3" />
      <div className="flex justify-between items-center mb-3">
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">ETA</p>
          <p className="font-bold text-xl">10 Minutes</p>
        </div>
        <div className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-lg">On the Way</div>
      </div>
      <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-2 border border-gray-100">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl">👨</div>
        <div className="flex-1"><p className="font-bold text-xs">John D.</p><p className="text-[10px] text-gray-400">⭐ 4.9 · Honda PCX</p></div>
        <button className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center"><Phone className="w-3 h-3 text-violet-600" /></button>
      </div>
    </div>
  </div>
);

const DeliveredScreen = () => (
  <div className="flex-1 w-full bg-gradient-to-br from-green-600 to-emerald-700 flex flex-col items-center justify-center text-white p-6 text-center relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "110%", x: `${Math.random() * 100}%`, rotate: 0 }}
          animate={{ y: "-20%", rotate: Math.random() * 360 }}
          transition={{ duration: 2 + Math.random(), delay: i * 0.15, repeat: Infinity, repeatDelay: 2 }}
          className={`absolute w-3 h-3 rounded-sm ${["bg-yellow-300", "bg-pink-300", "bg-blue-300", "bg-white"][i % 4]}`}
        />
      ))}
    </div>
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
      className="w-24 h-24 bg-white text-green-600 rounded-full flex items-center justify-center shadow-2xl mb-5 relative z-10"
    >
      <CheckCircle2 className="w-12 h-12 fill-current" />
    </motion.div>
    <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-2xl font-bold mb-2 relative z-10">Delivered!</motion.h3>
    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-green-100 text-sm mb-6 relative z-10">Delivered Successfully 🎉</motion.p>
    <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-3 rounded-xl relative z-10 text-sm">
      Rate Your Experience ⭐
    </motion.button>
  </div>
);

const screens = [
  { id: "home", label: "Home Screen", Component: HomeScreen },
  { id: "categories", label: "Categories", Component: CategoriesScreen },
  { id: "cart", label: "Cart", Component: CartScreen },
  { id: "payment", label: "Payment", Component: PaymentScreen },
  { id: "tracking", label: "Live Tracking", Component: TrackingScreen },
  { id: "delivered", label: "Delivered", Component: DeliveredScreen },
];

const floatingCards = [
  { icon: PackageCheck, label: "Order Confirmed", color: "text-green-400", bg: "bg-green-400/20", position: "top-[10%] right-0 lg:-right-6" },
  { icon: ShieldCheck, label: "Payment Successful", color: "text-blue-400", bg: "bg-blue-400/20", position: "top-[32%] right-0 lg:-right-6" },
  { icon: Bike, label: "Delivery in 10 min", color: "text-primary", bg: "bg-primary/20", position: "bottom-[32%] left-0 lg:-left-6" },
  { icon: Star, label: "Cashback Earned", color: "text-yellow-400", bg: "bg-yellow-400/20", position: "bottom-[12%] left-0 lg:-left-6" },
];

const glowColors = [
  "from-violet-600/50 to-indigo-600/50",
  "from-fuchsia-600/50 to-pink-600/50",
  "from-blue-600/50 to-cyan-600/50",
];

export default function HeroSection() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [glowIdx, setGlowIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [12, -12]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-12, 12]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  // Auto-cycle screens every 3.5s
  useEffect(() => {
    const t = setInterval(() => setActiveScreen(p => (p + 1) % screens.length), 3500);
    return () => clearInterval(t);
  }, []);

  // Cycle glow color every 2.5s
  useEffect(() => {
    const t = setInterval(() => setGlowIdx(p => (p + 1) % glowColors.length), 2500);
    return () => clearInterval(t);
  }, []);

  const ActiveComponent = screens[activeScreen].Component;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 lg:px-20 z-10 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ─── Left Content ─────────────────────────────────── */}
        <div className="flex flex-col space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-max backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium text-white/80">Next-Gen Mobile App — Live Now</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            Everything You Need,{" "}
            <span className="text-gradient">Delivered in Minutes.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
          >
            Experience lightning-fast delivery, effortless ordering, and secure payments with our next-generation mobile app.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-primary rounded-full hover:bg-primary/90 glow-shadow overflow-hidden transition-all duration-200">
              <span className="relative z-10 flex items-center"><Download className="w-5 h-5 mr-2" />Download App</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10 z-0"></div>
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 backdrop-blur-md transition-all duration-200">
              <Play className="w-5 h-5 mr-2 fill-current" />Watch Demo
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10"
          >
            {[{ icon: Zap, text: "Fast Delivery" }, { icon: CheckCircle2, text: "Easy Ordering" }, { icon: ShieldCheck, text: "Secure Payments" }, { icon: Clock, text: "24/7 Support" }].map((f, i) => (
              <div key={i} className="flex items-center space-x-2 text-white/70">
                <f.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{f.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-8 pt-4"
          >
            <div><p className="text-3xl font-bold text-white">50K+</p><p className="text-sm text-white/50 font-medium">Downloads</p></div>
            <div className="w-px h-10 bg-white/10"></div>
            <div><p className="text-3xl font-bold text-white">10K+</p><p className="text-sm text-white/50 font-medium">Daily Orders</p></div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <div className="flex items-center text-3xl font-bold text-white">4.9 <Star className="w-6 h-6 ml-1 text-yellow-500 fill-yellow-500" /></div>
              <p className="text-sm text-white/50 font-medium">Rating</p>
            </div>
          </motion.div>
        </div>

        {/* ─── Right: Animated Phone ─────────────────────────── */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-[700px] w-full flex justify-center items-center"
          style={{ perspective: 1200 }}
        >
          {/* Animated Ambient Glow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={glowIdx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.5 }}
              className={`absolute inset-0 bg-gradient-radial ${glowColors[glowIdx]} blur-[80px] rounded-full scale-75 pointer-events-none`}
            />
          </AnimatePresence>

          {/* Floating Phone with parallax + float */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            animate={{ y: [0, -18, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
            className="relative w-[300px] h-[620px] z-10"
          >
            {/* Phone Frame */}
            <div className="w-full h-full bg-black rounded-[3.2rem] border-[8px] border-gray-800 shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col relative"
              style={{ boxShadow: "0 50px 100px -20px rgba(139,92,246,0.4), 0 0 0 1px rgba(255,255,255,0.05), inset 0 0 0 2px rgba(255,255,255,0.03)" }}
            >
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 flex justify-center z-50">
                <div className="w-28 h-6 bg-black rounded-b-3xl"></div>
              </div>

              {/* Screen Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreen}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col"
                >
                  <ActiveComponent />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Side Shine */}
            <div className="absolute top-8 left-0 w-1 h-24 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
          </motion.div>

          {/* Screen Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {screens.map((_, i) => (
              <button key={i} onClick={() => setActiveScreen(i)}
                className={`rounded-full transition-all duration-300 ${i === activeScreen ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>

          {/* ─── Floating Mini Cards ─────────────────────────── */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, i % 2 === 0 ? -12 : 12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 + i * 0.5, ease: "easeInOut", delay: i * 0.4 }}
              className={`absolute ${card.position} z-20 glass-card bg-black/50 backdrop-blur-xl border border-white/15 flex items-center gap-3 py-2.5 px-3 min-w-[170px] shadow-2xl`}
            >
              <div className={`w-8 h-8 rounded-full ${card.bg} flex items-center justify-center shrink-0`}>
                <card.icon className={`w-4 h-4 ${card.color}`} />
              </div>
              <p className="text-xs font-semibold text-white leading-tight">{card.label}</p>
            </motion.div>
          ))}

          {/* ─── Notification Popup (top-left) ───────────────── */}
          <AnimatePresence>
            {activeScreen === 4 && (
              <motion.div
                initial={{ opacity: 0, x: -20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -20, y: -10 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="absolute top-[5%] left-0 lg:-left-4 z-30 glass-card bg-black/60 backdrop-blur-xl border border-white/15 flex items-center gap-2 py-2 px-3 max-w-[190px] shadow-2xl"
              >
                <span className="text-xl">🛵</span>
                <p className="text-[11px] font-semibold text-white leading-tight">Driver nearby!<br /><span className="text-white/50 font-normal">Arriving in 10 min</span></p>
              </motion.div>
            )}
            {activeScreen === 5 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="absolute top-[5%] right-0 lg:-right-4 z-30 glass-card bg-green-900/60 backdrop-blur-xl border border-green-500/30 flex items-center gap-2 py-2 px-3 max-w-[190px] shadow-2xl"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                <p className="text-[11px] font-semibold text-white leading-tight">Delivered!<br /><span className="text-green-400/80 font-normal">Rate your experience</span></p>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
}
