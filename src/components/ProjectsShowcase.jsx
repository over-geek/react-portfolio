import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  LockKeyhole,
  Route,
} from 'lucide-react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { caseStudies, liveProjects } from '../data/portfolio';

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: (index) => ({
    opacity: 1,
    transition: {
      delay: index * 0.06,
      duration: 0.46,
      ease: 'easeOut',
    },
    y: 0,
  }),
};

const ProjectCard = ({ project, index }) => (
  <motion.article
    className="group grid min-h-[430px] overflow-hidden rounded-md border border-white/10 bg-panel/72 shadow-insetSignal transition hover:border-cyan/45 sm:grid-rows-[210px_1fr]"
    custom={index}
    initial="hidden"
    variants={reveal}
    viewport={{ once: true, amount: 0.25 }}
    whileInView="visible"
  >
    <div className="relative min-h-[220px] overflow-hidden">
      <img
        alt={`${project.title} preview`}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
        src={project.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
      <div className="absolute left-4 top-4 rounded border border-cyan/30 bg-obsidian/75 px-3 py-1 font-mono text-xs uppercase text-cyan">
        Live Deployment
      </div>
    </div>
    <div className="flex flex-col p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold text-ivory">{project.title}</h3>
        <div className="flex gap-2">
          <a
            aria-label={`${project.title} GitHub repository`}
            className="flex h-9 w-9 items-center justify-center rounded border border-white/10 text-ash transition hover:border-cyan/50 hover:text-cyan"
            href={project.githubLink}
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            aria-label={`${project.title} live deployment`}
            className="flex h-9 w-9 items-center justify-center rounded border border-white/10 text-ash transition hover:border-cyan/50 hover:text-cyan"
            href={project.liveLink}
            rel="noreferrer"
            target="_blank"
          >
            <ExternalLink className="h-4 w-4" strokeWidth={1.8} />
          </a>
        </div>
      </div>
      <p className="mt-4 flex-1 leading-7 text-ash">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            className="rounded border border-white/10 bg-obsidian/60 px-2.5 py-1 font-mono text-xs uppercase text-ash/90"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

const ArchitectureDiagram = ({ nodes }) => (
  <div className="grid gap-3 sm:grid-cols-4">
    {nodes.map((node, index) => (
      <div className="relative" key={node}>
        {index > 0 && (
          <span
            aria-hidden="true"
            className="absolute -left-3 top-1/2 hidden h-px w-3 bg-cyan/40 sm:block"
          />
        )}
        <div className="min-h-20 rounded border border-cyan/20 bg-obsidian/55 p-3">
          <p className="font-mono text-[0.7rem] uppercase text-cyan/80">
            {String(index + 1).padStart(2, '0')}
          </p>
          <p className="mt-2 text-sm font-medium text-ivory">{node}</p>
        </div>
      </div>
    ))}
  </div>
);

const CaseStudyCard = ({ study, index }) => (
  <motion.article
    className="rounded-md border border-white/10 bg-panel/72 p-5 shadow-insetSignal backdrop-blur transition hover:border-signal/45"
    custom={index}
    initial="hidden"
    variants={reveal}
    viewport={{ once: true, amount: 0.25 }}
    whileInView="visible"
  >
    <div className="flex flex-col gap-6 xl:grid xl:grid-cols-[0.92fr_1.08fr]">
      <div>
        <p className="font-mono text-xs uppercase text-amber">{study.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-ivory">
          {study.title}
        </h3>
        <p className="mt-4 leading-7 text-ash">{study.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {study.controls.map((control) => (
            <span
              className="inline-flex items-center gap-2 rounded border border-signal/20 bg-signal/8 px-2.5 py-1 font-mono text-xs uppercase text-ivory/85"
              key={control}
            >
              <LockKeyhole className="h-3.5 w-3.5 text-signal" strokeWidth={1.8} />
              {control}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <ArchitectureDiagram nodes={study.diagram} />
        <div className="grid gap-3 sm:grid-cols-3">
          {study.metrics.map((metric) => (
            <div
              className="rounded border border-white/10 bg-obsidian/55 p-3 font-mono text-xs uppercase leading-5 text-ash"
              key={metric}
            >
              {metric}
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.article>
);

const ProjectsShowcase = () => (
  <>
    <section className="section-shell flex flex-col justify-center" id="live-deployments">
      <div className="mb-12 flex flex-col items-center gap-5 text-center xl:flex-row xl:items-end xl:justify-between xl:text-left">
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase text-cyan">03 / Live deployments</p>
          <h2 className="mt-4 text-4xl font-semibold uppercase leading-tight text-ivory sm:text-5xl">
            Hosted products with public trails.
          </h2>
        </div>
        <a
          className="inline-flex h-11 w-fit items-center gap-2 rounded-md border border-cyan/35 px-4 font-mono text-sm uppercase text-cyan transition hover:bg-cyan/10"
          href="https://github.com/over-geek"
          rel="noreferrer"
          target="_blank"
        >
          More on GitHub
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {liveProjects.map((project, index) => (
          <ProjectCard index={index} key={project.title} project={project} />
        ))}
      </div>
    </section>

    <section className="section-shell flex flex-col justify-center" id="case-studies">
      <div className="mx-auto mb-12 max-w-3xl text-center xl:mx-0 xl:text-left">
        <p className="font-mono text-sm uppercase text-cyan">04 / Deep-dive systems</p>
        <h2 className="mt-4 text-4xl font-semibold uppercase leading-tight text-ivory sm:text-5xl">
          Case studies for work that should be inspected, not casually demoed.
        </h2>
        <p className="mt-5 text-lg leading-8 text-ash">
          Proprietary and non-public systems are framed by architecture,
          controls, and operational behavior instead of a live deployment link.
        </p>
      </div>

      <div className="space-y-5">
        {caseStudies.map((study, index) => (
          <CaseStudyCard index={index} key={study.title} study={study} />
        ))}
      </div>
      <div className="mx-auto mt-8 inline-flex w-fit items-center gap-2 rounded border border-cyan/20 bg-cyan/8 px-3 py-2 text-center font-mono text-xs uppercase text-cyan xl:mx-0 xl:text-left">
        <Route className="h-4 w-4" strokeWidth={1.8} />
        Proprietary systems summarized without exposing private repos, deployments, or sensitive implementation details.
      </div>
    </section>
  </>
);

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.shape({
    githubLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

ArchitectureDiagram.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CaseStudyCard.propTypes = {
  index: PropTypes.number.isRequired,
  study: PropTypes.shape({
    controls: PropTypes.arrayOf(PropTypes.string).isRequired,
    diagram: PropTypes.arrayOf(PropTypes.string).isRequired,
    eyebrow: PropTypes.string.isRequired,
    metrics: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectsShowcase;
