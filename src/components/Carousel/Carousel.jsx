import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarousalRightNavigation from "./CarousalRightNavigation";

const Controls = ({ data }) => {

  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0,null);
  }, [data,swiper]);

  return <></>;
};
const Carousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarousalRightNavigation />
        {
          data.map(item => (
            <SwiperSlide>{renderComponent(item)}</SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Carousel;
