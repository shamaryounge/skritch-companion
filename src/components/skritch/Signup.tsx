import { useState } from "react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

type Card = {
  id: string;
  title: string;
  body: string;
  fields: { name: string; label: string; type?: string; textarea?: boolean }[];
  cta: string;
};

const cards: Card[] = [
  {
    id: "owner",
    title: "Pet Owner Waitlist",
    body: "For dog owners who want early access, product updates, and launch availability.",
    fields: [
      { name: "name", label: "Name" },
      { name: "email", label: "Email", type: "email" },
      { name: "dogSize", label: "Dog size" },
      { name: "city", label: "City / State" },
    ],
    cta: "Join Pet Owner Waitlist",
  },
  {
    id: "partner",
    title: "Shelter or Clinic Partner",
    body: "For shelters, rescues, clinics, groomers, kennels, and pet hotels interested in deployment or partnership.",
    fields: [
      { name: "org", label: "Organization name" },
      { name: "contact", label: "Contact name" },
      { name: "email", label: "Email", type: "email" },
      { name: "orgType", label: "Organization type" },
      { name: "location", label: "Location" },
    ],
    cta: "Apply as Partner",
  },
  {
    id: "investor",
    title: "Investor or Vendor Inquiry",
    body: "For investors, manufacturers, robotics vendors, suppliers, and strategic partners.",
    fields: [
      { name: "name", label: "Name" },
      { name: "company", label: "Company" },
      { name: "email", label: "Email", type: "email" },
      { name: "inquiryType", label: "Inquiry type" },
      { name: "message", label: "Message", textarea: true },
    ],
    cta: "Submit Inquiry",
  },
];

function SignupCard({ card }: { card: Card }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-7 shadow-soft transition-shadow hover:shadow-card"
    >
      <h3 className="text-[19px] font-semibold tracking-tight">{card.title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{card.body}</p>

      {submitted ? (
        <div className="mt-8 flex flex-1 flex-col items-center justify-center rounded-2xl border border-emerald-200/70 bg-emerald-50/60 p-8 text-center">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          <p className="mt-3 text-[15px] font-semibold">You're on the list.</p>
          <p className="mt-1 text-[13px] text-muted-foreground">
            We'll be in touch as Skritch™ moves toward launch.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-6 flex flex-1 flex-col gap-4">
            {card.fields.map((f) => (
              <div key={f.name} className="space-y-1.5">
                <Label htmlFor={`${card.id}-${f.name}`} className="text-[12.5px] font-medium text-foreground/80">
                  {f.label}
                </Label>
                {f.textarea ? (
                  <Textarea
                    id={`${card.id}-${f.name}`}
                    name={f.name}
                    rows={4}
                    className="rounded-xl border-border/80 bg-background"
                  />
                ) : (
                  <Input
                    id={`${card.id}-${f.name}`}
                    name={f.name}
                    type={f.type ?? "text"}
                    className="h-11 rounded-xl border-border/80 bg-background"
                  />
                )}
              </div>
            ))}
          </div>
          <Button type="submit" className="mt-6 h-12 w-full rounded-full text-[14px] shadow-soft">
            {card.cta}
          </Button>
        </>
      )}
    </form>
  );
}

export function Signup() {
  return (
    <section id="waitlist" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-primary">Sign up</p>
          <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight md:text-[44px]">
            Be part of the first Skritch<sup className="text-[14px]">™</sup> launch.
          </h2>
          <p className="mt-5 text-pretty text-[16.5px] leading-relaxed text-muted-foreground">
            Choose the path that best fits you and we'll keep you updated as Skritch
            <sup className="text-[10px]">™</sup> moves toward launch.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.id} delay={i * 100} className="h-full">
              <SignupCard card={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
