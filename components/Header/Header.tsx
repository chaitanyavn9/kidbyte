"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "@/hooks/useSession";
import { BRAND } from "@/lib/constants";

export default function Header() {
  const { session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/explore", label: "Explore", emoji: "🚀" },
    { href: "/quiz", label: "Quiz", emoji: "🧩" },
    { href: "/signature", label: "My Badge", emoji: "🏅" },
    { href: "/donate", label: "Donate", emoji: "❤️" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-100/50"
          : "bg-white/80 backdrop-blur-sm"
      } border-b border-blue-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/kidbyte-logo.png"
                alt="KidByte"
                width={130}
                height={52}
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Fallback text logo */}
              <span
                className="text-xl font-black hidden"
                id="logo-fallback"
                style={{
                  background: `linear-gradient(90deg, #FF8A00, #1D7CFF, #7B61FF)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                🤖 {BRAND.name}
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold text-navy hover:bg-blue-50 hover:text-blue-600 transition-colors"
                style={{ color: "#082A63" }}
              >
                <span>{link.emoji}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Session Avatar or Start */}
          <div className="flex items-center gap-3">
            {session ? (
              <Link href="/explore">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-blue-50 border-2 border-blue-200 rounded-full px-3 py-1.5 cursor-pointer"
                >
                  <span className="text-xl">{getAvatarEmoji(session.avatar)}</span>
                  <span className="text-sm font-bold text-blue-700 max-w-[80px] truncate">
                    {session.name}
                  </span>
                </motion.div>
              </Link>
            ) : (
              <Link href="/#onboarding">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-shine bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-sm px-5 py-2 rounded-full shadow-md"
                >
                  Start Learning! 🚀
                </motion.button>
              </Link>
            )}

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-blue-100 overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-navy hover:bg-blue-50 transition-colors"
                >
                  <span className="text-2xl">{link.emoji}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function getAvatarEmoji(avatarId: string): string {
  const map: Record<string, string> = {
    robot: "🤖",
    astronaut: "👨‍🚀",
    scientist: "🧑‍🔬",
    artist: "🧑‍🎨",
    ninja: "🥷",
    superhero: "🦸",
  };
  return map[avatarId] ?? "🤖";
}
