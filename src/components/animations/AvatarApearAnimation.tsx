import React, { useEffect } from 'react';
import { useSpring } from '@react-spring/web';
import OBAvatar from '../visual/OBAvatar';
import { Box } from '@mui/material';
import { usePosition } from '../../hooks/usePosition';
import { BooleanStateProps } from '../../interfaces/Reusable';

const AvatarApearAnimation: React.FC<BooleanStateProps> = ({ setState }) => {
  const { position } = usePosition();
  const [spring, api] = useSpring(() => ({
    from: {
      x: window.innerWidth / 2 - (window.innerWidth * 0.2),
      y: window.innerHeight / 2 - (window.innerWidth * 0.2),
      height: window.innerWidth * 0.4,
      width: window.innerWidth * 0.4,
    },
  }));

  useEffect(() => {
    if (position && setState) {
      const newPosition = {
        x: position.left + window.scrollX,
        y: position.top + window.scrollY,
        height: position.height,
        width: position.width,
      };

      const timer = setTimeout(() => {
        api.start({
          to: newPosition,
          config: { tension: 50, friction: 20 },
          onStart: () => setState(true),
        });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [position, api, setState]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <OBAvatar spring={spring} />
    </Box>
  );
};

export default AvatarApearAnimation;
