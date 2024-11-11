'use client'

import { useState } from 'react';
import { Swiper as SwipperObject } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const ProductSlideShow = ({ images, title, className }: Props) => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState<SwipperObject>();
  
  return (
    <div className={ className }>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{
                delay: 3000
        }}
        thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
          {
            images.map( image => (
                <SwiperSlide key={ image }>
                    <Image 
                        width={ 1024 }
                        height={ 800 }
                        src={`/products/${ image }`}
                        alt={ title }
                        className="rounded-lg object-fill"
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
            images.map( image => (
                <SwiperSlide key={ image }>
                    <Image 
                        width={ 300 }
                        height={ 300 }
                        src={`/products/${ image }`}
                        alt={ title }
                        className="rounded-lg object-fill"
                    />
                </SwiperSlide>
            ))
          }
      </Swiper>
    </div>
  )
}
