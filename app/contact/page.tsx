import { Metadata } from "next"
import ContactContent from "@/components/sections/contact-content"

export const metadata: Metadata = {
    title: "Contact | Jayson Tolentino",
    description: "Get in touch with Jayson Tolentino for web development opportunities.",
}

export default function ContactPage() {
    return <ContactContent />
}
