import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { CtaBand } from "@/components/sections/cta-band";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col pb-12">
      <Hero />
      <Separator className="max-w-5xl mx-auto w-[calc(100%-2rem)]" />
      <Skills />
      <Separator className="max-w-5xl mx-auto w-[calc(100%-2rem)]" />
      <Experience />
      <CtaBand />
    </div>
  );
}
