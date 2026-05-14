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
