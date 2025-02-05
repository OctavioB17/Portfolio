import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Box, useMediaQuery } from '@mui/material';
import { ImageSliderProps } from '../../interfaces/home/Home';

const ImageSlider: React.FC<ImageSliderProps> = ({ strings, spaceBetween, slidesPerView, photoStyle }): JSX.Element => {
  
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      autoplay={{delay: 2000, disableOnInteraction: false}}
      pagination={{ clickable: true }}
      style={{backgroundColor: isSmallScreen ? '#f3d2c1' : '#fef6e4'}}
    >
      {strings.map((photo: string, index: number) => (
        <SwiperSlide key={index}>
          <Box component='img' src={photo} sx={{ ...photoStyle }} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
