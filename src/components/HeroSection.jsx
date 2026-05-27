import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';
import { heroPhrases, socialLinks } from '../data/portfolio';
import EncryptedText from './EncryptedText';
import SplineStage from './SplineStage';

const iconMap = {
  codepen: FaCodepen,
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: Mail,
};

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const currentPhrase = heroPhrases[phraseIndex];

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setPhraseIndex((currentIndex) => (currentIndex + 1) % heroPhrases.length);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  return (
    <section className="section-shell relative flex min-h-screen flex-col justify-center overflow-hidden" id="origin">
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-[62rem] flex-col justify-center xl:mx-0 xl:w-[68%] xl:max-w-[72rem]">
        <div className="absolute bottom-8 left-0 top-8 hidden w-10 flex-col items-center justify-between border-l border-line xl:flex">
          <span className="vertical-rl pl-3 font-mono text-xs uppercase text-ash">
            Future-facing secure systems
          </span>
          <span className="h-4 w-4 border border-signal text-signal">
            <span className="block h-full w-px translate-x-[7px] bg-signal" />
          </span>
        </div>

        <motion.div
          className="mx-auto flex w-full min-w-0 max-w-[calc(100vw-3rem)] flex-col items-center text-center sm:max-w-3xl lg:max-w-none xl:mx-0 xl:items-start xl:pl-16 xl:text-left"
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="mb-5 font-mono text-sm uppercase text-cyan">
            <EncryptedText text="Kenneth Kwame Agyare Kissi" />
          </p>
          <div className="relative mx-auto min-h-[12rem] w-full max-w-[22rem] sm:min-h-[16rem] sm:max-w-[44rem] lg:min-h-[18rem] lg:max-w-[64rem] xl:mx-0 xl:min-h-[20rem] xl:max-w-[70rem]">
            <AnimatePresence initial={false}>
              <motion.h2
                animate={{ opacity: 1, y: 0, zIndex: 2 }}
                className="absolute left-0 top-0 w-full text-center text-4xl font-semibold uppercase leading-tight text-ivory sm:text-6xl sm:leading-none xl:text-left xl:text-8xl"
                exit={{ opacity: 0, y: -18, zIndex: 1 }}
                initial={{ opacity: 0, y: 24, zIndex: 2 }}
                key={currentPhrase}
                transition={{ duration: shouldReduceMotion ? 0 : 0.42, ease: 'easeOut' }}
              >
                {currentPhrase}
              </motion.h2>
            </AnimatePresence>
          </div>
          <p className="mt-6 max-w-[20rem] text-xl leading-8 text-ash sm:max-w-3xl sm:text-2xl">
            High-assurance architecture, fullstack resilience, optimism
          </p>
          <p className="mt-6 max-w-[20rem] text-base leading-8 text-ash/85 sm:max-w-3xl">
            I build intelligent, resilient systems where security boundaries,
            operational clarity, and AI-assisted workflows are designed into the
            core product experience.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3 xl:justify-start">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || ArrowUpRight;

              return (
                <a
                  className="group inline-flex h-11 items-center gap-2 rounded-md border border-white/10 bg-panel/70 px-4 font-mono text-sm uppercase text-ivory transition hover:border-cyan/70 hover:text-cyan"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      <SplineStage className="hidden flex-col xl:absolute xl:bottom-20 xl:right-8 xl:mt-0 xl:flex xl:w-[44rem]" />
    </section>
  );
};

export default HeroSection;
