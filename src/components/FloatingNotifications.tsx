"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { PartyPopper, Zap, ShoppingBag, Banknote, Truck, Star, Gift } from "lucide-react";

const notificationTemplates = [
  { text: "Your order has been delivered successfully.", icon: PartyPopper, color: "text-green-400", bg: "bg-green-400/20" },
  { text: "Flash Sale: Up to 50% Off Today.", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/20" },
  { text: "New Electronics Added.", icon: ShoppingBag, color: "text-blue-400", bg: "bg-blue-400/20" },
  { text: "Cashback of $10 Applied.", icon: Banknote, color: "text-green-500", bg: "bg-green-500/20" },
  { text: "Delivery Partner is Nearby.", icon: Truck, color: "text-primary", bg: "bg-primary/20" },
  { text: "You earned 200 Reward Points.", icon: Star, color: "text-yellow-500", bg: "bg-yellow-500/20" },
  { text: "Special Offer Unlocked.", icon: Gift, color: "text-secondary", bg: "bg-secondary/20" },
];

export default function FloatingNotifications() {
  const [activeNotifications, setActiveNotifications] = useState<any[]>([]);

  useEffect(() => {
    let idCounter = 0;
    
    const interval = setInterval(() => {
      // Don't clutter the screen, max 3 at a time
      setActiveNotifications(prev => {
        if (prev.length >= 3) return prev;
        
        const randomTemplate = notificationTemplates[Math.floor(Math.random() * notificationTemplates.length)];
        
        // Random positions (mostly edges)
        const positions = [
          { top: "10%", left: "5%" },
          { top: "20%", right: "5%" },
          { bottom: "15%", left: "8%" },
          { bottom: "25%", right: "8%" },
          { top: "40%", left: "2%" },
          { top: "60%", right: "2%" },
        ];
        const randomPosition = positions[Math.floor(Math.random() * positions.length)];
        
        const newNotification = {
          id: idCounter++,
          ...randomTemplate,
          ...randomPosition,
        };
        
        // Remove after 4 seconds
        setTimeout(() => {
          setActiveNotifications(current => current.filter(n => n.id !== newNotification.id));
        }, 4000);
        
        return [...prev, newNotification];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {activeNotifications.map((notif) => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            transition={{ type: "spring", bounce: 0.4 }}
            style={{ top: notif.top, bottom: notif.bottom, left: notif.left, right: notif.right }}
            className="absolute glass-card bg-black/40 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-2xl max-w-[300px]"
          >
            {/* Pulse Ring */}
            <div className="relative flex items-center justify-center">
              <div className={`absolute inset-0 ${notif.bg} rounded-full animate-ping opacity-75`}></div>
              <div className={`w-10 h-10 rounded-full ${notif.bg} border border-white/10 flex items-center justify-center relative z-10`}>
                <notif.icon className={`w-5 h-5 ${notif.color}`} />
              </div>
            </div>
            
            <p className="text-sm font-semibold text-white leading-tight">
              {notif.text}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
