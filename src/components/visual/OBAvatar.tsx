import React, { useEffect, useRef } from 'react';
import { animated } from '@react-spring/web';
import { AvatarApearAnimationProp } from '../../interfaces/animations/Animations';

const OBAvatar: React.FC<AvatarApearAnimationProp> = ({ spring }): JSX.Element => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      console.log('Position of animated.img:', rect);
    }
  }, [spring]);
  let animatedStyle = {}
  if (spring) {
    animatedStyle = {
      position: 'absolute' as const,
      top: spring.y,
      bottom: spring.y,
      left: spring.x,
      width: spring.width,
      height: spring.height,
      borderRadius: '50%',
      zIndex: 1
    };
  }
  return (
    <animated.img
      ref={imgRef}
      style={animatedStyle}
      src="/src/assets/images/Octavio-Bruza.jpg"
      alt="Octavio Bruza"
    />
  );
};

export default OBAvatar;
