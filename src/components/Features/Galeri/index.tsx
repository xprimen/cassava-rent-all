import { SkewDiv } from "@/components/SkewDiv";
import { ChartNoAxesGantt } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function GaleriFeature() {
  return (
    <section
      id="galeri"
      className="z-[2] triangle-top-left triangle-bottom-right bg-white"
    >
      <div className="mx-auto max-w-screen-xl items-center text-secondary gap-y-20 flex flex-col px-4">
        <div className="flex w-full flex-col items-center gap-y-16">
          <SkewDiv asChild variant="left" percentage={5}>
            <h2 className="text-2xl md:text-4xl font-bold flex gap-x-4 items-center md:justify-center border-b border-t border-muted/20 py-4 px-5 w-full md:w-1/2">
              <ChartNoAxesGantt className="stroke-primary" />
              <span>Galeri</span>
            </h2>
          </SkewDiv>
        </div>
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-2 md:columns-3 [&>img:not(:first-child)]:mt-8">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
            <div className="" key={i}>
              <LazyLoadImage
                className="h-auto py-2 max-w-full"
                src={`/images/towing/cassavarent-towing (${i}).jpg`}
                alt={`cassava-rent-${i}`}
              />
            </div>
          ))}
          {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
            <div className="" key={i}>
              <LazyLoadImage
                className="h-auto max-w-full py-2"
                src={`/images/alat-berat/cassavarent-alat-berat (${i}).jpg`}
                alt={`cassava-rent-${i}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
