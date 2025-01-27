import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Asegúrate de importar los estilos necesarios
import { Box } from '@mui/material';
import { ImageSliderProps } from '../../interfaces/home/Home';

const ImageSlider: React.FC<ImageSliderProps> = ({ strings, spaceBetween, slidesPerView }): JSX.Element => {
  console.log(slidesPerView)
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      autoplay={{delay: 2000, disableOnInteraction: false}}
      pagination={{ clickable: true }}
      style={{backgroundColor: '#fef6e4'}}
    >
      {strings.map((photo: string, index: number) => (
        <SwiperSlide key={index}>
          <Box component='img' src={photo} sx={{ width: '40vw', height: '19vw', objectFit: 'contain' }} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
