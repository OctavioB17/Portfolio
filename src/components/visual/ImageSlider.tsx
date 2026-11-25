import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Box, CircularProgress } from '@mui/material';
import { ImageSliderProps } from '../../interfaces/home/Home';

const ImageSlider: React.FC<ImageSliderProps> = ({ strings, spaceBetween, slidesPerView, photoStyle, onAspectRatioChange }): JSX.Element => {
  const reportAspectRatio = (image: HTMLImageElement | null) => {
    if (!image || image.naturalWidth === 0 || image.naturalHeight === 0) return
    onAspectRatioChange?.(image.naturalWidth / image.naturalHeight)
  }
  
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      style={{ width: '100%', height: '100%', minWidth: 0, minHeight: 0 }}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      autoplay={{delay: 2000, disableOnInteraction: false}}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => reportAspectRatio(swiper.slides[swiper.activeIndex]?.querySelector('img') ?? null)}
      onSlideChange={(swiper) => reportAspectRatio(swiper.slides[swiper.activeIndex]?.querySelector('img') ?? null)}
    >
      {strings.map((photo: string, index: number) => (
        <SwiperSlide key={index}>
          {
            photo
            ?
            <Box
              component='img'
              src={photo}
              onLoad={(event) => {
                const image = event.currentTarget
                if (image.closest('.swiper-slide')?.classList.contains('swiper-slide-active')) {
                  reportAspectRatio(image)
                }
              }}
              sx={{
                ...photoStyle,
                display: 'block',
                objectFit: 'contain',
                objectPosition: 'center',
                bgcolor: '#fff9ed',
              }}
              alt={`Slide ${index}`}
            />
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
