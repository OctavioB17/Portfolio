import SectionWithPhoto from './SectionWithPhoto'
import NormalBox from '../../visual/NormalBox'
import { Box, Button, Typography } from '@mui/material'
import moment from 'moment'
import { animated, useSpring } from '@react-spring/web'
import { useEffect } from 'react'
import { BooleanStateProps } from '../../../interfaces/Reusable'
const PresentationBanner: React.FC<BooleanStateProps> = ({ state }): JSX.Element => {

  const [spring, api] = useSpring(() => ({
    from: {
      x: 0,
      y: 0,
      opacity: 0
    },
  }));

  useEffect(() => {
    if (state) {
      api.start({
        to: { opacity: 1 },
        config: { duration: 1000 }
      })
    }
  }, [api, state])

  const date: string = moment('20231101', "YYYYMMDD").fromNow()

  return (
  <animated.div style={{...spring}}>
    <SectionWithPhoto imgUrl={'/src/assets/images/Octavio-Bruza.jpg'} imgDirection='Right' photoSx={{borderRadius: '100%', width: '30vw', visibility: 'hidden'}} sx={{width: '100vw', height: '100vh', backgroundColor: 'secondary.main', padding: '2.5vw', gap: '1vw'}}>
      <NormalBox sx={{ padding: '2vw', backgroundColor: 'primary.main', borderRadius: '10px', flexDirection: 'column', gap: '1vw', }}>
        <Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant='h1' sx={{ fontSize: '4vw', fontWeight: '800' }}>
              Hey! <Typography variant='h1' sx={{ fontWeight: '800', fontSize: '4vw', color: 'terciary.main', textDecoration: 'underline' }}>FullStack Developer</Typography> here.
            </Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '2vw'}}>
            <Typography sx={{textAlign: 'left', width: '50vw', fontSize: '1.5vw'}}>
                I am a passionate and dedicated Developer with extensive experience. Working in the industry since {date}. My expertise spans across FrontEnd development using React, BackEnd development with Node.js, and infrastructure management on Amazon Web Services. I am proficient in database technologies such as MySQL. With a strong focus on JavaScript web development, I specialize in creating dynamic, user-friendly applications that solve real-world problems.
            </Typography>
            <Box sx={{display: 'flex', gap: '1vw'}}>
                <Button variant='contained' sx={{ bgcolor: 'button.main', color: 'button.textSecondary', fontSize: '1.5vw', textTransform: 'none', fontWeight: 700 }}>View full CV</Button>
                <Button variant='contained' sx={{ bgcolor: 'terciary.main', color: 'button.textSecondary', fontSize: '1.5vw', textTransform: 'none', fontWeight: 700 }}>View all my projects</Button>
            </Box>
          </Box>
        </Box>
      </NormalBox>
    </SectionWithPhoto>
  </animated.div>
  )
}

export default PresentationBanner