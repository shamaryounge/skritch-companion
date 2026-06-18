import { Button } from "@/components/ui/button";
import { Hand, ShieldCheck, Wifi } from "lucide-react";
import heroImg from "@/assets/hero-skritch-home.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32 lg:pt-36">
      {/* Soft gradient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[120%] bg-[linear-gradient(180deg,oklch(0.99_0.005_240)_0%,oklch(0.985_0.01_240)_60%,oklch(0.97_0.012_80)_100%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-20 md:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        {/* Copy */}
        <div className="lg:col-span-6">
          <div className="reveal-init reveal-in inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-[11.5px] font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Now accepting waitlist
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground/60">
            All images are AI generated depictions. Product is in early development.
          </p>
          <h1 className="mt-5 text-balance text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[56px] lg:text-[64px]">
            Give your dog real scratches, even when you're not home.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-muted-foreground md:text-[18px]">
            Skritch<sup className="text-[10px]">™</sup> is a robotic pet comfort system that uses a soft human-like hand,
            smart safety sensors, and app-connected video calling to give dogs gentle scratches on demand.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-6 text-[14.5px] shadow-soft">
              <a href="#waitlist">Join the Waitlist</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border/80 bg-background/60 px-6 text-[14.5px] backdrop-blur hover:bg-background"
            >
              <a href="#partners">Partner With Us</a>
            </Button>
          </div>
          <p className="mt-5 text-[13px] text-muted-foreground">
            Designed for comfort, safety, and supervised pet interaction.
          </p>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[640px]">
            <div aria-hidden className="hero-glow absolute -inset-10 -z-10 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl bg-card ring-1 ring-border/70 shadow-float">
              <img
                src={heroImg}
                alt="Skritch device with a calm dog in a bright modern home"
                width={1536}
                height={1152}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating chips */}
            <FloatingChip
              className="left-[-12px] top-10 md:left-[-28px]"
              icon={<Hand className="h-4 w-4 text-primary" />}
              label="Soft robotic hand"
              delay="0s"
            />
            <FloatingChip
              className="bottom-16 left-[-6px] md:left-[-22px]"
              icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />}
              label="Safety pad active"
              delay="1.2s"
            />
            <FloatingChip
              className="right-[-10px] top-24 md:right-[-26px]"
              icon={<Wifi className="h-4 w-4 text-primary" />}
              label="App connected"
              delay="2.2s"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({
  className,
  icon,
  label,
  delay,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
  delay?: string;
}) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`absolute hidden items-center gap-2 rounded-full border border-border/70 bg-card/90 px-3.5 py-2 text-[12.5px] font-medium text-foreground shadow-card backdrop-blur sm:inline-flex animate-soft-float ${className ?? ""}`}
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-secondary">{icon}</span>
      {label}
    </div>
  );
}
