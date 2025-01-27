import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ExperienceBoxProps } from '../../../../interfaces/home/Home';
import ModalComponent from '../../../reusable/ModalComponent';

const ExperiencesBox: React.FC<ExperienceBoxProps> = ({ institution: title, title: job, date, description, photo, certificate }): JSX.Element => {
  const [openCertificate, setOpenCertificate] = useState<boolean>(false);

  return (
    <Box sx={{ bgcolor: 'secondary.main', display: 'flex', padding: '1vw', borderRadius: '10px', gap: '1vw' }}>
      <Box sx={{ padding: '2vw', bgcolor: 'primary.main', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
        <Box component='img' src={photo} sx={{ width: '15vw' }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1vw' }}>
        <Box>
          <Typography sx={{ display: 'flex', gap: '1vw', textDecoration: 'underline', color: 'terciary.main' }}>
            <Typography variant='h4' sx={{ fontWeight: '800', color: 'quaternary.main' }}>
              {title}
            </Typography>
            <Typography variant='h4' sx={{ fontWeight: '700', color: 'quaternary.main' }}>
              {job}
            </Typography>
            <Typography variant='h4' sx={{ fontWeight: '700', color: 'quaternary.main' }}>
              {date}
            </Typography>
          </Typography>
        </Box>
        <Typography sx={{ textWrap: 'wrap', fontSize: '1vw' }}>
          {description}
        </Typography>
        {
          certificate &&
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button onClick={() => setOpenCertificate(true)} variant='contained' sx={{ textTransform: 'none', bgcolor: 'button.main', color: 'button.textSecondary', fontSize: '1vw', fontWeight: 700 }}>
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
