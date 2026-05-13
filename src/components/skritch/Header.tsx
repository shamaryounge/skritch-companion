import { useEffect, useState } from "react";
import { Menu, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "How It Works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Shelters", href: "#shelters" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Partners", href: "#partners" },
  { label: "Waitlist", href: "#waitlist" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "glass-nav fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border/60" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:h-[68px] md:px-8">
        {/* Logo placeholder */}
        <a href="#top" className="flex items-center gap-2.5" aria-label="Skritch home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-inset ring-border">
            <PawPrint className="h-4.5 w-4.5 text-primary" strokeWidth={2.2} />
          </span>
          <span className="text-[17px] font-semibold tracking-tight">
            Skritch<sup className="ml-0.5 text-[9px] text-muted-foreground">™</sup>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[13.5px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="h-9 rounded-full px-4 text-[13px] font-medium shadow-soft">
            <a href="#waitlist">Join the Waitlist</a>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88%] max-w-sm p-6">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="mt-6 flex flex-col gap-1">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:bg-secondary"
                  >
                    {n.label}
                  </a>
                ))}
                <Button asChild className="mt-4 h-11 rounded-full">
                  <a href="#waitlist">Join the Waitlist</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
