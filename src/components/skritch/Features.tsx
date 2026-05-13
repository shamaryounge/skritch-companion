import {
  Hand, ShieldCheck, Smartphone, Mic2, Sparkles, Palette, Puzzle, Gem,
} from "lucide-react";
import { Reveal } from "./Reveal";
import handImg from "@/assets/robotic-hand-closeup.jpg";
import appImg from "@/assets/app-mockup.jpg";
import padImg from "@/assets/safety-pad.jpg";

const features = [
  { icon: Hand, title: "Human-like robotic scratching", body: "Soft, familiar scratching motions designed to feel closer to a real hand than a vibrating toy." },
  { icon: ShieldCheck, title: "Pressure pad safety lockout", body: "Sessions only activate when the dog is properly positioned on the safety pad." },
  { icon: Smartphone, title: "App activation and deactivation", body: "Start, pause, stop, or monitor sessions directly from the Skritch™ app." },
  { icon: Mic2, title: "Voice praise playback", body: "Let your dog hear familiar encouragement, calming phrases, or custom audio from their owner." },
  { icon: Sparkles, title: "Removable washable hand skins", body: "Swap and wash soft hand coverings to keep the device clean and comfortable." },
  { icon: Palette, title: "Color and seasonal customization", body: "Customize the base, pad, mast, and arm with premium colorways, wood grain finishes, and seasonal styles." },
  { icon: Puzzle, title: "Modular attachments", body: "Future attachment options may support different comfort styles, coat types, and interaction modes." },
  { icon: Gem, title: "Future premium variants", body: "Premium Skritch™ models may include enhanced motion, upgraded materials, improved camera systems, and advanced app features." },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-primary">The system</p>
          <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight md:text-[44px]">
            Built for comfort. Engineered for safety.
          </h2>
        </Reveal>

        {/* Showcase row */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {[
            { src: handImg, alt: "Soft robotic hand attachment close-up", w: 1280, h: 1280, label: "Soft-touch hand" },
            { src: appImg, alt: "Skritch app mockup with Start Scritch button", w: 1024, h: 1536, label: "Connected app", tall: true },
            { src: padImg, alt: "Pressure-sensitive safety pad close-up", w: 1280, h: 960, label: "Safety pad" },
          ].map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 100}
              className={
                "group relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft transition-all hover:shadow-card " +
                (m.tall ? "md:row-span-2" : "")
              }
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={m.src}
                  alt={m.alt}
                  loading="lazy"
                  width={m.w}
                  height={m.h}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between p-5">
                <span className="text-[13px] font-medium text-muted-foreground">{m.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* 8-card grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 60}
              className="group relative h-full rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-foreground/70 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                <f.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-[15.5px] font-semibold leading-snug tracking-tight">{f.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
