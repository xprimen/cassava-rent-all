import { SkewDiv } from "@/components/SkewDiv";
import { ChartNoAxesGantt } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ServicesFeature() {
  return (
    <section id="service" className="relative py-20">
      <div className="mx-auto max-w-screen-xl text-secondary flex flex-col items-start gap-y-20">
        <div className="flex flex-col gap-y-8 px-4 md:px-8 md:gap-y-16 w-full md:w-1/2">
          <SkewDiv asChild variant="left" percentage={5}>
            <h2 className="text-2xl md:text-4xl text-secondary-foreground font-bold flex gap-x-4 items-center border-b border-t border-white/25 py-4 px-5">
              <ChartNoAxesGantt className="stroke-primary" />
              <span>Layanan</span>
            </h2>
          </SkewDiv>
        </div>

        <div className="flex flex-col w-full text-secondary-foreground md:px-8 gap-y-8 md:gap-y-0">
          <div className="grid md:grid-cols-2 w-full gap-x-8 gap-y-8">
            <LazyLoadImage
              src="/images/towing/cassavarent-towing (8).jpg"
              className="mask-cover mask-center mask-[url(/images/mask.png)]"
            />
            <div className="flex flex-col justify-center items-start px-4 leading-8 md:px-20 gap-y-8">
              <h3 className="text-3xl text-secondary-foreground font-bold">
                Towing
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                ea eligendi laudantium sapiente, nobis dolores, assumenda
                provident fugit tenetur in, a ullam possimus. Consequuntur
                molestias earum inventore, iure natus doloremque!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 w-full gap-x-8 gap-y-8">
            <div className="flex flex-col justify-center items-start px-4 leading-8 md:px-20 gap-y-8">
              <h3 className="text-3xl text-secondary-foreground font-bold">
                Alat Berat
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                ea eligendi laudantium sapiente, nobis dolores, assumenda
                provident fugit tenetur in, a ullam possimus. Consequuntur
                molestias earum inventore, iure natus doloremque!
              </p>
            </div>
            <LazyLoadImage
              src="/images/alat-berat/cassavarent-alat-berat (5).jpg"
              className="mask-cover mask-center mask-[url(/images/mask.png)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
