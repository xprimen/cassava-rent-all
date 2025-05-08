import { ChartNoAxesGantt } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function GaleriFeature() {
  return (
    <section id="galeri" className="bg-white py-24">
      <div className="mx-auto max-w-screen-xl items-center text-secondary gap-y-20 flex flex-col px-4">
        <div className="flex w-full flex-col items-center gap-y-16">
          <h2 className="text-2xl md:text-4xl font-bold flex gap-x-4 items-center md:justify-center border-b border-t border-muted/20 py-4 px-5 w-full md:w-1/2">
            <ChartNoAxesGantt className="stroke-primary" />
            <span>Galeri</span>
          </h2>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 sm:gap-2 md:columns-3 [&>img:not(:first-child)]:mt-8">
          {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
            <div key={i}>
              <LazyLoadImage
                className="h-auto py-2 max-w-full rounded-2xl"
                src={`/images/towing/cassavarent-towing (${i}).webp`}
                alt={`cassava-rent-towing-${i}`}
              />
            </div>
          ))}
          {Array.from({ length: 3 }, (_, i) => i + 1).map((i) => (
            <div key={i}>
              <LazyLoadImage
                className="h-auto max-w-full py-2 rounded-2xl"
                src={`/images/self-loader/cassavarent-self-loader (${i}).webp`}
                alt={`cassava-rent-self-loader-${i}`}
              />
            </div>
          ))}
          <div>
            <LazyLoadImage
              className="h-auto max-w-full py-2 rounded-2xl"
              src={`/images/cover.webp`}
              alt={`cassava-rent-dump-truck`}
            />
          </div>
          {Array.from({ length: 2 }, (_, i) => i + 1).map((i) => (
            <div key={i}>
              <LazyLoadImage
                className="h-auto max-w-full py-2 rounded-2xl"
                src={`/images/excavator/cassavarent-excavator (${i}).webp`}
                alt={`cassava-rent-excavator-${i}`}
              />
            </div>
          ))}
          <div>
            <LazyLoadImage
              className="h-auto max-w-full py-2 rounded-2xl"
              src={`/images/dump-truck/cassavarent-dump-truck.webp`}
              alt={`cassava-rent-dump-truck`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
