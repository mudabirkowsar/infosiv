"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronRight, UserCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "MERN Stack Student",
    image: null, // You can add real image paths here
    content: "The training at Infosiv is next level. I went from knowing basic HTML to building full-stack apps in 4 months. The mentors actually care about your placement.",
    rating: 5,
    type: "Student"
  },
  {
    name: "Sarah Jenkins",
    role: "CEO, TechFlow Solutions",
    image: null,
    content: "Infosiv delivered our React Native app ahead of schedule. Their code quality is enterprise-grade, and their communication throughout the process was flawless.",
    rating: 5,
    type: "Client"
  },
  {
    name: "Amit Patel",
    role: "Frontend Developer @ Google",
    image: null,
    content: "I joined the Next.js advanced workshop. It helped me clear my senior developer interview. Highly recommended for professionals looking to upskill.",
    rating: 5,
    type: "Student"
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <Quote size={400} className="text-blue-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm"
          >
            Social Proof
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">
            Trusted by Hundreds of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Innovators & Learners
            </span>
          </h2>
        </div>

        {/* Client/Company Logos (Trust Bar) */}
        <div className="mb-20">
          <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-10">Our Students are Placed at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* Replace these with real company logos later */}
            <div className="text-2xl font-black text-slate-400">MICROSOFT</div>
            <div className="text-2xl font-black text-slate-400">GOOGLE</div>
            <div className="text-2xl font-black text-slate-400">AMAZON</div>
            <div className="text-2xl font-black text-slate-400">META</div>
            <div className="text-2xl font-black text-slate-400">ADOBE</div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 group"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed italic mb-8">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <UserCircle2 size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{item.name}</h4>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mt-1">{item.role}</p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <ChevronRight size={16} className="text-blue-600" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action for Reviews */}
        <div className="mt-16 text-center">
            <p className="text-slate-500 font-medium">
              Want to see more success stories? 
              <a href="#" className="ml-2 text-blue-600 font-bold hover:underline">View our Alumni Portal →</a>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;