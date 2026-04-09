
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
    return (
        <Section className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gradient">
                        About Me
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        I’m a developer focused on designing visually appealing, user-friendly, and responsive web experiences.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <Button size="lg" className="group" asChild>
                        <Link href="/resume.jpg" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="mailto:hello@example.com">
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Me
                        </Link>
                    </Button>
                </div>
                
            </div>

            <div className="flex justify-center items-center">
                <Image
                    src="/resume.jpg"
                    alt="Coding Environment"
                    width={450}
                    height={450}
                    
                />
            </div>
        </Section>
    );
}
