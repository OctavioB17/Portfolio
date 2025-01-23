import React, { useEffect, useRef } from 'react';
import { sectionWithPhotoProps } from '../../../interfaces/home/Home';
import { Box } from '@mui/material';
import { usePosition } from '../../../hooks/usePosition';

const SectionWithPhoto: React.FC<sectionWithPhotoProps> = ({ imgUrl, children, imgDirection, sx, photoSx }) => {
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
        flexDirection: imgDirection === 'Left' ? 'row' : 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        ...sx,
      }}
    >
      <Box>
        <Box ref={imgRef} component="img" src={imgUrl} sx={{ ...photoSx}} />
      </Box> 
      <Box>{children}</Box>
    </Box>
  );
};

export default SectionWithPhoto;