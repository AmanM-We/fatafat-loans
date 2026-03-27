import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const FinalCTA = () => (
  <section className="section-padding relative overflow-hidden bg-transparent">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_hsl(228_82%_60%)_0%,_transparent_58%)]" />
    <div className="container-narrow text-center relative z-10">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
          Get your loan approved in minutes
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Join over 1 lakh happy customers who chose the smarter way to borrow. No paperwork, no waiting.
        </p>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-cta text-lg font-semibold rounded-full px-10 py-6 transition-transform hover:scale-105">
          Apply Now
        </Button>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCTA;
