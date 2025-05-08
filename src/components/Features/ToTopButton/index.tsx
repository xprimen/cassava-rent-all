import { cn } from "@/lib/utils";
import { Button } from "@/shadcn/button";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const distanceToTop = 300;
export default function ToTopButton() {
  const [toTopShow, setToTopShow] = useState(false);

  function scrollFunction() {
    if (
      document.body.scrollTop > distanceToTop ||
      document.documentElement.scrollTop > distanceToTop
    ) {
      setToTopShow(true);
    } else {
      setToTopShow(false);
    }
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  return (
    <Button
      className={cn(
        "bg-primary fixed bottom-5 right-2 md:right-5 z-50 cursor-pointer hidden",
        toTopShow && "motion-preset-slide-up-left-lg block"
      )}
      onClick={() => window.scrollTo(0, 0)}
    >
      <ChevronUp className="stroke-background" />
    </Button>
  );
}
