import { ChartNoAxesGantt, PhoneCall } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AboutUs() {
  return (
    <section id="tentang" className="bg-white">
      <div className="mx-auto max-w-screen-xl items-center grid md:grid-cols-2 text-secondary py-24 gap-y-8">
        <div className="flex flex-col gap-y-8 px-4 md:px-8 md:gap-y-16 intersect:motion-preset-slide-right motion-duration-[2s]">
          <h2 className="text-2xl md:text-4xl font-bold flex gap-x-4 items-center border-b border-t border-muted/20 py-4 px-5">
            <ChartNoAxesGantt className="stroke-primary" />
            <span>Tentang Cassava Rent</span>
          </h2>
          <div className="leading-8 tracking-normal font-medium">
            <p>
              Butuh Jasa Towing, Self Loader, Sewa Alat Berat, dan Sewa Dump
              Truk. Cassava rent All Solusinya, CEPAT, TANGGAP, SIAGA Dan
              PASTINYA MURAH.
            </p>
            <p>
              CASSAVA RENT ALL merupakan penyedia berbagai layanan jasa, seperti
              Jasa Towing, Jasa Loader, Jasa sewa Dumpt Truk, dan Jasa Sewa
              Excavator
            </p>
            <p>
              Siap Berangkat Kapanpun, Bekerja dimanapun, dan Pekerjaan Apapun.
            </p>
          </div>
          <a
            href="#kontak"
            className="cta-button group w-fit intersect:motion-preset-fade-in-up intersect:motion-delay-1000"
          >
            Hubungi
            <PhoneCall className="size-5 group-hover:motion-preset-oscillate group-hover:motion-duration-200 group-hover:motion-delay-200" />
          </a>
        </div>
        <div className="md:w-3/5 px-4 mx-auto intersect:motion-preset-slide-left motion-duration-[2000ms] intersect:motion-delay-500">
          <LazyLoadImage
            src="/images/cover.webp"
            className="w-full h-full object-cover drop-shadow-xl rounded-xl hover:rotate-y-30 hover:rotate-x-15 hover:drop-shadow-2xl transition-transform duration-500 ease-in"
          />
        </div>
      </div>
    </section>
  );
}
