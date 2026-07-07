"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Laptop, Rocket, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  const router = useRouter();

  const techStack = [
    "MERN Stack", "Next.js", "React Native", "Flutter", "Python", "PHP"
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white pt-10">
      {/* --- Background Design Elements --- */}
      <div className="absolute inset-0 z-0">
        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Gradient Blobs (Inspired by Logo Colors) */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-cyan-400/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* --- Left Column: Text Content --- */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.2 } } }}
            className="text-left"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Innovating the Digital Future
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Build Better Software. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Master Top Skills.
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              <span className="font-bold text-slate-800 underline decoration-blue-500/30">INFOSIV</span> is your partner in digital transformation. We deliver high-performance software solutions and provide industry-standard training in modern tech stacks.
            </motion.p>

            {/* Tech Stack Tags */}
            <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mt-8">
              {techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200">
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} className="mt-10 flex flex-col sm:flex-row gap-4">
              <button 
              onClick={()=> router.push("/services")}
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-bold transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 flex items-center justify-center gap-2">
                Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
              onClick={()=> router.push("/tranning")}
              className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold transition-all hover:border-blue-600 hover:text-blue-600">
                Join Training Program
              </button>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-8 flex items-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Professional Mentors
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Live Projects
              </div>
            </motion.div>
          </motion.div>

          {/* --- Right Column: Visual Element --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* The "Main" Card */}
            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-mono text-slate-400">infosiv_project.tsx</div>
              </div>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="flex gap-4">
                  <span className="text-purple-500">import</span>
                  <span className="text-blue-500">React</span>
                  <span className="text-purple-500">from</span>
                  <span className="text-orange-500">'react'</span>
                </div>
                <div className="pl-4 border-l-2 border-blue-100">
                  <p className="text-slate-400 italic">// Transforming Ideas into Reality</p>
                  <p className="text-slate-800 mt-2">const <span className="text-blue-600">Innovation</span> = () =&gt; {"{"}</p>
                  <p className="pl-4 text-slate-800">return (</p>
                  <p className="pl-8 text-blue-600">&lt;Services stack="MERN" /&gt;</p>
                  <p className="pl-4 text-slate-800">)</p>
                  <p className="text-slate-800">{"}"}</p>
                </div>
              </div>

              {/* Floating Pixel Elements (Match Logo Style) */}
              <div className="absolute top-4 right-4 flex gap-1">
                <div className="w-4 h-4 bg-blue-500 opacity-20"></div>
                <div className="w-4 h-4 bg-blue-500 opacity-40"></div>
                <div className="w-4 h-4 bg-blue-600"></div>
              </div>
            </div>

            {/* Small Floating "Stats" Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4"
            >
              <div className="p-2 bg-blue-100 rounded-lg">
                <Rocket className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Projects Delivered</p>
                <p className="text-lg font-bold text-slate-900">150+</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4"
            >
              <div className="p-2 bg-green-100 rounded-lg">
                <Laptop className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Students Trained</p>
                <p className="text-lg font-bold text-slate-900">2,500+</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;