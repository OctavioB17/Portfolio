import { Box, ImageList, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import ProjectBox from '../home/landing/ProjectSection/ProjectBox'
import McFlyOne from '../../assets/images/Projects/McFly/Grabación 2025-01-24 110048.gif'
import McFlyTwo from '../../assets/images/Projects/McFly/Grabación 2025-01-24 110205.gif'
import McFlyThree from '../../assets/images/Projects/McFly/Grabación 2025-01-24 111236.gif'
import McFlyFour from '../../assets/images/Projects/McFly/Grabación 2025-01-24 111413.gif'
import EReduxOne from '../../assets/images/Projects/ERedux/1701862669755.gif'
import EReduxTwo from '../../assets/images/Projects/ERedux/1701862737080.gif'
import EReduxThree from '../../assets/images/Projects/ERedux/1701862760832.gif'
import EReduxFour from '../../assets/images/Projects/ERedux/1701862760832.gif'
import CulzoniOne from '../../assets/images/Projects/Culzoni/Grabación-2025-01-24-124334.gif'
import CulzoniTwo from '../../assets/images/Projects/Culzoni/Grabación-2025-01-24-124555.gif'
import CulzoniThree from '../../assets/images/Projects/Culzoni/Grabación-2025-01-24-124821.gif'
import CulzoniFour from '../../assets/images/Projects/Culzoni/Grabación-2025-01-24-125339.gif'
import CulzoniFive from '../../assets/images/Projects/Culzoni/Grabación-2025-01-24-125448.gif'
import PortfolioOne from '../../assets/images/Projects/Portfolio/Grabación 2025-02-03 091328.gif'
import PortfolioTwo from '../../assets/images/Projects/Portfolio/Grabación 2025-02-03 092129.gif'
import PortfolioThree from '../../assets/images/Projects/Portfolio/Grabación 2025-02-03 092226.gif'
import AppearWrapper from '../animations/AppearWrapper'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProjectLanding: React.FC = (): JSX.Element => {

  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  return (
    <AppearWrapper>
      {
        !isSmallScreen &&
        <Link to={'/'}> 
          <FaArrowLeft style={{color: '#172c66', position: 'absolute', left: 20, top: 20, fontSize: '1.5vw', backgroundColor: '#fef6e4'}}/>
        </Link>
      }
      <Box sx={{width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', fontFamily: 'Proxima-Nova', padding: '2vw'}}>
          {
            isSmallScreen &&
            <Link to={'/'} style={{width: '100vw', padding: '1vw'}}> 
              <FaArrowLeft style={{color: '#172c66',  fontSize: '6vw', backgroundColor: '#fef6e4', alignItems: 'start', display: 'flex', justifyContent: 'start'}}/>
            </Link>
          }
          <Box sx={{display: 'flex', justifyContent: 'start', width: '100vw', padding: '2vw', paddingLeft: isSmallScreen ? '' : '7.5vw'}}>
            <Typography variant='h2' sx={{color: 'button.main', fontWeight: '600', textDecoration: 'underline', display: 'inline'}}>
              <span style={{fontWeight: 600, color: '#172c66', display: 'inline'}}> Projects</span>
            </Typography>
          </Box>
          <Box sx={{display: 'flex'}}>
            <ImageList sx={{width: '100%'}} cols={ isSmallScreen ? 1 : 2} gap={100}>
                <ProjectBox sx={{borderRadius: isSmallScreen ? 0 : '10px' }} photoStyle={{height: isSmallScreen ? '60vw' : '20vw', borderTop: '5px solid #f3d2c1', backgroundColor: 'secondary.main'}} title='Culzoni Digital' description='Culzoni ERP. Dedicated to manage sales, stock and billing from Mercado Libre. Culzoni ERP. Our all-in-one solution automates every step, from sales entry to billing, ensuring your business runs smoothly and efficiently.' strings={[CulzoniOne, CulzoniTwo, CulzoniThree, CulzoniFour, CulzoniFive]} projectUrl='/projects/culzoniDigital' slidesPerView={1} spaceBetween={50}/>
                <ProjectBox sx={{borderRadius: isSmallScreen ? 0 : '10px' }} photoStyle={{height: isSmallScreen ? '60vw' : '20vw', borderTop: '5px solid #f3d2c1', backgroundColor: 'secondary.main'}} title='McFly' description='All-in-one photography portfolio application where users can upload, edit, and manage all their photos. Advanced photo editing section. Adjust brightness, contrast, saturation, grayscale, rotate, crop images, and apply a variety of filters.' strings={[McFlyTwo, McFlyOne, McFlyThree, McFlyFour]} projectUrl='/projects/mcfly' slidesPerView={1} spaceBetween={50}/>
                <ProjectBox sx={{borderRadius: isSmallScreen ? 0 : '10px' }} photoStyle={{height: isSmallScreen ? '60vw' : '20vw', borderTop: '5px solid #f3d2c1', backgroundColor: 'secondary.main'}} title='E-Redux' description='Simple E-commerce using Redux power. Implemented Redux to manage global states, with a focus on cart functionality. You can see how I use Redux slicers to perform operations like adding and removing products, as well as updating the cart on page reloads.' strings={[EReduxTwo, EReduxOne, EReduxThree, EReduxFour]} projectUrl='/projects/eredux' slidesPerView={1} spaceBetween={50}/>
                <ProjectBox sx={{borderRadius: isSmallScreen ? 0 : '10px' }} photoStyle={{height: isSmallScreen ? '60vw' : '20vw', borderTop: '5px solid #f3d2c1', backgroundColor: 'secondary.main'}} title='Portfolio' description='This portfolio is a testament to my dedication and passion for web development. It has been created not only to highlight my skills and achievements but also to push the boundaries of my own capabilities. With a focus on interactive design and modern aesthetics, it stands as a representation of industry-leading standards.' strings={[PortfolioOne, PortfolioTwo, PortfolioThree]} projectUrl='/projects/portfolio' slidesPerView={1} spaceBetween={50}/>
            </ImageList>
          </Box>
      </Box>
    </AppearWrapper>
  )
}

export default ProjectLanding