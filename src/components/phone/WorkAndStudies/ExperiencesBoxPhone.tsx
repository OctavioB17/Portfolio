import { Box, Button, Typography, useMediaQuery, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { ExperienceBoxProps } from '../../../interfaces/home/Home';
import ModalComponent from '../../reusable/ModalComponent';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ExperiencesBox: React.FC<ExperienceBoxProps> = ({ institution: title, title: job, date, description, photo, certificates }): JSX.Element => {
  const [openCertificate, setOpenCertificate] = useState<boolean>(false);
  const [selectedCertificate, setSelectedCertificate] = useState<number>(0);
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  const handleNext = () => {
    setSelectedCertificate((prev) => (prev + 1) % (certificates?.length || 1));
  };

  const handlePrev = () => {
    setSelectedCertificate((prev) => (prev - 1 + (certificates?.length || 1)) % (certificates?.length || 1));
  };

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
          certificates && certificates.length > 0 &&
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button onClick={() => setOpenCertificate(true)} variant='contained' sx={{ textTransform: 'none', bgcolor: 'button.main', color: 'button.textSecondary', fontSize: '5vw', fontWeight: 700 }}>
              View certificate
            </Button>
          </Box>
        }
        {
            certificates && certificates.length > 0 &&
            <ModalComponent 
              state={openCertificate} 
              setState={setOpenCertificate}
              title={certificates[selectedCertificate].title}
            >
              <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton 
                  onClick={handlePrev}
                  sx={{ 
                    position: 'absolute', 
                    left: '-2vw',
                    color: 'button.main',
                    '&:hover': { color: 'button.main', opacity: 0.8 }
                  }}
                >
                  <FaChevronLeft size={24} />
                </IconButton>
                {React.createElement(certificates[selectedCertificate].image)}
                <IconButton 
                  onClick={handleNext}
                  sx={{ 
                    position: 'absolute', 
                    right: '-2vw',
                    color: 'button.main',
                    '&:hover': { color: 'button.main', opacity: 0.8 }
                  }}
                >
                  <FaChevronRight size={24} />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1vw', marginTop: '2vw' }}>
                {certificates.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: '2vw',
                      height: '2vw',
                      borderRadius: '50%',
                      bgcolor: index === selectedCertificate ? 'button.main' : 'gray',
                      cursor: 'pointer'
                    }}
                    onClick={() => setSelectedCertificate(index)}
                  />
                ))}
              </Box>
            </ModalComponent>
        }
      </Box>
    </Box>
  );
};

export default ExperiencesBox;
