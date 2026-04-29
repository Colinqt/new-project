import { motion } from "framer-motion";
import {
  CheckCircle2,
  Globe,
  ShieldCheck,
  Rocket,
  Users,
  Code2,
  Award,
  Briefcase,
} from "lucide-react";

export default function About() {
  const features = [
    "Custom React & Full Stack Development",
    "Responsive and Mobile-Friendly Design",
    "Cloud Deployment & Hosting Solutions",
    "SEO Optimization & Performance Tuning",
  ];

  const stats = [
    {
      icon: <Briefcase size={28} />,
      number: "120+",
      label: "Projects Completed",
    },
    {
      icon: <Users size={28} />,
      number: "80+",
      label: "Satisfied Clients",
    },
    {
      icon: <Award size={28} />,
      number: "5+",
      label: "Years Experience",
    },
    {
      icon: <Rocket size={28} />,
      number: "24/7",
      label: "Support Service",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-slate-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              About Kryptronic IT Solutions
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-white">
              We Transform
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ideas Into Digital Success
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-300 leading-8 mb-8">
              Kryptronic IT Solutions is a modern technology company focused on
              building scalable software systems, high-performance websites,
              mobile applications, and cloud-based digital solutions for
              startups, businesses, and enterprises.
            </p>

            <p className="text-lg text-slate-400 leading-8 mb-10">
              Our mission is to help businesses grow faster through innovation,
              automation, and modern technology while delivering premium user
              experiences and reliable support.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    className="text-cyan-400 flex-shrink-0"
                    size={24}
                  />

                  <span className="text-slate-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                View Our Work
              </a>

              <a
                href="#contact"
                className="border border-white/10 hover:border-cyan-500 bg-white/5 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
              {/* Top Section */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Why Choose Us?
                </h3>

                <p className="text-slate-400 leading-7">
                  We combine creativity, strategy, and cutting-edge technology
                  to build digital products that drive real business results.
                </p>
              </div>

              {/* Service Cards */}
              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                <div className="bg-slate-950/60 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/40 transition">
                  <Globe className="text-cyan-400 mb-4" size={34} />

                  <h4 className="text-xl font-semibold text-white mb-2">
                    Web Development
                  </h4>

                  <p className="text-slate-400 text-sm leading-6">
                    Responsive and scalable websites using React and Tailwind.
                  </p>
                </div>

                <div className="bg-slate-950/60 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/40 transition">
                  <Code2 className="text-cyan-400 mb-4" size={34} />

                  <h4 className="text-xl font-semibold text-white mb-2">
                    Software Systems
                  </h4>

                  <p className="text-slate-400 text-sm leading-6">
                    Powerful business systems and custom applications.
                  </p>
                </div>

                <div className="bg-slate-950/60 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/40 transition">
                  <ShieldCheck
                    className="text-cyan-400 mb-4"
                    size={34}
                  />

                  <h4 className="text-xl font-semibold text-white mb-2">
                    Security
                  </h4>

                  <p className="text-slate-400 text-sm leading-6">
                    Secure infrastructure and cloud-based protection.
                  </p>
                </div>

                <div className="bg-slate-950/60 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/40 transition">
                  <Rocket className="text-cyan-400 mb-4" size={34} />

                  <h4 className="text-xl font-semibold text-white mb-2">
                    Fast Deployment
                  </h4>

                  <p className="text-slate-400 text-sm leading-6">
                    Quick project delivery with premium quality standards.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-5">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="bg-slate-950/60 border border-white/5 rounded-2xl p-6 text-center"
                  >
                    <div className="flex justify-center text-cyan-400 mb-3">
                      {item.icon}
                    </div>

                    <h4 className="text-3xl font-bold text-white mb-1">
                      {item.number}
                    </h4>

                    <p className="text-sm text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Floating Glow */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-cyan-500/20 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}