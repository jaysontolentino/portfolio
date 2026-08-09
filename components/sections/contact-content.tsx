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
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <p className="font-mono text-xs text-muted-foreground">{"// contact.send()"}</p>
                <h1 className="mb-4 mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Get in Touch
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground">
                    Have a project in mind or just want to say hi? I&apos;d love to hear from
                    you.
                </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-display">Send a Message</CardTitle>
                            <CardDescription>
                                I&apos;ll get back to you as soon as possible.
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
            className={`mt-4 rounded-md border p-4 text-sm ${
                type === "success"
                    ? "border-signal-cyan/30 bg-signal-cyan/10 text-signal-cyan"
                    : "border-destructive/30 bg-destructive/10 text-destructive"
            }`}
        >
            {message}
        </div>
    )
};