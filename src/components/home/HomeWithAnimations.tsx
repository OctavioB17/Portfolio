import { useState } from 'react'
import { PositionProvider } from '../../context/PositionProvider'
import EnterAnimation from './EnterAnimation'
import LandingWithAnimations from './landing/LandingWithAnimations'
const Home: React.FC = (): JSX.Element => {

  const [animationStart, setAnimationStart] = useState<boolean>(false)
  
  return (
    <PositionProvider>
      <>
        <EnterAnimation setState={setAnimationStart} state={animationStart}/>
        <LandingWithAnimations state={animationStart}/>
      </>
    </PositionProvider>
  )
}

export default Home