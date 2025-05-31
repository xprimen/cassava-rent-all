"use client";
import AboutUs from "@/components/Features/AboutUs";
import GaleriFeature from "@/components/Features/Galeri";
import Hero from "@/components/Features/Hero";
import Keunggulan from "@/components/Features/Keunggulan";
import KontakFeature from "@/components/Features/Kontak";
import ServicesFeature from "@/components/Features/Services";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const { pathname, search, hash } = location;

  useEffect(() => {
    // Set meta tag canonical
    const canonicalUrl = window.location.origin + pathname + search + hash; // Menggunakan window.location untuk mendapatkan URL lengkap
    const meta = document.createElement("meta");
    meta.name = "canonical";
    meta.content = canonicalUrl;

    const head = document.querySelector("head");
    if (head) {
      head.appendChild(meta);
    }

    // Bersihkan meta tag saat komponen unmount
    return () => {
      if (head) {
        head.removeChild(meta);
      }
    };
  }, [pathname, search, hash]);

  return (
    <>
      <Hero />
      <Keunggulan />
      <AboutUs />
      <ServicesFeature />
      <GaleriFeature />
      <KontakFeature />
    </>
  );
}

export default Home;
