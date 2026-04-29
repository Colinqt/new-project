import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Layers3,
  ShoppingCart,
  GraduationCap,
  Filter,
  ShieldCheck,
  Wrench,
  Star,
  MonitorSmartphone,
} from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "Web App",
  "E-Commerce",
  "Dashboard",
  "Security",
  "Repair Services",
];

const projects = [
  {
    title: "Corporate Business Website",
    category: "Web App",
    description:
      "Modern responsive business website with premium UI/UX, SEO optimization, and high-performance animations.",
    icon: <Globe size={30} />,
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "#",
    status: "Completed",
  },
  {
    title: "E-Commerce Platform",
    category: "E-Commerce",
    description:
      "Advanced online shopping platform with secure payments, product management, and admin dashboard.",
    icon: <ShoppingCart size={30} />,
    tech: ["MERN Stack", "Stripe", "MongoDB"],
    live: "#",
    status: "Live Project",
  },
  {
    title: "School Management System",
    category: "Dashboard",
    description:
      "Complete school system with student management, attendance tracking, analytics, and reporting.",
    icon: <GraduationCap size={30} />,
    tech: ["React", "Node.js", "MySQL"],
    live: "#",
    status: "Completed",
  },
  {
    title: "CCTV Installation System",
    category: "Security",
    description:
      "Professional CCTV monitoring setup with remote access, HD surveillance, and secure recording system.",
    icon: <ShieldCheck size={30} />,
    tech: ["CCTV Cameras", "Remote Access", "Security System"],
    live: "#",
    status: "Featured",
  },
  {
    title: "Analytics Dashboard",
    category: "Dashboard",
    description:
      "Interactive analytics dashboard with realtime reports, business insights, and monitoring tools.",
    icon: <Layers3 size={30} />,
    tech: ["React", "Chart.js", "Tailwind"],
    live: "#",
    status: "Live Project",
  },
  {
    title: "PC Repair & Upgrade Services",
    category: "Repair Services",
    description:
      "Computer repair solutions including hardware upgrades, virus removal, optimization, and troubleshooting.",
    icon: <Wrench size={30} />,
    tech: ["Hardware Repair", "System Upgrade", "Troubleshooting"],
    live: "#",
    status: "Available",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full mb-6">
            <Star size={16} />
            Professional Portfolio
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Featured
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects & Services
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-8">
            Discover our latest business websites, dashboards,
            security systems, and professional computer repair
            solutions designed for modern businesses and clients.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500"
            >
              {/* Top Banner */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-700">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Floating Glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

                {/* Icon */}
                <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                  {project.icon}
                </div>

                {/* Status */}
                <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-sm text-white">
                  {project.status}
                </div>

                {/* Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={project.live}
                    className="bg-cyan-500 hover:bg-cyan-600 p-5 rounded-2xl shadow-lg shadow-cyan-500/20 transition"
                  >
                    <ArrowUpRight size={24} />
                  </a>
                </div>

                {/* Category */}
                <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-sm text-white">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-7 mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-900 border border-white/10 px-4 py-2 rounded-xl text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all"
                  >
                    Explore More
                    <ArrowUpRight size={18} />
                  </a>

                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <MonitorSmartphone size={22} />
                  </div>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-3xl border border-cyan-500/0 group-hover:border-cyan-500/30 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-white/5 border border-white/10 rounded-3xl p-14 backdrop-blur-xl"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Professional IT Services?
          </h3>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-8 mb-10">
            From website development and CCTV installation to
            computer repairs and business systems, we provide
            complete digital and technical solutions for your needs.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            Start Your Project
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}