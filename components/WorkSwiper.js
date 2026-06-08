"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const workSlides = [
  {
    image: "/images/work-slide-1.jpg",
    alt: "Patient consultation",
  },
  {
    image: "/images/work-slide-2.jpg",
    alt: "Hospital corridor",
  },
  {
    image: "/images/work-slide-3.jpg",
    alt: "Medical setup",
  },
  {
    image: "/images/work-slide-4.jpg",
    alt: "Doctor with patient",
  },
  {
    image: "/images/work-slide-5.jpg",
    alt: "Healthcare environment",
  },
];

export default function WorkSwiper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="work-swiper-section">
      <div className="work-swiper-bg">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="work-swiper"
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          speed={900}
          spaceBetween={-120}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          pagination={{
            el: ".work-swiper-pagination",
            clickable: true,
          }}
        >
          {workSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="work-slide-card">
                <img src={slide.image} alt={slide.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="work-swiper-controls">
          <button ref={prevRef} className="work-swiper-prev" aria-label="Previous slide">
            ←
          </button>

          <div className="work-swiper-pagination"></div>

          <button ref={nextRef} className="work-swiper-next" aria-label="Next slide">
            →
          </button>
        </div>
      </div>
    </section>
  );
}