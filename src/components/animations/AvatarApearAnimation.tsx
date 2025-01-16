import { animated, useSpring } from '@react-spring/web'
import OBAvatar from '../visual/OBAvatar'
import { Box } from '@mui/material'

const AvatarApearAnimation = () => {
  const [spring, api] = useSpring(() => ({
    from: {x: 0, y: 0, height: 0, width: 0}
  }))

  api.start({
    to: {height: 100, width: 100}
  })
  
  return (
    <animated.div style={{...spring}}>
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
    </animated.div>
  )
}

export default AvatarApearAnimation