"use client"
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import imagen1 from '../../../../public/imgs/imagen1.png';
import friday from "../../../../public/imgs/friday.png";
import imagenBack2 from "../../../../public/imgs/imagenBack2.png";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function ImagenBackground() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative z-0 max-w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500, // Ajusta el delay para dar más tiempo entre las imágenes
          disableOnInteraction: false,
        }}
        speed={1000} // Ajusta la velocidad de la transición (1000ms = 1s)
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* Imagen de fondo desktop */}
          <Image 
            src={imagen1}
            alt='Imagen Fondo'
            className="hidden sm:block w-full h-full object-contain"
          />

          {/* Imagen de fondo mobile */}
          <Image 
            src={friday}
            alt='Imagen Fondo'
            className="block sm:hidden w-full h-full object-contain"
          />
        </SwiperSlide>

        <SwiperSlide>
          {/* Imagen de fondo desktop */}
          <Image 
            src={imagenBack2}
            alt='Imagen Fondo'
            className="hidden sm:block w-full h-full object-contain"
          />

          {/* Imagen de fondo mobile */}
          <Image 
            src={friday}
            alt='Imagen Fondo'
            className="block sm:hidden w-full h-full object-contain"
          />
        </SwiperSlide>
      </Swiper>      
    </div>
  );
}
