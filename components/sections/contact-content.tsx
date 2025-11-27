"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import { sendMessage } from "@/app/contact/actions"
import { useFormStatus } from "react-dom"

const contactData = {
    email: "jaysontolentino.ph@gmail.com",
    phone: "+63 (920) 591-3996",
    location: "Remote / Worldwide",
}

export default function ContactContent() {

    const [formStatus, setFormStatus] = useState<"error" | "success" | undefined>(undefined);
    const status = useFormStatus();
    
    async function handleSubmit(formData: FormData) {
        const res = await sendMessage(formData);
        
        if (res.success) {
        setFormStatus("success");
        } else {
        setFormStatus("error");
        }
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Get in Touch
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground">
                    Have a project in mind or just want to say hi? I'd love to hear from
                    you.
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="border-neutral-200 dark:border-neutral-700">
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                            <CardDescription>
                                Feel free to reach out through any of these channels.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-3 text-muted-foreground">
                                <Mail className="h-5 w-5" />
                                <a href={`mailto:${contactData.email}`} className="hover:text-primary">
                                    {contactData.email}
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 text-muted-foreground">
                                <Phone className="h-5 w-5" />
                                <span>{contactData.phone}</span>
                            </div>
                            <div className="flex items-center space-x-3 text-muted-foreground">
                                <MapPin className="h-5 w-5" />
                                <span>{contactData.location}</span>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Card className="border-neutral-200 dark:border-neutral-700">
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>
                                I'll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Name
                                    </label>
                                    <Input id="name" name="name" placeholder="Your name" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Email
                                    </label>
                                    <Input id="email" type="email" name="email" placeholder="your@email.com" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="How can I help you?"
                                        className="min-h-[120px]"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full" disabled={status.pending}>
                                    {status.pending? "Sending..." : "Send Message"}
                                </Button>
                            </form>

                            {formStatus === "success" && (
                                <Alert type="success" message="Your message has been sent successfully!" />
                            )}
                            {formStatus === "error" && (
                                <Alert type="error" message="There was an error sending your message. Please try again later." />
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}


const Alert = ({ type, message }: { type: "error" | "success"; message: string }) => {
    return (
        <div
            className={`mt-4 rounded-md p-4 ${
                type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
            }`}
        >
            {message}
        </div>
    )
};