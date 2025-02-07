import { Box, useMediaQuery, Typography, Divider } from '@mui/material';
import React from 'react';
import ExperiencesBox from './ExperiencesBox';
import Culzoni from '../../../../assets/images/WorkAndStudies/Logo_Culzoni_Sin_Slogan.png';
import ExperiencesBoxPhone from '../../../phone/WorkAndStudies/ExperiencesBoxPhone';

const Work: React.FC = (): JSX.Element => {
  const isSmallScreen = useMediaQuery('(max-width:1200px)');
  
  const culzoniDescription: string = "At Culzoni, I initially joined as a digital marketer, focusing on digital marketing strategies. However, the need for more specialized software to handle our sales in a scalable and customizable manner led me to evolve into a full-stack developer with a focus on JavaScript, using Node.js and React. In addition to front-end and back-end development, I also took on the responsibility of managing our database with MySQL and the project's infrastructure using AWS, Docker, and Linux. During my time at Culzoni, I developed an ERP system that efficiently manages our sales. This system integrates with Mercado Libre and Tango software using webhooks to automatically capture, process, and invoice sales. This automation has significantly reduced the time required to input sales and generate invoices, saving us approximately three hours daily. These time savings have allowed us to focus on developing new solutions and enhancing our online presence and sales strategies. Moreover, this experience has enabled me to gain proficiency in various technologies and frameworks, enhancing my problem-solving skills and ability to work on complex projects.";

  const renderDescription = () => {
    return (
      <Box sx={{ padding: '2vw' }}>
        <Box sx={{ marginBottom: '1vw' }}>
          {culzoniDescription.split('. ').map((sentence, index) => (
            <Box key={index}>
              <Typography variant="body1" sx={{ marginBottom: '0.5vw' }}>
                {sentence.trim() + (index < culzoniDescription.split('. ').length - 1 ? '.' : '')}
              </Typography>
              <Divider sx={{ margin: '1vw 0' }} />
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      {isSmallScreen ? (
        <ExperiencesBoxPhone
          photo={Culzoni}
          institution='Culzoni'
          title='Full-stack JS Developer'
          date='09/12/2023 - Now'
          description={renderDescription()}
        />
      ) : (
        <ExperiencesBox
          photo={Culzoni}
          institution='Culzoni'
          title='Full-stack JS Developer'
          date='09/12/2023 - Now'
          description={culzoniDescription}
        />
      )}
    </Box>
  );
};

export default Work;