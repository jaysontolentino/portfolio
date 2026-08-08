"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const layers = [
    {
        name: "Frontend",
        tagline: "What people click, read, and feel",
        accent: "bg-signal-amber",
        ring: "ring-signal-amber/40",
        items: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML", "CSS", "UI/UX", "Vue.js", "Vuex", "Preact"],
    },
    {
        name: "Backend",
        tagline: "The APIs, data, and business logic underneath",
        accent: "bg-signal-cyan",
        ring: "ring-signal-cyan/40",
        items: ["Typrscript", "Express.js", "Python (FastAPI)", "SQL", "PHP"],
    },
    {
        name: "Tools & Infra",
        tagline: "How it ships, connects, and stays fast",
        accent: "bg-muted-foreground",
        ring: "ring-border",
        items: ["AI", "Claude Code", "Git", "REST API", "GraphQL", "Docker", "Electron", "Prisma", "SqlAlchemy", "Vercel"],
    },
]

export function Skills() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <p className="font-mono text-xs text-muted-foreground">{"// the stack, top to bottom"}</p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                    Skills
                </h2>
            </motion.div>

            <div className="relative">
                <div
                    aria-hidden
                    className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-[23px]"
                />
                <div className="space-y-6">
                    {layers.map((layer, index) => (
                        <motion.div
                            key={layer.name}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            className="relative pl-11 md:pl-14"
                        >
                            <span
                                aria-hidden
                                className={`absolute left-2.5 top-6 h-3.5 w-3.5 rounded-full ring-4 ring-background md:left-3.5 ${layer.accent}`}
                            />
                            <Card className={`h-full border-border ring-1 ring-inset ${layer.ring}`}>
                                <CardHeader>
                                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                                        <CardTitle className="font-display">{layer.name}</CardTitle>
                                        <span className="font-mono text-[11px] text-muted-foreground">
                                            layer {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <CardDescription>{layer.tagline}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {layer.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="inline-flex items-center rounded-md bg-muted border border-border px-2.5 py-0.5 text-xs font-medium text-foreground/80"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
