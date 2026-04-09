"use client";

import Image from "next/image";
import { X } from "lucide-react";

type ProjectModalProps = {
    project: any;
    onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-3xl bg-background rounded-lg overflow-hidden shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 bg-background/80 p-2 rounded-full border"
                >
                    <X className="w-4 h-4" />
                </button>

                {/* Image */}
                <div className="relative w-full h-[300px]">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-muted-foreground">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="border px-2 py-1 text-xs rounded-md"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}