import { Box, Button, ImageList, Typography } from '@mui/material'
import React from 'react'
import ProjectBox from './ProjectSection/ProjectBox'
import McFlyOne from '../../../assets/images/Projects/McFly/Grabación 2025-01-24 110048.gif'
import McFlyTwo from '../../../assets/images/Projects/McFly/Grabación 2025-01-24 110205.gif'
import McFlyThree from '../../../assets/images/Projects/McFly/Grabación 2025-01-24 111236.gif'
import McFlyFour from '../../../assets/images/Projects/McFly/Grabación 2025-01-24 111413.gif'
import EReduxOne from '../../../assets/images/Projects/ERedux/1701862669755.gif'
import EReduxTwo from '../../../assets/images/Projects/ERedux/1701862737080.gif'
import EReduxThree from '../../../assets/images/Projects/ERedux/1701862760832.gif'
import EReduxFour from '../../../assets/images/Projects/ERedux/1701862760832.gif'
import CulzoniOne from '../../../assets/images/Projects/Culzoni/Grabación-2025-01-24-124334.gif'
import CulzoniTwo from '../../../assets/images/Projects/Culzoni/Grabación-2025-01-24-124555.gif'
import CulzoniThree from '../../../assets/images/Projects/Culzoni/Grabación-2025-01-24-124821.gif'
import CulzoniFour from '../../../assets/images/Projects/Culzoni/Grabación-2025-01-24-125339.gif'
import CulzoniFive from '../../../assets/images/Projects/Culzoni/Grabación-2025-01-24-125448.gif'
import { useNavigate } from 'react-router-dom'

const ProjectSection: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Box sx={{width: '100vw', bgcolor: 'primary.main', padding: '5vw', paddingTop: '3vw', display: 'flex', flexDirection: 'column', gap: '3vw' }}>
      <Typography variant='h2' sx={{color: 'button.main', fontWeight: '600', textDecoration: 'underline', display: 'inline'}}>
        <span style={{fontWeight: 600, color: '#172c66', display: 'inline'}}>My</span><span style={{fontWeight: 600, color: '#172c66', display: 'inline'}}> Projects</span>
      </Typography>
      <Box sx={{display: 'flex'}}>
        <ImageList sx={{width: '100%'}} cols={2} gap={100}>
            <ProjectBox title='Culzoni Digital' description='Culzoni ERP. Dedicated to manage sales, stock and billing from Mercado Libre. Culzoni ERP. Our all-in-one solution automates every step, from sales entry to billing, ensuring your business runs smoothly and efficiently.' strings={[CulzoniOne, CulzoniTwo, CulzoniThree, CulzoniFour, CulzoniFive]} projectUrl='/projects/culzoniDigital' slidesPerView={1} spaceBetween={50}/>
            <ProjectBox title='McFly' description='All-in-one photography portfolio application where users can upload, edit, and manage all their photos. Advanced photo editing section. Adjust brightness, contrast, saturation, grayscale, rotate, crop images, and apply a variety of filters.' strings={[McFlyTwo, McFlyOne, McFlyThree, McFlyFour]} projectUrl='/projects/mcfly' slidesPerView={1} spaceBetween={50}/>
            <ProjectBox title='E-Redux' description='Simple E-commerce using Redux power. Implemented Redux to manage global states, with a focus on cart functionality. You can see how I use Redux slicers to perform operations like adding and removing products, as well as updating the cart on page reloads.' strings={[EReduxTwo, EReduxOne, EReduxThree, EReduxFour]} projectUrl='/projects/eredux' slidesPerView={1} spaceBetween={50}/>
            <ProjectBox title='Portfolio' description='This portfolio is a testament to my dedication and passion for web development. It has been created not only to highlight my skills and achievements but also to push the boundaries of my own capabilities. With a focus on interactive design and modern aesthetics, it stands as a representation of industry-leading standards.' strings={[EReduxTwo, EReduxOne, EReduxThree, EReduxFour]} projectUrl='/projects/portfolio' slidesPerView={1} spaceBetween={50}/>
        </ImageList>
      </Box>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'end', padding: '1vw'}}>
        <Button onClick={() => navigate('projects')} variant='outlined' sx={{color: 'button.textPrimary', textTransform: 'none', fontWeight: 600, fontSize: '1vw'}}>View all my projects...</Button>
      </Box>
    </Box>
  )
}

export default ProjectSection