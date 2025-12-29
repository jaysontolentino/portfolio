"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "../ui/badge"

export function Hero() {
    return (
        <section className="max-w-5xl mx-auto flex min-h-full flex-col-reverse md:flex-row justify-end md:justify-center px-4 py-12 md:py-24">
            <div className="w-full lg:w-3/4 flex flex-col space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center md:text-left mt-4"
                >
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        Jayson Tolentino
                    </h1>
                    <h2 className="mt-4 text-xl font-medium text-muted-foreground sm:text-xl md:text-2xl lg:text-4xl">
                        Web Developer
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-lg text-muted-foreground sm:text-xl text-center md:text-left"
                >
                    Hi, I'm Jayson — a web developer with over 8 years of experience.
                    I build modern, fast, responsive and user-friendly websites. I focus on clean code, smooth interactions, and thoughtful design to create digital experiences that feel intuitive and polished.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-4 justify-center md:justify-start items-center"
                >
                    {["Typescript", "React", "Tailwind CSS", "Node.js", "SQL", "PHP", "HTML"].map((tech) => (
                        <Badge
                            variant="outline"
                            key={tech}
                        >
                            {tech}
                        </Badge>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-4 justify-center md:justify-start items-center"
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

            <div className="w-full lg:w-1/4 flex flex-col justify-center items-center md:justify-start">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Image
                        src="/profile.jpg"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                        className="w-48 lg:w-72 aspect-square rounded-full object-cover grayscale-50 hover:grayscale-0 transition-all duration-300"
                    />
                </motion.div>
            </div>
        </section>
    )
}
