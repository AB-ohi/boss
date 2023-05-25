import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <section>
      <SectionTitle
        SubHeading="What Our Clients Say"
        Heading="TESTIMONIALS"
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center md:max-w-5xl mx-auto">
                <Rating style={{ maxWidth: 180 }} className="mx-auto" value={review.rating} readOnly />
                <p>{review.details}</p>
                <h1 className="text-[#CD9003] text-3xl font-semibold my-32">{review.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
