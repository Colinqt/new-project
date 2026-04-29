import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  PenTool,
  Wrench,
  ArrowUpRight,
  CheckCircle2,
  Star,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Modern, responsive, and high-performance websites tailored for businesses and startups.",
    icon: <Globe size={34} />,
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading Speed",
    ],
  },
  {
    title: "CCTV Installation",
    desc: "Professional CCTV installation and monitoring systems for homes, offices, and businesses.",
    icon: <ShieldCheck size={34} />,
    features: [
      "HD Security Cameras",
      "Remote Monitoring",
      "24/7 Surveillance",
    ],
  },
  {
    title: "UI/UX Design",
    desc: "Clean, modern, and user-focused interface designs that improve customer experience.",
    icon: <PenTool size={34} />,
    features: [
      "Modern Layouts",
      "Mobile Friendly",
      "User Experience Focused",
    ],
  },
  {
    title: "Computer Repairs",
    desc: "Reliable computer repair, maintenance, troubleshooting, and hardware upgrade services.",
    icon: <Wrench size={34} />,
    features: [
      "Hardware Upgrades",
      "Virus Removal",
      "System Optimization",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full mb-6">
            <Star size={16} />
            Professional IT Solutions
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Our Premium
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-8 max-w-3xl mx-auto">
            We provide high-quality digital solutions, security systems,
            computer services, and modern technology support for
            businesses and individuals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-slate-400 leading-7 mb-8">
                {service.desc}
              </p>

              {/* Features */}
              <div className="relative z-10 space-y-4 mb-8">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-cyan-400 flex-shrink-0"
                    />

                    <span className="text-slate-300 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                href="#contact"
                className="relative z-10 inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all"
              >
                Learn More
                <ArrowUpRight size={18} />
              </a>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-3xl border border-cyan-500/0 group-hover:border-cyan-500/30 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl"
        >
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Business?
          </h3>

          <p className="text-slate-400 text-lg leading-8 max-w-2xl mx-auto mb-8">
            We deliver reliable IT solutions, security systems,
            web development, and technical support to help your
            business grow faster and smarter.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            Get Free Consultation
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}