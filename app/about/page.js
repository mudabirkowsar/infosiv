"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  ShieldCheck, 
  Globe2, 
  Cpu, 
  Users2, 
  Zap,
  CheckCircle2
} from 'lucide-react';

const values = [
  {
    title: "Innovation First",
    desc: "We don't just follow trends; we set them by experimenting with the latest in the MERN and Cloud ecosystem.",
    icon: <Zap className="text-yellow-500" />,
  },
  {
    title: "Quality Engineering",
    desc: "Clean code is our religion. We build scalable architectures that are easy to maintain and impossible to break.",
    icon: <ShieldCheck className="text-blue-500" />,
  },
  {
    title: "Community Driven",
    desc: "Our training wing is our way of giving back—creating a new generation of elite developers for the global market.",
    icon: <Users2 className="text-indigo-500" />,
  }
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* --- ABOUT HERO --- */}
      <section className="relative pt-40 pb-24 bg-slate-50 overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-20 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 inline-block">The Infosiv Story</span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
                Innovating the <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 underline decoration-blue-100 underline-offset-8">
                  Digital Fabric.
                </span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
                Infosiv Technologies was founded on a simple premise: <strong>Software should be powerful, and learning should be practical.</strong> 
                We are a hybrid powerhouse combining a cutting-edge software agency with a high-performance training academy.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
               {/* Abstract Brand Visual */}
               <div className="aspect-square bg-slate-900 rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden shadow-2xl">
                  <div className="grid grid-cols-3 gap-4 opacity-20">
                     {[...Array(9)].map((_, i) => (
                       <div key={i} className="w-12 h-12 bg-blue-500 rounded-lg animate-pulse" />
                     ))}
                  </div>
                  <h2 className="absolute text-9xl font-black text-white/10 select-none italic">INFOSIV</h2>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="text-white text-center">
                        <p className="text-6xl font-black mb-2">IS</p>
                        <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full"></div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CORE STATS --- */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             {[
               { val: "200+", lab: "Projects Finished" },
               { val: "1.5k", lab: "Students Graduated" },
               { val: "10+", lab: "Countries Served" },
               { val: "24/7", lab: "Expert Support" }
             ].map((stat, i) => (
               <div key={i}>
                  <p className="text-4xl font-black text-slate-900 mb-1">{stat.val}</p>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{stat.lab}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION (Split Cards) --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
         <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-12 rounded-[3rem] bg-blue-600 text-white relative overflow-hidden group transition-all"
            >
               <Target size={48} className="mb-6 opacity-50" />
               <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
               <p className="text-blue-100 leading-relaxed text-lg">
                 To empower global businesses with agile technology solutions while simultaneously 
                 bridging the talent gap by training the next generation of full-stack engineers 
                 through real-world project exposure.
               </p>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-5 rounded-full group-hover:scale-150 transition-transform"></div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-12 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden group transition-all shadow-2xl"
            >
               <Eye size={48} className="mb-6 opacity-50" />
               <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
               <p className="text-slate-400 leading-relaxed text-lg">
                 To be the world’s most trusted ecosystem where innovation meets education, 
                 creating a future where every business has the software it needs and every 
                 aspiring developer has the skills they deserve.
               </p>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 opacity-10 rounded-full group-hover:scale-150 transition-transform"></div>
            </motion.div>
         </div>
      </section>

      {/* --- TECHNICAL DNA --- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Technology is Our DNA</h2>
            <p className="text-slate-500">We don't just use tools; we master the engineering behind them.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOUNDER'S MESSAGE --- */}
      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
         <div className="mb-12 inline-block">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-black shadow-xl">
               IS
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Message from the Leadership</h3>
            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mt-1">Innovate • Solve • Transform</p>
         </div>
         
         <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-snug italic italic">
           "At Infosiv, we don't measure success by lines of code or number of batches. 
           We measure it by the problems we solved for a startup in London and the 
           career we built for a student in India. Our logo is a promise—the 'is' 
           represents that we exist to bridge the gap."
         </p>

         <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 justify-center">
               <CheckCircle2 className="text-green-500" />
               <span className="font-bold text-sm">Industry Standard Prep</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 justify-center">
               <CheckCircle2 className="text-green-500" />
               <span className="font-bold text-sm">Transparent Process</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 justify-center">
               <CheckCircle2 className="text-green-500" />
               <span className="font-bold text-sm">Post-Project Support</span>
            </div>
         </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="pb-24 px-4">
         <div className="max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
            <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready to be part of the <br /> <span className="text-blue-500">Infosiv Journey?</span></h2>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-blue-600 px-10 py-5 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-2xl">Work With Us</button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-2xl font-black hover:bg-white/20 transition-all">Join Training</button>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}