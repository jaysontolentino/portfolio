"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = {
    Frontend: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "HTML",
        "CSS",
        "UI/UX",
        "Vue.js",
        "Vuex",
        "Preact",
    ],
    Backend: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "Python (REST APIs)",
        "PostgreSQL",
        "PHP",
        "Laravel",
        "CodeIgniter",
    ],
    Tools: ["Git", "Stripe Integration", "GraphQL", "Electron", "TypeORM"],
}

export function Skills() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 md:py-24">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
            >
                Skills
            </motion.h2>

            <div className="grid gap-6 md:grid-cols-3">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>{category}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
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
        </section>
    )
}
