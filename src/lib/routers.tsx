import PublicLayout from "@/components/PublicLayout";
import Galeri from "@/pages/Galeri";
import Home from "@/pages/Home";
import Kontak from "@/pages/Kontak";
import NotFoundPage from "@/pages/NotFoundPage";
import Service from "@/pages/Service";
import Tentang from "@/pages/Tentang";
import { MenusType } from "@/types";
import { createBrowserRouter } from "react-router-dom";
// import { getPublicMenus } from "./actions/public_share";

export const router = createBrowserRouter([
  {
    Component: PublicLayout,
    loader: (): MenusType[] => [
      {
        id: "home",
        name: "Home",
        link: "#",
        order: 1,
      },
      {
        id: "tentang",
        name: "Tentang",
        // link: "/tentang",
        link: "#tentang",
        order: 2,
      },
      {
        id: "services",
        name: "Layanan",
        link: "#service",
        order: 3,
      },
      {
        id: "galeri",
        name: "Galeri",
        link: "#galeri",
        order: 4,
      },
      {
        id: "kontak",
        name: "Kontak",
        link: "#kontak",
        order: 5,
      },
    ],
    path: "/",
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/tentang",
        Component: Tentang,
      },
      {
        path: "/service",
        Component: Service,
      },
      {
        path: "/galeri",
        Component: Galeri,
      },
      {
        path: "/kontak",
        Component: Kontak,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
