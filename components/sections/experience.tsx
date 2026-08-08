"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const experiences = [
    {
        role: "Software Engineer I",
        company: "Cass&York",
        period: "2024–2025",
        description: [
            "Converted Figma designs to React components",
            "Implemented authentication + Stripe",
            "UI/UX improvements & frontend maintenance",
            "Delivered multiple projects simultaneously",
            "Developed and design backend services."
        ],
    },
    {
        role: "Javascript & Python Developer",
        company: "ITAS Solution LP",
        period: "2023–2024",
        description: [
            "Built frontend with Javascript, Preact, Electron",
            "Developed Python REST APIs",
            "Integrated frontend with backend",
        ],
    },
    {
        role: "Frontend Developer",
        company: "Safford LLC",
        period: "2023",
        description: [
            "Built Vue.js components",
            "Migrated Vue 2 → Vue 3",
            "Backend with Nest.js, GraphQL, PostgreSQL",
        ],
    },
    {
        role: "Fullstack Developer",
        company: "Envirocycling Fiber Inc",
        period: "2018–2023",
        description: [
            "Built PHP/jQuery systems",
            "Optimized performance",
            "Maintained servers & legacy codebase",
        ],
    },
]

export function Experience() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <p className="font-mono text-xs text-muted-foreground">{"// git log --reverse"}</p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                    Work Experience
                </h2>
            </motion.div>

            <div className="relative">
                <div
                    aria-hidden
                    className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[9px]"
                />
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-10"
                        >
                            <span
                                aria-hidden
                                className="absolute left-0 top-6 h-[15px] w-[15px] rounded-full border-2 border-signal-amber bg-background md:h-[19px] md:w-[19px]"
                            />
                            <Card>
                                <CardHeader>
                                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                        <div>
                                            <CardTitle className="font-display text-xl">{exp.role}</CardTitle>
                                            <CardDescription className="text-base font-medium text-foreground/80">
                                                {exp.company}
                                            </CardDescription>
                                        </div>
                                        <span className="w-fit font-mono text-xs text-signal-cyan bg-muted px-2 py-1 rounded-md border border-border">
                                            {exp.period}
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-1.5 text-muted-foreground">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex gap-2 text-sm">
                                                <span className="font-mono text-signal-amber">+</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
