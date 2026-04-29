export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Contact Us
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-slate-800 border border-white/10 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-slate-800 border border-white/10 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-slate-800 border border-white/10 outline-none"
          ></textarea>

          <button
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}