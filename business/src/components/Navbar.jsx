import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
} from 'lucide-react'

const links = [
  'Home',
  'Services',
  'About',
  'Projects',
  'Contact',
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = links.map((link) =>
        document.getElementById(link.toLowerCase())
      )

      sections.forEach((section) => {
        if (!section) return

        const top = section.offsetTop - 120
        const height = section.offsetHeight

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 shadow-2xl backdrop-blur-xl border-b border-cyan-500/20'
            : 'bg-slate-900/70 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <span className="text-white font-black text-lg">K</span>
              </div>

              <div>
                <h1 className="text-xl lg:text-2xl font-extrabold text-white tracking-wide leading-tight">
                  Kryptronic
                </h1>
                <p className="text-xs text-cyan-400 font-medium tracking-[0.25em] uppercase">
                  IT Solutions
                </p>
              </div>
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-2">
              {links.map((link) => {
                const id = link.toLowerCase()

                return (
                  <li key={link}>
                    <a
                      href={`#${id}`}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        active === id
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                      }`}
                    >
                      {link}

                      {active === id && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 border border-cyan-400/30 rounded-full"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* CTA + Mobile Button */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden lg:flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:scale-105"
              >
                Get Started
                <ChevronRight size={18} />
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-xl transition"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-slate-950 border-l border-cyan-500/20 z-50 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Kryptronic
                  </h2>
                  <p className="text-sm text-cyan-400">
                    IT Solutions
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white bg-white/10 hover:bg-white/20 p-2 rounded-xl"
                >
                  <X size={22} />
                </button>
              </div>

              <ul className="flex flex-col px-6 py-8 gap-3">
                {links.map((link, index) => {
                  const id = link.toLowerCase()

                  return (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <a
                        href={`#${id}`}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 ${
                          active === id
                            ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span className="font-medium">{link}</span>
                        <ChevronRight size={18} />
                      </a>
                    </motion.li>
                  )
                })}
              </ul>

              <div className="mt-auto p-6 border-t border-white/10 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <Phone size={16} className="text-cyan-400" />
                    <span>+63 900 000 0000</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <Mail size={16} className="text-cyan-400" />
                    <span>hello@kryptronic.com</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-3 rounded-2xl transition-all duration-300"
                >
                  Start Your Project
                  <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
