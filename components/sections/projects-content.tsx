"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "../ui/separator"

const projects = [
    {
        title: "eHomemart",
        description: "eHomemart is an online store specializing in home décor, interior accents, and event/party décor — covering a broad range of products from lighting, curtains, wall décor, candles, artificial flowers/greenery, vases & planters, tableware, linens, and more.",
        tech: ["Shopify", "Liquid", "React", "TailwindCSS", "SCSS", "Javascript", "Typescript", "jQuery", "Figma", "SEO", "Git"],
        image: "/projects/Ehomemart.png",
        link: "https://ehomemart.com/",
        tasks: [
            "Developed and maintained the eHomemart website using Shopify and Liquid.",
            "Implemented responsive design and mobile-first development to ensure the website was accessible and user-friendly on all devices.",
            "Collaborated with the marketing team and UI/UX designers.",
            "Fixed SEO issues and optimized the website for search engines and improve its visibility in search results.",
            "Fixed W3C validation errors",
            "Converted Figma design to Shopify liquid templates and React components",
            "Integrated Tailwindcss and migrate SCSS to TailwindCSS",
            "Integrated Typescript and React",
        ]
    },
    {
        title: "Liquidboosts",
        description: "Liquidboosts is an online service offering “boosting” for video games — especially helping players complete difficult challenges, reach higher ranks, or unlock rare in-game items (such as weapon camos) without needing to grind for hours.",
        tech: ["React", "Next.js", "Typescript", "tRPC", "Stripe", "ShadCn UI", "Git", "Vercel", "TailwindCSS", "Figma"],
        image: "/projects/liquidboosts.png",
        link: "https://liquidboosts.com/cod",
        tasks: [
            "Developed and maintained the Liquidboosts website using React and Next.js, ensuring a seamless user experience and efficient product management.",
            "Implemented responsive design and mobile-first development to ensure the website was accessible and user-friendly on all devices.",
            "Implemented a secure payment processing system using Stripe to ensure the website was secure and up-to-date with the latest security standards.",
            "Built dashboard using tRPC and React Query to ensure the website was secure and up-to-date with the latest security standards.",
        ],
    },
    {
        title: "CBHN Dashboard",
        description: "A comprehensive dashboard for managing provider and practitioner data, appointments, and reporting for a healthcare network.",
        tech: ["React", "Next.js", "Typescript", "TailwindCSS", "REST API", "React Query", "Git", "Vercel"],
        image: "/projects/cbhn.png",
        link: "https://directory.cassyork.com/",
        tasks: [
            "Developed and maintained the CBHN dashboard using React and Next.js, ensuring a seamless user experience and efficient product management.",
            "Built reusable components and UI elements to improve the dashboard's maintainability and scalability.",
            "Implemented Email template management for admin users",
            "Implemented forgot password functionality for users",
            "Collaborated with backend developers to implement API integrations and ensure the dashboard was secure and up-to-date with the latest security standards.",
            "Fixing bugs and improving performance",
        ],
    },
    {
        title: "City Burger",
        description: "City Burger — online presence & menu portal: The site serves as the online homepage for City Burger, presenting its “about us” story, locations, menu offerings and hours across its branches.",
        tech: ["Wordpress", "Elementor", "CSS", "PHP", "Linode"],
        image: "/projects/city-burger.png",
        link: "https://city-burger.tecplus.us/",
        tasks: [
            "Developed and maintained the City Burger website using Wordpress and Elementor.",
            "Built elementor templates for the website.",
            "Deployed and setup domain for the website on Linode.",
        ],
    },
    {
        title: "Process Bucket",
        description: "ProcessBucket is a web-based tool and platform designed to help businesses map, document, and improve their internal processes and workflows.",
        tech: ["Vue.js", "VueX", "Typescript", "Postgres", "NestJS", "GCP", "Gitlab", "Git"],
        image: "/projects/processbucket.png",
        link: "https://processbucket.com/",
        tasks: [
            "Developed and maintained the Process Bucket web application using Vue.js, NestJS, postgres and GCP.",
            "Built reusable components and UI elements to improve the website's maintainability and scalability.",
            "Github organization and repository management.",
            "Performance optimization and code refactoring.",
            "REST API integration.",
        ],
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio website showcasing my skills, projects, and experience as a web developer.",
        tech: ["React", "Next.js", "Typescript", "TailwindCSS", "Framer Motion", "Vercel", "Git"],
        image: "/projects/portfolio.png",
        link: "https://jaysontolentino.vercel.app/",
        tasks: [
            "Developed and maintained my personal portfolio website using React and Next.js.",
            "Built reusable components and UI elements to improve the website's maintainability and scalability.",
        ],
    },
]

export default function ProjectsContent() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Projects
                </h1>
                <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
                    Here are some of the projects I've worked on. Each one presented unique
                    challenges and learning opportunities.
                </p>
            </motion.div>

            <div className="grid gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="border-neutral-200 dark:border-neutral-700 flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
                            {/* <div className="w-full h-64 relative mb-4" >
                                <Image src={project.image} fill alt={project.title} className="object-cover" />
                            </div> */}
                            <CardHeader>
                                <CardTitle className="mb-4">{project.title}</CardTitle>
                                <CardDescription className="">
                                    {project.description}
                                </CardDescription>

                            </CardHeader>

                            <CardContent className="flex-1 space-y-10">
                                <Separator />
                                <div>
                                    <h2 className="text-xl font-semibold mb-4">Tasks and Responsibilities</h2>
                                    <ul className="list-disc list-inside">
                                        {project.tasks.map((task) => (
                                            <li key={task} className="mb-2 text-sm">
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Separator />
                                <div>
                                    <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <Badge
                                                variant="secondary"
                                                key={tech}
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <Separator />
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" asChild>
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        View <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
