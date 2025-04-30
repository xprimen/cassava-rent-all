import { SkewDiv } from "@/components/SkewDiv";
import { ArrowRight, ChartNoAxesGantt } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AboutUs() {
  return (
    <section
      id="tentang"
      className="-mt-8 z-[2] triangle-top-right triangle-bottom-left bg-white"
    >
      <div className="mx-auto max-w-screen-xl items-center grid md:grid-cols-2 text-secondary">
        <div className="flex flex-col gap-y-8 px-4 md:px-8 md:gap-y-16">
          <SkewDiv asChild variant="left" percentage={5}>
            <h2 className="text-2xl md:text-4xl font-bold flex gap-x-4 items-center border-b border-t border-muted/20 py-4 px-5">
              <ChartNoAxesGantt className="stroke-primary" />
              <span>Tentang Cassava Rent</span>
            </h2>
          </SkewDiv>
          <div className="leading-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              odio culpa aliquid porro ducimus. Minus, sit dignissimos fugit
              cupiditate voluptates facere tempora? Qui ratione, rem et nemo
              debitis repudiandae velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              odio culpa aliquid porro ducimus. Minus, sit dignissimos fugit
              cupiditate voluptates facere tempora? Qui ratione, rem et nemo
              debitis repudiandae velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              odio culpa aliquid porro ducimus. Minus, sit dignissimos fugit
              cupiditate voluptates facere tempora? Qui ratione, rem et nemo
              debitis repudiandae velit?
            </p>
          </div>
          <SkewDiv asChild percentage={10} variant="left">
            <a
              href="#kontak"
              className="text-secondary font-bold bg-gradient-to-r from-primary/80 to-yellow-200 hover:bg-gradient-to-l px-10 py-4 flex items-center justify-center gap-4 group w-1/2"
            >
              Hubungi
              <ArrowRight className="size-5 group-hover:rotate-45 rotate-0 transition-transform duration-150 ease-in" />
            </a>
          </SkewDiv>
        </div>
        <SkewDiv
          variant="top-right"
          // percentage={25}
          className="md:w-3/5 mx-auto"
        >
          <LazyLoadImage
            src="/images/cover.jpg"
            className="w-full h-full object-cover"
          />
        </SkewDiv>
      </div>
    </section>
  );
}
