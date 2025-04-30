"use client";
import { FC } from "react";
import NavBar from "./NavBar";
import { MenusType } from "@/types";

interface HeaderSectionsProps extends FC {
  menus: MenusType[];
}

export default function HeaderSections({ menus }: HeaderSectionsProps) {
  return (
    <div className="header-sections">
      <NavBar menus={menus} />
    </div>
  );
}
