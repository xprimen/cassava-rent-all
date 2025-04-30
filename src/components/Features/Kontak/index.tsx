import { ChartNoAxesGantt, PhoneCall, User } from "lucide-react";

const contactList = {
  thowing: [
    {
      name: "Riza",
      phone: "081223200023",
    },
    {
      name: "Cia",
      phone: "081230777300",
    },
    {
      name: "Zuki",
      phone: "081274234927",
    },
  ],
  berat: [
    {
      name: "Riza",
      phone: "081223200023",
    },
    {
      name: "Febri",
      phone: "082175222210",
    },
  ],
};

export default function Kontak() {
  return (
    <section id="kontak" className="relative min-h-svh">
      <iframe
        className="w-full h-150 md:-mt-[142px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295.7784878413029!2d104.1823747100805!3d-4.120513545558602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e39af48bb203e3d%3A0xbb309fd682125f94!2sMr.Klin%20Carwash!5e0!3m2!1sid!2sid!4v1746031938873!5m2!1sid!2sid"
        width="600"
        height="450"
        style={{
          border: 0,
        }}
        loading="lazy"
      />
      <div className="md:absolute w-full min-h-2/5 max-w-6xl md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-secondary-foreground flex flex-col md:flex-row justify-evenly items-start gap-y-20 gap-x-16 px-4 md:px-8 py-16 md:shadow-lg md:shadow-white/10 bg-gradient-to-br from-background/90 via-background/70 to-background">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl font-bold">Hubungi Tim Kami Segera</h3>
          <p className="italic text-secondary-foreground/70">
            Jangan Ragu untuk menghubungi Kami melalui kontak yang tertera.
            Apapun yang ingin anda tanyakan, kami siap melayani anda.
          </p>
        </div>
        <div className="flex flex-col gap-y-4 w-full">
          <h3 className="text-2xl font-bold flex items-center gap-x-2 ">
            <ChartNoAxesGantt className="stroke-primary" />
            <span>Towing</span>
          </h3>
          <div className="flex flex-col gap-y-4">
            {contactList.thowing.map((contact, index) => (
              <div
                className="flex flex-row gap-x-2 justify-between items-center border-white/60 last:border-b last:pb-4 pt-4 border-t px-2"
                key={index}
              >
                <div className="flex flex-row gap-x-2 items-center">
                  <User className="w-8 h-8 bg-muted rounded-full p-1" />
                  <div className="flex flex-col">
                    <span className="font-bold">{contact.name}</span>
                    <span className="text-secondary-foreground/50 text-xs">
                      {contact.phone}
                    </span>
                  </div>
                </div>
                <a href={`tel:${contact.phone}`}>
                  <PhoneCall className="w-6 h-6 text-secondary-foreground border-secondary-foreground border rounded-full p-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4 w-full">
          <h3 className="text-2xl font-bold flex items-center gap-x-2 ">
            <ChartNoAxesGantt className="stroke-primary" />
            <span>Alat Berat</span>
          </h3>
          <div className="flex flex-col gap-y-2">
            {contactList.berat.map((contact, index) => (
              <div
                className="flex flex-row gap-x-2 justify-between items-center border-white/60 last:border-b last:pb-4 pt-4 border-t px-2"
                key={index}
              >
                <div className="flex flex-row gap-x-2 items-center">
                  <User className="w-8 h-8 bg-muted rounded-full p-1" />
                  <div className="flex flex-col">
                    <span className="font-bold">{contact.name}</span>
                    <span className="text-secondary-foreground/50 text-xs">
                      {contact.phone}
                    </span>
                  </div>
                </div>
                <a href={`tel:${contact.phone}`}>
                  <PhoneCall className="w-6 h-6 text-secondary-foreground border-secondary-foreground border rounded-full p-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
