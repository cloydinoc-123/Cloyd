import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/common/Section";

export function Hero() {
    return (
        <Section className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
            <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Crafting Basic Web Experiences   
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        I create responsive, elegant web designs that are easy to use and a pleasure to explore.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <Link href="/projects">
                        <Button size="lg" className="group w-full lg:w-auto">
                            Check out my work
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="w-full lg:w-auto">
                            Contact Me
                        </Button>
                    </Link>
                </div>

                <div className="flex items-center gap-4 text-muted-foreground">
                    <Link href="https://github.com/cloydinoc-123" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="mailto:hello@example.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="https://myaccount.google.com/personal-info?gar=WzEyMF0&hl=en&utm_source=OGB&utm_medium=act" className="hover:text-foreground transition-colors">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <Image
                    src="/doydie.jpg"
                    alt="Coding Environment"
                    width={450}
                    height={450}
                    className="rounded-2xl shadow-2xl object-cover w-full max-w-[500px] aspect-square transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
            </div>
        </Section>
    );
}