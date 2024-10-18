/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'; // Corrección aquí

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import './slideshow.css';

function ProductSlideShow({images, title, className}) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={className}>
     <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
            images.map( img => (
                <SwiperSlide key={img}>
                    <Image
                     width={1024}
                     height={500}
                     src={`/products/${img}`}
                     alt={title}
                     className="object-contain rounded-lg"
                     />
                </SwiperSlide>
            ))
        }


      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
            images.map( img => (
                <SwiperSlide key={img}>
                    <Image
                     width={300}
                     height={200}
                     src={`/products/${img}`}
                     alt={title}
                     className="object-contain rounded-lg"
                     />
                </SwiperSlide>
            ))
        }
      </Swiper>

    </div>
  )
}

export default ProductSlideShow