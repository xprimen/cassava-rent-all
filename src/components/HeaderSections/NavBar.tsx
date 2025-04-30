"use client";
// import { getPublicMenus } from "@/lib/actions/public_share";
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
import { ArrowLeftIcon, PhoneCall } from "lucide-react";
import React from "react";
import SidebarTriggerMenu from "./SidebarTriggerMenu";
import { yearSignature } from "@/lib/utils";
import { Link } from "react-router-dom";
import { SkewDiv } from "../SkewDiv";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function NavBar({ menus }: { menus: MenusType[] }) {
  const { toggleSidebar } = useSidebar();

  function navigationMenu(
    href: string | null | undefined,
    name: string,
    key: number
  ) {
    return (
      <a key={key} href={href || "#"} className="flex items-center p-4">
        <span className="text-xs font-semibold uppercase tracking-wide">
          {name}
        </span>
      </a>
    );
  }

  function navigationSidebar(
    href: string | null | undefined,
    name: string,
    key: number
  ) {
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

  function titleWeb(children?: React.ReactNode) {
    return (
      <div className="flex flex-row justify-between items-center w-full h-auto px-2">
        <Link to="/" className="flex items-center gap-2.5 h-auto">
          <SkewDiv variant="left" percentage={15}>
            <LazyLoadImage
              src="/images/logo.png"
              alt="cassava rent"
              className="web-logo"
            />
          </SkewDiv>
        </Link>
        <SidebarTriggerMenu className="md:hidden scale-120">
          {children}
        </SidebarTriggerMenu>
      </div>
    );
  }

  return (
    <header
      id="navbar"
      className="fixed left-0 top-0 z-10 flex transition-all duration-300 ease-in w-full"
    >
      <div className="container max-w-screen-2xl mx-auto flex items-center justify-between lg:px-10 md:py-8">
        <div className="flex items-center gap-2.5 w-full">{titleWeb()}</div>

        <div className="hidden md:flex items-center justify-between h-full">
          <SkewDiv variant="right" percentage={5} asChild>
            <nav className="flex flex-row items-center pl-6 text-accent bg-white/90">
              {menus &&
                menus.map((menu, index) =>
                  navigationMenu(menu.link, menu.name, index)
                )}
              <SkewDiv asChild variant="right" percentage={20}>
                <a
                  href="#kontak"
                  className="flex items-center bg-primary gap-x-2 py-4 px-8"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    Hubungi
                  </span>
                  <PhoneCall className="size-4" />
                </a>
              </SkewDiv>
            </nav>
          </SkewDiv>
        </div>

        <Sidebar variant="sidebar">
          <SidebarHeader className="py-6">
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex flex-row justify-between items-center w-full h-auto px-2">
                  <Link to="/" className="flex items-center  h-auto">
                    <SkewDiv variant="left" percentage={15}>
                      <LazyLoadImage
                        src="/images/logo.png"
                        alt="cassava rent"
                        className="bg-white/85 object-cover px-12"
                      />
                    </SkewDiv>
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
