import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { AnimatedWrapperProps } from '../../interfaces/animations/Animations';

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children }) => {
  const [spring, api] = useSpring(() => ({
    from: {
      x: 0,
      y: 0,
      opacity: 0,
    },
  }));

  useEffect(() => {
      api.start({
        to: { opacity: 1, x: 0, y: 0 },
        config: { duration: 1000 },
      });
  }, [api]);

  return <animated.div style={spring}>{children}</animated.div>;
};

export default AnimatedWrapper;