"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, 
  CheckCircle2, Sparkles, MessageCircle, 
  ExternalLink, ArrowRight, AlertCircle
} from 'lucide-react';

export default function ContactPage() {
  // Status states: idle, loading, success, error
  const [status, setStatus] = useState("idle"); 

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(event.target);

    // Your Web3Forms Access Key
    formData.append("access_key", "800e9ec6-d6d6-41b3-a1f0-55621cff9dce");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        event.target.reset(); // Clear form on success
      } else {
        console.log("Error", data);
        setStatus("error");
      }
    } catch (error) {
      console.log("Error", error);
      setStatus("error");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-600">
      
      {/* --- DESIGNER HERO BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-slate-950 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(37,99,235,0.15)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        {/* Animated Pixel Grid */}
        <div className="absolute top-20 right-20 grid grid-cols-4 gap-2 opacity-20 rotate-12">
            {[...Array(12)].map((_, i) => (
              <motion.div 
                key={i} 
                animate={{ opacity: [0.2, 0.5, 0.2] }} 
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
                className="w-10 h-10 bg-blue-500 rounded-sm" 
              />
            ))}
        </div>
      </div>

      <section className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-blue-400 font-bold tracking-[0.2em] text-xs mb-4"
          >
            <Sparkles size={14} /> GET IN TOUCH
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none"
          >
            Let's Start <br />
            <span className="text-slate-400 italic">Something Great.</span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* --- LEFT: BENTO GRID INFO --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {/* Quick Contact Card */}
            <motion.div variants={itemVariants} className="p-8 bg-slate-900 rounded-[2.5rem] text-white border border-slate-800 hover:border-blue-500/50 transition-all group">
               <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <MessageCircle className="text-blue-500" /> Quick Support
               </h3>
               <div className="space-y-4">
                  <a href="mailto:info@infosiv.com" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-all group/item">
                    <span className="text-sm font-medium">info@infosiv.com</span>
                    <ExternalLink size={16} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </a>
                  <a href="tel:+917696591560" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-all group/item">
                    <span className="text-sm font-medium">+91 7696591560</span>
                    <Phone size={16} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </a>
               </div>
            </motion.div>

            {/* Location Bento Card */}
            <motion.div variants={itemVariants} className="p-8 bg-blue-600 rounded-[2.5rem] text-white relative overflow-hidden group h-[200px]">
               <MapPin className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform" />
               <h4 className="text-xs font-bold uppercase tracking-widest opacity-80">Our HQ</h4>
               {/* <span>Mohali, phase 8B Industrial area, Sector 91, <br />Sahibzada Ajit singh Nagar Punjab</span> */}
               <p className="mt-4 text-2xl font-bold leading-tight">Mohali, phase 8B Industrial area, Sector 91,<br /> Sahibzada Ajit singh Nagar Punjab</p>
               <button className="mt-4 text-sm font-bold flex items-center gap-1 hover:underline">
                 View on Maps <ArrowRight size={14} />
               </button>
            </motion.div>
          </motion.div>

          {/* --- RIGHT: PREMIUM LEAD FORM --- */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-14 rounded-[3.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative">
              
              <AnimatePresence>
                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md rounded-[3.5rem] flex flex-col items-center justify-center text-center p-10"
                  >
                    <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-200 mb-8">
                       <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Mission Accomplished!</h2>
                    <p className="text-slate-500 text-lg max-w-sm">We've received your message. One of our experts will reach out to you shortly.</p>
                    <button onClick={() => setStatus("idle")} className="mt-10 font-bold text-blue-600 hover:underline underline-offset-4 uppercase tracking-widest text-xs">Send another inquiry</button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={onSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input name="name" required type="text" placeholder="Alex Rivera" className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 py-4 focus:border-blue-600 focus:bg-white focus:ring-0 transition-all placeholder:text-slate-300 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                    <input name="email" required type="email" placeholder="alex@company.com" className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 py-4 focus:border-blue-600 focus:bg-white focus:ring-0 transition-all placeholder:text-slate-300 font-medium" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">I am interested in</label>
                  <div className="flex flex-wrap gap-3">
                    {["Software Project", "Industrial Training", "Corporate Workshop", "Career"].map((choice) => (
                      <label key={choice} className="cursor-pointer">
                         <input type="radio" name="interest" value={choice} className="peer hidden" defaultChecked={choice === "Software Project"} />
                         <div className="px-6 py-3 rounded-full border border-slate-100 bg-slate-50 text-slate-500 text-sm font-bold peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600 transition-all">
                           {choice}
                         </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Briefly tell us more</label>
                  <textarea name="message" required rows="4" placeholder="How can Infosiv help you innovate?" className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 py-4 focus:border-blue-600 focus:bg-white focus:ring-0 transition-all placeholder:text-slate-300 font-medium resize-none" />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-xl text-sm font-bold">
                    <AlertCircle size={18} /> Something went wrong. Please try again.
                  </div>
                )}

                <button 
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full bg-slate-950 text-white py-6 rounded-[2rem] font-black text-lg tracking-tight hover:bg-blue-600 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-3 disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Processing..." : "Initiate Conversation"}
                  <Send size={20} className={status === "loading" ? "animate-pulse" : ""} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* --- TRUST FOOTER --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 opacity-60"
        >
          <p className="text-sm font-medium text-slate-500 italic max-w-xs text-center md:text-left">
            "Infosiv doesn't just respond to emails; they solve business bottlenecks."
          </p>
          <div className="flex items-center gap-8 grayscale hover:grayscale-0 transition-all">
             <div className="text-xl font-black text-slate-300 tracking-tighter">TRUSTED PARTNER</div>
             <div className="text-xl font-black text-slate-300 tracking-tighter">ISO CERTIFIED</div>
          </div>
        </motion.div>

      </section>
    </div>
  );
}