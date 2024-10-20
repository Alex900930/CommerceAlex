"use client"
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Image from 'next/image'; // Corrección aquí
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

 /* import './style.css';  */


import { products } from '@/seed/seed';

function ProductMobileSlideShow({images, title, className}) {

  return (
    <div className={`${className}`}>
         
    <Swiper
     style={
      {
        width: '100vw',
        height: '500px'
      }
     }
        pagination
        modules={[FreeMode, Pagination]}
        className=""
      >
          {
            images.map(img => (
              <SwiperSlide key={img}>
                <Image
                     width={600}     
                     height={400}
                     src={`/products/${img}`}
                     alt={title}
                     className="object-fill"
              />
              </SwiperSlide>
            ))
          }
      </Swiper>
    </div>
  )
}

export default ProductMobileSlideShow