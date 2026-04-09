import { Section } from "@/components/common/Section";

type ExperienceType = {
  title: string;
  description: string;
  period: string;
  company: string;
};

export function Experience() {
  const experiences: ExperienceType[] = [
    {
      title: "UI Design Practice",
      description:
        "Designing simple interfaces and layouts and currently improving my understanding of user experience and visual design.",
      period: "Jan 2023 - Present",
      company: "Self Study",
    },
    {
      title: "Web Development",
      description:
        "Learning the fundamentals of web development including HTML, CSS, and basic programming concepts.",
      period: "Mar 2022 - Dec 2022",
      company: "School Projects",
    },
    {
      title: "System Analysis Practice",
      description:
        "School Activity Practiced analyzing simple systems and understanding how technology supports different types of businesses.",
      period: "Sep 2021 - Feb 2022",
      company: "School Activity",
    },
  ];

  return (
    <Section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My Learning Experience
        </h2>
      </div>

      <div className="relative border-l border-border ml-3 md:ml-6 space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="ml-6 relative">
            <span className="absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full border border-primary bg-background ring-4 ring-background" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                {experience.period}
              </span>
            </div>
            <p className="text-primary font-medium mb-2">{experience.company}</p>
            <p className="text-muted-foreground">{experience.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}