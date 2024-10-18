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
                     height={800}
                     src={`/products/${img}`}
                     alt={title}
                     className="object-fill rounded-lg"
                     />
                </SwiperSlide>
            ))
        }


      </Swiper>

    </div>
  )
}

export default ProductSlideShow