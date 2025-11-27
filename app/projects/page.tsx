import { Metadata } from "next"
import ProjectsContent from "@/components/sections/projects-content"

export const metadata: Metadata = {
    title: "Projects | Jayson Tolentino",
    description: "Showcase of web development projects by Jayson Tolentino.",
}

export default function ProjectsPage() {
    return <ProjectsContent />
}
