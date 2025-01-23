import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Asegúrate de importar los estilos necesarios
import { Box } from '@mui/material';
import { StringArrayProps } from '../../interfaces/Reusable';

const ImageSlider: React.FC<StringArrayProps> = ({ strings }): JSX.Element => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {strings.map((photo: string, index: number) => (
        <SwiperSlide key={index}>
          <Box component='img' src={photo} sx={{ width: '100%' }} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
