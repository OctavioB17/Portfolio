import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import TextLayerUp from '../animations/TextLayerUp';
import AvatarApearAnimation from '../animations/AvatarApearAnimation';
import { BooleanStateProps } from '../../interfaces/Reusable';

const EnterAnimationPhone: React.FC<BooleanStateProps> = ({ setState, state }): JSX.Element => {

  const [showAvatar, setShowAvatar] = useState(false);
  const handleSecondTextAnimationStart = () => {
    setShowAvatar(true);
  };

  const boxStyleRef = useRef<CSSProperties>({ position: 'relative', width: '100%', height: '100vh' });
  useEffect(() => {
    if (state) {
      boxStyleRef.current = { ...boxStyleRef.current, display: 'none' };
    } else {
      boxStyleRef.current = { position: 'relative', width: '100%', height: '100vh' };
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
                  xs: '4rem', 
                  sm: '6vw',  
                },
                padding: {
                  xs: '1vw'
                }
              }}
            >
            Hey!
          </Typography>
        }
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          minHeight: '100vh',
          minWidth: '100vw',
          zIndex: 5,
          backgroundColor: 'primary.main',
        }}
      />
    <TextLayerUp
        node={
          <Typography
              sx={{
                fontWeight: 700,
                textAlign: 'center',
                fontSize: {
                  xs: '3rem', 
                  sm: '6vw',
                },
                padding: {
                  xs: '1vw'
                }
              }}
            >
            My name's Octavio Bruza.
          </Typography>
        }
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          minHeight: '100vh',
          minWidth: '100vw',
          zIndex: 4,
          backgroundColor: 'secondary.main',
        }}
      />
                  <TextLayerUp
        node={
          <Typography
              sx={{
                fontWeight: 700,
                textAlign: 'center',
                fontSize: {
                  xs: '3rem', 
                  sm: '6vw',  
                },
                padding: {
                  xs: '2vw'
                }
              }}
            >
            I'm a FullStack Javascript Developer
          </Typography>
        }
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          minHeight: '100vh',
          minWidth: '100vw',
          zIndex: 3,
          backgroundColor: 'primary.main',
        }}
      />
      <TextLayerUp
        node={
          <Typography              
            sx={{
                fontWeight: 700,
                textAlign: 'center',
                fontSize: {
                  xs: '3rem', 
                  sm: '6vw',  
                },
                padding: {
                  xs: '2vw'
                }
              }}>
            And this is my portfolio
          </Typography>
        }
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          minHeight: '100vh',
          minWidth: '100vw',
          zIndex: 2,
          backgroundColor: 'secondary.main',
        }}
        onAnimationStart={handleSecondTextAnimationStart}
      />
      {showAvatar && <AvatarApearAnimation setState={setState}/>}
    </Box>
  );
};

export default EnterAnimationPhone;
