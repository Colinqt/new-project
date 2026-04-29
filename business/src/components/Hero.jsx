import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Wrench,
  Monitor,
  Camera,
  Server,
} from "lucide-react";

export default function Hero() {
  const stats = [
    {
      number: "3+",
      label: "Projects Delivered",
    },
    {
      number: "3+",
      label: "Happy Clients",
    },
    {
      number: "12+",
      label: "Months Experience",
    },
  ];

  const features = [
    "Modern Website Development",
    "Professional CCTV Installation",
    "PC Repair & System Optimization",
    "SEO & Performance Optimized",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* Grid Effect */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Kryptronic IT Solutions
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Smart IT &
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Security Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-300 leading-8 max-w-2xl mb-8">
              Kryptronic IT Solutions provides modern website development,
              CCTV installation, PC repair services, and complete digital
              solutions for businesses, offices, and individuals.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <CheckCircle2 className="text-cyan-400" size={22} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="group bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </a>

              <a
                href="#projects"
                className="border border-white/10 hover:border-cyan-500 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 bg-white/5 backdrop-blur-sm transition-all duration-300"
              >
                <Play size={18} />
                View Portfolio
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-5 text-center"
                >
                  <h3 className="text-3xl font-bold text-cyan-400 mb-1">
                    {item.number}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
              {/* Top Bar */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* Dashboard Mockup */}
              <div className="space-y-6">
                {/* Header */}
                <div className="bg-slate-900/70 rounded-2xl p-6 border border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold">
                        Smart IT Dashboard
                      </h3>

                      <p className="text-slate-400 text-sm">
                        Security & Technical Overview
                      </p>
                    </div>

                    <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl text-sm">
                      Active Services
                    </div>
                  </div>

                  <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  </div>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/70 p-5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition">
                    <Globe className="text-cyan-400 mb-4" size={32} />

                    <h4 className="font-semibold mb-2">
                      Web Solutions
                    </h4>

                    <p className="text-sm text-slate-400">
                      Modern business websites
                    </p>
                  </div>

                  <div className="bg-slate-900/70 p-5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition">
                    <Camera className="text-cyan-400 mb-4" size={32} />

                    <h4 className="font-semibold mb-2">
                      CCTV Installation
                    </h4>

                    <p className="text-sm text-slate-400">
                      Smart surveillance systems
                    </p>
                  </div>

                  <div className="bg-slate-900/70 p-5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition">
                    <Wrench className="text-cyan-400 mb-4" size={32} />

                    <h4 className="font-semibold mb-2">
                      PC Repairs
                    </h4>

                    <p className="text-sm text-slate-400">
                      Fast repair & upgrades
                    </p>
                  </div>

                  <div className="bg-slate-900/70 p-5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition">
                    <Server className="text-cyan-400 mb-4" size={32} />

                    <h4 className="font-semibold mb-2">
                      System Support
                    </h4>

                    <p className="text-sm text-slate-400">
                      Reliable IT maintenance
                    </p>
                  </div>
                </div>

                {/* Bottom Status */}
                <div className="bg-slate-900/70 rounded-2xl p-5 border border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Monitor className="text-cyan-400" size={28} />

                    <div>
                      <h4 className="font-semibold">
                        System Performance
                      </h4>

                      <p className="text-sm text-slate-400">
                        Optimized & Protected
                      </p>
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-cyan-400">
                    99.9%
                  </div>
                </div>
              </div>

              {/* Floating Blur */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}