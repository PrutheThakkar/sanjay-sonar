"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "../css/workswiper.css";

const slides = [
  { image: "/images/about-header.webp", alt: "Patient consultation" },
  { image: "/images/about-header.webp", alt: "Hospital corridor" },
  { image: "/images/about-header.webp", alt: "Medical setup" },
  { image: "/images/about-header.webp", alt: "Doctor with patient" },
  { image: "/images/about-header.webp", alt: "Healthcare environment" },
  { image: "/images/about-header.webp", alt: "Doctor with patient" },
  { image: "/images/about-header.webp", alt: "Healthcare environment" },
  { image: "/images/about-header.webp", alt: "Doctor with patient" },
  { image: "/images/about-header.webp", alt: "Healthcare environment" },
];

const swiperSlides = [...slides, ...slides];

const updateSideSlides = (swiper) => {
  if (!swiper || !swiper.slides || swiper.slides.length === 0) return;

  swiper.slides.forEach((slide) => {
    slide.classList.remove("work-prev-2", "work-next-2");
  });

  const totalSlides = swiper.slides.length;
  const activeIndex = swiper.activeIndex;

  const prev2Index = (activeIndex - 2 + totalSlides) % totalSlides;
  const next2Index = (activeIndex + 2) % totalSlides;

  swiper.slides[prev2Index]?.classList.add("work-prev-2");
  swiper.slides[next2Index]?.classList.add("work-next-2");
};

export default function WorkSwiper() {
  return (
    <section className="work-swiper-section">
      <div className="work-swiper-container">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          className="work-swiper"
          slidesPerView="auto"
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          loopPreventsSliding={false}
          loopAdditionalSlides={5}
          speed={900}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 125,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".work-swiper-next",
            prevEl: ".work-swiper-prev",
          }}
          onSwiper={(swiper) => {
            setTimeout(() => updateSideSlides(swiper), 0);
          }}
          onSlideChange={(swiper) => {
            requestAnimationFrame(() => updateSideSlides(swiper));
          }}
          onTransitionEnd={(swiper) => {
            updateSideSlides(swiper);
          }}
        >
          {swiperSlides.map((slide, index) => (
            <SwiperSlide key={index} className="work-swiper-slide">
              <img src={slide.image} alt={slide.alt} />
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev work-swiper-prev"></div>
          <div className="swiper-button-next work-swiper-next"></div>
        </Swiper>
      </div>
    </section>
  );
}