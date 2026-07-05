"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Terminal, 
  Cpu, 
  ArrowRight, 
  Layers, 
  Code2, 
  Database 
} from 'lucide-react';

const services = [
  {
    title: "Web Development",
    desc: "Building scalable, high-performance web applications using the latest tech stacks.",
    icon: <Globe size={24} />,
    tags: ["MERN Stack", "Next.js", "TypeScript"],
    color: "blue"
  },
  {
    title: "Mobile App Development",
    desc: "Crafting seamless cross-platform mobile experiences for iOS and Android.",
    icon: <Smartphone size={24} />,
    tags: ["React Native", "Flutter", "Firebase"],
    color: "cyan"
  },
  {
    title: "Industrial Training",
    desc: "Bridging the gap between academics and industry with hands-on project training.",
    icon: <Terminal size={24} />,
    tags: ["Live Projects", "Internships", "MNC Prep"],
    color: "indigo"
  },
  {
    title: "Custom Software",
    desc: "Tailor-made software solutions designed to solve your specific business challenges.",
    icon: <Cpu size={24} />,
    tags: ["Python", "PHP", "Cloud Solutions"],
    color: "sky"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration to match the logo vibe */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-10 right-10 flex gap-2">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="w-8 h-8 bg-blue-600 rounded-sm" />
           ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-6"
          >
            Solutions That Drive <span className="text-blue-600">Innovation</span>
          </motion.h2>
          <p className="text-lg text-slate-600">
            From startups to enterprises, we provide the technical muscle to build 
            future-ready digital products and skilled professionals.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white border border-slate-200 text-slate-500 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Action */}
              <div className="flex items-center text-blue-600 font-bold text-sm cursor-pointer group/link">
                Learn More 
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
              </div>

              {/* Decorative Pixel Corner (Matching Logo) */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="grid grid-cols-2 gap-1">
                    <div className="w-2 h-2 bg-blue-400"></div>
                    <div className="w-2 h-2 bg-blue-200"></div>
                    <div className="w-2 h-2 bg-blue-600"></div>
                    <div className="w-2 h-2 bg-blue-400"></div>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-10 bg-blue-600 rounded-[2rem] text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Have a project in mind?</h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">Let’s discuss how Infosiv can help you innovate, solve, and transform your business goals.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              Get Started Today
            </button>
          </div>
          {/* Abstract background shapes for CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-20 -mt-20 blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full -ml-20 -mb-20 blur-3xl opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
}