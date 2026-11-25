import { Box, Button, Link, Typography } from '@mui/material'
import { BooleanStateProps } from '../../interfaces/Reusable'
import SectionWithPhoto from '../home/landing/SectionWithPhoto'
import { FaLaptopCode } from 'react-icons/fa'
import { FaGears, FaCode } from "react-icons/fa6";
import ChatBubble from '../visual/ChatBubble'
import { LuBinary } from "react-icons/lu";
import { PiTreeStructure } from "react-icons/pi";
import { GiDatabase } from "react-icons/gi";
import { useNavigate } from 'react-router-dom'
import { BiWorld } from "react-icons/bi";
import OctavioBruza from  "../../assets/images/Octavio-Bruza.jpg"
const PresentationBannerPhone: React.FC<BooleanStateProps> = (): JSX.Element => {

  const navigate = useNavigate()
  return (
    <Box sx={{width: '100vw', bgcolor: 'secondary.main'}}>
        <Box>
          <Box sx={{ width: '100%', padding: '1vw', paddingTop: '5vw', display: 'flex' }}>
            <Typography component='h1' variant='h1' sx={{ fontSize: 'clamp(2rem, 8vw, 3rem)', lineHeight: 1.05, fontWeight: 800, display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'center', py: '4vw'}}>
              Hey, I’m Octavio.<span style={{ fontWeight: 800, fontSize: 'clamp(2.35rem, 11vw, 3.5rem)', lineHeight: 1, color: '#172c66', textDecoration: 'underline', textDecorationColor: '#f582ae' }}>Full-stack<br/>developer</span>
            </Typography>
          </Box>
          <SectionWithPhoto imgUrl={OctavioBruza} photoSx={{width: '101vw', height: '101vw', borderTopLeftRadius: '50%', borderTopRightRadius: '50%'}} sx={{backgroundColor: 'secondary.main', display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>
          <Box sx={{boxShadow: '0px -3px 10px 0px rgba(0, 0, 0, 0.75)', height: '5vw', width: '100vw', position: 'relative', top: '-28vw'}}/>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '2vw', bgcolor: 'secondary.main', position: 'relative', top: '-33vw', zIndex: 5}}>
            <Box sx={{display: 'flex', alignItems: 'end', paddingLeft: '3vw'}}>  
                <ChatBubble position='left'>
                  <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                      I build useful software from frontend to infrastructure.
                  </Typography>
                </ChatBubble>
                <FaLaptopCode style={{fontSize: '3rem'}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'end', flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
              <ChatBubble position='right'>
                <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                    Full-stack developer at Culzoni since November 2023.
                </Typography>
              </ChatBubble>
              <FaGears style={{fontSize: '3rem'}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'end', paddingLeft: '3vw'}}>
              <ChatBubble position='left'>
                <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                    Frontend: React, Next.js and TypeScript.
                </Typography>
              </ChatBubble>
              <FaCode style={{fontSize: '3rem'}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'end', flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
              <ChatBubble position='right'>
                <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                    Backend: Node.js, NestJS and Java.
                </Typography>
              </ChatBubble>
              <LuBinary style={{fontSize: '3rem'}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'end', paddingLeft: '3vw'}}>
              <ChatBubble position='left'>
                <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                    Infrastructure: AWS, Docker, Linux and cloud deployments.
                </Typography>
              </ChatBubble>
              <PiTreeStructure style={{fontSize: '3rem'}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'end', flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
              <ChatBubble position='right'>
                <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                  PostgreSQL, MySQL, Prisma and Redis for data and background jobs.
                </Typography>
              </ChatBubble>
              <GiDatabase style={{fontSize: '3rem'}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'end', paddingLeft: '3vw'}}>
              <ChatBubble position='left'>
                <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                I use AI APIs, tool calling and MCP to build assistants and <span style={{textDecoration: 'underline', color: '#f582ae'}}><span style={{color: '#172c66'}}>agent workflows</span></span>.
                </Typography>
              </ChatBubble>
              <BiWorld style={{fontSize: '3rem'}}/>
            </Box>
          </Box>
          <Box sx={{display: 'flex', gap: '5vw', alignItems: 'center', justifyContent: 'center', height: '10vh', position: 'relative', top: '-16.5vw' }}>
            <Link target='_blank' href='https://portfolio-bruza.s3.us-east-1.amazonaws.com/CV/Octavio+Bruza.pdf'>
              <Button variant='contained' sx={{ bgcolor: 'button.main', color: 'button.textSecondary', fontSize: '5vw', textTransform: 'none', fontWeight: 800, width: '45vw', height: '7vh' }}>View full CV</Button>
            </Link>
            <Button onClick={() => navigate('/projects')} variant='contained' sx={{ bgcolor: 'terciary.main', color: 'button.textSecondary', fontSize: '5vw', textTransform: 'none', fontWeight: 800, width: '45vw', height: '7vh' }}>View projects</Button>
          </Box>
        </Box>
      </Box>
  )
}

export default PresentationBannerPhone
