import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import TextLayerUp from '../animations/TextLayerUp';
import AvatarApearAnimation from '../animations/AvatarApearAnimation';
import { BooleanStateProps } from '../../interfaces/Reusable';

const EnterAnimation: React.FC<BooleanStateProps> = ({ setState, state }): JSX.Element => {

  const [showAvatar, setShowAvatar] = useState(false);
  const handleSecondTextAnimationStart = () => {
    setShowAvatar(true);
  };

  const boxStyleRef = useRef<CSSProperties>({ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' });
  
  // Bloquear scroll durante las animaciones
  useEffect(() => {
    if (!state) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [state]);

  useEffect(() => {
    if (state) {
      boxStyleRef.current = { ...boxStyleRef.current, display: 'none' };
    } else {
      boxStyleRef.current = { position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' };
    }
  }, [state]);

  return (
    <Box sx={boxStyleRef.current}>
      <TextLayerUp
        node={
          <Typography
              sx={{
                fontWeight: 700,
                textAlign: 'center',
                fontSize: {
                  xs: '6vw', 
                  sm: '3vw',  
                  md: '2vw',
                },
                padding: {
                  xs: '1vw'
                }
              }}
            >
            Hey, my name's Octavio Bruza. I'm a FullStack Developer
          </Typography>
        }
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          zIndex: 3,
          backgroundColor: 'primary.main',
          overflow: 'hidden'
        }}
      />
      <TextLayerUp
        node={
          <Typography sx={{ fontWeight: 700, fontSize: '2vw' }}>
            And this is my portfolio
          </Typography>
        }
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          zIndex: 2,
          backgroundColor: 'secondary.main',
          overflow: 'hidden'
        }}
        onAnimationStart={handleSecondTextAnimationStart}
      />
      {showAvatar && <AvatarApearAnimation setState={setState}/>}
    </Box>
  );
};

export default EnterAnimation;
