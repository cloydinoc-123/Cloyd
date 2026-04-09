import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    project: any;
    onClick: () => void;
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <div
            onClick={onClick}
            className="cursor-pointer group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg hover:-translate-y-1 h-full flex flex-col"
        >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden rounded-md border shrink-0">
                <Image
                    src={project.image} // ✅ FIXED
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 flex flex-col flex-grow">
                <div className="space-y-2">
                    <h3 className="font-bold text-xl">
                        {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                        {project.description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="border px-2 py-1 text-xs rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div
                    className="flex pt-4 mt-auto border-t"
                    onClick={(e) => e.stopPropagation()} // ✅ prevents modal trigger
                >
                    <div className="flex gap-2 w-full">
                        <Button size="sm" className="flex-1" asChild>
                            <Link href={project.links.github} target="_blank">
                                <Github className="h-4 w-4 mr-2" />
                                GitHub
                            </Link>
                        </Button>

                        <Button variant="outline" size="sm" className="flex-1" asChild>
                            <Link href={project.links.demo} target="_blank">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}