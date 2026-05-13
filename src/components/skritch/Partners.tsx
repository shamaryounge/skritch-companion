import { Heart, ShieldPlus, Scissors, Cpu, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const cards = [
  { icon: Heart, title: "Pet Owners", body: "Join the waitlist and help shape the first Skritch™ home experience." },
  { icon: ShieldPlus, title: "Shelters and Clinics", body: "Explore supervised comfort sessions, donor-supported interactions, and shelter deployment." },
  { icon: Scissors, title: "Groomers, Kennels, and Pet Hotels", body: "Offer premium comfort sessions as part of boarding, grooming, or extended-care services." },
  { icon: Cpu, title: "Hardware Vendors", body: "Partner on motors, sensors, soft-touch materials, washable skins, and modular attachments." },
  { icon: TrendingUp, title: "Investors", body: "Support the development of a new category in pet comfort robotics." },
];

export function Partners() {
  return (
    <section id="partners" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-primary">Partners & investors</p>
          <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight md:text-[44px]">
            Help build the future of pet comfort robotics.
          </h2>
          <p className="mt-5 text-pretty text-[16.5px] leading-relaxed text-muted-foreground">
            Skritch<sup className="text-[10px]">™</sup> is being developed for pet owners, shelters, clinics, groomers,
            kennels, pet hotels, hardware vendors, and investors who believe pet care should be more connected, more
            comforting, and more human.
          </p>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed text-muted-foreground">
            We are looking to connect with early pet owners, animal-care organizations, manufacturing partners, robotics
            vendors, app-development partners, and investors interested in the future of companion-animal technology.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 80}
              className="group rounded-3xl border border-border/70 bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{c.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button asChild size="lg" className="h-12 rounded-full px-7 text-[14.5px] shadow-soft">
            <a href="#waitlist">
              Start a Conversation <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
