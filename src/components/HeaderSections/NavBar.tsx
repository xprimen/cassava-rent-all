"use client";
import { yearSignature } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/shadcn/sidebar";
import { MenusType } from "@/types";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, NavLink, useLocation } from "react-router-dom";
import SidebarTriggerMenu from "./SidebarTriggerMenu";

export default function NavBar({ menus }: { menus: MenusType[] }) {
  const { toggleSidebar } = useSidebar();
  const location = useLocation();

  function navigationMenu(
    href: string | null | undefined,
    name: string,
    key: number
  ) {
    if (location.pathname === "/") {
      return (
        <a key={key} href={href || "#"} className="flex items-center p-4">
          <span className="text-xs text-foreground font-semibold uppercase tracking-wide">
            {name}
          </span>
        </a>
      );
    }
    return (
      <NavLink
        key={key}
        to={href || "#"}
        className={({ isActive, isPending }) => {
          const flag = isPending ? "pending" : isActive ? "active" : "";
          return `flex items-center p-4 ${flag}`;
        }}
      >
        <span>{name}</span>
      </NavLink>
    );
  }

  function navigationSidebar(
    href: string | null | undefined,
    name: string,
    key: number
  ) {
    if (location.pathname === "/") {
      return (
        <SidebarMenuItem key={key}>
          <SidebarMenuButton asChild>
            <a
              href={href || "#"}
              className="h-full w-full py-4"
              onClick={() => toggleSidebar()}
            >
              <span>{name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    }
    return (
      <SidebarMenuItem key={key}>
        <SidebarMenuButton asChild isActive={location.pathname === href}>
          <NavLink
            to={href || "#"}
            className="h-full w-full py-4"
            onClick={() => toggleSidebar()}
          >
            <span>{name}</span>
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  function titleWeb(children?: React.ReactNode) {
    return (
      <div className="flex flex-row justify-center md:justify-between items-center w-full h-auto px-2 relative">
        <Link to="/" className="flex items-center gap-2.5 h-auto">
          <LazyLoadImage
            src="/images/logo-dark.webp"
            alt="cassava rent"
            className="web-logo"
          />
        </Link>
        <SidebarTriggerMenu className="md:hidden scale-120 absolute top-0 right-4 translate-y-1/2">
          {children}
        </SidebarTriggerMenu>
      </div>
    );
  }

  return (
    <header id="navbar">
      <div className="container max-w-screen-2xl mx-auto flex items-center justify-between lg:px-10 md:py-4 intersect:motion-preset-slide-down">
        <div className="flex items-center gap-2.5 w-full">{titleWeb()}</div>

        <div className="hidden md:flex items-center justify-between h-full">
          <nav className="flex flex-row items-center pl-6 text-accent">
            {menus &&
              menus.map((menu, index) =>
                navigationMenu(menu.link, menu.name, index)
              )}
            {/* <SkewDiv asChild variant="right" percentage={20}>
                <a
                  href="#kontak"
                  className="flex items-center bg-primary gap-x-2 py-4 px-8"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    Hubungi
                  </span>
                  <PhoneCall className="size-4" />
                </a>
              </SkewDiv> */}
          </nav>
        </div>

        <Sidebar variant="sidebar" className="md:hidden">
          <SidebarHeader className="py-6">
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex flex-row justify-between items-center w-full h-auto px-2">
                  <Link to="/" className="flex items-center  h-auto">
                    <LazyLoadImage
                      src="/images/logo-dark.webp"
                      alt="cassava rent"
                      className="object-cover px-12"
                    />
                  </Link>
                  <SidebarTriggerMenu className="md:hidden scale-120">
                    <ArrowLeftIcon />
                  </SidebarTriggerMenu>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menus.map((menu, index) =>
                    navigationSidebar(menu.link, menu.name, index)
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="flex flex-row justify-between items-center w-full px-4">
            <p className="text-sm">
              &copy; {yearSignature()} Cassava Rent. All Rights Reserved
            </p>
          </SidebarFooter>
        </Sidebar>
      </div>
    </header>
  );
}
