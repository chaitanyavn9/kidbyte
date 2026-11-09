import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PRINTABLES } from "@/lib/printables";

export const metadata: Metadata = {
  title: "Free Computer Printables for Kids — KidByte",
  description:
    "Free printable computer worksheets for kids: computer parts matching, binary name activity and more. Instant PDF download — no sign-up, no ads.",
};

export default function PrintablesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🖨️</div>
        <h1 className="text-4xl font-black text-[#082A63] mb-3">Free Printables</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
          Screen-free computer activities to print at home or in class. Free to download — no sign-up, no email, no ads.
        </p>
      </div>

      <div className="grid gap-8">
        {PRINTABLES.map((p) => (
          <article
            key={p.id}
            id={p.id}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-blue-100 flex flex-col md:flex-row gap-8 items-center scroll-mt-24"
          >
            <a href={p.file} target="_blank" rel="noopener" className="shrink-0">
              <Image
                src={p.preview}
                alt={`Preview of the ${p.title} worksheet`}
                width={272}
                height={352}
                className="rounded-xl shadow-lg border border-gray-100 -rotate-2 transition-transform hover:rotate-0 hover:scale-105"
              />
            </a>

            <div className="flex-1 w-full">
              <h2 className="text-2xl font-black text-[#082A63] mb-2">
                {p.emoji} {p.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700">Ages {p.ages}</span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-50 text-purple-700">{p.pages} pages · PDF</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">{p.description}</p>
              <ul className="space-y-2 mb-6">
                {p.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span>✅</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={p.file}
                  download
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-black text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg transition-transform hover:scale-105"
                >
                  ⬇️ Download free PDF
                </a>
                {p.related && (
                  <Link
                    href={p.related.href}
                    className="flex items-center justify-center px-6 py-3 rounded-full font-bold text-[#082A63] border-2 border-blue-100 hover:border-blue-300 transition-colors"
                  >
                    {p.related.label} →
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="text-center text-gray-400 text-sm mt-12">
        🤖 New printables are added regularly. Free for home and classroom use.
      </p>
    </div>
  );
}
