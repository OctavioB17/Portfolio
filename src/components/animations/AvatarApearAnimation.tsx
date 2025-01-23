import React, { useEffect } from 'react';
import { useSpring } from '@react-spring/web';
import OBAvatar from '../visual/OBAvatar';
import { Box } from '@mui/material';
import { usePosition } from '../../hooks/usePosition';
import { BooleanStateProps } from '../../interfaces/Reusable';

const AvatarApearAnimation: React.FC<BooleanStateProps> = ({ setState }) => {
  const { position } = usePosition();
  const [spring, api] = useSpring(() => ({
    from: { x: 0, y: 0, height: 0, width: 0 },
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
          onRest: () => setState(true),
        });
      }, 5000);

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
