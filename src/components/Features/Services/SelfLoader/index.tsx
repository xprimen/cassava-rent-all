import { ChartNoAxesGantt } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SelfLoader() {
  return (
    <section id="service" className="relative py-20">
      <div className="mx-auto max-w-screen-xl text-secondary flex flex-col items-start gap-y-20">
        <div className="flex flex-col gap-y-8 px-4 md:px-8 md:gap-y-16 w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl text-secondary-foreground font-bold flex gap-x-4 items-center border-b border-t border-white/25 py-4 px-5 intersect:motion-preset-slide-down motion-duration-[1s]">
            <ChartNoAxesGantt className="stroke-primary" />
            <span>SelfLoader</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:px-8 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <LazyLoadImage
              key={index}
              src={`/images/self-loader/cassavarent-self-loader (${
                index + 1
              }).webp`}
              className={`rounded-xl motion-preset-blur-up motion-duration-[2s] ${
                index === 0 && "sm:col-span-2"
              } motion-delay-${index * 200}`}
            />
          ))}
        </div>
        <div className="gap-y-8 w-full md:px-8 px-4">
          <div className="flex flex-col w-full text-secondary-foreground md:text-xl md:px-8 gap-y-4">
            <p className="font-semibold">
              SELF LOADER adalah kendaraan pengangkut berbagai jenis Alat Berat
              Antara Lain :
            </p>
            <ul className="list-decimal pl-4 leading-8 md:leading-12">
              <li>Menggangkut Excavator</li>
              <li>Mengangkut BullDozer </li>
              <li>Mengankut vibro roller </li>
              <li>Mengangkut Forklift </li>
              <li>
                Mengangkut alat-alat pertanian Modern (traktor, jonder, Mesin
                Penggilingan)
              </li>
              <li>Mengangkut Perahu dan sebagainya </li>
              <li>Maksimal Daya Angkut 10 Ton</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
