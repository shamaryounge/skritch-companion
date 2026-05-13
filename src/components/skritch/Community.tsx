import { Button } from "@/components/ui/button";
import { ShieldCheck, Eye, HandCoins, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import dashImg from "@/assets/shelter-dashboard.jpg";
import shelterImg from "@/assets/shelter-scene.jpg";

export function Community() {
  return (
    <section id="shelters" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-warm shadow-soft">
          <div className="grid grid-cols-1 gap-10 p-7 md:p-12 lg:grid-cols-12 lg:gap-14 lg:p-16">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-primary">
                  Community Scritches
                </p>
                <h2 className="mt-3 text-balance text-[30px] font-semibold leading-[1.1] tracking-tight md:text-[40px]">
                  Comfort that can support shelters too.
                </h2>
                <p className="mt-5 text-pretty text-[16px] leading-relaxed text-warm-foreground/85">
                  Skritch<sup className="text-[10px]">™</sup> is not only for homes. Shelters, rescues, clinics,
                  kennels, groomers, and pet hotels can use Skritch<sup className="text-[10px]">™</sup> to create safe,
                  supervised comfort sessions for dogs in their care.
                </p>
                <p className="mt-4 text-pretty text-[16px] leading-relaxed text-warm-foreground/85">
                  Remote supporters may be able to donate a small amount to connect with a shelter dog through a
                  controlled video-call session and trigger a safe Skritch<sup className="text-[10px]">™</sup>{" "}
                  interaction. The experience gives supporters a more personal way to help while creating a new revenue
                  stream for animal-care organizations.
                </p>
                <p className="mt-4 text-pretty text-[16px] leading-relaxed text-warm-foreground/85">
                  Revenue can be shared between the participating organization and the Skritch
                  <sup className="text-[10px]">™</sup> platform, helping shelters and rescues fund care while giving
                  dogs more moments of comfort, attention, and human connection.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-2.5">
                  {[
                    { icon: Eye, label: "Supervised sessions" },
                    { icon: ShieldCheck, label: "Safety status visible" },
                    { icon: HandCoins, label: "Org revenue share" },
                  ].map((b) => (
                    <span
                      key={b.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-[12.5px] font-medium text-foreground/80"
                    >
                      <b.icon className="h-3.5 w-3.5 text-primary" />
                      {b.label}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Button asChild size="lg" className="h-12 rounded-full px-6 text-[14.5px] shadow-soft">
                    <a href="#partners">
                      Explore Shelter Partnerships <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={120} className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card">
                  <img
                    src={dashImg}
                    alt="Skritch shelter dashboard with supervised session, donation amount, and organization revenue share"
                    loading="lazy"
                    width={1536}
                    height={1024}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5 hidden overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft md:block">
                  <img
                    src={shelterImg}
                    alt="Skritch device beside a calm dog in a clean modern shelter kennel"
                    loading="lazy"
                    width={1536}
                    height={1024}
                    className="h-44 w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
