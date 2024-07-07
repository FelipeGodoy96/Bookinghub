"use client";

import CategoryCardDesktop from "./components/CategoryCardDesktop";
import CategoryCardMobile from "./components/CategoryCardMobile";
import { categories } from "./CategoryConsts";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@/hooks/customs/useWindowSize";

register();

const CategoryCard = () => {
  const swiperElRef = useRef(null);
  const { windowSize } = useWindowSize();

  useEffect(() => {
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
    });
  }, []);
  return (
    <>
      <div className="hidden md:block mt-2">
        <Swiper
          ref={swiperElRef}
          className="w-full h-full bg-transparent"
          spaceBetween={25}
          mousewheel-force-to-axis="true"
          navigation={true}
          slidesPerView={windowSize == "md" ? 2 : 4}
          style={{paddingBottom: "1.5rem",
        paddingTop: "0.5rem"}}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCardDesktop category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden mb-8">
        <Swiper
          ref={swiperElRef}
          className="w-full h-full py-2 bg-transparent rounded-lg shadow-md"
          spaceBetween={25}
          mousewheel-force-to-axis="true"
          navigation={true}
          slidesPerView={windowSize == "md" ? 2 : 1}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCardMobile category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CategoryCard;
