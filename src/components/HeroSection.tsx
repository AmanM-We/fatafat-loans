import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { IndianRupee } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section className="relative overflow-hidden pt-28 pb-14 md:pt-28 md:pb-14 lg:pt-32 lg:pb-16 bg-[linear-gradient(140deg,_hsl(228_60%_30%)_0%,_hsl(223_58%_26%)_48%,_hsl(218_54%_22%)_100%)]">
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,_hsl(216_92%_68%)_0%,_transparent_52%)]" />
    <div className="absolute inset-0 opacity-22 bg-[radial-gradient(circle_at_90%_10%,_hsl(229_86%_60%)_0%,_transparent_42%)]" />
    <div className="absolute -top-20 right-20 hidden lg:block w-72 h-72 rounded-full bg-sky-300/15 blur-3xl" />
    <div className="container-narrow px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:pr-2"
        >
          <span className="inline-flex items-center mb-5 px-4 py-1.5 rounded-full bg-white/15 text-primary-foreground text-xs font-semibold tracking-wide uppercase border border-white/20">
            100% Digital Process
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.1rem] xl:text-[3.4rem] font-extrabold leading-[1.08] text-primary-foreground mb-5">
            Instant Personal Loans
            <br className="hidden lg:block" /> up to{" "}
            <span className="text-sky-300">₹5 Lakhs</span>
          </h1>
          <p className="text-lg lg:text-[1.1rem] text-primary-foreground/80 mb-7 max-w-xl">
            Fast approval · No paperwork · 100% digital. Get funds directly in your bank account within minutes.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Button className="bg-sky-500 text-white hover:bg-sky-400 shadow-cta text-base font-semibold rounded-full px-8 py-6 transition-transform hover:scale-105">
              Apply Now
            </Button>
            <Button variant="outline" className="border-white/45 text-primary-foreground bg-white/12 hover:bg-white hover:text-primary text-base font-semibold rounded-full px-8 py-6 transition-colors">
              Check Eligibility
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
            <div className="rounded-xl border border-white/30 bg-white/12 px-4 py-3">
              <p className="text-xs text-primary-foreground/70">Customers</p>
              <p className="text-base font-bold text-primary-foreground">1L+</p>
            </div>
            <div className="rounded-xl border border-white/30 bg-white/12 px-4 py-3">
              <p className="text-xs text-primary-foreground/70">Disbursal</p>
              <p className="text-base font-bold text-primary-foreground">~10 mins</p>
            </div>
            <div className="rounded-xl border border-white/30 bg-white/12 px-4 py-3">
              <p className="text-xs text-primary-foreground/70">Process</p>
              <p className="text-base font-bold text-primary-foreground">Paperless</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex justify-center relative"
        >
          <div className="absolute inset-0 m-auto h-80 w-80 rounded-full bg-sky-300/15 blur-3xl" />
          <div className="relative w-full max-w-[460px] rounded-3xl border border-white/20 bg-white/12 backdrop-blur-sm px-6 pt-6 pb-5 shadow-[0_20px_50px_hsl(220_35%_10%_/_0.35)]">
            <div className="absolute left-4 top-4 rounded-xl border border-blue-300/45 bg-blue-50/90 px-3 py-2 backdrop-blur-sm z-10">
              <p className="text-[10px] uppercase tracking-wide text-blue-700">Loan Approved</p>
              <p className="flex items-center gap-1 text-sm font-bold text-blue-900">
                <IndianRupee size={12} />
                50,000
              </p>
            </div>
            <div className="absolute right-4 bottom-4 rounded-xl border border-white/25 bg-white/15 px-3 py-2 backdrop-blur-sm z-10">
              <p className="text-[10px] uppercase tracking-wide text-primary-foreground/70">Disbursal</p>
              <p className="text-sm font-bold text-primary-foreground">in 10 minutes</p>
            </div>
            <img src={heroImg} alt="Person using Fatafat Loans app on phone" className="w-full max-w-sm lg:max-w-md mx-auto animate-float" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
