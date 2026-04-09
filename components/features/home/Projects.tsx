"use client";

import { useState } from "react";
import { Section } from "@/components/common/Section";
import { ProjectCard } from "@/components/common/ProjectCard";
import { ProjectModal } from "@/components/common/ProjectModal";
import { PROJECTS } from "@/constants/project";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

// Reuse the Project type you used in ProjectCard / ProjectModal
type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    demo: string;
  };
};

export function Projects() {
  // typed selectedProject state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects" className="space-y-12">
      <SectionHeading
        title="Featured Projects"
        description="Here are some of the projects I've worked on recently."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.slice(0, 3).map((project: Project) => (
          <ProjectCard
            key={project.title} // use title as key
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/projects">
          <Button variant="outline" size="lg">
            Check my Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Section>
  );
}