"use client";

import Features from "@/components/features";
import Footer from "@/components/footer";
import { AnimatedNumber } from "@/components/number";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function HomePage() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(50);
  }

  return (
    <div className="py-10">
      <main className="flex flex-col pt-36 text-black/60 dark:text-white/60">
        <div className="flex flex-col gap-6 max-w-4xl mx-auto h-[600px] text-center">
          <AnimatedGradientText className="h-9 cursor-pointer">
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Introducing Ghost Layer
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>

          <h1 className="text-4xl md:text-6xl font-bold">
            Security, Privacy, Anonymity
            <br />
            <span className="text-6xl md:text-7xl text-black dark:text-white">
              All in one
            </span>
          </h1>
          <p className="max-w-xl text-lg mx-auto px-4 md:px-0">
            GhostLayer is a modern guide to learn more deeply about how to
            become more private online.
          </p>

          <p ref={ref}>
            <AnimatedNumber
              className="font-bold text-black/90 dark:text-white/90"
              springOptions={{
                bounce: 0,
                duration: 6000,
              }}
              value={value}
            />
            + topics in total
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-4 mx-auto">
            <Button variant="default" className="w-48 h-11 rounded-full">
              Start Now <ArrowRight />
            </Button>
            <a href="#features">
              <Button variant="ghost" className="w-44 h-11 rounded-full">
                Explore <ChevronDown />
              </Button>
            </a>
          </div>
        </div>

        <div>
          <Features />
        </div>
      </main>

      <Footer />
    </div>
  );
}
