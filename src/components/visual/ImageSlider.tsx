import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Box, CircularProgress } from '@mui/material';
import { ImageSliderProps } from '../../interfaces/home/Home';

const ImageSlider: React.FC<ImageSliderProps> = ({ strings, spaceBetween, slidesPerView, photoStyle }): JSX.Element => {
  
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      autoplay={{delay: 2000, disableOnInteraction: false}}
      pagination={{ clickable: true }}
    >
      {strings.map((photo: string, index: number) => (
        <SwiperSlide key={index}>
          {
            photo
            ?
            <Box component='img' src={photo} sx={{ ...photoStyle }} alt={`Slide ${index}`} />
            :
            <Box sx={{...photoStyle, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
              <CircularProgress color="inherit" />
            </Box>
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
