"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  ArrowRight,
  Award,
  Users,
  Clock,
  CheckCircle2,
  Sparkles,
  Droplets,
  Scissors,
  Zap,
  Phone,
  Calendar,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden hero-grain">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"
        alt="AURA Skin & Hair Clinic"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 fade-up fade-up-delay-1">
            <div className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">
              Moradabad's Premier Skin Clinic
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 fade-up fade-up-delay-2">
            Advanced Skin &{" "}
            <span className="italic text-[#D4AF37]">Hair</span> Treatments
            <br />
            in Moradabad
          </h1>

          {/* Subtext */}
          <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-10 fade-up fade-up-delay-3">
            Trusted Dermatology Care by{" "}
            <strong className="text-white font-medium">
              Dr. Ashwin Charaniya
            </strong>{" "}
            with 10+ Years Experience. Science-backed treatments delivered with
            the highest precision.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 fade-up fade-up-delay-4">
            <Link href="/contact" className="btn-gold">
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
            <a
              href="https://wa.me/919924933999?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
              </svg>
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

// ─── Trust Signals ────────────────────────────────────────────────────────────

function TrustSignals() {
  const stats = [
    {
      icon: Star,
      value: "4.9",
      label: "Google Rating",
      sub: "Based on 120+ reviews",
    },
    {
      icon: Award,
      value: "10+",
      label: "Years Experience",
      sub: "Expert dermatology care",
    },
    {
      icon: Users,
      value: "5000+",
      label: "Happy Patients",
      sub: "Trusted across Moradabad",
    },
    {
      icon: Clock,
      value: "20+",
      label: "Treatments Offered",
      sub: "Skin, hair & aesthetics",
    },
  ];

  return (
    <section className="bg-[#FAFAF8] border-y border-[#E8E0D0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <s.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-4xl font-light text-[#333333]">
                  {s.value}
                </div>
                <div className="text-sm font-medium text-[#333333] tracking-wide mt-0.5">
                  {s.label}
                </div>
                <div className="text-xs text-[#888888] mt-0.5">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Featured Treatments ──────────────────────────────────────────────────────

function FeaturedTreatments() {
  const treatments = [
    {
      icon: Droplets,
      title: "HydraFacial",
      desc: "Deep cleansing, exfoliation & hydration in one luxurious session for radiant, glowing skin.",
      tag: "Most Popular",
      href: "/services/skin",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Sparkles,
      title: "Acne Treatment",
      desc: "Medical-grade protocols to clear acne, reduce scars, and prevent recurrence permanently.",
      tag: "Highly Effective",
      href: "/services/skin",
      img: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Scissors,
      title: "PRP Hair Therapy",
      desc: "Platelet-Rich Plasma therapy to naturally stimulate hair regrowth and combat hair loss.",
      tag: "Advanced",
      href: "/services/hair",
      img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Zap,
      title: "Laser Hair Removal",
      desc: "State-of-the-art laser technology for permanent, painless hair removal on all skin types.",
      tag: "Permanent",
      href: "/services/aesthetics",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
              Our Treatments
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#333333]">
            Featured <span className="italic">Treatments</span>
          </h2>
          <p className="mt-4 text-[#777777] text-sm max-w-lg mx-auto leading-relaxed">
            Evidence-based dermatology treatments delivered with precision,
            care, and an eye for beautiful results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group block bg-white border border-[#E8E0D0] card-lift overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={t.img}
                  alt={t.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Tag */}
                <span className="absolute top-3 left-3 bg-[#D4AF37] text-white text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 font-medium">
                  {t.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <t.icon className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="font-display text-xl font-medium">
                    {t.title}
                  </h3>
                </div>
                <p className="text-sm text-[#777777] leading-relaxed mb-4">
                  {t.desc}
                </p>
                <div className="flex items-center gap-1 text-[#D4AF37] text-xs tracking-widest uppercase font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services/skin" className="btn-outline">
            View All Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Doctors Section ──────────────────────────────────────────────────────────

function DoctorsSection() {
  const doctors = [
    {
      name: "Dr. Ashwin Charaniya",
      qual: "MBBS, MD — Dermatology, Venereology & Leprosy",
      role: "Founder & Chief Dermatologist",
      exp: "10+ Years",
      highlights: [
        "Advanced Laser & Aesthetic Procedures",
        "Medical Dermatology Specialist",
        "Certified PRP & GFC Therapist",
        "Aesthetic Medicine Expert",
      ],
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Harshita Sharma",
      qual: "MBBS, MD — Dermatology",
      role: "Consultant Dermatologist",
      exp: "5+ Years",
      highlights: [
        "Skin Allergy & Eczema Management",
        "Cosmetic Dermatology",
        "Hair & Scalp Disorders",
        "Pigmentation Treatments",
      ],
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="section-pad bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
              Expert Care
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Meet Our <span className="italic">Doctors</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-white border border-[#E8E0D0] overflow-hidden card-lift"
            >
              {/* Doctor image with gold overlay at bottom */}
              <div className="relative h-72">
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <div className="bg-[#D4AF37] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium inline-block">
                    {doc.exp} Experience
                  </div>
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-display text-2xl font-medium">{doc.name}</h3>
                <p className="text-[#D4AF37] text-xs tracking-wide mt-1 mb-0.5">
                  {doc.role}
                </p>
                <p className="text-[#888888] text-xs mb-5">{doc.qual}</p>

                <ul className="space-y-2">
                  {doc.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-[#555555]">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/about" className="btn-outline">
            Learn About Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Before & After Preview ───────────────────────────────────────────────────

function BeforeAfterPreview() {
  const cases = [
    {
      label: "Acne Treatment",
      before:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400&q=80",
      after:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    },
    {
      label: "Pigmentation",
      before:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
      after:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80",
    },
    {
      label: "Hair Restoration",
      before:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=400&q=80",
      after:
        "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                Real Results
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Before <span className="italic">&amp; After</span>
            </h2>
          </div>
          <Link href="/gallery" className="text-sm text-[#D4AF37] tracking-widest uppercase flex items-center gap-1.5 hover:gap-3 transition-all">
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.label} className="group overflow-hidden border border-[#E8E0D0] card-lift">
              <div className="grid grid-cols-2">
                <div className="relative h-56 overflow-hidden">
                  <Image src={c.before} alt={`Before ${c.label}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#333333]/80 text-white text-center text-[10px] tracking-[0.2em] uppercase py-1.5">
                    Before
                  </div>
                </div>
                <div className="relative h-56 overflow-hidden">
                  <Image src={c.after} alt={`After ${c.label}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#D4AF37] text-white text-center text-[10px] tracking-[0.2em] uppercase py-1.5">
                    After
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 bg-[#FAFAF8] border-t border-[#E8E0D0]">
                <p className="text-sm font-medium text-[#333333] tracking-wide">{c.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Appointment Form ────────────────────────────────────────────────────────

function AppointmentForm() {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    service_interested: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const services = [
    "HydraFacial",
    "Acne Treatment",
    "Chemical Peel",
    "Pigmentation Treatment",
    "PRP Hair Therapy",
    "GFC Therapy",
    "Hair Loss Treatment",
    "Dandruff Management",
    "Laser Hair Removal",
    "Botox",
    "Dermal Fillers",
    "Microdermabrasion",
    "Other / General Consultation",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name || !form.phone) {
      setError("Please fill in your name and phone number.");
      return;
    }
    setLoading(true);
    setError("");
    const { error: dbError } = await supabase.from("leads").insert([form]);
    setLoading(false);
    if (dbError) {
      setError("Something went wrong. Please try again or call us.");
    } else {
      setSuccess(true);
      setForm({ full_name: "", phone: "", service_interested: "", message: "" });
    }
  };

  return (
    <section className="section-pad bg-[#1a1a1a] relative overflow-hidden">
      {/* Gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                Book a Visit
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
              Request an{" "}
              <span className="italic text-[#D4AF37]">Appointment</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Fill out the form and our team will call you back within a few
              hours to confirm your appointment. Or reach us directly on
              WhatsApp for instant confirmation.
            </p>

            {/* Contact links */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+919924933999"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 tracking-widest uppercase">
                    Call Us
                  </div>
                  <div className="text-white font-medium">+91 99249 33999</div>
                </div>
              </a>
            </div>

            {/* Clinic hours */}
            <div className="border border-white/10 p-5">
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] mb-3">
                Clinic Hours
              </div>
              <div className="space-y-1.5 text-sm text-white/60">
                <div className="flex justify-between">
                  <span>Monday – Saturday</span>
                  <span className="text-white/80">10:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white/80">By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div className="bg-white p-8 md:p-10">
            {success ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-14 h-14 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-display text-2xl font-medium mb-2">
                  Request Received!
                </h3>
                <p className="text-[#777777] text-sm">
                  Thank you. Our team will call you within a few hours to
                  confirm your appointment.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-[#D4AF37] text-xs tracking-widest uppercase underline"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#888888] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.full_name}
                    onChange={(e) =>
                      setForm({ ...form, full_name: e.target.value })
                    }
                    placeholder="Your full name"
                    className="w-full border border-[#E8E0D0] px-4 py-3 text-sm text-[#333333] placeholder:text-[#BBBBBB] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#888888] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-[#E8E0D0] px-4 py-3 text-sm text-[#333333] placeholder:text-[#BBBBBB] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#888888] mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    value={form.service_interested}
                    onChange={(e) =>
                      setForm({ ...form, service_interested: e.target.value })
                    }
                    className="w-full border border-[#E8E0D0] px-4 py-3 text-sm text-[#333333] focus:outline-none focus:border-[#D4AF37] transition-colors bg-white appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#888888] mb-1.5">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Any specific concerns or questions..."
                    className="w-full border border-[#E8E0D0] px-4 py-3 text-sm text-[#333333] placeholder:text-[#BBBBBB] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-xs">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Request Appointment"}
                </button>

                <p className="text-[10px] text-[#AAAAAA] text-center">
                  Your information is private and secure. We will never share
                  your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reviews Strip ────────────────────────────────────────────────────────────

function ReviewsStrip() {
  const reviews = [
    {
      name: "Priya S.",
      text: "Dr. Ashwin is absolutely brilliant. My acne scars have reduced so much after just 3 sessions.",
      rating: 5,
    },
    {
      name: "Rahul M.",
      text: "Best dermatologist in Moradabad. The PRP therapy gave me visible results within 2 months.",
      rating: 5,
    },
    {
      name: "Anjali K.",
      text: "The clinic is so clean and elegant. Dr. Harshita was very caring and thorough.",
      rating: 5,
    },
  ];

  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
              Patient Reviews
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            What Our Patients <span className="italic">Say</span>
          </h2>
          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
            <span className="ml-2 text-sm text-[#777777]">4.9 / 5 · 120+ Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-[#FAFAF8] border border-[#E8E0D0] p-7 card-lift"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>
              <p className="text-[#555555] text-sm leading-relaxed mb-5 italic font-display text-lg">
                "{r.text}"
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-medium text-sm">
                  {r.name[0]}
                </div>
                <span className="text-sm font-medium text-[#333333]">
                  {r.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <FeaturedTreatments />
      <DoctorsSection />
      <BeforeAfterPreview />
      <ReviewsStrip />
      <AppointmentForm />
    </>
  );
}
