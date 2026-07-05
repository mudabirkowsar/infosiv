"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, ShieldCheck, Users2, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Years of Excellence", value: "5+", icon: <Trophy className="text-yellow-500" /> },
    { label: "Projects Delivered", value: "200+", icon: <Rocket className="text-blue-500" /> },
    { label: "Happy Students", value: "1.5k+", icon: <Users2 className="text-indigo-500" /> },
    { label: "Expert Mentors", value: "15+", icon: <ShieldCheck className="text-green-500" /> },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Content & Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left: Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* The "Experience" Card */}
            <div className="absolute -top-10 -left-10 z-20 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-4xl font-black italic">"Innovate"</p>
              <p className="text-sm opacity-80 mt-2 font-medium tracking-widest uppercase">The Infosiv Way</p>
            </div>

            {/* Main Image Replacement (Abstract Tech UI) */}
            <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-slate-50 shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-12">
                <div className="relative">
                    {/* Abstract Pixel Grid representing the Logo */}
                    <div className="grid grid-cols-4 gap-2 opacity-40">
                        {[...Array(16)].map((_, i) => (
                            <motion.div 
                                key={i}
                                animate={{ opacity: [0.2, 0.8, 0.2] }}
                                transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                                className="w-8 h-8 bg-blue-400 rounded-sm"
                            />
                        ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                         <h2 className="text-6xl font-black text-white tracking-tighter">IS</h2>
                    </div>
                </div>
              </div>
            </div>

            {/* Bottom Floating Stats */}
            <div className="absolute -bottom-10 -right-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4">
               <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <ShieldCheck size={28} />
               </div>
               <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">ISO Certified</p>
                  <p className="text-lg font-bold text-slate-900">Quality Training</p>
               </div>
            </div>
          </motion.div>

          {/* Right: Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
              Driving Digital Transformation <br />
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Through Code & Talent.</span>
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              At <strong>Infosiv Technologies</strong>, we believe that technology is the ultimate problem solver. 
              Founded as a hub for innovation, we serve two purposes: providing world-class software development 
              for businesses and creating future-ready developers through rigorous, industrial-grade training.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-blue-50 text-blue-600 rounded-lg"><Target size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-900">Our Mission</h4>
                  <p className="text-slate-500 text-sm">To empower every individual and business with the technical skills and solutions needed to thrive in the digital age.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-cyan-50 text-cyan-600 rounded-lg"><Lightbulb size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-900">Our Vision</h4>
                  <p className="text-slate-500 text-sm">Becoming the global standard for industrial IT training and software excellence through the MERN and Next.js ecosystem.</p>
                </div>
              </div>
            </div>

            <button className="mt-10 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
              Meet The Team
            </button>
          </motion.div>
        </div>

        {/* Bottom Grid: Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center"
            >
              <div className="flex justify-center mb-4 text-3xl">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-2">{stat.value}</h3>
              <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;