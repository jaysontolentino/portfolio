"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const experiences = [
    {
        role: "FrontEnd Developer",
        company: "Cass&York",
        period: "2024–2025",
        description: [
            "Converted Figma designs to React components",
            "Implemented authentication + Stripe",
            "UI/UX improvements & frontend maintenance",
            "Delivered multiple projects simultaneously",
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
        <section className="container mx-auto px-4 py-12 md:py-24 bg-secondary/20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
            >
                Work Experience
            </motion.h2>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                    <div>
                                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                                        <CardDescription className="text-base font-medium text-foreground/80">
                                            {exp.company}
                                        </CardDescription>
                                    </div>
                                    <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                                        {exp.period}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
