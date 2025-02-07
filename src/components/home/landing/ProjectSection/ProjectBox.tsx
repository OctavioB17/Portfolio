import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import ImageSlider from '../../../visual/ImageSlider'
import { ProjectBoxProps } from '../../../../interfaces/home/Home'
import { useNavigate } from 'react-router-dom'

const ProjectBox: React.FC<ProjectBoxProps> = ({ strings, title, description, projectUrl, slidesPerView, spaceBetween, photoStyle, sx }) => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width:1200px)');

    const handleNavigate = () => {
      navigate(`${projectUrl}`);
    };
    
    return (
      <Box sx={{width: isSmallScreen ? '100vw' : '40vw', bgcolor: 'secondary.main', padding: isSmallScreen ? '' : '1vw',  height: '100%', borderRadius: '10px', ...sx}}>
            <Box>
                <ImageSlider photoStyle={{...photoStyle}} strings={strings} slidesPerView={slidesPerView} spaceBetween={spaceBetween}/>
            </Box>        
            <Box sx={{padding: isSmallScreen ? '4vw' : '1vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', gap: isSmallScreen ? '3vw' : '1vw'}}>
              <Box>
                <Typography variant='h3' sx={{fontWeight: '800', width: '100%', color: 'typography.main'}}>{title}</Typography>
                <Typography sx={{fontWeight: '600', fontSize: isSmallScreen ? '5vw' : '1vw', color: 'typography.main'}}>{description}</Typography>
              </Box>
                {
                  projectUrl &&
                  <Box sx={{alignItems: isSmallScreen ? 'end' : 'start', display: 'flex', justifyContent: isSmallScreen ? 'end' : 'start'}}>
                    <Button onClick={handleNavigate} variant='contained' sx={{ bgcolor: 'button.main', color: 'button.textSecondary', fontWeight: '700', fontSize: isSmallScreen ? '3.5vw' : '' }}>View project</Button>
                  </Box>
                }
            </Box>
      </Box>
    )
  }
  
  export default ProjectBox