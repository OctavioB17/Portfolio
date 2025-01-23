import { Box } from '@mui/material'
import React from 'react'
import ProjectBox from './ProjectSection/ProjectBox'
import McFlyOne from '../../../assets/images/McFly/1727808901378.jpg'
import McFlyTwo from '../../../assets/images/McFly/1727808901444.jpg'
import McFlyThree from '../../../assets/images/McFly/1727808901468.jpg'
import McFlyFour from '../../../assets/images/McFly/1727808901508.jpg'
import McFlyFive from '../../../assets/images/McFly/1727808901515.jpg'
import McFlySix from '../../../assets/images/McFly/1727808901571.jpg'
import McFlySeven from '../../../assets/images/McFly/1727808901593.jpg'
import McFlyEight from '../../../assets/images/McFly/1727808901594.jpg'

const ProjectSection: React.FC = (): JSX.Element => {
  return (
    <Box sx={{bgcolor: 'primary.main', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', padding: '5vw'}}>
        <ProjectBox title='McFly' description='All-in-one photography portfolio application where users can upload, edit, and manage all their photos. Advanced photo editing section. Adjust brightness, contrast, saturation, grayscale, rotate, crop images, and apply a variety of filters.' strings={[McFlyTwo, McFlyOne, McFlyThree, McFlyFour, McFlyFive, McFlySix, McFlySeven, McFlyEight]}/>
    </Box>
  )
}

export default ProjectSection