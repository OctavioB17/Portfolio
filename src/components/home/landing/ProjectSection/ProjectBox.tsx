import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ImageSlider from '../../../visual/ImageSlider'
import { ProjectBoxProps } from '../../../../interfaces/home/Home'
import { useNavigate } from 'react-router-dom'

const ProjectBox: React.FC<ProjectBoxProps> = ({ strings, title, description, projectUrl, slidesPerView, spaceBetween }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate(`${projectUrl}`);
    };
    
    return (
      <Box sx={{width: '40vw', bgcolor: 'secondary.main', padding: '1vw', height: '100%', borderRadius: '10px'}}>
            <Box>
                <ImageSlider strings={strings} slidesPerView={slidesPerView} spaceBetween={spaceBetween}/>
            </Box>        
            <Box sx={{padding: '1vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', gap: '1vw'}}>
                <Typography variant='h3' sx={{fontWeight: '800'}}>{title}</Typography>
                <Typography sx={{fontWeight: '600'}}>{description}</Typography>
                <Box>
                    <Button onClick={handleNavigate} variant='contained' sx={{ bgcolor: 'button.main', color: 'button.textSecondary', fontWeight: '700' }}>View project</Button>
                </Box>
            </Box>
      </Box>
    )
  }
  
  export default ProjectBox