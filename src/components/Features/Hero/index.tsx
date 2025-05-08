"use client";
import useObservingElement from "@/hooks/useObservingElement";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React, { CSSProperties, useMemo } from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

type ExtendedCSSProperties = CSSProperties & {
  "--duration-slideshowImageEffect"?: string;
};

const imageList = Array.from({ length: 4 }).map(
  (_, index) => `/images/towing/cassavarent-towing (${index + 1}).webp`
);

export default function Hero() {
  const { ref, targetTouched } = useObservingElement();
  const [imageIndex, setImageIndex] = React.useState(0);
  const effectTimeout = useMemo(() => 5000, []);

  /* function showNextImage() {
    setImageIndex((index) => {
      if (index === imageList.length - 1) return 0;
      return index + 1;
    });
  }
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageList.length - 1;
      return index - 1;
    });
  } */

  React.useLayoutEffect(() => {
    setTimeout(() => {
      if (imageIndex >= 0 && imageIndex < imageList.length - 1) {
        setImageIndex(imageIndex + 1);
      } else {
        setImageIndex(0);
      }
    }, effectTimeout);
  }, [effectTimeout, imageIndex]);

  const transparentNavbar = (touched: boolean, target: Element | null) => {
    if (touched) {
      target?.classList.add("transparent");
    } else {
      target?.classList.remove("transparent");
    }
  };

  React.useEffect(() => {
    const navbar = document.querySelector("#navbar");
    transparentNavbar(targetTouched, navbar);
  }, [targetTouched]);

  React.useEffect(() => {
    const navbar = document.querySelector("#navbar");
    if (ref.current) {
      const rect = (ref.current as HTMLElement).getBoundingClientRect();
      if (rect.top === 0) navbar?.classList.add("transparent");
    }
    return () => {
      navbar?.classList.remove("transparent");
    };
  }, [ref]);

  return (
    <section
      aria-label="Hero Slideshow"
      id="hero"
      className="slideshow"
      ref={ref}
    >
      <div className="slideshow-wrapper" aria-label="Slideshow Wrapper">
        <div
          className="slideshow-container"
          aria-label="Slideshow Image Container"
        >
          {imageList.map((url, index) => (
            <div
              key={index}
              className={cn(
                "slideshow-image-wrapper",
                imageIndex === index
                  ? // ? "transition-opacity opacity-100 duration-500"
                    "animate-slideshowFadeEffect"
                  : ""
              )}
              style={
                {
                  "--duration-slideshowImageEffect": effectTimeout + "ms",
                } as ExtendedCSSProperties
              }
            >
              <Image
                aria-hidden={imageIndex !== index}
                aria-label={`Slide ${index + 1} Image`}
                alt={`Cassavarent Slide Image ${index + 1}`}
                className={cn(
                  "slideshow-image",
                  imageIndex === index ? "animate-slideshowZoomEffect" : ""
                )}
                style={{
                  translate: `${-100 * imageIndex}%`,
                }}
                src={url}
              />
            </div>
          ))}
          <div className="slideshow-images-cover" />
        </div>
        <div
          aria-label="Slide Main Description"
          className="slide-main-description"
        >
          <h1
            aria-label="Slide Main Title"
            className="intersect:motion-preset-slide-right-sm"
          >
            Cassava Rent All
          </h1>
          <p
            aria-label="Slide Main Description"
            className="intersect:motion-preset-slide-right-sm motion-delay-200"
          >
            Solusi terbaik bagi anda yang membutuhkan transportasi untuk
            membantu pemindahan jadi lebih mudah. Jasa towing perusahaan kami
            dapat melakukan pengiriman dan juga Sewa Alat Berat.
          </p>
          <a
            href="#service"
            className="cta-button group intersect:motion-preset-slide-right-sm motion-delay-400"
          >
            Layanan Kami
            <ArrowRight className="group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
}
