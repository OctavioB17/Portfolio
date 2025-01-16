import { Avatar } from '@mui/material'
import React from 'react'
import { AvatarApearAnimationProp } from '../../interfaces/animations/Animations'
import { animated } from '@react-spring/web'

const OBAvatar: React.FC<AvatarApearAnimationProp> = ({sx, spring}): JSX.Element => {
  return (
    <animated.div style={{...spring}}>
      <Avatar sx={{...sx}} src='/src/assets/images/Octavio-Bruza.jpg' alt='Octavio Bruza'/>
    </animated.div>
  )
}

export default OBAvatar