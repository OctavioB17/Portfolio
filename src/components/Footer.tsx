import { Box, Link, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";



const Footer: React.FC = (): JSX.Element => {

  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  return (
    <Box sx={{ width: '100vw', bgcolor: 'secondary.main', padding: isSmallScreen ? '5vw' : '2vw', display: 'flex', flexDirection: 'column', gap: '1vw', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{display: 'flex', justifyContent: 'space-evenly', width: isSmallScreen ? '90vw' : '25vw' }}>
            <Link href='https://github.com/OctavioB17' target='_blank'>
                <FaGithub style={{fontSize: isSmallScreen ? '10vw' : '2vw'}} fill='#172c66'/>
            </Link>
            <Link href='https://www.linkedin.com/in/octavio-bruza-2b9290292/' target='_blank'>
                <FaLinkedin style={{fontSize: isSmallScreen ? '10vw' : '2vw'}} fill='#172c66'/>
            </Link>
            <Link href='mailto:octaviobruza17@gmail.com' >
                <SiGmail style={{fontSize: isSmallScreen ? '10vw' : '2vw'}} fill='#172c66'/>
            </Link>
            <Link href='https://wa.me/5493426264721' target='_blank'>
                <FaWhatsapp style={{fontSize: isSmallScreen ? '10vw' : '2vw'}} fill='#172c66'/>
            </Link>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', gap: '1vw'}}>
            <Typography sx={{ textAlign: 'center'}}>
                Portfolio by Octavio Bruza. Powered by myself
            </Typography>
            <Typography sx={{ textAlign: 'center'}}>
                Color scheme from <Link href="https://www.happyhues.co/palettes/17" target='_blank' sx={{color: 'typography.main', textDecoration: 'underline'}}>Happy Hues</Link> by Mackenzie Child.
            </Typography>
        </Box>
    </Box>
  )
}

export default Footer