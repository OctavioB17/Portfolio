import React from 'react';
import { Box } from '@mui/material';
import PresentationBanner from './PresentationBanner';
import ProjectSection from './ProjectSection';
import Technologies from './Technologies';
import WorkAndStudies from './WorkAndStudies';
import Footer from '../../Footer';
import AnimatedWrapper from '../../animations/AppearWrapper';

const Landing: React.FC = (): JSX.Element => {

  return (
    <AnimatedWrapper>
      <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', overflowX: 'hidden' }}>
        <PresentationBanner />
        <ProjectSection/>
        <Technologies/>
        <WorkAndStudies/>
        <Footer/>
      </Box>
    </AnimatedWrapper>
  );
};

export default Landing;
