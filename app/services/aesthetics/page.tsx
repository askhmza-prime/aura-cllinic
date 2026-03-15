import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Zap, Sparkles, Circle, Layers, Star, Droplets } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Advanced Aesthetics",
  description:
    "Advanced aesthetic procedures at AURA Clinic Moradabad — Laser Hair Removal, Botox, Dermal Fillers, Microdermabrasion and more.",
};

const treatments = [
  {
    icon: Zap,
    title: "Laser Hair Removal",
    description:
      "Permanent hair reduction using state-of-the-art diode laser technology. Safe, effective, and comfortable for all skin types.",
    href: "/contact",
    tag: "Permanent Solution",
  },
  {
    icon: Sparkles,
    title: "Botox",
    description:
      "Clinically administered botulinum toxin to smooth forehead lines, crow's feet, and frown lines for a naturally refreshed appearance.",
    href: "/contact",
    tag: "Anti-Ageing",
  },
  {
    icon: Droplets,
    title: "Dermal Fillers",
    description:
      "Hyaluronic acid fillers to restore volume, define facial contours, plump lips, and soften deep-set lines with natural-looking results.",
    href: "/contact",
  },
  {
    icon: Layers,
    title: "Microdermabrasion",
    description:
      "Crystal or diamond-tip exfoliation to remove dead skin cells, minimise pores, reduce fine lines, and improve skin texture and radiance.",
    href: "/contact",
  },
  {
    icon: Circle,
    title: "Thread Lift",
    description:
      "A minimally invasive facelift alternative using dissolvable threads to lift and tighten sagging skin with zero downtime.",
    href: "/contact",
  },
  {
    icon: Star,
    title: "Skin Boosters",
    description:
      "Injectable hydration therapy with hyaluronic acid to deeply moisturise skin from within, improving elasticity and giving a healthy glow.",
    href: "/contact",
  },
];

const highlights = [
  { value: "0", label: "Downtime on most procedures" },
  { value: "FDA", label: "Approved products only" },
  { value: "100%", label: "Personalised treatment plans" },
  { value: "Safe", label: "For Indian skin tones" },
];

export default function AestheticsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1920&q=80"
          alt="Advanced Aesthetics"
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
            Advanced <span className="italic">Aesthetics</span>
          </h1>
        </div>
      </section>

      {/* Highlights bar */}
      <section className="bg-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {highlights.map((h) => (
              <div key={h.label}>
                <div className="font-display text-3xl font-light text-white">
                  {h.value}
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-white/80 mt-1">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                Aesthetic Procedures
              </span>
            </div>
            <h2 className="font-display text-4xl font-light text-[#333333] mb-4">
              Look & Feel Your{" "}
              <span className="italic">Absolute Best</span>
            </h2>
            <p className="text-[#777777] text-sm leading-relaxed">
              Our aesthetic procedures are performed exclusively by qualified
              dermatologists — never by technicians. Every treatment is
              tailored, precise, and designed to enhance your natural features.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <ServiceCard key={t.title} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Safety note */}
      <section className="section-pad bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
              Safety First
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="font-display text-4xl font-light mb-6">
            Aesthetic Medicine Done <span className="italic">Right</span>
          </h2>
          <p className="text-[#777777] text-sm leading-relaxed max-w-2xl mx-auto">
            At AURA, all injectable procedures — Botox, fillers, skin boosters —
            are administered only by our qualified MD Dermatologists. We use
            only FDA-approved, branded products. Your safety and natural
            appearance are our absolute priority.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a1a1a] text-center relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-white mb-4">
            Ready for Your{" "}
            <span className="italic text-[#D4AF37]">Transformation?</span>
          </h2>
          <p className="text-white/50 text-sm mb-8">
            Book a consultation and let our experts craft your personalised aesthetic plan.
          </p>
          <Link href="/contact" className="btn-gold">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
