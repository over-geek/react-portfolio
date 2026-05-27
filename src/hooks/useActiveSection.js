import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds) => {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (sectionIds.length === 0) {
      return undefined;
    }

    let frameId = 0;

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.66;
      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      let currentId = sectionIds[0];

      if (pageBottom >= documentHeight - 8) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();

        if (rect.top <= activationLine && rect.bottom > 80) {
          currentId = id;
        }
      });

      setActiveId(currentId);
    };

    const requestUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateActiveSection();
      });
    };

    const observer = new IntersectionObserver(requestUpdate, {
      root: null,
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
    });

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [sectionIds]);

  return {
    activeId,
    activeIndex: Math.max(sectionIds.indexOf(activeId), 0),
  };
};
