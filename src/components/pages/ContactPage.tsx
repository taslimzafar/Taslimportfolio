"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";


export default function ContactPage() {
    return (
        <section
            id="contact"
            className="bg-transparent max-h-screen flex flex-col items-center justify-center py-16 px-4 mb-12"
        >
            <div className="max-w-xl text-center space-y-7">
                <h2 className="text-4xl sm:text-6xl font-serif text-primary">Get in Touch</h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                    Always open to new opportunities, collaborations, or just a good conversation.
                    You can reach me directly via email or LinkedIn.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <HoverBorderGradient containerClassName="rounded-full">
                        <a
                            href="mailto:mdtaslimtk786@gmail.com"   
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-foreground transition"
                        >
                        <div className="flex items-center gap-2">
                            <span className="font-serif text-background dark:text-foreground tracking-wide">Email Me</span>
                        </div>
                        </a>
                    </HoverBorderGradient>
                    
                    <HoverBorderGradient containerClassName="rounded-full">
                        <a
                            href="https://www.linkedin.com/in/md-taslim-developer/"   
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-foreground transition"
                        >
                        <div className="flex items-center gap-2">
                            <span className="font-serif text-background dark:text-foreground tracking-wide">LinkedIn</span>
                        </div>
                        </a>
                    </HoverBorderGradient>
                </div>
            </div>
        </section>
    );
}
