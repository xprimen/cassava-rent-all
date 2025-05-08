import { ChartNoAxesGantt, ChevronRight } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function ServicesFeature() {
  return (
    <section id="service" className="relative py-20">
      <div className="mx-auto max-w-screen-xl text-secondary flex flex-col items-start gap-y-20">
        <div className="flex flex-col gap-y-8 px-4 md:px-8 md:gap-y-16 w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl text-secondary-foreground font-bold flex gap-x-4 items-center border-b border-t border-white/25 py-4 px-5 intersect:motion-preset-slide-down motion-duration-[1s]">
            <ChartNoAxesGantt className="stroke-primary" />
            <span>Layanan</span>
          </h2>
        </div>
        <div className="flex flex-col w-full text-secondary-foreground md:px-8 gap-y-8">
          {/* layanan 1 */}
          <div className="grid md:grid-cols-2 w-full gap-x-8 gap-y-8">
            <LazyLoadImage
              src="/images/towing/cassavarent-towing (1).webp"
              className="mask-cover mask-center mask-[url(/images/mask.webp)] intersect:motion-preset-slide-right motion-duration-[2s]"
            />
            <div className="flex flex-col justify-center items-start px-4 leading-8 md:px-20 gap-y-8 intersect:motion-preset-slide-left motion-duration-[2s] motion-delay-200">
              <h3 className="text-3xl text-secondary-foreground font-bold">
                Towing
              </h3>
              <div>
                <p>
                  Towing adalah kendaraan penggangkut berbagai jenis kendaraan
                  lainnya seperti :
                </p>
                <ul className="list-decimal pl-4">
                  <li>Mengangkut kendaraan Baru</li>
                  <li>Menggangkut Kendaraan Kolesi / Supercar</li>
                  <li>Menggangkut Kendaraan yang mogok</li>
                  <li>
                    Menggangkut dan memindahkan kendaraan rusak akibat
                    kecelakaan
                  </li>
                  <li>Mengangkut Sepeda motor</li>
                  <li>Dan lain sebagainya</li>
                </ul>
              </div>
              <Link
                to={{
                  pathname: "/service/towing",
                  hash: "#root",
                }}
                className="bg-primary rounded-lg flex flex-row items-center justify-center gap-x-2 py-2 px-4 text-secondary text-sm font-bold hover:bg-secondary-foreground cursor-pointer group"
              >
                Detaill{" "}
                <ChevronRight className="group-hover:motion-translate-x-out-25 motion-duration-[500ms]" />
              </Link>
            </div>
          </div>

          {/* Layanan 2 */}
          <div className="grid md:grid-cols-2 w-full gap-x-8 gap-y-8">
            <LazyLoadImage
              src="/images/self-loader/cassavarent-self-loader (1).webp"
              className="mask-cover mask-center mask-[url(/images/mask.webp)] md:order-last intersect:motion-preset-slide-right motion-duration-[2s] md:intersect:motion-preset-slide-left"
            />
            <div className="flex flex-col justify-center items-start px-4 leading-8 md:px-20 gap-y-8 md:order-first intersect:motion-preset-slide-left motion-duration-[2s] md:intersect:motion-preset-slide-right">
              <h3 className="text-3xl text-secondary-foreground font-bold">
                Self Loader
              </h3>
              <div>
                <p>
                  SELF LOADER adalah kendaraan pengangkut berbagai jenis Alat
                  Berat Antara Lain :
                </p>
                <ul className="list-decimal pl-4">
                  <li>Menggangkut Excavator</li>
                  <li>Mengangkut BullDozer</li>
                  <li>Mengankut vibro roller</li>
                  <li>Mengangkut Forklift</li>
                  <li>
                    Mengangkut alat-alat pertanian Modern ( traktor, jonder,
                    Mesin Penggilingan )
                  </li>
                  <li>Mengangkut Perahu dan sebagainya</li>
                  <li>Maksimal Daya Angkut 10 Ton</li>
                </ul>
              </div>
              <Link
                to="/service/self-loader"
                className="bg-primary rounded-lg flex flex-row items-center justify-center gap-x-2 py-2 px-4 text-secondary text-sm font-bold hover:bg-secondary-foreground cursor-pointer group"
              >
                Detaill{" "}
                <ChevronRight className="group-hover:motion-translate-x-out-25 motion-duration-[500ms]" />
              </Link>
            </div>
          </div>

          {/* layanan 3 */}
          <div className="grid md:grid-cols-2 w-full gap-x-8 gap-y-8">
            <LazyLoadImage
              src="/images/excavator/cassavarent-excavator (1).webp"
              className="mask-cover mask-center mask-[url(/images/mask.webp)] intersect:motion-preset-slide-right motion-duration-[2s] bg-white/90"
            />
            <div className="flex flex-col justify-center items-start px-4 leading-8 md:px-20 gap-y-8 intersect:motion-preset-slide-left motion-duration-[2s] motion-delay-200">
              <h3 className="text-3xl text-secondary-foreground font-bold">
                Sewa Excavator
              </h3>
              <p>
                EXCAVATOR adalah alat berat yang digunakan untuk menggali,
                mengangkat, dan memindahkan material, seperti tanah, pasir, atau
                batu. Alat ini sering digunakan dalam proyek konstruksi,
                pertambangan, Perkebunan, Pertanian, Pembukaan Lahan Baru /
                Hutan dan industri terkait.
              </p>
              <Link
                to="/service/excavator"
                className="bg-primary rounded-lg flex flex-row items-center justify-center gap-x-2 py-2 px-4 text-secondary text-sm font-bold hover:bg-secondary-foreground cursor-pointer group"
              >
                Detaill{" "}
                <ChevronRight className="group-hover:motion-translate-x-out-25 motion-duration-[500ms]" />
              </Link>
            </div>
          </div>

          {/* Layanan 4 */}
          <div className="grid md:grid-cols-2 w-full gap-x-8 gap-y-8">
            <LazyLoadImage
              src="/images/dump-truck/cassavarent-dump-truck.webp"
              className="mask-cover mask-center mask-[url(/images/mask.webp)] md:order-last intersect:motion-preset-slide-right motion-duration-[2s] md:intersect:motion-preset-slide-left bg-white/90"
            />
            <div className="flex flex-col justify-center items-start px-4 leading-8 md:px-20 gap-y-8 md:order-first intersect:motion-preset-slide-left motion-duration-[2s] md:intersect:motion-preset-slide-right">
              <h3 className="text-3xl text-secondary-foreground font-bold">
                Dump Truck
              </h3>
              <p>
                Dump truck digunakan untuk mengangkut material seperti kerikil,
                batu, pasir, tanah, dan hasil tambang, serta untuk proyek
                konstruksi, pertambangan, logistic dan lain sebagainya
              </p>
              <Link
                to="/service/dump-truck"
                className="bg-primary rounded-lg flex flex-row items-center justify-center gap-x-2 py-2 px-4 text-secondary text-sm font-bold hover:bg-secondary-foreground cursor-pointer group"
              >
                Detaill{" "}
                <ChevronRight className="group-hover:motion-translate-x-out-25 motion-duration-[500ms]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
