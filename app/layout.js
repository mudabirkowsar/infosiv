import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

// This is crucial for SEO so your company appears on Google
export const metadata = {
  title: "Infosiv Technologies | Innovate • Solve • Transform",
  description: "Leading IT Services and Industrial Training company specializing in MERN Stack, React Native, Flutter, Next.js, Python, and PHP.",
  keywords: "IT Services, Web Development, Mobile App Development, MERN Stack Training, Flutter Training, Infosiv Technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <Navbar />
        
        {/* Main content wrapper with padding-top to account for fixed navbar */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* --- MODERN MULTI-COLUMN FOOTER --- */}
        <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              
              {/* Column 1: Brand & About */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white tracking-tighter">
                  INFOSIV<span className="text-blue-500">.</span>
                </h2>
                <p className="text-sm leading-relaxed">
                  Empowering businesses with high-end software solutions and 
                  shaping careers through industry-standard technical training.
                </p>
                {/* <div className="flex space-x-4 pt-2">
                  <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
                  <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
                  <a href="#" className="hover:text-blue-500 transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
                </div> */}
              </div>

              {/* Column 2: Services */}
              <div>
                <h3 className="text-white font-semibold mb-6">Our Services</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/services" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
                  <li><Link href="/services" className="hover:text-blue-400 transition-colors">Mobile App Development</Link></li>
                  <li><Link href="/services" className="hover:text-blue-400 transition-colors">UI/UX Design</Link></li>
                  <li><Link href="/services" className="hover:text-blue-400 transition-colors">Custom Software</Link></li>
                </ul>
              </div>

              {/* Column 3: Training */}
              <div>
                <h3 className="text-white font-semibold mb-6">Training Programs</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/training" className="hover:text-blue-400 transition-colors">Full Stack MERN</Link></li>
                  <li><Link href="/training" className="hover:text-blue-400 transition-colors">React Native & Flutter</Link></li>
                  <li><Link href="/training" className="hover:text-blue-400 transition-colors">Python Data Science</Link></li>
                  <li><Link href="/training" className="hover:text-blue-400 transition-colors">Next.js Mastery</Link></li>
                </ul>
              </div>

              {/* Column 4: Contact Info */}
              <div>
                <h3 className="text-white font-semibold mb-6">Get In Touch</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-blue-500 shrink-0" />
                    <span>Mohali, phase 8B Industrial area, Sector 91, <br />Sahibzada Ajit singh Nagar Punjab</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-blue-500 shrink-0" />
                    <span>+91 7696591560</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-blue-500 shrink-0" />
                    <span>gunjan@infosiv.com</span>
                    <span>info@infosiv.com</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
              <p>© {new Date().getFullYear()} Infosiv Technologies. All Rights Reserved.</p>
              <div className="flex space-x-6">
                <Link href="/" className="hover:text-white">Privacy Policy</Link>
                <Link href="/" className="hover:text-white">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* --- FLOATING WHATSAPP BUTTON (Highly recommended for Training/Services) --- */}
        <a 
          href="https://wa.me/7696591560" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all active:scale-95 group"
        >
          <Phone className="fill-current" size={24} />
          <span className="absolute right-16 bg-white text-slate-900 px-3 py-1 rounded shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us!
          </span>
        </a>
      </body>
    </html>
  );
}