import React, { useRef } from 'react';
import { animated } from '@react-spring/web';
import { AvatarApearAnimationProp } from '../../interfaces/animations/Animations';
import  OctavioBruza from '../../assets/images/Octavio-Bruza.jpg'

const OBAvatar: React.FC<AvatarApearAnimationProp> = React.memo(({ spring }): JSX.Element => {
  const imgRef = useRef<HTMLImageElement | null>(null);

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
      src={OctavioBruza}
      alt="Octavio Bruza"
    />
  );
});

export default OBAvatar;
