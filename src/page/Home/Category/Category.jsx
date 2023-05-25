import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

import { FreeMode, Pagination } from "swiper";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <section>
        <SectionTitle
          SubHeading={"From 11:00am to 10:00pm"}
          Heading={"ORDER ONLINE"}
        ></SectionTitle>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper mb-8 "
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className="text-center uppercase text-4xl text-white -mt-16">
              SALAD
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className="text-center uppercase text-4xl text-white -mt-16">
              PIZZA
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className="text-center uppercase text-4xl text-white -mt-16">
              SOUP
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className="text-center uppercase text-4xl text-white -mt-16">
              DESSERT
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className="text-center uppercase text-4xl text-white -mt-16">
              SALAD
            </h1>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
