import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Droplets, Zap, Leaf, Wind, Scissors, Shield } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Hair Treatments",
  description:
    "Expert hair treatments at AURA Skin & Hair Clinic Moradabad — PRP, GFC Therapy, Hair Loss Treatment, Dandruff Management and more.",
};

const treatments = [
  {
    icon: Droplets,
    title: "PRP Hair Therapy",
    description:
      "Platelet-Rich Plasma therapy uses your own blood's growth factors to naturally stimulate dormant hair follicles and reverse hair thinning.",
    href: "/contact",
    tag: "Most Popular",
  },
  {
    icon: Zap,
    title: "GFC Therapy",
    description:
      "Growth Factor Concentrate therapy — a next-generation advancement over PRP with higher concentration of growth factors for superior results.",
    href: "/contact",
    tag: "Advanced",
  },
  {
    icon: Leaf,
    title: "Hair Loss Treatment",
    description:
      "Comprehensive evaluation and treatment of androgenetic alopecia, alopecia areata, and other causes of hair fall with proven medical therapies.",
    href: "/contact",
  },
  {
    icon: Wind,
    title: "Dandruff Management",
    description:
      "Medically supervised treatment for seborrhoeic dermatitis and chronic dandruff, addressing root causes rather than surface symptoms.",
    href: "/contact",
  },
  {
    icon: Scissors,
    title: "Scalp Treatment",
    description:
      "Deep cleansing scalp therapy to remove buildup, balance oil production, and create the healthiest possible environment for hair growth.",
    href: "/contact",
  },
  {
    icon: Shield,
    title: "Hair Mesotherapy",
    description:
      "Micro-injections of vitamins, minerals, and amino acids directly into the scalp to nourish follicles and stimulate healthy hair growth.",
    href: "/contact",
  },
];

const faqs = [
  {
    q: "How many PRP sessions are needed?",
    a: "Typically 3–4 sessions spaced 4 weeks apart, followed by maintenance every 6 months. Results are visible from the 2nd session onwards.",
  },
  {
    q: "Is PRP painful?",
    a: "A topical anaesthetic is applied before the procedure, making it virtually painless. Mild soreness for 24 hours is normal.",
  },
  {
    q: "What is the difference between PRP and GFC?",
    a: "GFC contains 5–10x higher growth factor concentration than standard PRP, leading to faster and more pronounced hair regrowth results.",
  },
  {
    q: "Can women undergo PRP therapy?",
    a: "Absolutely. PRP and GFC are equally effective for female pattern hair loss, postpartum hair loss, and alopecia in women.",
  },
];

export default function HairTreatmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=80"
          alt="Hair Treatments"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
              Services
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-light text-white">
            Hair <span className="italic">Treatments</span>
          </h1>
        </div>
      </section>

      {/* Treatments */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                Hair Services
              </span>
            </div>
            <h2 className="font-display text-4xl font-light text-[#333333] mb-4">
              Restore Your <span className="italic">Hair's Confidence</span>
            </h2>
            <p className="text-[#777777] text-sm leading-relaxed">
              Hair loss affects millions — and AURA offers the most advanced,
              clinically proven therapies to address it. From early thinning to
              significant hair loss, we have a solution that works.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <ServiceCard key={t.title} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                Common Questions
              </span>
              <div className="h-px w-8 bg-[#D4AF37]" />
            </div>
            <h2 className="font-display text-4xl font-light">
              Hair Treatment <span className="italic">FAQs</span>
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="bg-white border border-[#E8E0D0] p-6"
              >
                <h3 className="font-medium text-[#333333] mb-2">{f.q}</h3>
                <p className="text-sm text-[#777777] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a1a1a] text-center relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-white mb-4">
            Start Your <span className="italic text-[#D4AF37]">Hair Restoration</span>
          </h2>
          <p className="text-white/50 text-sm mb-8">
            Book a consultation and get a customised hair treatment plan.
          </p>
          <Link href="/contact" className="btn-gold">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
