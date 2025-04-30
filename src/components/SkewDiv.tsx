import { Slot } from "@radix-ui/react-slot";
import React from "react";

interface SkewDivProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  percentage?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  variant: "right" | "left" | "top-right" | "top-left";
  // Add any other props you need
}

type Point = {
  x: number;
  y: number;
};

type Poligon = {
  tl: Point; // Top-left point
  tr: Point; // Top-right point
  br: Point; // Bottom-right point
  bl: Point; // Bottom-left point
};

type Poligons = {
  [variant: string]: Poligon;
};

const poligons: Poligons = {
  //   right: "polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)",
  right: {
    tl: { x: 30, y: 0 },
    tr: { x: 100, y: 0 },
    br: { x: 70, y: 100 },
    bl: { x: 0, y: 100 },
  },
  //   left: "polygon(0% 0%, 70% 0%, 100% 100%, 30% 100%)",
  left: {
    tl: { x: 0, y: 0 },
    tr: { x: 70, y: 0 },
    br: { x: 100, y: 100 },
    bl: { x: 30, y: 100 },
  },
  //   "top-right": "polygon(0% 15%, 100% 0%, 100% 85%, 0% 100%)",
  "top-right": {
    tl: { x: 0, y: 15 },
    tr: { x: 100, y: 0 },
    br: { x: 100, y: 85 },
    bl: { x: 0, y: 100 },
  },
  //   "top-left": "polygon(0% 0%, 100% 15%, 100% 100%, 0% 85%)",
  "top-left": {
    tl: { x: 0, y: 0 },
    tr: { x: 100, y: 15 },
    br: { x: 100, y: 100 },
    bl: { x: 0, y: 85 },
  },
};

const percentagePoligon = (
  pol: Poligons,
  vrt: SkewDivProps["variant"],
  percentage: number
) => {
  switch (vrt) {
    case "right":
      pol[vrt] = {
        ...pol[vrt],
        tl: { ...pol[vrt].tl, x: percentage },
        br: { ...pol[vrt].br, x: 100 - percentage },
      };
      break;

    case "left":
      pol[vrt] = {
        ...pol[vrt],
        tr: { ...pol[vrt].tr, x: 100 - percentage },
        bl: { ...pol[vrt].bl, x: percentage },
      };
      break;
    case "top-right":
      pol[vrt] = {
        ...pol[vrt],
        tl: { ...pol[vrt].tl, y: percentage },
        br: { ...pol[vrt].br, y: 100 - percentage },
      };
      break;
    case "top-left":
      pol[vrt] = {
        ...pol[vrt],
        tr: { ...pol[vrt].tr, y: 100 - percentage },
        bl: { ...pol[vrt].bl, y: percentage },
      };
      break;

    default:
      break;
  }

  return `polygon(${poligons[vrt].tl.x}% ${poligons[vrt].tl.y}%, ${poligons[vrt].tr.x}% ${poligons[vrt].tr.y}%, ${poligons[vrt].br.x}% ${poligons[vrt].br.y}%, ${poligons[vrt].bl.x}% ${poligons[vrt].bl.y}%)`;
};

const SkewDiv = React.forwardRef<HTMLDivElement, SkewDivProps>(
  (
    { asChild = false, percentage = 15, children, variant, style, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        style={{
          clipPath: percentagePoligon(poligons, variant, percentage),
          ...style,
        }}
        {...props}
        ref={ref}
      >
        {children}
      </Comp>
    );
  }
);

SkewDiv.displayName = "SkewDiv";

export { SkewDiv };
