import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import PresentationBanner from './PresentationBanner';
import ProjectSection from './ProjectSection';
import Technologies from './Technologies';
import WorkAndStudies from './WorkAndStudies';
import Footer from '../../Footer';
import AnimatedWrapper from '../../animations/AppearWrapper';
import PresentationBannerPhone from '../../phone/PresentationBannerPhone';

const Landing: React.FC = (): JSX.Element => {

  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  return (
    <AnimatedWrapper>
      <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: 0, left: 0, width: '100%', overflowX: 'hidden' }}>
        {
          isSmallScreen ?
          <PresentationBannerPhone/>
          :
          <PresentationBanner/>
        }
        <ProjectSection/>
        <Technologies/>
        <WorkAndStudies/>
        <Footer/>
      </Box>
    </AnimatedWrapper>
  );
};

export default Landing;
