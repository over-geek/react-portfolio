import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Network,
  ShieldCheck,
} from 'lucide-react';
import { pillars } from '../data/portfolio';

const iconMap = {
  brain: BrainCircuit,
  network: Network,
  shield: ShieldCheck,
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    transition: {
      delay: index * 0.08,
      duration: 0.48,
      ease: 'easeOut',
    },
    y: 0,
  }),
};

const EngineeringPillars = () => (
  <section className="section-shell flex flex-col justify-center" id="core-pillars">
    <div className="mx-auto mb-12 max-w-3xl text-center xl:mx-0 xl:text-left">
      <p className="font-mono text-sm uppercase text-cyan">02 / Core engineering pillars</p>
      <h2 className="mt-4 text-4xl font-semibold uppercase leading-tight text-ivory sm:text-5xl">
        Security, intelligence, and reliability as one design surface.
      </h2>
      <p className="mt-5 text-lg leading-8 text-ash">
        The work sits at the intersection of application engineering, defensive
        thinking, and AI-enabled systems. Each layer is designed to stay useful
        when the product is under load, scrutiny, or change.
      </p>
    </div>

    <div className="grid gap-5 lg:grid-cols-3">
      {pillars.map((pillar, index) => {
        const Icon = iconMap[pillar.icon];

        return (
          <motion.article
            className="rounded-md border border-white/10 bg-panel/72 p-6 shadow-insetSignal backdrop-blur transition hover:border-cyan/40"
            custom={index}
            initial="hidden"
            key={pillar.title}
            variants={cardVariants}
            viewport={{ once: true, amount: 0.35 }}
            whileInView="visible"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase text-amber">{pillar.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-ivory">
                  {pillar.title}
                </h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-cyan/30 bg-cyan/8 text-cyan">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
            </div>
            <p className="mt-5 leading-7 text-ash">{pillar.description}</p>
            <ul className="mt-7 space-y-3">
              {pillar.points.map((point) => (
                <li className="flex items-center gap-3 font-mono text-sm text-ash/85" key={point}>
                  <span className="h-1.5 w-1.5 bg-cyan" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        );
      })}
    </div>
  </section>
);

export default EngineeringPillars;
