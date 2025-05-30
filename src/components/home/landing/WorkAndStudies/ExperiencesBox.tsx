import { Box, Button, Typography, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { ExperienceBoxProps } from '../../../../interfaces/home/Home';
import ModalComponent from '../../../reusable/ModalComponent';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ExperiencesBox: React.FC<ExperienceBoxProps> = ({ institution: title, title: job, date, description, photo, certificates }): JSX.Element => {
  const [openCertificate, setOpenCertificate] = useState<boolean>(false);
  const [selectedCertificate, setSelectedCertificate] = useState<number>(0);

  const handleNext = () => {
    setSelectedCertificate((prev) => (prev + 1) % (certificates?.length || 1));
  };

  const handlePrev = () => {
    setSelectedCertificate((prev) => (prev - 1 + (certificates?.length || 1)) % (certificates?.length || 1));
  };

  return (
    <Box sx={{ bgcolor: 'secondary.main', display: 'flex', padding: '1vw', borderRadius: '10px', gap: '1vw' }}>
      <Box sx={{ padding: '2vw', bgcolor: 'primary.main', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
        <Box component='img' src={photo} sx={{ width: '15vw' }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1vw' }}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h4' sx={{ display: 'flex', gap: '1vw', textDecoration: 'underline', color: 'terciary.main', alignItems: 'center' }}>
              <span  style={{fontWeight: 800, color: '#172c66', display: 'inline', fontSize: '3vw'}}>
                {title}
              </span>
            </Typography>
            <Typography variant='h4' sx={{ display: 'flex', gap: '1vw', textDecoration: 'underline', color: 'terciary.main', alignItems: 'center' }}>
              <span style={{fontWeight: 700, color: '#172c66', display: 'block', fontSize: '2vw'}}>
                {job}
              </span>
            </Typography>
          </Box>
          <Box sx={{alignContent: 'start'}}>
            <Typography variant='h4' sx={{ display: 'flex', gap: '1vw', textDecoration: 'underline', color: 'terciary.main', alignItems: 'center' }}>
              <span style={{fontWeight: 700, color: '#172c66', display: 'inline'}}>
                {date}
              </span>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ textWrap: 'wrap', fontSize: '1.2vw' }}>
          {description}
        </Box>
        {
          certificates && certificates.length > 0 &&
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button 
              onClick={() => setOpenCertificate(true)} 
              variant='contained' 
              sx={{ textTransform: 'none', bgcolor: 'button.main', color: 'button.textSecondary', fontSize: '1vw', fontWeight: 700 }}
            >
              View Certificates
            </Button>
          </Box>
        }
        {
          certificates && certificates.length > 0 &&
          <Box>
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
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: '0.5vw', marginTop: '1vw' }}>
                {certificates.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: '0.5vw',
                      height: '0.5vw',
                      borderRadius: '50%',
                      bgcolor: index === selectedCertificate ? 'button.main' : 'gray',
                      cursor: 'pointer'
                    }}
                    onClick={() => setSelectedCertificate(index)}
                  />
                ))}
              </Box>
            </ModalComponent>
          </Box>
        }
      </Box>
    </Box>
  );
};

export default ExperiencesBox;
