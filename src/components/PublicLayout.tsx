"use client";
import { SidebarProvider } from "@/shadcn/sidebar";
import { MenusType } from "@/types";
import { useCallback, useEffect } from "react";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { Observer } from "tailwindcss-intersect";
import CTAShortcut from "./Features/CTAShortcut";
import ToTopButton from "./Features/ToTopButton";
import Footer from "./FooterSections";
import NavBar from "./HeaderSections/NavBar";

export default function PublicLayout() {
  const getMenus = useLoaderData();
  const location = useLocation();

  const menus = useCallback((loc: string, data: MenusType[]) => {
    return data.map((menu: MenusType) => {
      if (loc === "/") {
        return { ...menu, link: menu.link.replace("/", "#") };
      }
      return menu;
    });
  }, []);

  useEffect(() => {
    Observer.start();
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    menus(location.pathname, getMenus);
  }, [getMenus, location.pathname, menus]);

  return (
    <SidebarProvider defaultOpen={false} className="flex-col">
      <NavBar menus={menus(location.pathname, getMenus)} />
      <div className="overflow-x-hidden">
        <ToTopButton />
        <CTAShortcut />
        <Outlet />
      </div>
      <Footer menus={menus(location.pathname, getMenus)} />
    </SidebarProvider>
  );
}
