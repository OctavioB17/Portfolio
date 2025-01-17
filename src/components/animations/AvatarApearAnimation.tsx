import { useSpring } from '@react-spring/web'
import OBAvatar from '../visual/OBAvatar'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

const AvatarApearAnimation = () => {
  const [spring, api] = useSpring(() => ({
    from: {x: 0, y: 0, height: 0, width: 0}
  }))

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const screenHeight = isMobile? window.innerHeight * 0.25 : window.innerHeight * 0.5;
  const screenWidth = isMobile? window.innerWidth * 0.45 : window.innerWidth * 0.25;

  useEffect(() => {
    api.start({
      to: { height: screenHeight, width: screenWidth },
      config: { tension: 50, friction: 20 }
    });
  });

  return (
        <Box sx={
            {
                minHeight: '100vh', 
                minWidth: '100vw', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
            }
        }>
            <OBAvatar spring={{...spring}}/>
        </Box>
  )
}

export default AvatarApearAnimation