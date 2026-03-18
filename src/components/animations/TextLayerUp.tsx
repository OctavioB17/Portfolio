import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import { TextLayerUpProps } from '../../interfaces/animations/Animations';

const TextLayerUp: React.FC<TextLayerUpProps> = ({ node, style, onAnimationStart, isActive = true }): JSX.Element => {
  const [spring, api] = useSpring(() => ({
    from: { y: 0 },
  }));

  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const startAnimation = (): void => {
    if (isAnimating.current || !isActive) return;
    
    isAnimating.current = true;
    api.start({
      to: { y: -window.innerHeight },
      config: { tension: 50, friction: 20 },
      onStart: () => {
        if (onAnimationStart) {
          onAnimationStart();
        }
      },
      onRest: () => {
        isAnimating.current = false;
      },
    });
  };

  const handleClick = (): void => {
    if (isActive) {
      startAnimation();
    }
  };

  const handleWheel = (e: WheelEvent): void => {
    if (e.deltaY < 0 && isActive) {
      e.preventDefault();
      startAnimation();
    }
  };

  const handleTouchStart = (e: TouchEvent): void => {
    if (isActive) {
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e: TouchEvent): void => {
    if (isActive) {
      touchEndY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (): void => {
    if (!isActive) return;
    
    const swipeDistance = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      startAnimation();
    }
  };

  useEffect(() => {
    const element = document.querySelector('body');
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
      element.addEventListener('touchstart', handleTouchStart, { passive: true });
      element.addEventListener('touchmove', handleTouchMove, { passive: true });
      element.addEventListener('touchend', handleTouchEnd, { passive: true });

      return () => {
        element.removeEventListener('wheel', handleWheel);
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
        element.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isActive]);

  return (
    <animated.div onClick={handleClick} style={{ ...spring, ...style }}>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...style,
        }}
      >
        {node}
      </Box>
    </animated.div>
  );
};

export default TextLayerUp;