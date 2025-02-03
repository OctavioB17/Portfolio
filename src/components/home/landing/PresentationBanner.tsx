import SectionWithPhoto from './SectionWithPhoto'
import NormalBox from '../../visual/NormalBox'
import { Box, Button, Typography } from '@mui/material'
import moment from 'moment'

import { BooleanStateProps } from '../../../interfaces/Reusable'
const PresentationBanner: React.FC<BooleanStateProps> = (): JSX.Element => {


  const date: string = moment('20231101', "YYYYMMDD").fromNow()

  return (
    <SectionWithPhoto imgUrl={'/src/assets/images/Octavio-Bruza.jpg'} photoSx={{borderRadius: '100%', width: '30vw'}} sx={{width: '100vw', height: '100vh', backgroundColor: 'secondary.main', padding: '2.5vw', gap: '1vw'}}>
      <NormalBox sx={{ padding: '2vw', backgroundColor: 'primary.main', borderRadius: '10px', flexDirection: 'column', gap: '1vw', }}>
        <Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant='h1' sx={{ fontSize: '4vw', fontWeight: '800' }}>
              Hey! <span style={{ fontWeight: '800', fontSize: '4vw', color: '#172c66', textDecoration: 'underline', textDecorationColor: '#f582ae' }}>FullStack Developer</span> here.
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
  )
}

export default PresentationBanner