"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export function CtaBand() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-xl border border-border bg-card px-6 py-12 text-center md:px-16"
            >
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-linear-to-br from-signal-amber/10 via-transparent to-signal-cyan/10"
                />
                <p className="relative font-mono text-xs text-muted-foreground">{"// status: open to work"}</p>
                <h2 className="relative mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    Have a build in mind, front to back?
                </h2>
                <p className="relative mx-auto mt-3 max-w-xl text-muted-foreground">
                    I take on projects that need someone comfortable across the whole stack —
                    interface, API, and database included.
                </p>
                <div className="relative mt-6 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/projects">
                            See the Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/contact">
                            <Mail className="mr-2 h-4 w-4" /> Get in Touch
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </section>
    )
}
