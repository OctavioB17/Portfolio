import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";



const Footer: React.FC = (): JSX.Element => {
  return (
    <Box sx={{ width: '100vw', bgcolor: 'secondary.main', padding: '2vw', display: 'flex', flexDirection: 'column', gap: '1vw', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{display: 'flex', justifyContent: 'space-evenly', width: '25vw' }}>
            <Link href='https://github.com/OctavioB17' target='_blank'>
                <FaGithub style={{fontSize: '2vw'}} fill='#172c66'/>
            </Link>
            <Link href='https://www.linkedin.com/in/octavio-bruza-2b9290292/' target='_blank'>
                <FaLinkedin style={{fontSize: '2vw'}} fill='#172c66'/>
            </Link>
            <Link href='mailto:octaviobruza17@gmail.com' >
                <SiGmail style={{fontSize: '2vw'}} fill='#172c66'/>
            </Link>
            <Link href='https://wa.me/5493426264721' target='_blank'>
                <FaWhatsapp style={{fontSize: '2vw'}} fill='#172c66'/>
            </Link>
        </Box>
        <Typography>
            Portfolio by Octavio Bruza. Powered by myself
        </Typography>
        <Typography>
            Color scheme from <Link href="https://www.happyhues.co/palettes/17" sx={{color: 'typography.main', textDecoration: 'underline'}}>Happy Hues</Link> by Mackenzie Child.
        </Typography>
    </Box>
  )
}

export default Footer