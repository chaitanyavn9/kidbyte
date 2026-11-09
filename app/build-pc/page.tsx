import PCBuilderWizard from "@/components/PCBuilder/PCBuilderWizard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Your PC — KidByte",
  description: "Design your dream computer step by step — choose a CPU, RAM, GPU, storage, OS, and peripherals. Get a build report and badge!",
};

export default function BuildPCPage() {
  return <PCBuilderWizard />;
}
