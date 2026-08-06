"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "./Layout";

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M5 5l14 14M19 5 5 19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M19 12H5m6-6-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ExpandIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function GalleryClient({ pageTitle, galleryCategories }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const galleryItems = galleryCategories[activeCategory]?.images || [];
  const selectedItem = selectedIndex === null ? null : galleryItems[selectedIndex];

  useEffect(() => {
    document.body.classList.add("gallery-page");
    return () => document.body.classList.remove("gallery-page");
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) => current === 0 ? galleryItems.length - 1 : current - 1);
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => current === galleryItems.length - 1 ? 0 : current + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryItems.length, selectedIndex]);

  const showPreviousImage = () => {
    setSelectedIndex((current) => current === 0 ? galleryItems.length - 1 : current - 1);
  };

  const showNextImage = () => {
    setSelectedIndex((current) => current === galleryItems.length - 1 ? 0 : current + 1);
  };

  return (
    <main className="inside-page gallery-page-content">
      <Layout>
        <section className="inside-banner">
          <div className="container"><h1>{pageTitle}</h1></div>
        </section>

        <section className="gallery-section white-bg">
          <div className="container">
            <div className="gallery-heading">
              <h2>
                Moments, Milestones
                <span className="subheading">Awards, events and professional memories</span>
              </h2>
              <p>
                A collection of personal moments, professional achievements, medical events and
                recognitions from Dr. Sanjay Sonar&apos;s journey.
              </p>
            </div>

            <div className="gallery-browser">
              {!!galleryCategories.length && (
                <div className="gallery-tabs" role="tablist" aria-label="Gallery categories">
                  {galleryCategories.map((category, index) => (
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeCategory === index}
                      className={`gallery-tab${activeCategory === index ? " active" : ""}`}
                      key={category.key}
                      onClick={() => {
                        setActiveCategory(index);
                        setSelectedIndex(null);
                      }}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="gallery-results" role="tabpanel">
                {galleryItems.length ? (
                  <div className="gallery-masonry">
                    {galleryItems.map((item, index) => (
                      <button
                        type="button"
                        key={item.id}
                        className="gallery-card"
                        aria-label={`Open ${item.title}`}
                        onClick={() => setSelectedIndex(index)}
                      >
                        <span className="gallery-card__image">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                            unoptimized
                            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                          />
                        </span>
                        <span className="gallery-card__overlay" />
                        <span className="gallery-card__content">
                          <strong>{item.title}</strong>
                          <span className="gallery-card__expand"><ExpandIcon /></span>
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="gallery-empty">No images have been added to this category yet.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {selectedItem && (
          <div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedIndex(null);
            }}
          >
            <button type="button" className="gallery-lightbox__close" aria-label="Close gallery image" onClick={() => setSelectedIndex(null)}>
              <CloseIcon />
            </button>
            <button type="button" className="gallery-lightbox__arrow gallery-lightbox__arrow--previous" aria-label="View previous image" onClick={showPreviousImage}>
              <ArrowLeftIcon />
            </button>

            <div className="gallery-lightbox__dialog">
              <div className="gallery-lightbox__image">
                <Image key={selectedItem.image} src={selectedItem.image} alt={selectedItem.alt} width={selectedItem.width} height={selectedItem.height} priority unoptimized sizes="95vw" />
              </div>
              <div className="gallery-lightbox__caption">
                <h2>{selectedItem.title}</h2>
                <p>{selectedIndex + 1} / {galleryItems.length}</p>
              </div>
            </div>

            <button type="button" className="gallery-lightbox__arrow gallery-lightbox__arrow--next" aria-label="View next image" onClick={showNextImage}>
              <ArrowRightIcon />
            </button>
          </div>
        )}
      </Layout>
    </main>
  );
}
