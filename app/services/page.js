"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Code2, 
  Database, 
  BarChart3,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Web Engineering",
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    description: "Architecting high-scale web platforms with Next.js and MERN stack for global enterprises.",
    features: ["Server-Side Rendering", "Micro-frontend Architecture", "Real-time Dashboards"],
    size: "lg" // Large card in grid
  },
  {
    id: "02",
    title: "Mobile Innovation",
    icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
    description: "Native-grade performance with Flutter and React Native cross-platform excellence.",
    features: ["Offline-first logic", "Biometric Security", "Seamless Animations"],
    size: "md"
  },
  {
    id: "03",
    title: "UI/UX Design",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    description: "Design systems that convert. We create interfaces that users love to touch.",
    features: ["Interactive Prototyping", "Design Systems", "Accessibility Focused"],
    size: "md"
  },
  {
    id: "04",
    title: "Cloud & DevOps",
    icon: <Cpu className="w-8 h-8 text-indigo-500" />,
    description: "Zero-downtime deployments and auto-scaling infrastructure on AWS & Azure.",
    features: ["CI/CD Pipelines", "Docker & K8s", "Infrastructure as Code"],
    size: "lg"
  }
];

const TechTag = ({ text }) => (
  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-100">
    {text}
  </span>
);

export default function ServicesPage() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-slate-950">
        {/* Animated Background Spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none mb-8">
                Services for the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Next Frontier.</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10">
                Infosiv delivers premium engineering solutions. We don't just build apps; 
                we architect digital experiences that scale to millions.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-all flex items-center gap-2">
                  Launch a Project <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Abstract "IS" Pixel Grid Background */}
        <div className="absolute right-0 bottom-0 opacity-10 hidden lg:grid grid-cols-4 gap-2 p-10">
           {[...Array(16)].map((_, i) => (
             <div key={i} className="w-16 h-16 bg-blue-500 rounded-lg" />
           ))}
        </div>
      </section>

      {/* --- INTERACTIVE BENTO GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group rounded-[2.5rem] bg-white border border-slate-200 p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 ${
                service.size === 'lg' ? 'md:col-span-4' : 'md:col-span-2'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </div>
                  <span className="text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">
                    {service.id}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-2">
                {service.features.map(f => <TechTag key={f} text={f} />)}
              </div>

              {/* Decorative Corner Arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="text-blue-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- INDUSTRIAL STRENGTH SECTION --- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6">Built for Industrial Strength Performance</h2>
            <p className="text-slate-600 text-lg mb-8">
              Our codebases are audit-ready, secure by design, and optimized for maximum core Web Vitals. 
              Whether it's a fintech platform or a training portal, we use the same elite engineering standards.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-black text-blue-600 mb-1">99.9%</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-600 mb-1">&lt; 1.2s</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Load Velocity</div>
              </div>
            </div>
          </div>

          <div className="relative">
             {/* Mockup Dashboard Element */}
             <div className="bg-slate-900 rounded-[2rem] p-4 shadow-2xl border border-slate-800 rotate-2">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3">
                   <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
                   <div className="h-4 w-1/2 bg-slate-800 rounded animate-pulse" />
                   <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 bg-blue-600/20 rounded-xl border border-blue-500/30" />
                      <div className="h-20 bg-slate-800 rounded-xl" />
                      <div className="h-20 bg-slate-800 rounded-xl" />
                   </div>
                </div>
             </div>
             {/* Second floating element */}
             <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block -rotate-3">
                <div className="flex items-center gap-3">
                   <ShieldCheck className="text-green-500 w-8 h-8" />
                   <div>
                      <div className="font-bold">Encrypted End-to-End</div>
                      <div className="text-xs text-slate-400">Military-grade AES 256</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- THE INFOSIV PROMISE CTA --- */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto border-t border-slate-200 pt-24">
           <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-6 inline-block">Need Something Specific?</span>
           <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter italic">
             Innovate. Solve. <span className="text-blue-600">Transform.</span>
           </h2>
           <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto">
             Every project is unique. We provide custom technical consulting to help you identify 
             the right roadmap for your business growth.
           </p>
           <button className="px-10 py-5 bg-slate-950 text-white rounded-2xl font-black hover:scale-105 transition-transform shadow-2xl">
             Schedule A Free Strategy Call
           </button>
        </div>
      </section>

    </div>
  );
}