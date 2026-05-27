import { useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&<>[]{}+-=';

const EncryptedText = ({ className = '', text }) => {
  const shouldReduceMotion = useReducedMotion();
  const normalizedText = useMemo(() => text.toUpperCase(), [text]);
  const [displayText, setDisplayText] = useState(normalizedText);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(normalizedText);
      return undefined;
    }

    let frame = 0;
    let intervalId;
    let repeatTimeoutId;
    const maxFrames = 34;

    const runScramble = () => {
      frame = 0;

      intervalId = window.setInterval(() => {
        frame += 1;
        const revealCount = Math.floor((frame / maxFrames) * normalizedText.length);

        setDisplayText(
          normalizedText
            .split('')
            .map((character, index) => {
              if (character === ' ' || index < revealCount) {
                return character;
              }

              return glyphs[Math.floor(Math.random() * glyphs.length)];
            })
            .join(''),
        );

        if (frame >= maxFrames) {
          window.clearInterval(intervalId);
          setDisplayText(normalizedText);
          repeatTimeoutId = window.setTimeout(runScramble, 5200);
        }
      }, 34);
    };

    runScramble();

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(repeatTimeoutId);
    };
  }, [normalizedText, shouldReduceMotion]);

  return (
    <span aria-label={normalizedText} className={className}>
      {displayText}
    </span>
  );
};

EncryptedText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default EncryptedText;
