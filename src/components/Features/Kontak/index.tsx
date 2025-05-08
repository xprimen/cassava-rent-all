export default function KontakFeature() {
  return (
    <div
      id="kontak"
      className="relative grid grid-cols-1 md:grid-cols-2 gap-2 bg-white text-black pb-16"
    >
      <div className="flex flex-col gap-y-4 h-200">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3979.443207567641!2d104.179233!3d-4.132869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMDcnNTguMyJTIDEwNMKwMTAnNDUuMiJF!5e0!3m2!1sid!2sid!4v1746640146134!5m2!1sid!2sid"
          // width="600"
          // height="450"
          style={{ border: 0 }}
        />
        <h3 className="font-bold text-2xl mx-4">Kantor Jasa Alat Berat</h3>
        <p className="text-xl mx-4">
          Jl. Jenderal Ahmad Yani, Tj. Baru, Kec. Baturaja Timur, Kabupaten Ogan
          Komering Ulu, Sumatera Selatan
        </p>
      </div>
      <div className="flex flex-col gap-y-4 h-200">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3979.5055451886165!2d104.182193!3d-4.120428999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMDcnMTMuNSJTIDEwNMKwMTAnNTUuOSJF!5e0!3m2!1sid!2sid!4v1746640172689!5m2!1sid!2sid"
          // width="600"
          // height="450"
          style={{ border: 0 }}
          loading="lazy"
        />
        <h3 className="font-bold text-2xl mx-4">Kantor Jasa Towing</h3>
        <p className="text-xl mx-4">
          Jl. Professor Dokter Hamka No. 580B. Sukaraya, Kec. Baturaja Timur,
          Kabupaten Ogan Komering Ulu, Sumatera Selatan
        </p>
      </div>
    </div>
  );
}
