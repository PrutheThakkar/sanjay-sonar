"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
    A11y,
    Autoplay,
    EffectFade,
    Keyboard,
    Navigation,
    Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";



const heroSlides = [
    {
        id: 1,
         // Replace these with your second banner images.
        desktopBackground: "/images/hero-banner-new.webp",
        mobileBackground: "/images/hero-banner-new-mob.webp",

       

        desktopContent: "/images/35-text-new-banner.png",
        mobileContent: "/images/35-mob-text.png",

        contentAlt:
            "Dr. Sanjay Sonar, 35 years of mastery in complex surgical cases",
    },

    {
        id: 2,

        desktopBackground: "/images/Sanjay-Banner-1.jpg",
        mobileBackground: "/images/home-banner-img-mob.png",

        desktopContent: "/images/35-text-new-banner.png",
        mobileContent: "/images/35-mob-text.png",
    },

   
];

export default function HeroSlider({ isLoading, children }) {
    return (
        <section
            className={`hero hero-slider-section ${
                !isLoading ? "hero-loaded" : ""
            }`}
            id="home"
            aria-label="Featured information"
        >
            <Swiper
                className="hero-swiper"
                modules={[
                    Autoplay,
                    EffectFade,
                    Navigation,
                    // Pagination,
                    Keyboard,
                    A11y,
                ]}
                // Change "fade" to "slide", "creative", etc.
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                speed={1200}
                loop={heroSlides.length > 1}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true,
                // }}
                // navigation
                // pagination={{
                //     clickable: true,
                // }}
                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                }}
                a11y={{
                    enabled: true,
                    prevSlideMessage: "Previous hero slide",
                    nextSlideMessage: "Next hero slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                }}
            >
                {heroSlides.map((slide, index) => {
                    const hasContentImage =
                        slide.desktopContent && slide.mobileContent;

                    return (
                        <SwiperSlide
                            key={slide.id}
                            className={`hero-slide ${
                                hasContentImage
                                    ? "hero-slide--image-content"
                                    : "hero-slide--text-content"
                            }`}
                        >
                            <div className="hero-bg hero-cinematic-reveal">
                                <picture>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet={slide.mobileBackground}
                                    />

                                    <source
                                        media="(min-width: 768px)"
                                        srcSet={slide.desktopBackground}
                                    />

                                    <img
                                        src={slide.desktopBackground}
                                        alt=""
                                        aria-hidden="true"
                                        className="hero-background-image"
                                        loading={index === 0 ? "eager" : "lazy"}
                                        fetchPriority={
                                            index === 0 ? "high" : "auto"
                                        }
                                    />
                                </picture>
                            </div>

                            <div className="hero-content hero-content-reveal">
                                {hasContentImage ? (
                                    <picture className="hero-content-picture">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet={slide.mobileContent}
                                        />

                                        <source
                                            media="(min-width: 768px)"
                                            srcSet={slide.desktopContent}
                                        />

                                        <img
                                            src={slide.desktopContent}
                                            alt={slide.contentAlt}
                                            className="hero-content-image"
                                            loading={
                                                index === 0 ? "eager" : "lazy"
                                            }
                                        />
                                    </picture>
                                ) : (
                                    <div className="hero-copy">
                                        {slide.eyebrow && (
                                            <span className="hero-eyebrow">
                                                {slide.eyebrow}
                                            </span>
                                        )}

                                        <h2>{slide.title}</h2>

                                        <p>{slide.description}</p>
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Your current social-links JSX will appear here. */}
            {children && (
                <div className="hero-social-overlay">{children}</div>
            )}
        </section>
    );
}