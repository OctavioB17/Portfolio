import { PositionProvider } from '../../context/PositionProvider'
import Landing from './landing/Landing'

const Home: React.FC = (): JSX.Element => {

  
  return (
    <PositionProvider>
      <>
        <Landing/>
      </>
    </PositionProvider>
  )
}

export default Home