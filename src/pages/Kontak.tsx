import KontakFeature from "@/components/Features/Kontak";
import { ChartNoAxesGantt } from "lucide-react";

export default function Kontak() {
  return (
    <section id="kontak" className="bg-white">
      <div className="mx-auto max-w-screen-xl items-center grid md:grid-cols-2 text-secondary py-24 gap-y-8">
        <div className="flex flex-col gap-y-8 px-4 md:px-8 md:gap-y-16 ">
          <h2 className="text-2xl md:text-4xl font-bold flex gap-x-4 items-center border-b border-t border-muted/20 py-4 px-5">
            <ChartNoAxesGantt className="stroke-primary" />
            <span>Kontak Kami</span>
          </h2>
        </div>
      </div>
      <KontakFeature />
    </section>
  );
}
