import { motion, useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';

const NODE_SPACING = 72;

const getTitle = (section) => `${section.label} / ${section.detail}`;

const ScrollRail = ({ sections, activeId, activeIndex }) => {
  const shouldReduceMotion = useReducedMotion();
  const safeIndex = Math.min(Math.max(activeIndex, 0), sections.length - 1);
  const railHeight = (sections.length - 1) * NODE_SPACING + 22;

  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <nav
        aria-label="Section progress"
        className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 lg:block"
      >
        <div className="relative w-20 2xl:w-64" style={{ height: railHeight }}>
          <div
            aria-hidden="true"
            className="absolute left-[17px] top-[11px] w-px bg-line"
            style={{ height: railHeight - 22 }}
          />
          <motion.div
            aria-hidden="true"
            animate={{ y: safeIndex * NODE_SPACING }}
            className="absolute left-[11px] top-0 h-[34px] w-3 rounded-full bg-cyan shadow-signal"
            transition={{ type: 'spring', stiffness: 240, damping: 28 }}
          />

          {sections.map((section, index) => {
            const isActive = section.id === activeId;

            return (
              <button
                aria-current={isActive ? 'location' : undefined}
                className="absolute left-0 flex h-9 items-center text-left outline-none"
                key={section.id}
                onClick={() => handleNavigate(section.id)}
                style={{ top: index * NODE_SPACING }}
                type="button"
              >
                <span className="ml-7 flex items-baseline gap-3 font-mono">
                  <span
                    className={`text-[0.72rem] transition-colors ${
                      isActive ? 'text-cyan' : 'text-ash/45'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <motion.span
                    animate={{
                      opacity: isActive ? 1 : 0.46,
                      x: isActive ? 0 : -4,
                    }}
                    className={`hidden whitespace-nowrap text-xs uppercase 2xl:inline ${
                      isActive ? 'text-ivory' : 'text-ash'
                    }`}
                    transition={{ duration: 0.24 }}
                  >
                    {getTitle(section)}
                  </motion.span>
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      <nav
        aria-label="Section progress"
        className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-md border border-white/10 bg-obsidian/88 px-3 py-2 shadow-signal backdrop-blur lg:hidden"
      >
        {sections.map((section, index) => {
          const isActive = section.id === activeId;

          return (
            <button
              aria-current={isActive ? 'location' : undefined}
              aria-label={getTitle(section)}
              className="relative flex h-7 w-7 items-center justify-center rounded text-[0.68rem] font-mono text-ash outline-none"
              key={section.id}
              onClick={() => handleNavigate(section.id)}
              type="button"
            >
              {isActive && (
                <motion.span
                  className="absolute inset-0 rounded bg-cyan/18 ring-1 ring-cyan/60"
                  layoutId="mobile-rail-active"
                  transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                />
              )}
              <span className={`relative ${isActive ? 'text-cyan' : 'text-ash/70'}`}>
                {index + 1}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

ScrollRail.propTypes = {
  activeId: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      detail: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ScrollRail;
