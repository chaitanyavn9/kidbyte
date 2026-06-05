import Link from "next/link";
import { BRAND } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#082A63] text-white mt-16">
      {/* Donation Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 py-4 px-6 text-center">
        <p className="font-bold text-lg">
          ❤️ Learning stays free forever —{" "}
          <Link
            href="/donate"
            className="underline underline-offset-2 hover:text-yellow-200 transition-colors"
          >
            Support KidByte with a small donation
          </Link>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-3xl">🤖</span>
            <div>
              <p className="text-xl font-black">{BRAND.name}</p>
              <p className="text-xs text-blue-300">{BRAND.tagline}</p>
            </div>
          </div>
          <p className="text-sm text-blue-200 leading-relaxed">
            An immersive educational platform for kids who are curious about technology.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="font-bold text-blue-300 mb-3 uppercase text-xs tracking-wider">Explore</p>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/explore" className="hover:text-blue-300 transition-colors">🚀 Lessons</Link>
            <Link href="/quiz" className="hover:text-blue-300 transition-colors">🧩 Quiz</Link>
            <Link href="/signature" className="hover:text-blue-300 transition-colors">🏅 My Digital Badge</Link>
            <Link href="/parent-zone" className="hover:text-blue-300 transition-colors">👨‍👩‍👧 Parent Zone</Link>
          </div>
        </div>

        {/* Privacy Promise */}
        <div>
          <p className="font-bold text-blue-300 mb-3 uppercase text-xs tracking-wider">Our Promise</p>
          <div className="flex flex-col gap-1.5 text-sm text-blue-200">
            <span>✅ Zero Ads</span>
            <span>✅ Zero Tracking</span>
            <span>✅ Zero Data Collection</span>
            <span>✅ Zero Cookies</span>
            <span>✅ Session-only Memory</span>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 py-4 text-center text-xs text-blue-400">
        <p>© {new Date().getFullYear()} KidByte. Made with ❤️ for curious kids everywhere.</p>
        <p className="mt-1">
          <Link href="/parent-zone" className="hover:text-blue-300 transition-colors mr-4">Privacy</Link>
          <Link href="/donate" className="hover:text-blue-300 transition-colors">Donate</Link>
        </p>
      </div>
    </footer>
  );
}
