import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Resume.css";
import { FreeMode, Pagination } from "swiper/modules";
const ResumeTemplatePreview = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pt-10 rounded-lg bg-green-100 px-2 md:px-10 pb-10 ">
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="text-center text-4xl text-green-500 font-bold mb-10"
      >
        --CHOOSE YOUR TEMPLATE--
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          600: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1550: {
            slidesPerView: 3,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-xl ">
        <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="relative rounded  group h-[600px] w-full"
          >
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/nRHhRBP/Screenshot-59.png"
              alt=""
            />
            <button className="absolute bottom-72 left-1/2 transform -translate-x-1/2 bg-green-100 text-black py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Create Yor CV
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="relative rounded group  h-[600px] w-full"
          >
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/0KLZg3h/Screenshot-60.png"
              alt=""
            />
            <button className="absolute bottom-72 left-1/2 transform -translate-x-1/2 bg-green-100 text-black py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Create Yor CV
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="relative rounded  group  h-[600px] w-full"
          >
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/p4fxMnB/Screenshot-61.png"
              alt=""
            />
            <button className="absolute bottom-72 left-1/2 transform -translate-x-1/2 bg-green-100 text-black py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Create Yor CV
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="relative rounded group  h-[600px] w-full"
          >
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/98CG01q/localhost-5174-3.png"
              alt=""
            />
            <button className="absolute bottom-72 left-1/2 transform -translate-x-1/2 bg-green-100 text-black py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Create Yor CV
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="relative rounded  group  h-[600px] w-full"
          >
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/ZzrHxwL/localhost-5174-1.png"
              alt=""
            />
            <button className="absolute bottom-72 left-1/2 transform -translate-x-1/2 bg-green-100 text-black py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Create Yor CV
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="relative  group rounded h-[600px] w-full"
          >
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/nwzf4FJ/localhost-5174.png"
              alt=""
            />
            <button className="absolute bottom-72 left-1/2 transform -translate-x-1/2 bg-green-100 text-black py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Create Yor CV
            </button>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default ResumeTemplatePreview;
