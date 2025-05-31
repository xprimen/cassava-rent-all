import DumpTruck from "@/components/Features/Services/DumpTruck";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DumpTruckPage() {
  const location = useLocation();
  const { pathname, search } = location;

  useEffect(() => {
    // Set meta tag canonical
    const canonicalUrl = window.location.origin + pathname + search; // Menggunakan window.location untuk mendapatkan URL lengkap
    const meta = document.createElement("meta");
    meta.name = "canonical";
    meta.content = canonicalUrl;

    const head = document.querySelector("head");
    if (head) {
      head.appendChild(meta);
    }

    // Bersihkan meta tag saat komponen unmount
    return () => {
      if (head) {
        head.removeChild(meta);
      }
    };
  }, [pathname, search]);
  return <DumpTruck />;
}
