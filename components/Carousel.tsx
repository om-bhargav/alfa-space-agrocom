"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { getProductsByCategory } from "@/actions/actions";
import Loading from "./Loading";
const Carousel = ({ category, ...props }: { category: string }) => {
  const [slides, setSlides] = useState<Object[]>([]);
  const [isLoaded, setisLoaded] = useState(false);
  useEffect(() => {
    if (category) {
      const fetchData = async () => {
        const data = JSON.parse(await getProductsByCategory(category));
        setSlides(data);
        setisLoaded(true);
      };
      fetchData();
    }
  }, [category]);
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      navigation
      loop
      className="mt-5 justify-center"
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1040: { slidesPerView: 4 },
      }}
    >
      {isLoaded ? (
        slides.length > 0 ? (
          slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <Card {...slide} />
            </SwiperSlide>
          ))
        ) : (
          <div className="font-semibold text-2xl">
            No Products Added For this category!
          </div>
        )
      ) : (
        <Loading color="var(--main-theme)" className="justify-self-center" size={40} />
      )}
    </Swiper>
  );
};

export default Carousel;
