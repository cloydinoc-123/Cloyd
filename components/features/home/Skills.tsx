
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Skills() {
    const skills = [
        { name: "Frontend", items: ["Next.js", "Tailwind CSS", "TypeScript"] },
        { name: "Backend", items: ["Node.js", "Express"] },
        { name: "Tools", items: ["Git","VS Code"] },
    ];

    return (
        <Section id="skills" className="bg-muted rounded-lg">
            <div className="space-y-12 text-center md:text-left px-6 lg:px-20">
                <SectionHeading title="Skills & Technologies" description="A list of the technologies I work with on a daily basis. I'm always learning new things to stay up-to-date." />

                <div className="grid gap-8 grid-cols-2 lg:grid-cols-3 text-left">
                    {skills.map((skill) => (
                        <div key={skill.name} className="space-y-4">
                            <h3 className="text-xl font-bold tracking-tight">{skill.name}</h3>
                            <ul className="grid gap-2">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}