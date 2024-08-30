import React, { useRef, useState } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import EventCard from "../EventCard/EventCard";
import styles from "./Slider.module.scss";
import arrowRight from "../../../assets/images/arrow-right.svg";
import arrowLeft from "../../../assets/images/left-arrow.svg";

interface Event {
  title: string;
  imageUrl: string;
  dateText: string;
  dateIcon: string;
  checkText: string;
  checkIcon: string;
  ticketText: string;
  ticketIcon: string;
}

interface SliderProps {
  events: Event[];
  prevButtonClass?: string;
  nextButtonClass?: string;
}

const Slider: React.FC<SliderProps> = ({ events }) => {
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(false);

  const handleMouseDownPrev = () => setIsPrevActive(true);
  const handleMouseUpPrev = () => setIsPrevActive(false);

  const handleMouseDownNext = () => setIsNextActive(true);
  const handleMouseUpNext = () => setIsNextActive(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className={styles.customSwiperContainer}>
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={4}
        spaceBetween={40}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 3,
            
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <EventCard
              title={event.title}
              imageUrl={event.imageUrl}
              dateText={event.dateText}
              dateIcon={event.dateIcon}
              checkText={event.checkText}
              checkIcon={event.checkIcon}
              ticketText={event.ticketText}
              ticketIcon={event.ticketIcon}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`${styles.customPrev} ${isPrevActive ? styles.active : ""}`}
        onMouseDown={handleMouseDownPrev}
        onMouseUp={handleMouseUpPrev}
        ref={prevRef}
      >
        <img src={arrowLeft} alt="arrow left icon" />
      </div>
      <div
        className={`${styles.customNext} ${isNextActive ? styles.active : ""}`}
        onMouseDown={handleMouseDownNext}
        onMouseUp={handleMouseUpNext}
        ref={nextRef}
      >
        <img src={arrowRight} alt="" />
      </div>
    </div>
  );
};

export default Slider;
