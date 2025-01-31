import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { BooleanStateProps } from '../../../interfaces/Reusable';
import ProjectSection from './ProjectSection';
import Technologies from './Technologies';
import WorkAndStudies from './WorkAndStudies';
import Footer from '../../Footer';
import PresentationBannerWithAnimations from './PresentationBannerWithAnimations';

const Landing: React.FC<BooleanStateProps> = ({ state }): JSX.Element => {
  const [body, setBody] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (state) {
      setBody(
        <>
          <ProjectSection/>
          <Technologies/>
          <WorkAndStudies/>
          <Footer/>
        </>
      );
    } else {
      setBody(null);
    }
  }, [state]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', overflowX: 'hidden' }}>
      <PresentationBannerWithAnimations state={state} />
      {body}
    </Box>
  );
};

export default Landing;
