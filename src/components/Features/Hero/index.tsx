import { SkewDiv } from "@/components/SkewDiv";
import useObservingElement from "@/hooks/useObservingElement";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Hero() {
  const { ref, targetTouched } = useObservingElement();

  const transparentNavbar = (touched: boolean, target: Element | null) => {
    if (touched) {
      target?.classList.add("transparent");
    } else {
      target?.classList.remove("transparent");
    }
  };

  useEffect(() => {
    const navbar = document.querySelector("#navbar");
    transparentNavbar(targetTouched, navbar);
  }, [targetTouched]);

  useEffect(() => {
    const navbar = document.querySelector("#navbar");
    if (ref.current) {
      const rect = (ref.current as HTMLElement).getBoundingClientRect();
      if (rect.top === 0) navbar?.classList.add("transparent");
    }
    return () => {
      navbar?.classList.remove("transparent");
    };
  }, [ref]);

  return (
    <section id="hero" ref={ref}>
      <div className="relative mx-auto max-w-screen-2xl items-start md:gap-x-2 flex flex-col md:flex-row md:h-screen">
        <div className="flex-1 h-full flex flex-col justify-center py-16 px-4 lg:items-start">
          <h1 className="my-6 text-4xl md:text-5xl font-bold lg:text-6xl tracking-wide">
            Jasa Towing & Alat Berat di Baturaja
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            Solusi terbaik bagi anda yang membutuhkan transportasi untuk
            membantu pemindahan jadi lebih mudah. Jasa towing perusahaan kami
            dapat melakukan pengiriman dan juga Sewa Alat Berat.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <SkewDiv asChild percentage={10} variant="left">
              <a
                href="#tentang"
                className="text-secondary font-bold bg-gradient-to-r from-primary/80 to-yellow-200 hover:bg-gradient-to-l px-10 py-4 flex items-center justify-center gap-4 group tracking-wide"
              >
                Tentang Cassava Rent
                <ArrowRight className="size-5 group-hover:rotate-90 rotate-0 transition-transform duration-150 ease-in" />
              </a>
            </SkewDiv>
          </div>
        </div>
        <LazyLoadImage
          src="/images/towing-tanah.png"
          alt="Cassava Rents"
          className="h-full object-cover object-left md:w-1/2 lg:w-3/5"
        />
      </div>
    </section>
  );
}
