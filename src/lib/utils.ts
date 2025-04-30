import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const yearSignature = () => {
  const yearNow = new Date().getFullYear();
  return "2025" + (yearNow > 2025 ? "-" + yearNow : "");
};
