import { useState } from 'react'
import { PositionProvider } from '../../context/PositionProvider'
import EnterAnimation from './EnterAnimation'
import LandingWithAnimations from './landing/LandingWithAnimations'
import { useMediaQuery } from '@mui/material'
import EnterAnimationPhone from '../phone/EnterAnimationPhone'
const Home: React.FC = (): JSX.Element => {

  const [animationStart, setAnimationStart] = useState<boolean>(false)
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <PositionProvider>
      <>
        {isSmallScreen ? (
          <EnterAnimationPhone setState={setAnimationStart} state={animationStart} />
        ) : (
          <EnterAnimation setState={setAnimationStart} state={animationStart} />
        )}
        <LandingWithAnimations state={animationStart}/>
      </>
    </PositionProvider>
  )
}

export default Home