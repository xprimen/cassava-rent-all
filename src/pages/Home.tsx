"use client";
import AboutUs from "@/components/Features/AboutUs";
import GaleriFeature from "@/components/Features/Galeri";
import Hero from "@/components/Features/Hero";
import Kontak from "@/components/Features/Kontak";
import ServicesFeature from "@/components/Features/Services";

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ServicesFeature />
      <GaleriFeature />
      <Kontak />
    </>
  );
}

export default Home;
