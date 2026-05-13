import { Reveal } from "./Reveal";
import launchImg from "@/assets/roadmap-launch.jpg";
import wallImg from "@/assets/roadmap-wall.jpg";
import bedImg from "@/assets/roadmap-bed.jpg";
import mobileImg from "@/assets/roadmap-mobile.jpg";

const cols = [
  {
    tag: "Stage 01",
    title: "Launch Model",
    body: "The first Skritch™ model is designed for safe home use with a safety pad, soft robotic scratching hand, camera-assisted positioning, app controls, voice praise, and washable hand skins.",
    img: launchImg,
    alt: "Launch Skritch model render",
  },
  {
    tag: "Stage 02",
    title: "Premium Model",
    body: "Future premium versions may include improved materials, quieter motors, advanced motion profiles, higher-resolution video, enhanced customization, and deeper app-connected features.",
    img: wallImg,
    alt: "Wall-mounted Skritch render",
  },
  {
    tag: "Stage 03",
    title: "Future Variants",
    body: "Skritch™ may expand into wall-mounted fold-flat models, bed-integrated comfort systems, mobile robot versions, and shelter-focused deployment units for animal-care organizations.",
    img: bedImg,
    alt: "Bed-integrated Skritch render",
  },
];

const variants = [
  { img: launchImg, label: "Launch model" },
  { img: wallImg, label: "Wall-mounted" },
  { img: bedImg, label: "Bed-integrated" },
  { img: mobileImg, label: "Mobile robot" },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="warm-gradient py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-primary">Roadmap</p>
          <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight md:text-[44px]">
            A platform for robotic pet comfort.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[178px] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {cols.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 110}
                className="group rounded-3xl border border-border/70 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="overflow-hidden rounded-2xl bg-secondary">
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-44 w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <span className="grid h-3 w-3 place-items-center rounded-full bg-primary ring-4 ring-primary/15" />
                  <span className="text-[11.5px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {c.tag}
                  </span>
                </div>
                <h3 className="mt-3 text-[20px] font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="mt-14">
          <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft md:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold tracking-tight">Variant explorations</h3>
              <span className="text-[12px] text-muted-foreground">Launch → Premium → Future</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
              {variants.map((v) => (
                <div
                  key={v.label}
                  className="group rounded-2xl border border-border/70 bg-secondary/50 p-4 transition-colors hover:bg-secondary"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={v.img}
                      alt={`${v.label} render`}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="h-32 w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-center text-[12.5px] font-medium text-foreground/80">{v.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
