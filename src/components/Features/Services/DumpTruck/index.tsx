import { ChartNoAxesGantt } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function DumpTruck() {
  return (
    <section id="service" className="relative py-20">
      <div className="mx-auto max-w-screen-xl text-secondary flex flex-col items-start gap-y-20">
        <div className="flex flex-col gap-y-8 px-4 md:px-8 md:gap-y-16 w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl text-secondary-foreground font-bold flex gap-x-4 items-center border-b border-t border-white/25 py-4 px-5 intersect:motion-preset-slide-down motion-duration-[1s]">
            <ChartNoAxesGantt className="stroke-primary" />
            <span>Dump Truck</span>
          </h2>
        </div>
        <div className="w-full md:px-8 gap-4">
          <LazyLoadImage
            src={`/images/dump-truck/cassavarent-dump-truck.webp`}
            className={`rounded-xl motion-preset-blur-up motion-duration-[2s] bg-white/90`}
          />
        </div>
        <div className="gap-y-8 w-full md:px-8 px-4">
          <div className="flex flex-col w-full text-secondary-foreground md:text-xl md:px-8 gap-y-4">
            <p className="font-semibold text-3xl">Dump Truck</p>
            <p>
              Dump truck digunakan untuk mengangkut material seperti kerikil,
              batu, pasir, tanah, dan hasil tambang, serta untuk proyek
              konstruksi, pertambangan, logistic dan lain sebagainya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
