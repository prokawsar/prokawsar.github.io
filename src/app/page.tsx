import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Recommendations } from "@/components/reviews";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { IconCloud } from "@/components/ui/icon-cloud";
import { RainbowButton } from "@/components/ui/rainbow-button";
import WordPullUp from "@/components/ui/word-pull-up";
import { WorkCard } from "@/components/work-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "svelte",
  "tailwindcss",
];
export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 z-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-6xl">
          <div className="gap-2 flex flex-col items-center">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-44 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
            <div className="flex-col flex items-center text-center flex-1 space-y-1.5">
              <GradualSpacing
                className="text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-6xl md:leading-[5rem]"
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-2xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold text-center">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <WordPullUp
            className="prose max-w-full font-normal text-base text-justify md:text-start dark:prose-invert px-3 sm:px-0"
            words={DATA.summary}
          ></WordPullUp>
        </BlurFade>
      </section>
      <section id="work">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="relative inline-block rounded-lg px-3 py-1">
                  <RainbowButton className="!bg-slate-400 text-xl">
                    Work
                  </RainbowButton>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Work experience
                </h2>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 px-4 divide-y divide-dashed border-l">
              {DATA.works.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <WorkCard
                    title={project.title}
                    company={project.company}
                    description={project.description}
                    linkedin={project.linkedin}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex w-full items-center justify-center">
              <RainbowButton className="!bg-slate-400 text-xl">
                Skills
              </RainbowButton>
            </div>
            <h2 className="text-xl font-bold text-center md:text-start">
              I am proficient with
            </h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>

          <div className="relative flex size-full max-w-lg mx-auto items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg">
                  <RainbowButton className="!bg-slate-400 text-xl">
                    My Projects
                  </RainbowButton>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out projects that I have worked on
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.project.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  {...{
                    title: project.title,
                    description: project.description,
                    links: project.links,
                    techs: project.techs,
                  }}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="recommendation">
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex w-full items-center justify-center">
              <RainbowButton className="!bg-slate-400 text-xl">
                Recommendation
              </RainbowButton>
            </div>
          </BlurFade>
          <Recommendations />
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex w-full items-center justify-center">
              <RainbowButton className="!bg-slate-400 text-xl">
                Education
              </RainbowButton>
            </div>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <RainbowButton className="!bg-slate-400 text-xl">
                Contact
              </RainbowButton>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  target="_blank"
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on LinkedIn
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
