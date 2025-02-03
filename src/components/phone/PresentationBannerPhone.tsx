import { Box, Button, Typography } from '@mui/material'
import moment from 'moment'
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

const PresentationBannerPhone: React.FC<BooleanStateProps> = (): JSX.Element => {

  const navigate = useNavigate()
  const date: string = moment('20231101', "YYYYMMDD").fromNow()

  return (
    <Box sx={{width: '100vw', bgcolor: 'secondary.main'}}>
        <Box>
          <Box sx={{ width: '100%', padding: '1vw', paddingTop: '5vw', display: 'flex' }}>
            <Typography variant='h1' sx={{ fontSize: '3rem', fontWeight: '800', display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'center'}}>
              Hey! <span style={{ fontWeight: '800', fontSize: '3.5rem', color: '#172c66', textDecoration: 'underline', textDecorationColor: '#f582ae' }}>FullStack Developer</span> here.
            </Typography>
          </Box>
          <SectionWithPhoto imgUrl={'/src/assets/images/Octavio-Bruza.jpg'} photoSx={{width: '101vw', borderTopLeftRadius: '50%', borderTopRightRadius: '50%'}} sx={{backgroundColor: 'secondary.main', padding: '2.5vw', gap: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>
          <Box sx={{boxShadow: '0px -3px 10px 0px rgba(0, 0, 0, 0.75)', height: '5vw', width: '100vw', position: 'relative', top: '-28vw'}}/>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '2vw', bgcolor: 'secondary.main', position: 'relative', top: '-33vw', zIndex: 5}}>
            <Box sx={{display: 'flex', alignItems: 'end', paddingLeft: '3vw'}}>  
                <ChatBubble position='left'>
                  <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                      I am a passionate and dedicated Developer
                  </Typography>
                </ChatBubble>
                <FaLaptopCode style={{fontSize: '3rem'}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'end', flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
              <ChatBubble position='right'>
                <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                    Working in the industry since {date}.
                </Typography>
              </ChatBubble>
              <FaGears style={{fontSize: '3rem'}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'end', paddingLeft: '3vw'}}>
              <ChatBubble position='left'>
                <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                    My expertise spans across FrontEnd development using React
                </Typography>
              </ChatBubble>
              <FaCode style={{fontSize: '3rem'}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'end', flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
              <ChatBubble position='right'>
                <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                    BackEnd development with Node.js
                </Typography>
              </ChatBubble>
              <LuBinary style={{fontSize: '3rem'}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'end', paddingLeft: '3vw'}}>
              <ChatBubble position='left'>
                <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                    And infrastructure management on Amazon Web Services.
                </Typography>
              </ChatBubble>
              <PiTreeStructure style={{fontSize: '3rem'}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'end', flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
              <ChatBubble position='right'>
                <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                  I am proficient in database technologies such as MySQL.
                </Typography>
              </ChatBubble>
              <GiDatabase style={{fontSize: '3rem'}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'end', paddingLeft: '3vw'}}>
              <ChatBubble position='left'>
                <Typography sx={{fontSize: '6vw', padding: '2vw', zIndex: 3, fontWeight: 600}}>
                I specialize in creating dynamic, user-friendly applications that <span style={{textDecoration: 'underline', color: '#f582ae'}}><span style={{color: '#172c66'}}>solve real-world problems</span></span>.
                </Typography>
              </ChatBubble>
              <BiWorld style={{fontSize: '3rem'}}/>
            </Box>
          </Box>
          <Box sx={{display: 'flex', gap: '5vw', alignItems: 'center', justifyContent: 'center', height: '10vh', position: 'relative', top: '-16.5vw' }}>
            <Button onClick={() => navigate('/projects')} variant='contained' sx={{ bgcolor: 'button.main', color: 'button.textSecondary', fontSize: '5vw', textTransform: 'none', fontWeight: 800, width: '45vw', height: '7vh' }}>View full CV</Button>
            <Button onClick={() => navigate('/projects')} variant='contained' sx={{ bgcolor: 'terciary.main', color: 'button.textSecondary', fontSize: '5vw', textTransform: 'none', fontWeight: 800, width: '45vw', height: '7vh' }}>View projects</Button>
          </Box>
        </Box>
      </Box>
  )
}

export default PresentationBannerPhone