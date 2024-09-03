// swiper.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Parallax } from 'swiper/modules';

const swiperComponent = () => {
  return (
    <div className="swiper-container h-[95vh] min-h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Parallax]}
        navigation={{ prevEl: '#homePrev', nextEl: '#homeNext' }}
        pagination={{ clickable: true, dynamicBullets: true }}
        parallax={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="bg-cover" style={{ backgroundImage: "url('https://demo.bootstrapious.com/varkala/2-1/img/photo/home-1-plain.jpg')" }}>
          <div className="container-fluid px-6 xl:px-7 h-full">
            <div className="row h-full flex items-center" data-swiper-parallax="-500">
              <div className="col-lg-6">
                <p className="subtitle letter-spacing-3 mb-3 text-dark font-light">Our all-time favourites</p>
                <h2 className="display-1 mb-3" style={{ lineHeight: 1 }}>Blouses & Tops</h2>
                <p className="text-muted mb-5">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit</p>
                <a className="btn btn-dark" href="#">Discover more</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="bg-cover" style={{ backgroundImage: "url('https://demo.bootstrapious.com/varkala/2-1/img/photo/home-2-plain.jpg')" }}>
          <div className="container-fluid px-6 xl:px-7 h-full">
            <div className="row h-full flex justify-center items-center text-center" data-swiper-parallax="-500">
              <div className="col-lg-6">
                <p className="subtitle letter-spacing-3 mb-3 text-dark font-light">Blue & White</p>
                <h2 className="display-1 mb-3" style={{ lineHeight: 1 }}>Linen and denim</h2>
                <a className="btn btn-dark" href="#">Start shopping</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="bg-cover" style={{ backgroundImage: "url('https://demo.bootstrapious.com/varkala/2-1/img/photo/home-3-plain.jpg')" }}>
          <div className="container-fluid px-6 xl:px-7 h-full">
            <div className="row h-full flex items-center" data-swiper-parallax="-500">
              <div className="col-lg-6 offset-lg-6">
                <p className="subtitle letter-spacing-3 mb-3 text-primary font-light mb-4">Sneakers</p>
                <h2 className="display-1 mb-5" style={{ lineHeight: 1 }}>For every occasion</h2>
                <a className="btn btn-dark" href="#">Start shopping</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Pagination */}
      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic"></div>

      {/* Navigation buttons */}
      <div className="swiper-nav d-none d-lg-block">
        <div id="homePrev" className="swiper-button-prev" role="button" aria-label="Previous slide"></div>
        <div id="homeNext" className="swiper-button-next" role="button" aria-label="Next slide"></div>
      </div>
    </div>
  );
};

export default swiperComponent;
