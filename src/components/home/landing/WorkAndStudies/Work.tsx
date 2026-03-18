import { Box, useMediaQuery, Typography, Divider } from '@mui/material';
import React from 'react';
import ExperiencesBox from './ExperiencesBox';
import Culzoni from '../../../../assets/images/WorkAndStudies/Logo_Culzoni_Sin_Slogan.png';
import ExperiencesBoxPhone from '../../../phone/WorkAndStudies/ExperiencesBoxPhone';

const Work: React.FC = (): JSX.Element => {
  const isSmallScreen = useMediaQuery('(max-width:1200px)');
  
  const culzoniDescription: string = "At Culzoni, I initially joined as a digital marketer, focusing on digital marketing strategies. However, the growing need for specialized software to manage our sales processes in a scalable and customizable way led me to evolve into a full-stack developer. I began working with JavaScript technologies such as Node.js and React to build dynamic interfaces and RESTful services. As the system requirements became more complex, I incorporated Java with Spring Boot to develop a robust and modular backend capable of handling enterprise-level logic, including inventory control, invoicing workflows, and PDF generation. In addition to front-end and back-end development, I also took on the responsibility of managing our database with MySQL and overseeing the project's infrastructure using AWS, Docker, and Linux. During my time at Culzoni, I designed and implemented a hybrid ERP system that efficiently manages our sales operations. This system integrates with Mercado Libre and Tango software through webhooks, enabling automatic capture, processing, and invoicing of sales transactions. This automation has significantly reduced the manual effort required to input sales and generate invoices, saving us approximately three hours daily. These time savings have allowed us to redirect our efforts toward developing new solutions and refining our online presence and sales strategies. Moreover, this experience has deepened my proficiency in a wide range of technologies and frameworks, strengthened my problem-solving abilities, and enhanced my capacity to architect and maintain complex, scalable systems.";

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
          title='Full-stack Developer'
          date='09/12/2023 - Now'
          description={renderDescription()}
        />
      ) : (
        <ExperiencesBox
          photo={Culzoni}
          institution='Culzoni'
          title='Full-stack Developer'
          date='09/12/2023 - Now'
          description={culzoniDescription}
        />
      )}
    </Box>
  );
};

export default Work;