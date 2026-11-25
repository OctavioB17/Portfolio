import SectionWithPhoto from './SectionWithPhoto'
import NormalBox from '../../visual/NormalBox'
import { Box, Button, Link, Typography } from '@mui/material'
import OctavioBruza from '../../../assets/images/Octavio-Bruza.jpg'

import { BooleanStateProps } from '../../../interfaces/Reusable'
import { useNavigate } from 'react-router-dom'
const PresentationBanner: React.FC<BooleanStateProps> = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <SectionWithPhoto imgUrl={OctavioBruza} photoSx={{borderRadius: '100%', width: '30vw', height: '30vw'}} sx={{width: '100vw', height: '100vh', backgroundColor: 'secondary.main', padding: '2.5vw', gap: '1vw'}}>
      <NormalBox sx={{ padding: '2vw', backgroundColor: 'primary.main', borderRadius: '10px', flexDirection: 'column', gap: '1vw', }}>
        <Box>
          <Box sx={{ width: '100%' }}>
            <Typography component='h1' variant='h1' sx={{ fontSize: 'clamp(2.6rem, 4vw, 4.6rem)', lineHeight: 1.05, fontWeight: 800, mb: '1.5vw' }}>
              Hey, I’m Octavio.<br/><span style={{ fontWeight: 800, color: '#172c66', textDecoration: 'underline', textDecorationColor: '#f582ae' }}>Full-stack developer</span>
            </Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '1.5vw'}}>
            <Typography sx={{textAlign: 'left', width: 'min(49vw, 760px)', fontSize: 'clamp(1rem, 1.25vw, 1.35rem)', lineHeight: 1.65}}>
                I build web products from interface to infrastructure: React and Next.js on the frontend, Node.js, NestJS and Java on the backend, with cloud services and databases behind them. I also use AI APIs, tool calling and MCP to create assistants and agent workflows that connect to real products.
            </Typography>
            <Box sx={{display: 'flex', gap: '1vw', flexWrap: 'wrap'}}>
                <Link target='_blank' href='https://portfolio-bruza.s3.us-east-1.amazonaws.com/CV/Octavio+Bruza.pdf'>
                    <Button variant='contained' sx={{ bgcolor: 'button.main', color: 'button.textSecondary', fontSize: 'clamp(.95rem, 1.1vw, 1.2rem)', textTransform: 'none', fontWeight: 700 }}>View full CV</Button>
                </Link>
                <Button onClick={() => {navigate('/projects')}} variant='contained' sx={{ bgcolor: 'terciary.main', color: 'button.textSecondary', fontSize: 'clamp(.95rem, 1.1vw, 1.2rem)', textTransform: 'none', fontWeight: 700 }}>View projects</Button>
            </Box>
          </Box>
        </Box>
      </NormalBox>
    </SectionWithPhoto>
  )
}

export default PresentationBanner
