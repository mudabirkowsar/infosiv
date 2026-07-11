"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Code2, 
  Terminal, 
  Smartphone, 
  Database, 
  GraduationCap, 
  Briefcase, 
  CheckCircle, 
  ArrowRight,
  Download,
  Users,
  Trophy
} from 'lucide-react';

const courses = [
  {
    title: "Full Stack MERN Mastery",
    level: "Advanced",
    duration: "16 Weeks",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redux"],
    description: "Go from zero to building production-grade SaaS applications. Includes Next.js 14 and advanced architecture.",
    isHot: true
  },
  {
    title: "Mobile App Development",
    level: "Professional",
    duration: "12 Weeks",
    tech: ["React Native", "Flutter", "Firebase", "App Store"],
    description: "Master cross-platform mobile development. Build real apps for iOS and Android using a single codebase.",
    isHot: false
  },
  {
    title: "Modern Web with Next.js",
    level: "Intermediate",
    duration: "8 Weeks",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    description: "The modern standard for web. Focus on Server Components, SEO, and lightning-fast performance.",
    isHot: true
  },
  {
    title: "Python & Data Automation",
    level: "Beginner-Pro",
    duration: "10 Weeks",
    tech: ["Python", "Django", "SQL", "Pandas"],
    description: "Learn Python for the real world. Build backend systems and automate complex business data tasks.",
    isHot: false
  }
];

const roadmap = [
  { step: "01", title: "Core Fundamentals", desc: "Solidify your basics in logic, algorithms, and syntax." },
  { step: "02", title: "Industrial Projects", desc: "Build real-world clones of Apps like Netflix, Slack, or Uber." },
  { step: "03", title: "System Design", desc: "Learn how to architect scalable and secure software systems." },
  { step: "04", title: "Placement Sprint", desc: "Mock interviews, Resume building, and MNC referrals." }
];

export default function TrainingPage() {
  const router = useRouter()
  return (
    <div className="bg-white min-h-screen">
      
      {/* --- ACADEMY HERO --- */}
      <section className="relative pt-40 pb-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-blue-600/10 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Infosiv Learning Academy
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mt-8 mb-6 tracking-tighter">
              Don’t Just Learn. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                Become Industrial Ready.
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We bridge the gap between academic theory and industry reality. 
              Our mentors are senior developers from Infosiv who build software for a living.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-slate-950 px-10 py-4 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all shadow-2xl">
                Explore Courses
              </button>
              {/* <button className="bg-transparent text-white border border-slate-700 px-10 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all">
                Download Brochure
              </button> */}
            </div>
          </motion.div>
        </div>

        {/* Floating Icons Background */}
        <Terminal className="absolute top-20 left-10 text-blue-500/10 w-32 h-32 -rotate-12" />
        <Code2 className="absolute bottom-10 right-10 text-blue-500/10 w-40 h-40 rotate-12" />
      </section>

      {/* --- COURSE EXPLORER GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Our Placement-First Programs</h2>
            <p className="text-slate-500">Every module is crafted to meet the current demands of the IT market.</p>
          </div>
          <div className="flex gap-4">
             <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 tracking-tighter">100%</p>
                <p className="text-[10px] uppercase font-black text-slate-400">Project Based</p>
             </div>
             <div className="w-px h-10 bg-slate-200"></div>
             <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 tracking-tighter">MNC</p>
                <p className="text-[10px] uppercase font-black text-slate-400">Curriculum</p>
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-[2.5rem] p-1 border border-slate-100 hover:border-blue-200 transition-all group"
            >
              <div className="bg-white p-8 md:p-10 rounded-[2.4rem] h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {course.level} • {course.duration}
                    </span>
                    {course.isHot && (
                      <span className="text-orange-600 bg-orange-50 text-[10px] font-black px-3 py-1 rounded-full">MOST POPULAR</span>
                    )}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">{course.title}</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed italic">"{course.description}"</p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {course.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg border border-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                   <button
                    onClick={()=> router.push('/contact')}
                    className="flex-1 bg-slate-950 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group-hover:shadow-xl">
                     Enroll Now <ArrowRight size={18} />
                   </button>
                   {/* <button className="px-6 py-4 border border-slate-200 rounded-2xl text-slate-500 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                     <Download size={18} /> Syllabus
                   </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- THE PATH TO PLACEMENT ROADMAP --- */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-white mb-4">Your Roadmap to Success</h2>
              <p className="text-slate-400">We don't just teach code; we groom professionals.</p>
           </div>

           <div className="grid md:grid-cols-4 gap-12 relative">
              {/* Connector Line for Desktop */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-800 -z-0"></div>
              
              {roadmap.map((path, i) => (
                <div key={i} className="relative z-10 text-center md:text-left">
                   <div className="w-24 h-24 bg-blue-600 text-white rounded-3xl flex items-center justify-center text-4xl font-black mx-auto md:mx-0 mb-8 shadow-2xl shadow-blue-900/50">
                      {path.step}
                   </div>
                   <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{path.title}</h4>
                   <p className="text-slate-400 text-sm leading-relaxed">{path.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- FINAL STATS & CTA --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
         <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center">
               <Trophy size={40} className="text-blue-600 mb-6" />
               <p className="text-4xl font-black text-slate-900 mb-1 tracking-tighter">500+</p>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Alumni Placed</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center">
               <Users size={40} className="text-blue-600 mb-6" />
               <p className="text-4xl font-black text-slate-900 mb-1 tracking-tighter">15+</p>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">MNC Mentors</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center">
               <Briefcase size={40} className="text-blue-600 mb-6" />
               <p className="text-4xl font-black text-slate-900 mb-1 tracking-tighter">100%</p>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Project Focus</p>
            </div>
         </div>

         <div className="bg-blue-600 rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Build Your Career?</h2>
               <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
                 Batch starts next Monday. Limited seats available for the MERN Stack Industrial Training. 
                 Book your free demo session today.
               </p>
               <button className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black hover:scale-105 transition-transform shadow-2xl">
                 Get Free Counselling
               </button>
            </div>
         </div>
      </section>

    </div>
  );
}