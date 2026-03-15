import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="font-display text-2xl font-light tracking-[0.15em]">
                AURA
              </div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37]">
                Skin & Hair Clinic
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              Premium dermatology care in Moradabad. Where science meets beauty.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#D4AF37] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Skin Treatments", href: "/services/skin" },
                { label: "Hair Treatments", href: "/services/hair" },
                { label: "Advanced Aesthetics", href: "/services/aesthetics" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-[#D4AF37] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#D4AF37] mb-5">
              Popular Treatments
            </h4>
            <ul className="space-y-2.5">
              {[
                "HydraFacial",
                "PRP Hair Therapy",
                "Acne Treatment",
                "Laser Hair Removal",
                "Chemical Peels",
                "Botox & Fillers",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#D4AF37] mb-5">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>
                  A-69 Gandhi Nagar, Prince Road,
                  <br />
                  Moradabad, Uttar Pradesh
                </span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+919924933999"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  +91 99249 33999
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <div>Mon – Sat: 10:00 AM – 7:00 PM</div>
                  <div>Sunday: By Appointment</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} AURA Skin & Hair Clinic. All rights reserved.
        </p>
        <p className="text-xs text-white/20">
          Designed with care · Moradabad, UP
        </p>
      </div>
    </footer>
  );
}
