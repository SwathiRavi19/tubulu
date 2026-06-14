"use client";

import { motion } from "framer-motion";
import { Download, Apple, PlaySquare } from "lucide-react";

export default function DownloadCTASection() {
  return (
    <section className="py-32 px-6 lg:px-20 relative z-10">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden glass border border-white/10 p-12 lg:p-24 text-center"
        >
          {/* Animated Background Gradient inside card */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-50 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Experience the <span className="text-gradient">Future?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Join millions of users who have already upgraded their experience. Download the app today and get started in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
              {/* App Store Button */}
              <button className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] uppercase leading-none font-semibold text-gray-500">Download on the</div>
                  <div className="text-lg leading-none mt-1">App Store</div>
                </div>
              </button>

              {/* Play Store Button */}
              <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors duration-200 backdrop-blur-md">
                <PlaySquare className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] uppercase leading-none font-semibold text-gray-400">GET IT ON</div>
                  <div className="text-lg leading-none mt-1">Google Play</div>
                </div>
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8">
               <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#030014] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold z-10">
                      U{i}
                    </div>
                  ))}
               </div>
               <p className="text-white/60 font-medium">Join 50,000+ users today</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
