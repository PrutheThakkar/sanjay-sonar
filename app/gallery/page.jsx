"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Layout from "../../components/Layout";

const galleryItems = [
  {
    id: 1,
    title: "Professional Portrait",
    image: "/images/WhatsApp Image 2026-07-29 at 6.24.19 PM.jpeg",
    alt: "Professional portrait of Dr. Sanjay Sonar",
    width: 900,
    height: 1200,
  },
  {
    id: 2,
    title: "Medical Conference",
    image: "/images/WhatsApp Image 2026-07-29 at 6.55.01 PM.jpeg",
    alt: "Dr. Sanjay Sonar attending a medical conference",
    width: 1200,
    height: 800,
  },
  {
    id: 3,
    title: "Award Recognition",
    image: "/images/WhatsApp Image 2026-07-29 at 6.56.30 PM.jpeg",
    alt: "Dr. Sanjay Sonar receiving a medical award",
    width: 900,
    height: 1100,
  },
  {
    id: 4,
    title: "Surgical Event",
    image: "/images/WhatsApp Image 2026-07-29 at 6.59.24 PM.jpeg",
    alt: "Dr. Sanjay Sonar at a surgical event",
    width: 1200,
    height: 900,
  },
  {
    id: 5,
    title: "Professional Moment",
    image: "/images/WhatsApp Image 2026-07-29 at 7.01.31 PM.jpeg",
    alt: "Professional moment from Dr. Sanjay Sonar's work",
    width: 1000,
    height: 1300,
  },
  {
    id: 6,
    title: "Conference Presentation",
    image: "/images/WhatsApp Image 2026-07-29 at 7.03.45 PM.jpeg",
    alt: "Dr. Sanjay Sonar giving a conference presentation",
    width: 1200,
    height: 800,
  },
  {
    id: 7,
    title: "Award Ceremony",
    image: "/images/WhatsApp Image 2026-07-29 at 7.05.15 PM.jpeg",
    alt: "Award ceremony attended by Dr. Sanjay Sonar",
    width: 900,
    height: 1200,
  },
  {
    id: 8,
    title: "Medical Workshop",
    image: "/images/WhatsApp Image 2026-07-29 at 7.09.03 PM.jpeg",
    alt: "Dr. Sanjay Sonar attending a medical workshop",
    width: 1200,
    height: 900,
  },
  {
    id: 9,
    title: "Personal Portrait",
    image: "/images/WhatsApp Image 2026-07-29 at 7.10.16 PM.jpeg",
    alt: "Personal portrait of Dr. Sanjay Sonar",
    width: 900,
    height: 1150,
  },
  {
    id: 10,
    title: "Professional Gathering",
    image: "/images/WhatsApp Image 2026-07-29 at 7.11.02 PM.jpeg",
    alt: "Professional medical gathering",
    width: 1200,
    height: 800,
  },
  {
    id: 11,
    title: "Achievement and Recognition",
    image: "/images/WhatsApp Image 2026-07-29 at 7.15.58 PM.jpeg",
    alt: "Dr. Sanjay Sonar receiving professional recognition",
    width: 1000,
    height: 1250,
  },
  {
    id: 12,
    title: "Medical Community Event",
    image: "/images/WhatsApp Image 2026-07-29 at 7.16.48 PM.jpeg",
    alt: "Dr. Sanjay Sonar at a medical community event",
    width: 1200,
    height: 900,
  },
];

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M5 5l14 14M19 5 5 19"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M19 12H5m6-6-6 6 6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M5 12h14m-6-6 6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExpandIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedItem =
    selectedIndex !== null
      ? galleryItems[selectedIndex]
      : null;

  useEffect(() => {
    document.body.classList.add("gallery-page");

    return () => {
      document.body.classList.remove("gallery-page");
    };
  }, []);

  useEffect(() => {
    if (selectedIndex === null) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) {
      return undefined;
    }

    const handleKeyDown = event => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex(current => {
          if (current === null) return null;

          return current === 0
            ? galleryItems.length - 1
            : current - 1;
        });
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex(current => {
          if (current === null) return null;

          return current === galleryItems.length - 1
            ? 0
            : current + 1;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const showPreviousImage = () => {
    setSelectedIndex(current => {
      if (current === null) return null;

      return current === 0
        ? galleryItems.length - 1
        : current - 1;
    });
  };

  const showNextImage = () => {
    setSelectedIndex(current => {
      if (current === null) return null;

      return current === galleryItems.length - 1
        ? 0
        : current + 1;
    });
  };

  return (
      <Layout>
    <main className="inside-page gallery-page-content">
        <section className="inside-banner">
          <div className="container">
            <h1>Gallery</h1>
          </div>
        </section>

        <section className="gallery-section white-bg">
          <div className="container">
            <div className="gallery-heading">
              <h2>
                Moments, Milestones
                <span className="subheading">
                  Awards, events and professional memories
                </span>
              </h2>

              <p>
                A collection of personal moments, professional
                achievements, medical events and recognitions from
                Dr. Sanjay Sonar&apos;s journey.
              </p>
            </div>

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
                      sizes="
                        (max-width: 575px) 100vw,
                        (max-width: 991px) 50vw,
                        33vw
                      "
                    />
                  </span>

                  <span className="gallery-card__overlay" />

                  <span className="gallery-card__content">
                    <strong>{item.title}</strong>

                    <span className="gallery-card__expand">
                      <ExpandIcon />
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {selectedItem && (
          <div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
            onMouseDown={event => {
              if (event.target === event.currentTarget) {
                setSelectedIndex(null);
              }
            }}
          >
            <button
              type="button"
              className="gallery-lightbox__close"
              aria-label="Close gallery image"
              onClick={() => setSelectedIndex(null)}
            >
              <CloseIcon />
            </button>

            <button
              type="button"
              className="gallery-lightbox__arrow gallery-lightbox__arrow--previous"
              aria-label="View previous image"
              onClick={showPreviousImage}
            >
              <ArrowLeftIcon />
            </button>

            <div className="gallery-lightbox__dialog">
              <div className="gallery-lightbox__image">
                <Image
                  key={selectedItem.id}
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  width={selectedItem.width}
                  height={selectedItem.height}
                  priority
                  sizes="95vw"
                />
              </div>

              <div className="gallery-lightbox__caption">
                <h2>{selectedItem.title}</h2>

                <p>
                  {selectedIndex + 1} / {galleryItems.length}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="gallery-lightbox__arrow gallery-lightbox__arrow--next"
              aria-label="View next image"
              onClick={showNextImage}
            >
              <ArrowRightIcon />
            </button>
          </div>
        )}
    </main>
      </Layout>
  );
}