"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MapPin, Clock, CheckCircle2, MessageCircle } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

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

export default function ContactPage() {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    service_interested: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
      setError("Something went wrong. Please try again or call us directly.");
    } else {
      setSuccess(true);
      setForm({ full_name: "", phone: "", service_interested: "", message: "" });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1920&q=80"
          alt="Contact AURA"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
              Get in Touch
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-light text-white">
            Contact <span className="italic">Us</span>
          </h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left – Info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                  Clinic Details
                </span>
              </div>
              <h2 className="font-display text-4xl font-light text-[#333333] mb-8">
                Visit Us in{" "}
                <span className="italic">Moradabad</span>
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-11 h-11 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#888888] mb-1">
                      Address
                    </div>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      A-69 Gandhi Nagar, Prince Road,
                      <br />
                      Moradabad, Uttar Pradesh — 244001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#888888] mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:+919924933999"
                      className="text-sm text-[#333333] hover:text-[#D4AF37] transition-colors font-medium"
                    >
                      +91 99249 33999
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#888888] mb-1">
                      Clinic Hours
                    </div>
                    <div className="text-sm text-[#333333] space-y-0.5">
                      <div>Monday – Saturday: 10:00 AM – 7:00 PM</div>
                      <div className="text-[#888888]">Sunday: By Appointment Only</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#888888] mb-1">
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/919924933999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#333333] hover:text-[#D4AF37] transition-colors font-medium"
                    >
                      Chat with us instantly →
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="border border-[#E8E0D0] overflow-hidden h-60">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.123456789!2d78.7733!3d28.8386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDUwJzE5LjAiTiA3OMKwNDYnMjMuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AURA Skin & Hair Clinic Location"
                />
              </div>
            </div>

            {/* Right – Form */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                  Book Appointment
                </span>
              </div>
              <h2 className="font-display text-4xl font-light text-[#333333] mb-8">
                Request a{" "}
                <span className="italic">Consultation</span>
              </h2>

              {success ? (
                <div className="border border-[#D4AF37]/30 bg-[#F5ECC7]/30 p-10 text-center">
                  <CheckCircle2 className="w-14 h-14 text-[#D4AF37] mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-medium mb-2">
                    Appointment Requested!
                  </h3>
                  <p className="text-[#777777] text-sm mb-6">
                    Thank you. Our team will call you within a few hours to
                    confirm your appointment at AURA.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-[#D4AF37] text-xs tracking-widest uppercase underline"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell us about your skin concern or any questions..."
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
                    {loading ? "Sending Request..." : "Book Appointment"}
                  </button>

                  <p className="text-[10px] text-[#AAAAAA] text-center">
                    Your details are safe with us. We will never share your
                    information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
