import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SplineStage = ({ className = '' }) => (
  <motion.div
    className={`relative min-h-[360px] min-w-0 overflow-hidden sm:min-h-[440px] lg:min-h-[620px] ${className}`}
    initial={{ opacity: 0, y: 24 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.3 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <Suspense
      fallback={(
        <div className="relative z-10 flex min-h-[360px] items-center justify-center font-mono text-sm uppercase text-ash sm:min-h-[440px] lg:min-h-[620px]">
          Loading scene
        </div>
      )}
    >
      <Spline
        className="relative z-0 h-full min-h-[360px] w-full max-w-full sm:min-h-[440px] lg:min-h-[620px]"
        scene="https://prod.spline.design/PCaNYCiDfsYHGAQJ/scene.splinecode"
      />
    </Suspense>
  </motion.div>
);

SplineStage.propTypes = {
  className: PropTypes.string,
};

export default SplineStage;
