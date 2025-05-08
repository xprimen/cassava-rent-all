import { ChartNoAxesGantt } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Excavator() {
  return (
    <section id="service" className="relative py-20">
      <div className="mx-auto max-w-screen-xl text-secondary flex flex-col items-start gap-y-20">
        <div className="flex flex-col gap-y-8 px-4 md:px-8 md:gap-y-16 w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl text-secondary-foreground font-bold flex gap-x-4 items-center border-b border-t border-white/25 py-4 px-5 intersect:motion-preset-slide-down motion-duration-[1s]">
            <ChartNoAxesGantt className="stroke-primary" />
            <span>Excavator</span>
          </h2>
        </div>

        <div className="gap-y-8 grid grid-cols- w-full md:px-8 px-4">
          <div className="flex flex-col w-full text-secondary-foreground md:text-xl md:px-8 gap-y-4">
            <p className="font-semibold">
              EXCAVATOR adalah alat berat yang digunakan untuk menggali,
              mengangkat, dan memindahkan material, seperti tanah, pasir, atau
              batu. Alat ini sering digunakan dalam proyek konstruksi,
              pertambangan, Perkebunan, Pertanian, Pembukaan Lahan Baru / Hutan
              dan industri terkait. Keunggulan Excavator
            </p>
            <ul className="list-decimal pl-4 leading-8">
              <li>
                Kapasitas Penggalian yang Besar : Excavator dapat menggali
                volume tanah yang besar dengan cepat dan efisien. Ini sangat
                berguna untuk proyek-proyek besar seperti pembuatan jalan,
                pembangunan gedung, Pembukaan Lahan dan penambangan
              </li>
              <li>
                Fleksibilitas: Excavator dapat digunakan dalam berbagai jenis
                pekerjaan, mulai dari penggalian hingga penanganan material,
                pembongkaran, dan bahkan menancapkan pondasi
              </li>
              <li>
                Kecepatan dan Efisiensi: Excavator dapat menyelesaikan pekerjaan
                dengan cepat dan efisien, sehingga menghemat waktu dan biaya
                proyek
              </li>
              <li>
                Produktivitas Tinggi: Penggunaan excavator dapat meningkatkan
                produktivitas proyek secara signifikan, karena dapat
                menggantikan pekerjaan manual yang memakan waktu dan tenaga
              </li>
              <li>
                Operator Berpengalaman dan lengkap dengan Surat Izin Operator
                (SIO)
              </li>
              <li>
                Alat Profit dan Unit Tahun Muda dengan Hours Mesin (HM) Rendah.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:px-8 gap-4 grid grid-cols-1 md:grid-cols-2">
          <LazyLoadImage
            src={`/images/excavator/cassavarent-excavator (2).webp`}
            className={`rounded-xl motion-preset-blur-up motion-duration-[2s] bg-white/90 w-full`}
          />
          <div className="flex flex-col w-full text-secondary-foreground md:text-xl md:px-8 gap-y-4">
            <p className="font-semibold">CATERPILLAR CAT 305.5E2 ( PC 60 )</p>
            <span>Spesifikasi :</span>
            <ul className="list-decimal pl-4 leading-8">
              <li>Bobot Kerja 6 Ton </li>
              <li>Panjang Jangkauan Gali 4 Meter </li>
              <li>Volume Bucket 0,22m3 – 0,5m3 </li>
              <li>Lebar Blade 2000mm</li>
              <li>Panjang Track 2500mm </li>
              <li>Lebar track 2000mm</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:px-8 gap-4 grid grid-cols-1 md:grid-cols-2">
          <LazyLoadImage
            src={`/images/excavator/cassavarent-excavator (1).webp`}
            className={`rounded-xl motion-preset-blur-up motion-duration-[2s] bg-white/90 w-full`}
          />
          <div className="flex flex-col w-full text-secondary-foreground md:text-xl md:px-8 gap-y-4">
            <p className="font-semibold">CATERPILLAR CAT 307 ( KELAS PC 75 )</p>
            <span>Spesifikasi :</span>
            <ul className="list-decimal pl-4 leading-8">
              <li>Bobot Kerja 7,5 Ton </li>
              <li>Panjang Jangkauan Gali 6 Meter </li>
              <li>Volume Bucket 0,33 - 0,7m3 </li>
              <li>Lebar Blade 2300mm</li>
              <li>Panjang Track 2760mm </li>
              <li>Lebar track 2630mm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
