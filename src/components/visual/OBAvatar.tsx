import React from 'react'
import { AvatarApearAnimationProp } from '../../interfaces/animations/Animations'
import { animated } from '@react-spring/web'

const OBAvatar: React.FC<AvatarApearAnimationProp> = ({style, spring}): JSX.Element => {
  return (
    <animated.img style={{...style, ...spring, borderRadius: '100%'}} src='/src/assets/images/Octavio-Bruza.jpg' alt='Octavio Bruza'/>
  )
}

export default OBAvatar