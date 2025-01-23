import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { BooleanStateProps } from '../../../interfaces/Reusable';
import PresentationBanner from './PresentationBanner';
import ProjectSection from './ProjectSection';

const Landing: React.FC<BooleanStateProps> = ({ state }): JSX.Element => {
  const [body, setBody] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (state) {
      setBody(
        <ProjectSection/>
      );
    } else {
      setBody(null);
    }
  }, [state]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', overflowX: 'hidden' }}>
      <PresentationBanner state={state} />
      {body}
    </Box>
  );
};

export default Landing;
