"use client";
import AboutUs from "@/components/Features/AboutUs";
import GaleriFeature from "@/components/Features/Galeri";
import Hero from "@/components/Features/Hero";
import Keunggulan from "@/components/Features/Keunggulan";
import KontakFeature from "@/components/Features/Kontak";
import ServicesFeature from "@/components/Features/Services";

function Home() {
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
