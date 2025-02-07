import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { ExperienceBoxProps } from '../../../interfaces/home/Home';
import ModalComponent from '../../reusable/ModalComponent';

const ExperiencesBox: React.FC<ExperienceBoxProps> = ({ institution: title, title: job, date, description, photo, certificate }): JSX.Element => {
  const [openCertificate, setOpenCertificate] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  return (
    <Box sx={{ bgcolor: 'secondary.main', display: 'flex', padding: '3vw', borderRadius: '10px', gap: '3vw', flexDirection: 'column', paddingBottom: '5vw' }}>
      <Typography variant='h4' sx={{ display: 'flex', gap: '1vw', textDecoration: 'underline', color: 'terciary.main', padding: isSmallScreen ? '2vw' : '' }}>
        <span style={{fontWeight: 800, color: '#172c66', display: 'inline'}}>
          {title}
        </span>
      </Typography>
      <Box sx={{ bgcolor: 'primary.main', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '1vw', paddingBottom: '25vw', paddingTop: '25vw',}}>
        <Box component='img' src={photo} sx={{ width: '100%' }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1vw' }}>
        <Box>
          <Typography sx={{ display: 'flex', flexDirection: 'column', gap: '1vw', color: 'terciary.main', fontSize: '8vw' }}>
            <span style={{fontWeight: 700, color: '#172c66', display: 'inline', fontSize: '7vw'}}>
              {job}
            </span>
            <span style={{fontWeight: 600, color: '#172c66', display: 'inline', fontSize: '6vw'}}>
              {date}
            </span>
          </Typography>
        </Box>
        <Box sx={{ textWrap: 'wrap', fontSize: '5vw' }}>
          {description}
        </Box>
        {
          certificate &&
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button onClick={() => setOpenCertificate(true)} variant='contained' sx={{ textTransform: 'none', bgcolor: 'button.main', color: 'button.textSecondary', fontSize: '5vw', fontWeight: 700 }}>
              View certificate
            </Button>
          </Box>
        }
        {
            certificate &&
            <ModalComponent state={openCertificate} setState={setOpenCertificate}>
                {certificate}
            </ModalComponent>
        }
      </Box>
    </Box>
  );
};

export default ExperiencesBox;
