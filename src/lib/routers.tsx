import PublicLayout from "@/components/PublicLayout";
import Galeri from "@/pages/Galeri";
import Home from "@/pages/Home";
import Kontak from "@/pages/Kontak";
import NotFoundPage from "@/pages/NotFoundPage";
import Service from "@/pages/Service";
import DumpTruckPage from "@/pages/service-detail/DumpTruckPage";
import ExcavatorPage from "@/pages/service-detail/ExcavatorPage";
import SelfLoaderPage from "@/pages/service-detail/SelfLoaderPage";
import TowingPage from "@/pages/service-detail/TowingPage";
import Tentang from "@/pages/Tentang";
import { MenusType } from "@/types";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    Component: PublicLayout,
    loader: (): MenusType[] => [
      {
        id: "home",
        name: "Home",
        link: "/",
        order: 1,
      },
      {
        id: "tentang",
        name: "Tentang",
        // link: "/tentang",
        link: "/tentang",
        order: 2,
      },
      {
        id: "services",
        name: "Layanan",
        link: "/service",
        order: 3,
      },
      {
        id: "galeri",
        name: "Galeri",
        link: "/galeri",
        order: 4,
      },
      {
        id: "kontak",
        name: "Kontak",
        link: "/kontak",
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
        children: [
          {
            index: true,
            Component: Service,
          },
          {
            path: "/service/towing",
            Component: TowingPage,
          },
          {
            path: "/service/self-loader",
            Component: SelfLoaderPage,
          },
          {
            path: "/service/excavator",
            Component: ExcavatorPage,
          },
          {
            path: "/service/dump-truck",
            Component: DumpTruckPage,
          },
        ],
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
