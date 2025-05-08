import { ChartNoAxesGantt } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Towing() {
  return (
    <section id="service" className="relative py-20">
      <div className="mx-auto max-w-screen-xl text-secondary flex flex-col items-start gap-y-20">
        <div className="flex flex-col gap-y-8 px-4 md:px-8 md:gap-y-16 w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl text-secondary-foreground font-bold flex gap-x-4 items-center border-b border-t border-white/25 py-4 px-5 intersect:motion-preset-slide-down motion-duration-[1s]">
            <ChartNoAxesGantt className="stroke-primary" />
            <span>Towing</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:px-8 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <LazyLoadImage
              key={index}
              src={`/images/towing/cassavarent-towing (${index + 1}).webp`}
              className={`rounded-xl motion-preset-blur-up motion-duration-[2s] motion-delay-${
                index * 200
              }`}
            />
          ))}
        </div>
        <div className="gap-y-8 grid grid-cols-1 md:grid-cols-2 w-full md:px-8 px-4">
          <div className="flex flex-col w-full text-secondary-foreground md:text-xl md:px-8 gap-y-4">
            <p className="font-semibold">
              Towing adalah kendaraan penggangkut berbagai jenis kendaraan
              lainnya seperti :
            </p>
            <ul className="list-decimal pl-4 leading-10">
              <li>Mengangkut kendaraan Baru</li>
              <li>Menggangkut Kendaraan Kolesi / Supercar</li>
              <li>Menggangkut Kendaraan yang mogok</li>
              <li>
                Menggangkut dan memindahkan kendaraan rusak akibat kecelakaan
              </li>
              <li>Mengangkut Sepeda motor</li>
              <li>Dan lain sebagainya</li>
            </ul>
          </div>
          <div className="flex flex-col w-full text-secondary-foreground md:text-xl md:px-8 gap-y-4">
            <p className="font-semibold">Keunggulan Towing :</p>
            <ul className="list-disc pl-4 leading-10">
              <li>Kapasitas daya angkut sampai dengan 10 ton</li>
              <li>Waktu pengiriman lebih cepat dan efisien</li>
              <li>Resiko Mobil anda tergores kendaraan lain sangat minim</li>
              <li>
                Memungkinkan lewat gang sempit, sehingga pengiriman dapat
                langsung ke depan pintu.
              </li>
              <li>
                Dapat menarik atau menaikan mobil yang rusak atau mogok secara
                mandiri dengan menggunakan winch
              </li>
              <li>Siap antar dan jemput kapanpun dan dimanapun</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
