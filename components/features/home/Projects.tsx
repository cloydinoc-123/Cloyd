import { Section } from "@/components/common/Section";
import { ProjectCard } from "@/components/common/ProjectCard";
import { PROJECTS } from "@/constants/project";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Projects() {
    return (
        <Section id="projects" className="space-y-12">
            <SectionHeading title="Featured Projects" description="Here are some of the projects I've worked on recently. Each one presented unique challenges and learning opportunities." />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.slice(0, 3).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            <div className="flex justify-center">
                <Link href="/projects">
                    <Button variant="outline" size="lg" className="group">
                        Check out all projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </Section>
    );
}