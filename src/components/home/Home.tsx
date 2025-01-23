import { useState } from 'react'
import { PositionProvider } from '../../context/PositionProvider'
import EnterAnimation from './EnterAnimation'
import Landing from './landing/Landing'

const Home: React.FC = (): JSX.Element => {

  const [animationStart, setAnimationStart] = useState<boolean>(false)
  console.log(animationStart)

  return (
    <PositionProvider>
      <>
        <EnterAnimation setState={setAnimationStart}/>
      </>
    </PositionProvider>
  )
}

export default Home