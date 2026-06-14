"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, MessageSquare, CreditCard, Apple, CheckCircle2, User, ChevronRight, Settings, ShoppingBag, Heart, Map, Bell } from "lucide-react";

const ScreenContent = ({ type }: { type: string }) => {
  if (type === "Home Screen") {
    return (
      <div className="flex-1 w-full bg-slate-50 text-slate-900 flex flex-col relative overflow-hidden">
        <div className="bg-primary text-white p-4 pt-10 rounded-b-3xl shadow-sm">
          <p className="text-xs opacity-80">Location</p>
          <p className="font-bold flex items-center text-sm">San Francisco, CA <MapPin className="w-3 h-3 ml-1" /></p>
        </div>
        <div className="p-4 flex-1 overflow-y-auto no-scrollbar">
          <div className="h-28 w-full bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl mb-4 p-4 text-white shadow-md relative overflow-hidden">
             <div className="relative z-10">
               <span className="bg-white/20 px-2 py-1 rounded text-[8px] font-bold uppercase mb-1 inline-block">Flash Sale</span>
               <h3 className="font-bold leading-tight">20% Off Burgers</h3>
             </div>
             <div className="absolute -bottom-4 -right-4 text-6xl opacity-50">🍔</div>
          </div>
          <h4 className="font-bold text-sm mb-3">Categories</h4>
          <div className="flex gap-3 mb-5">
            {[ {i:"🍕", n:"Pizza"}, {i:"🍣", n:"Sushi"}, {i:"🥗", n:"Healthy"} ].map((c, i) => (
              <div key={i} className="flex-1 bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-1">
                 <span className="text-xl">{c.i}</span>
                 <span className="text-[10px] font-semibold">{c.n}</span>
              </div>
            ))}
          </div>
          <h4 className="font-bold text-sm mb-3">Featured</h4>
          <div className="space-y-3">
             {[1, 2].map(i => (
               <div key={i} className="flex gap-3 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                 <div className="w-16 h-16 bg-gray-200 rounded-lg shrink-0 flex items-center justify-center text-2xl">{i===1 ? "🍝" : "🍜"}</div>
                 <div className="py-1">
                   <h5 className="font-bold text-xs">{i===1 ? "Italian Bistro" : "Ramen Shop"}</h5>
                   <p className="text-[10px] text-gray-500 mb-1">$$ • 15-25 min</p>
                   <span className="text-[10px] font-bold text-primary">Free Delivery</span>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "Tracking Screen") {
    return (
      <div className="flex-1 w-full bg-slate-50 text-slate-900 flex flex-col relative overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0 bg-[#e5e3df] z-0 overflow-hidden">
           {/* Simulate streets */}
           <div className="absolute top-1/2 left-1/4 w-full h-2 bg-white rotate-45"></div>
           <div className="absolute top-1/4 left-0 w-full h-3 bg-white -rotate-12"></div>
           <div className="absolute top-3/4 left-0 w-full h-4 bg-white rotate-12"></div>
           {/* Route */}
           <svg className="absolute inset-0 w-full h-full" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'}}>
             <path d="M50,100 C100,100 150,200 200,300" fill="none" stroke="#8b5cf6" strokeWidth="4" strokeDasharray="8 4" />
           </svg>
           {/* Pins */}
           <div className="absolute top-[100px] left-[50px] w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2 z-10"><ShoppingBag className="w-4 h-4"/></div>
           <div className="absolute top-[300px] left-[200px] w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2 z-10"><MapPin className="w-4 h-4"/></div>
           {/* Driver Indicator */}
           <div className="absolute top-[200px] left-[130px] w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-primary -translate-x-1/2 -translate-y-1/2 z-20">
              <span className="text-xl">🛵</span>
           </div>
        </div>

        {/* Tracking Card */}
        <div className="mt-auto relative z-20 bg-white rounded-t-3xl p-5 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
           <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>
           <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-xs text-gray-500 font-medium">Estimated Arrival</p>
                <h3 className="text-2xl font-bold text-gray-900">12:45 PM</h3>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md">On the way</span>
           </div>
           
           <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl mb-4 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="Driver" className="w-full h-full object-cover"/>
              </div>
              <div className="flex-1">
                 <h4 className="font-bold text-sm">John Doe</h4>
                 <p className="text-xs text-gray-500 flex items-center">⭐ 4.9 <span className="mx-1">•</span> Honda PCX</p>
              </div>
              <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><Phone className="w-4 h-4"/></button>
              <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><MessageSquare className="w-4 h-4"/></button>
           </div>
        </div>
      </div>
    );
  }

  if (type === "Cart Screen") {
    return (
      <div className="flex-1 w-full bg-slate-50 text-slate-900 flex flex-col relative overflow-hidden">
        <div className="bg-white p-4 pt-10 border-b border-gray-100 text-center font-bold relative shadow-sm">
           <button className="absolute left-4 top-10 text-gray-400"><ChevronRight className="w-5 h-5 rotate-180"/></button>
           Your Cart
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
           {[ {n:"Double Cheeseburger", p:"$12.99", q:1}, {n:"Large Fries", p:"$4.50", q:2} ].map((item, i) => (
             <div key={i} className="flex gap-3 mb-4 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">{i===0?"🍔":"🍟"}</div>
                <div className="flex-1 flex flex-col justify-between py-1">
                   <h5 className="font-bold text-xs">{item.n}</h5>
                   <p className="text-primary font-bold text-sm">{item.p}</p>
                </div>
                <div className="flex flex-col items-center justify-between bg-gray-50 rounded-lg border border-gray-100 p-1 w-8">
                   <button className="text-gray-400 text-xs font-bold">+</button>
                   <span className="font-bold text-xs">{item.q}</span>
                   <button className="text-gray-400 text-xs font-bold">-</button>
                </div>
             </div>
           ))}
           <div className="mt-6 space-y-2 text-sm">
             <div className="flex justify-between text-gray-500"><p>Subtotal</p><p>$21.99</p></div>
             <div className="flex justify-between text-gray-500"><p>Delivery Fee</p><p>$2.00</p></div>
             <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200"><p>Total</p><p>$23.99</p></div>
           </div>
        </div>
        <div className="p-4 bg-white border-t border-gray-100 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
           <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg glow-shadow flex justify-between px-6 items-center">
              <span>Checkout</span>
              <span className="bg-white/20 px-2 py-1 rounded text-xs">$23.99</span>
           </button>
        </div>
      </div>
    );
  }

  if (type === "Payment Screen") {
    return (
      <div className="flex-1 w-full bg-slate-50 text-slate-900 flex flex-col relative overflow-hidden">
         <div className="bg-white p-4 pt-10 border-b border-gray-100 text-center font-bold relative">
           <button className="absolute left-4 top-10 text-gray-400"><ChevronRight className="w-5 h-5 rotate-180"/></button>
           Payment
         </div>
         <div className="p-4 flex-1 overflow-y-auto">
            {/* Credit Card Mockup */}
            <div className="w-full h-44 rounded-2xl bg-gradient-to-tr from-gray-900 to-gray-700 text-white p-5 flex flex-col justify-between shadow-xl relative overflow-hidden mb-6">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="flex justify-between items-center relative z-10">
                  <span className="font-mono tracking-widest">VISA</span>
                  <div className="w-8 h-6 bg-yellow-400/80 rounded opacity-80"></div>
               </div>
               <div className="relative z-10">
                  <p className="font-mono text-lg tracking-[0.2em] mb-1">•••• •••• •••• 4242</p>
                  <div className="flex justify-between text-[10px] text-gray-300 uppercase">
                     <span>Card Holder<br/><strong className="text-white">Alex Smith</strong></span>
                     <span>Expires<br/><strong className="text-white">12/28</strong></span>
                  </div>
               </div>
            </div>

            <h4 className="font-bold text-sm mb-3">Other Methods</h4>
            <div className="space-y-3">
               <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"><Apple className="w-4 h-4 fill-current"/></div>
                     <span className="font-bold text-sm">Apple Pay</span>
                  </div>
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
               </div>
               <div className="flex items-center justify-between p-3 bg-primary/5 rounded-xl border border-primary text-primary">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center"><CreditCard className="w-4 h-4"/></div>
                     <span className="font-bold text-sm">Credit Card</span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 fill-current"/>
               </div>
            </div>
         </div>
         <div className="p-4">
            <button className="w-full bg-black text-white font-bold py-3.5 rounded-xl shadow-lg relative overflow-hidden">
               <span className="relative z-10 flex items-center justify-center gap-2">Pay $23.99</span>
               <div className="absolute inset-0 bg-white/20 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
            </button>
         </div>
      </div>
    );
  }

  if (type === "Profile Screen") {
    return (
      <div className="flex-1 w-full bg-slate-50 text-slate-900 flex flex-col relative overflow-hidden">
         <div className="bg-primary pt-12 pb-6 px-4 text-white text-center relative shadow-md">
            <button className="absolute right-4 top-10 text-white/80 hover:text-white"><Settings className="w-5 h-5"/></button>
            <div className="w-20 h-20 mx-auto bg-white rounded-full border-4 border-primary/50 shadow-lg mb-3 overflow-hidden">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Profile" className="w-full h-full object-cover"/>
            </div>
            <h2 className="font-bold text-lg">Alex Smith</h2>
            <p className="text-white/80 text-xs">Premium Member</p>
         </div>
         <div className="flex p-4 gap-4 bg-white shadow-sm mb-2">
            <div className="flex-1 text-center border-r border-gray-100">
               <p className="font-bold text-lg">12</p>
               <p className="text-[10px] text-gray-500 uppercase font-bold">Orders</p>
            </div>
            <div className="flex-1 text-center border-r border-gray-100">
               <p className="font-bold text-lg">4</p>
               <p className="text-[10px] text-gray-500 uppercase font-bold">Addresses</p>
            </div>
            <div className="flex-1 text-center">
               <p className="font-bold text-lg">2</p>
               <p className="text-[10px] text-gray-500 uppercase font-bold">Reviews</p>
            </div>
         </div>
         <div className="flex-1 p-4 space-y-2 overflow-y-auto">
            {[
               {i: ShoppingBag, n: "My Orders"},
               {i: Heart, n: "Favorites"},
               {i: Map, n: "Delivery Addresses"},
               {i: CreditCard, n: "Payment Methods"},
               {i: Bell, n: "Notifications"},
            ].map((item, i) => (
               <div key={i} className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <item.i className="w-4 h-4" />
                     </div>
                     <span className="font-semibold text-sm">{item.n}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
               </div>
            ))}
         </div>
      </div>
    );
  }

  return null;
};

const screens = [
  { id: 1, title: "Home Screen", color: "from-primary/20 to-transparent", offset: 0 },
  { id: 2, title: "Tracking Screen", color: "from-secondary/20 to-transparent", offset: 40 },
  { id: 3, title: "Cart Screen", color: "from-accent/20 to-transparent", offset: 0 },
  { id: 4, title: "Payment Screen", color: "from-green-500/20 to-transparent", offset: 40 },
  { id: 5, title: "Profile Screen", color: "from-blue-500/20 to-transparent", offset: 0 },
];

export default function AppShowcaseSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="py-32 overflow-hidden relative z-10">
      <div className="container mx-auto px-6 lg:px-20 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            A Seamless <span className="text-gradient">Experience</span>
          </motion.h2>
          <p className="text-white/60 text-lg">
            Immerse yourself in our beautifully crafted user interface, designed for speed and simplicity.
          </p>
        </div>
      </div>

      <div className="relative w-full h-[650px] flex items-center">
        {/* Glow behind screens */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

        <motion.div 
          style={{ x }}
          className="flex gap-8 px-6 lg:px-20 absolute left-0"
        >
          {screens.map((screen) => (
            <div 
              key={screen.id} 
              className="relative shrink-0 perspective-1000"
              style={{ marginTop: `${screen.offset}px` }}
            >
              <div className="absolute -inset-4 bg-gradient-to-b rounded-[3.5rem] blur-xl opacity-50 z-0" style={{ backgroundImage: `linear-gradient(to bottom, var(--tw-gradient-stops))` }} />
              
              <div className={`relative z-10 w-[280px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-2xl glass flex flex-col overflow-hidden`}>
                
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
                  <div className="w-24 h-6 bg-black rounded-b-2xl"></div>
                </div>

                <ScreenContent type={screen.title} />

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
