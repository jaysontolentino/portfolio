"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ParticlesBackground } from "@/components/particles-background"

const stack = [
    { label: "React", kind: "fe" },
    { label: "Next.js", kind: "fe" },
    { label: "TypeScript", kind: "fe" },
    { label: "Node.js", kind: "be" },
    { label: "Python", kind: "be" },
    { label: "SQL", kind: "be" },
    { label: "PHP", kind: "be" },
]

export function Hero() {
    return (
      <section className="relative overflow-hidden">
        <div className="grain-canvas pointer-events-none absolute inset-0" />
        <ParticlesBackground className="pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />

        <div className="relative max-w-5xl mx-auto flex min-h-full flex-col-reverse md:flex-row md:items-center justify-end md:justify-center gap-10 px-4 py-16 md:py-28">
          <div className="w-full md:w-3/5 flex flex-col space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 justify-center md:justify-start font-mono text-xs text-signal-cyan"
            >
              <span className="text-muted-foreground">$</span>
              <span>whoami</span>
              <span
                aria-hidden
                className="inline-block h-3.5 w-[7px] bg-signal-cyan motion-safe:animate-pulse"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center md:text-left"
            >
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Jayson Tolentino
              </h1>
              <h2 className="mt-3 font-display text-xl font-medium sm:text-xl md:text-2xl">
                <span className="text-signal-amber">Front</span>
                <span className="text-muted-foreground">-to-</span>
                <span className="text-signal-cyan">back</span>
                <span className="text-muted-foreground">
                  {" "}
                  Software Engineer
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-center md:text-left"
            >
              I&apos;m Jayson, a software engineer with 8+ years of experience
              building products end-to-end, from pixel-precise React and Next.js
              interfaces to the back end systems that power them. I care equally
              about what people click and what keeps it running: clean component
              architecture on the front end, well-modeled APIs and data on the
              back end, and the integrations that connect the two. Beyond
              shipping features, I follow consistent coding standards, clean
              architecture, and proven design patterns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 justify-center md:justify-start items-center font-mono text-xs"
            >
              {stack.map((tech) => (
                <span
                  key={tech.label}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/60 px-2.5 py-1 text-foreground/80"
                >
                  <span
                    className={
                      "h-1.5 w-1.5 rounded-full " +
                      (tech.kind === "fe"
                        ? "bg-signal-amber"
                        : "bg-signal-cyan")
                    }
                  />
                  {tech.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start items-center pt-2"
            >
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/jaysontolentino"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="w-full md:w-2/5 flex flex-col justify-center items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-full bg-linear-to-br from-signal-amber/30 to-signal-cyan/30 blur-2xl" />
              <Image
                src="/profile.jpg"
                width={280}
                height={280}
                alt="Picture of Jayson Tolentino"
                className="relative w-44 lg:w-64 aspect-square rounded-full border-2 border-border object-cover shadow-lg"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full max-w-[260px] overflow-hidden rounded-lg border border-border bg-card/80 shadow-sm backdrop-blur-sm"
            >
              <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                <span className="terminal-dot bg-destructive/70" />
                <span className="terminal-dot bg-signal-amber/70" />
                <span className="terminal-dot bg-signal-cyan/70" />
              </div>
              <div className="space-y-1 px-3 py-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
                <p>
                  <span className="text-signal-cyan">const</span> engineer ={" "}
                  {"{"}
                </p>
                <p className="pl-3">
                  role:{" "}
                  <span className="text-foreground">
                    &quot;Full-Stack&quot;
                  </span>
                  ,
                </p>
                <p className="pl-3">
                  experience: <span className="text-foreground">8</span>,
                </p>
                <p className="pl-3">
                  based:{" "}
                  <span className="text-foreground">
                    &quot;PH, remote&quot;
                  </span>
                  ,
                </p>
                <p>{"}"}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
}
