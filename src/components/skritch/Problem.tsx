import { Camera, Bone, Hand } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Camera, title: "Pet cameras", body: "Pet cameras show you what is happening." },
  { icon: Bone, title: "Treat dispensers", body: "Treat dispensers reward behavior." },
  { icon: Hand, title: "Skritch™", body: "Skritch™ adds comforting touch.", featured: true },
];

export function Problem() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-primary">The missing layer</p>
          <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight md:text-[44px]">
            Pet cameras let you watch. Treat dispensers let you reward. But dogs still miss your touch.
          </h2>
          <p className="mt-5 text-pretty text-[16.5px] leading-relaxed text-muted-foreground">
            Most pet tech focuses on seeing your dog, feeding your dog, or tossing treats across the room. But for many
            dogs, comfort is physical. A scratch behind the ear, a gentle rub on the neck, or a familiar voice can help
            them feel connected when their owner is away.
          </p>
          <p className="mt-4 text-pretty text-[16.5px] leading-relaxed text-muted-foreground">
            Skritch<sup className="text-[10px]">™</sup> is built around that missing layer of pet care: safe, gentle,
            human-like touch.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
          {items.map(({ icon: Icon, title, body, featured }, i) => (
            <Reveal
              key={title}
              delay={i * 90}
              className={
                "group relative rounded-3xl border bg-card p-7 transition-all duration-300 " +
                (featured
                  ? "border-primary/30 ring-1 ring-primary/15 shadow-card md:-translate-y-3"
                  : "border-border/70 shadow-soft hover:-translate-y-1 hover:shadow-card")
              }
            >
              {featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.12em] text-primary-foreground">
                  Skritch
                </span>
              )}
              <span
                className={
                  "grid h-11 w-11 place-items-center rounded-2xl " +
                  (featured ? "bg-primary/10 text-primary" : "bg-secondary text-foreground/70")
                }
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-[18px] font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
