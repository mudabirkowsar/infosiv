"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Award, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Download 
} from 'lucide-react';

const courses = [
  {
    title: "Full Stack MERN Mastery",
    category: "Web Development",
    duration: "4 Months",
    lessons: "48+ Modules",
    features: ["MongoDB, Express, React, Node", "Live E-commerce Project", "Job Placement Support"],
    level: "Beginner to Pro",
    hot: true
  },
  {
    title: "Cross-Platform Mobile Dev",
    category: "App Development",
    duration: "3 Months",
    lessons: "36+ Modules",
    features: ["React Native & Flutter", "API Integration", "App Store Deployment"],
    level: "Intermediate",
    hot: false
  },
  {
    title: "Next.js & Modern Frontend",
    category: "Advanced Web",
    duration: "2 Months",
    lessons: "24+ Modules",
    features: ["Server Components", "SEO Optimization", "Tailwind CSS Mastery"],
    level: "Advanced",
    hot: true
  },
  {
    title: "Python & Data Science",
    category: "Data Science",
    duration: "4 Months",
    lessons: "40+ Modules",
    features: ["Numpy & Pandas", "Machine Learning Basics", "Automation Scripts"],
    level: "Beginner to Pro",
    hot: false
  }
];

export default function Training() {
  return (
    <section id="training" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Upgrade Your Career</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Bridge the Gap Between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Learning & Industry
              </span>
            </h3>
          </div>
          <p className="text-slate-600 max-w-sm">
            Our training programs are designed by industry experts to get you hired at top tech companies.
          </p>
        </div>

        {/* Training Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-2 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Visual Side */}
                <div className="md:w-1/3 bg-blue-600 rounded-[2rem] p-8 flex flex-col justify-between text-white relative overflow-hidden">
                  {/* Background Pixel Pattern */}
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                     <div className="grid grid-cols-2 gap-1">
                        <div className="w-3 h-3 bg-white"></div>
                        <div className="w-3 h-3 bg-blue-200"></div>
                        <div className="w-3 h-3 bg-blue-300"></div>
                        <div className="w-3 h-3 bg-white"></div>
                     </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-500/50 px-2 py-1 rounded">
                      {course.category}
                    </span>
                    <h4 className="text-2xl font-bold mt-4 leading-tight">{course.title}</h4>
                  </div>
                  
                  <div className="mt-8 space-y-2 text-blue-100 text-sm">
                    <div className="flex items-center gap-2"><Clock size={14}/> {course.duration}</div>
                    <div className="flex items-center gap-2"><BookOpen size={14}/> {course.lessons}</div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-2/3 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">What you'll learn</span>
                      {course.hot && (
                        <span className="bg-orange-100 text-orange-600 text-[10px] font-black px-2 py-1 rounded-full animate-pulse">TRENDING</span>
                      )}
                    </div>
                    <ul className="space-y-3">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                          <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 flex gap-3">
                    <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                      Enroll Now <ArrowRight size={16}/>
                    </button>
                    <button className="p-3 border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors" title="Download Syllabus">
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placement Trust Banner */}
        <div className="mt-20 border border-dashed border-blue-200 rounded-[2rem] p-8 flex flex-wrap justify-around items-center gap-8 bg-blue-50/50">
           <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-full shadow-sm text-blue-600"><Award size={24}/></div>
              <div>
                 <p className="text-xl font-bold text-slate-900">100% Verified</p>
                 <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Certifications</p>
              </div>
           </div>
           <div className="h-10 w-px bg-blue-200 hidden md:block"></div>
           <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-full shadow-sm text-blue-600"><Users size={24}/></div>
              <div>
                 <p className="text-xl font-bold text-slate-900">500+ Students</p>
                 <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Placed in MNCs</p>
              </div>
           </div>
           <div className="h-10 w-px bg-blue-200 hidden md:block"></div>
           <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-full shadow-sm text-blue-600"><CheckCircle2 size={24}/></div>
              <div>
                 <p className="text-xl font-bold text-slate-900">Live Projects</p>
                 <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Industrial Experience</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}