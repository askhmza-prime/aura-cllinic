"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "Skin Treatments", href: "/services/skin" },
  { label: "Hair Treatments", href: "/services/hair" },
  { label: "Advanced Aesthetics", href: "/services/aesthetics" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "#", dropdown: services },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navBg = isHome
    ? scrolled
      ? "bg-white shadow-sm border-b border-[#E8E0D0]"
      : "bg-transparent"
    : "bg-white border-b border-[#E8E0D0]";

  const textColor =
    isHome && !scrolled ? "text-white" : "text-[#333333]";
  const logoColor =
    isHome && !scrolled ? "text-white" : "text-[#333333]";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span
                className={`font-display text-2xl font-light tracking-[0.15em] transition-colors ${logoColor}`}
              >
                AURA
              </span>
              <span
                className={`text-[9px] tracking-[0.3em] uppercase font-medium transition-colors ${
                  isHome && !scrolled ? "text-[#D4AF37]" : "text-[#D4AF37]"
                }`}
              >
                Skin & Hair Clinic
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-xs tracking-widest uppercase font-medium transition-colors hover:text-[#D4AF37] ${textColor}`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                        servicesOpen
                          ? "opacity-100 pointer-events-auto translate-y-0"
                          : "opacity-0 pointer-events-none -translate-y-2"
                      }`}
                    >
                      <div className="bg-white border border-[#E8E0D0] shadow-xl min-w-[200px] py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-5 py-2.5 text-xs tracking-widest uppercase text-[#555555] hover:text-[#D4AF37] hover:bg-[#FAFAF8] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs tracking-widest uppercase font-medium transition-colors hover:text-[#D4AF37] ${textColor} ${
                      pathname === link.href ? "text-[#D4AF37]" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 bg-[#D4AF37] text-white px-5 py-2.5 text-xs tracking-widest uppercase font-medium hover:bg-[#b8962e] transition-colors"
              >
                Book Appointment
              </Link>

              {/* Mobile toggle */}
              <button
                className={`md:hidden transition-colors ${textColor}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t border-[#E8E0D0] transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-screen py-4" : "max-h-0"
          }`}
        >
          <div className="px-6 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    className="flex items-center justify-between w-full py-3 text-xs tracking-widest uppercase font-medium text-[#333333] hover:text-[#D4AF37] transition-colors"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 pb-2 flex flex-col gap-1 border-l border-[#D4AF37]/30">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="py-2 text-xs tracking-widest uppercase text-[#555555] hover:text-[#D4AF37] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 text-xs tracking-widest uppercase font-medium transition-colors hover:text-[#D4AF37] ${
                    pathname === link.href
                      ? "text-[#D4AF37]"
                      : "text-[#333333]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="mt-3 w-full text-center bg-[#D4AF37] text-white px-5 py-3 text-xs tracking-widest uppercase font-medium hover:bg-[#b8962e] transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
