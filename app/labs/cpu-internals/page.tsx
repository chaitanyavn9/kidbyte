import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inside the CPU — KidByte Labs",
  description:
    "Flip-flops, registers, x86-64, RAM vs SRAM, and SSD NAND flash — explore how every computer component is built from electronics.",
};

export default function CPUInternalsLabPage() {
  return (
    <div className="w-full" style={{ height: "calc(100vh - 64px)" }}>
      <iframe
        src="/labs/cpu-internals.html"
        className="w-full h-full border-0"
        title="Inside the CPU — Interactive Lab"
        allow="fullscreen"
      />
    </div>
  );
}
