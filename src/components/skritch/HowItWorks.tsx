import { Footprints, ScanFace, Hand, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    icon: Footprints,
    title: "Dog steps onto the safety pad.",
    body: "The pressure-sensitive pad confirms that your dog is safely positioned before a session can begin.",
  },
  {
    n: "02",
    icon: ScanFace,
    title: "Camera tracks head and body position.",
    body: "The onboard camera helps Skritch™ understand where your dog is positioned during the interaction.",
  },
  {
    n: "03",
    icon: Hand,
    title: "The soft robotic hand gives gentle scratches.",
    body: "A removable soft-touch hand attachment delivers controlled, human-like scratching motions.",
  },
  {
    n: "04",
    icon: Smartphone,
    title: "The owner connects through the app.",
    body: "Owners can send voice praise, start or stop a session, or join a video-call scritch for a more personal moment.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="warm-gradient py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-primary">How It Works</p>
          <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight md:text-[44px]">
            Comfort in 4 simple steps.
          </h2>
        </Reveal>

        <div className="relative mt-16 md:mt-20">
          {/* Connecting line desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 100}
                as="li"
                className="group relative rounded-3xl border border-border/70 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-border/80 bg-background text-[12px] font-semibold tracking-wider text-foreground/70 shadow-sm">
                    {s.n}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="mt-5 text-[16px] font-semibold leading-snug tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
