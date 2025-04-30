import { cn } from "@/lib/utils";
import { Button } from "@/shadcn/button";
import { useSidebar } from "@/shadcn/sidebar";
import { MenuIcon } from "lucide-react";

export default function SidebarTriggerMenu({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      {props.children || <MenuIcon />}
    </Button>
  );
}
