import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/skritch/Header";
import { Hero } from "@/components/skritch/Hero";
import { Problem } from "@/components/skritch/Problem";
import { HowItWorks } from "@/components/skritch/HowItWorks";
import { Features } from "@/components/skritch/Features";
import { Community } from "@/components/skritch/Community";
import { Roadmap } from "@/components/skritch/Roadmap";
import { Partners } from "@/components/skritch/Partners";
import { Signup } from "@/components/skritch/Signup";
import { Footer } from "@/components/skritch/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skritch™ — Robotic pet comfort for dogs at home" },
      {
        name: "description",
        content:
          "Skritch™ is a robotic pet comfort system that gives dogs gentle human-like scratches with safety sensors, voice praise, and app-connected video calling.",
      },
      { property: "og:title", content: "Skritch™ — Robotic pet comfort for dogs at home" },
      {
        property: "og:description",
        content:
          "A soft robotic hand, smart safety sensors, and an app-connected experience designed for safer remote pet comfort.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkritchLanding,
});

function SkritchLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Community />
        <Roadmap />
        <Partners />
        <Signup />
      </main>
      <Footer />
    </div>
  );
}
