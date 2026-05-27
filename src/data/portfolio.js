import spacexPreview from '../assets/falcon-9.webp';
import starshipPreview from '../assets/starship.jpg';
import tradevaultPreview from '../assets/tradevault.png';
import valorantPreview from '../assets/valorant.png';

export const navSections = [
  { id: 'origin', label: 'ORIGIN', detail: 'INTRO' },
  { id: 'core-pillars', label: 'PILLARS', detail: 'SYSTEMS' },
  { id: 'live-deployments', label: 'LIVE', detail: 'DEPLOYMENTS' },
  { id: 'case-studies', label: 'CASE', detail: 'STUDIES' },
  { id: 'contact', label: 'CONTACT', detail: 'SIGNAL' },
];

export const heroPhrases = [
  'SECURE SYSTEMS ENGINEER',
  'AI-INTEGRATED FULLSTACK',
  'RESILIENT APP ARCHITECT',
];

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/over-geek',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kenneth-k-agyare-kissi-81a906352/',
    icon: 'linkedin',
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/kenagy',
    icon: 'codepen',
  },
  {
    label: 'Signal',
    href: 'mailto:kagyare100@gmail.com',
    icon: 'mail',
  },
];

export const pillars = [
  {
    title: 'Intelligent Software Integration',
    eyebrow: 'AI-NATIVE DELIVERY',
    icon: 'brain',
    description:
      'Designing fullstack products where model-assisted workflows, automation, and human review loops are first-class system concerns.',
    points: ['AI workflow interfaces', 'API orchestration', 'Human-in-the-loop review'],
  },
  {
    title: 'Security Operations',
    eyebrow: 'DEFENSIVE SYSTEMS',
    icon: 'shield',
    description:
      'Building software with observability, access control, threat modeling, and operational resilience treated as core product surfaces.',
    points: ['Least-privilege flows', 'Audit-ready events', 'Detection-minded telemetry'],
  },
  {
    title: 'High-Assurance Architecture',
    eyebrow: 'RESILIENT APPS',
    icon: 'network',
    description:
      'Shipping interfaces and services that remain legible under stress, with careful data boundaries and predictable failure modes.',
    points: ['Typed interfaces', 'Local-first safeguards', 'Performance-aware UX'],
  },
];

export const liveProjects = [
  {
    title: 'TradeVault',
    summary:
      'A trading command center for planning trades, tracking account performance, monitoring risk metrics, and reviewing recent trading activity in a focused dashboard.',
    stack: ['React', 'TypeScript', 'Trading UI', 'Dashboard'],
    image: tradevaultPreview,
    githubLink: 'https://github.com/over-geek/tradevault',
    liveLink: 'https://tradevault0.netlify.app/',
  },
  {
    title: 'Space Travelers Hub',
    summary:
      'A SpaceX mission booking application using live mission and rocket data, with profile tracking for reserved rockets and joined missions.',
    stack: ['React', 'Redux', 'Bootstrap', 'SpaceX API'],
    image: starshipPreview,
    githubLink: 'https://github.com/lRebornsl/space-travelers-hub',
    liveLink: 'https://space-travalers.netlify.app/',
  },
  {
    title: 'VALORANT Agent Index',
    summary:
      'An API-backed character catalogue with agent detail views, social interactions, comments, and lightweight game-data exploration.',
    stack: ['React', 'JavaScript', 'Bootstrap', 'Valorant API'],
    image: valorantPreview,
    githubLink: 'https://github.com/grauJavier/api-capstone',
    liveLink: 'https://graujavier.github.io/api-capstone/dist/',
  },
  {
    title: 'SpaceX Clone',
    summary:
      'A study in polished landing-page composition, motion, and responsive implementation inspired by the public SpaceX experience.',
    stack: ['React', 'CSS', 'JavaScript', 'Responsive UI'],
    image: spacexPreview,
    githubLink: 'https://github.com/over-geek/SpaceX-Clone',
    liveLink: 'https://hilarious-dasik-02f6e8.netlify.app/',
  },
];

export const caseStudies = [
  {
    title: 'wifi-network-analyzer',
    eyebrow: 'SOC WIRELESS INTELLIGENCE',
    summary:
      'A defensive analysis tool that helps SOC analysts detect potential rogue Wi-Fi networks by comparing SSID/BSSID pairs, identifying OUIs, and flagging entries with no vendor match.',
    diagram: ['SSID/BSSID Intake', 'OUI Lookup', 'Vendor Match', 'Rogue Flag Queue'],
    metrics: [
      'SSID/BSSID pair analysis',
      'OUI vendor identification',
      'No-match vendor flagging',
    ],
    controls: ['Rogue AP triage', 'Vendor anomaly checks', 'SOC analyst workflow', 'Evidence-focused output'],
  },
  {
    title: 'Specialized MRZ Reader',
    eyebrow: 'ICAO DOC 9303 IDENTITY PARSING',
    summary:
      'An API for travel-document images that extracts the MRZ, parses ICAO Doc 9303 fields, validates check digits and field logic, and returns a structured identity data payload.',
    diagram: ['Image Intake', 'MRZ Extraction', 'Doc 9303 Parse', 'Structured Payload'],
    metrics: [
      'Check digit validation',
      'Field logic validation',
      'Structured identity payload',
    ],
    controls: ['Document image boundary', 'ICAO field rules', 'Validation-first API', 'Identity data normalization'],
  },
  {
    title: 'Fleet Simulator',
    eyebrow: 'AUTONOMOUS FACTORY GRID SYSTEM',
    summary:
      'A simulation application for tracking Autonomous Guided Vehicles transporting parts from a warehouse to an assembly line across a 2D factory grid.',
    diagram: ['Factory Grid', 'AGV Dispatch', 'Route Simulation', 'Assembly Delivery'],
    metrics: [
      '2D warehouse-to-line routing',
      'AGV state tracking',
      'Part transport simulation',
    ],
    controls: ['Grid constraints', 'Vehicle state model', 'Route visibility', 'Operational simulation loop'],
  },
  {
    title: 'Network Traffic Guardian - ML Engine',
    eyebrow: 'NETWORK ANOMALY DETECTION',
    summary:
      'An Isolation Forest-based anomaly detection engine for flow-level network telemetry using CICIDS2017-style CSV inputs.',
    diagram: ['CSV Telemetry', 'Feature Prep', 'Isolation Forest', 'Anomaly Output'],
    metrics: [
      'Flow-level telemetry ingestion',
      'CICIDS2017-style schema support',
      'Unsupervised anomaly scoring',
    ],
    controls: ['Offline ML pipeline', 'Feature validation', 'Anomaly ranking', 'Security telemetry focus'],
  },
];
