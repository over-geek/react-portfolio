import { motion } from 'framer-motion';
import { Mail, Send, ShieldCheck } from 'lucide-react';

const ContactSection = () => (
  <section className="section-shell flex items-center" id="contact">
    <div className="grid w-full gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <motion.div
        className="mx-auto max-w-2xl text-center xl:mx-0 xl:max-w-none xl:text-left"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.35 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="font-mono text-sm uppercase text-cyan">05 / Contact signal</p>
        <h2 className="mt-4 text-4xl font-semibold uppercase leading-tight text-ivory sm:text-5xl">
          Send bytes my way.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-ash xl:mx-0">
          Open to security-minded product work, intelligent interfaces, and
          fullstack systems that need careful engineering from the first commit.
        </p>
        <div className="mt-8 grid justify-items-center gap-3 font-mono text-sm uppercase text-ash xl:justify-items-start">
          <a
            className="inline-flex w-fit items-center gap-3 rounded border border-white/10 bg-panel/70 px-4 py-3 transition hover:border-cyan/50 hover:text-cyan"
            href="mailto:kagyare100@gmail.com"
          >
            <Mail className="h-4 w-4" strokeWidth={1.8} />
            kagyare100@gmail.com
          </a>
          <div className="inline-flex w-fit items-center gap-3 rounded border border-signal/20 bg-signal/8 px-4 py-3 text-ivory/80">
            <ShieldCheck className="h-4 w-4 text-signal" strokeWidth={1.8} />
            Security and AI integration focus
          </div>
        </div>
      </motion.div>

      <motion.form
        action="https://formsubmit.co/f0f1291cd42dbe9af96e80065971a0d2"
        className="rounded-md border border-white/10 bg-panel/72 p-5 shadow-insetSignal backdrop-blur sm:p-7"
        id="form"
        initial={{ opacity: 0, y: 24 }}
        method="POST"
        target="_blank"
        transition={{ delay: 0.08, duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.35 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <input name="_subject" type="hidden" value="Portfolio contact signal" />
        <input name="_template" type="hidden" value="table" />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="font-mono text-xs uppercase text-ash">Name</span>
            <input
              className="mt-2 h-12 w-full rounded border border-white/10 bg-obsidian/70 px-4 text-ivory outline-none transition placeholder:text-ash/45 focus:border-cyan/70"
              name="name"
              placeholder="Full name"
              required
              type="text"
            />
          </label>
          <label className="block">
            <span className="font-mono text-xs uppercase text-ash">Email</span>
            <input
              className="mt-2 h-12 w-full rounded border border-white/10 bg-obsidian/70 px-4 text-ivory outline-none transition placeholder:text-ash/45 focus:border-cyan/70"
              name="email"
              placeholder="Email address"
              required
              type="email"
            />
          </label>
        </div>

        <label className="mt-5 block">
          <span className="font-mono text-xs uppercase text-ash">Message</span>
          <textarea
            className="mt-2 min-h-44 w-full resize-y rounded border border-white/10 bg-obsidian/70 px-4 py-3 text-ivory outline-none transition placeholder:text-ash/45 focus:border-cyan/70"
            name="message"
            placeholder="Tell me what you are building."
            required
          />
        </label>

        <button
          className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 rounded-md bg-cyan px-5 font-mono text-sm uppercase text-obsidian transition hover:bg-ivory sm:w-auto"
          type="submit"
        >
          <Send className="h-4 w-4" strokeWidth={1.8} />
          Send Signal
        </button>
      </motion.form>
    </div>
  </section>
);

export default ContactSection;
