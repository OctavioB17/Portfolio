import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import TextLayerUp from '../animations/TextLayerUp';
import AvatarApearAnimation from '../animations/AvatarApearAnimation';
import { BooleanStateProps } from '../../interfaces/Reusable';

const EnterAnimationPhone: React.FC<BooleanStateProps> = ({ setState, state }): JSX.Element => {

  const [showAvatar, setShowAvatar] = useState(false);
  const [currentLayer, setCurrentLayer] = useState(0);
  
  const handleLayerComplete = () => {
    if (currentLayer < 3) {
      setCurrentLayer(currentLayer + 1);
    } else {
      setShowAvatar(true);
    }
  };

  const boxStyleRef = useRef<CSSProperties>({ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' });
  
  useEffect(() => {
    if (!state) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

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
      {currentLayer >= 0 && (
        <TextLayerUp
          node={
            <Typography
                sx={{
                  fontWeight: 700,
                  textAlign: 'center',
                  fontSize: '8vw',
                  padding: '1vw'
                }}
              >
              Hey!
            </Typography>
          }
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            zIndex: 5,
            backgroundColor: 'primary.main',
            overflow: 'hidden'
          }}
          onAnimationStart={handleLayerComplete}
          isActive={currentLayer === 0}
        />
      )}
      {currentLayer >= 1 && (
        <TextLayerUp
          node={
            <Typography
                sx={{
                  fontWeight: 700,
                  textAlign: 'center',
                  fontSize: '6vw',
                  padding: '1vw'
                }}
              >
              My name's Octavio Bruza.
            </Typography>
          }
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            zIndex: 4,
            backgroundColor: 'secondary.main',
            overflow: 'hidden'
          }}
          onAnimationStart={handleLayerComplete}
          isActive={currentLayer === 1}
        />
      )}
      {currentLayer >= 2 && (
        <TextLayerUp
          node={
            <Typography
                sx={{
                  fontWeight: 700,
                  textAlign: 'center',
                  fontSize: '6vw',
                  padding: '2vw'
                }}
              >
              I'm a FullStack Developer
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
          onAnimationStart={handleLayerComplete}
          isActive={currentLayer === 2}
        />
      )}
      {currentLayer >= 3 && (
        <TextLayerUp
          node={
            <Typography sx={{ fontWeight: 700, fontSize: '6vw' }}>
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
          onAnimationStart={handleLayerComplete}
          isActive={currentLayer === 3}
        />
      )}
      {showAvatar && <AvatarApearAnimation setState={setState}/>}
    </Box>
  );
};

export default EnterAnimationPhone;
