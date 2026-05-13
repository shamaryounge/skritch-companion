import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import type { ReactNode, CSSProperties } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useReveal<HTMLDivElement>();
  const style: CSSProperties = delay ? { animationDelay: `${delay}ms` } : {};
  return (
    <Tag ref={ref as never} style={style} className={cn("reveal-init", className)}>
      {children}
    </Tag>
  );
}
