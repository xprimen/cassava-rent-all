"use client";
import { SidebarProvider } from "@/shadcn/sidebar";
import Footer from "./FooterSections";
import NavBar from "./HeaderSections/NavBar";
import { Outlet, useLoaderData } from "react-router-dom";

export default function PublicLayout() {
  const menus = useLoaderData();
  return (
    <SidebarProvider defaultOpen={false} className="flex-col">
      <NavBar menus={menus} />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </SidebarProvider>
  );
}
