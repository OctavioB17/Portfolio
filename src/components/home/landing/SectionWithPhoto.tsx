import React, { useEffect, useRef } from 'react';
import { sectionWithPhotoProps } from '../../../interfaces/home/Home';
import { Box } from '@mui/material';
import { usePosition } from '../../../hooks/usePosition';

const SectionWithPhoto: React.FC<sectionWithPhotoProps> = ({ imgUrl, children, sx, photoSx }) => {
  const { setPosition } = usePosition();
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      setPosition(rect);
    }
  }, [setPosition]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        ...sx,
      }}
    >
      <Box ref={imgRef} sx={{...photoSx}}>
        <Box component="img" src={imgUrl} sx={{ ...photoSx}} />
      </Box> 
      <Box>{children}</Box>
    </Box>
  );
};

export default SectionWithPhoto;