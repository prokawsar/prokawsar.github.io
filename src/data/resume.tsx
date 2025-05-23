import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Kawsar Ahmed",
  initials: "KA",
  url: "https://prokawsar.github.io/",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/dhaka",
  description:
    "Full Stack Developer. I love building things and helping people. Very active on Email.",
  summary:
    "I specialize in building scalable, user-centric web and mobile applications with modern technologies like SvelteKit, React, TypeScript, and Node.js. From real-time collaboration tools to API integrations, I deliver impactful solutions tailored to business needs.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Svelte",
    "SvelteKit",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "prokawsar@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/prokawsar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/prokawsar",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/pro_kawsar",
        icon: Icons.x,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1Is-jw20KspoaF6Wd3lD_sLcmQ1Mn8nAc/view?usp=sharing",
        icon: Icons.globe,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:prokawsar@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  education: [
    {
      school: "Jahangirnagar University, Savar, Dhaka",
      href: "https://juniv.edu/",
      degree: "Post Graduate Diploma in IT",
      logoUrl: "/ju.png",
      start: "2020",
      end: "2021",
    },
    {
      school: "University of Greenwich, UK",
      href: "https://www.gre.ac.uk/",
      degree: "Bachelor's Degree of Information Technology (BIT)",
      logoUrl: "/ug.png",
      start: "2014",
      end: "2018",
    },
    {
      school: "Tamirul Millat Kamil Madrasha, Tongi, Dhaka",
      href: "https://www.tmm.edu.bd/",
      degree: "High School, Higher Secondary",
      logoUrl: "/tmkm.jpg",
      start: "2009",
      end: "2013",
    },
  ],
  project: [
    {
      title: "Paper Cost",
      description:
        "A Mobile focused web app for calculating paper cost for carton factory.",
      links: [
        {
          type: "Live",
          href: "https://paper-cost.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prokawsar/paper-cost",
          icon: <Icons.github className="size-3" />,
        },
      ],
      techs: [
        "Svelte",
        "SvelteKit",
        "JavaScript",
        "TypeScript",
        "Tailwind",
        "Supabase",
      ],
    },
    {
      title: "Paper Cost (React version)",
      description:
        "A Mobile focused web app for calculating paper cost for carton factory.",
      links: [
        {
          type: "Live",
          href: "https://paper-cost-react.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prokawsar/paper-cost-react",
          icon: <Icons.github className="size-3" />,
        },
      ],
      techs: [
        "React",
        "React Router",
        "React Hook Form",
        "JavaScript",
        "TypeScript",
        "Antd",
        "Tailwind",
        "Supabase",
      ],
    },
    {
      title: "ARK-Builders Website",
      description: "Landing page for ARK-builders organisation.",
      links: [
        {
          type: "Live",
          href: "https://ark-builders.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ARK-Builders/website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      techs: [
        "Svelte",
        "SvelteKit",
        "TypeScript",
        "Tailwind",
        "Shadcn",
        "Tauri",
      ],
    },
    {
      title: "ARK-Gallery",
      description: "An image gallery app for cross platform",
      links: [
        {
          type: "Source",
          href: "https://github.com/ARK-Builders/ARK-Gallery",
          icon: <Icons.github className="size-3" />,
        },
      ],
      techs: [
        "Svelte",
        "SvelteKit",
        "TypeScript",
        "Tailwind",
        "Shadcn",
        "Tauri",
      ],
    },
    {
      title: "kinde-sveltekit-sdk",
      description: "Kinde open-source auth system for SvelteKit",
      links: [
        {
          type: "Source",
          href: "https://github.com/kinde-oss/kinde-sveltekit-sdk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      techs: ["Svelte", "SvelteKit", "TypeScript"],
    },
    {
      title: "CSMiddler",
      description:
        "A buy and sell CS2 skins site. Worked as Frontend developer",
      links: [
        {
          type: "Live",
          href: "https://www.csmiddler.com/EN",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      techs: ["Svelte", "SvelteKit", "TypeScript", "Tailwind"],
    },
    {
      title: "NorthernIrelandJobs",
      description: "A jobs portal site. Worked as Frontend developer",
      links: [
        {
          type: "Live",
          href: "https://northern-ireland-jobs.co.uk/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      techs: ["Svelte", "JavaScript", "AWS Amplify"],
    },
    {
      title: "Petsafe",
      description: "A Korean site about Petsafe",
      links: [
        {
          type: "Live",
          href: "https://hyeon-petsafe.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prokawsar/hyeon",
          icon: <Icons.github className="size-3" />,
        },
      ],
      techs: ["Svelte", "SvelteKit", "TypeScript", "Tailwind"],
    },
    {
      title: "Todo Board",
      description: "A basic todo task management app.",
      links: [
        {
          type: "Live",
          href: "https://todo-board-react.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prokawsar/todo-board-react",
          icon: <Icons.github className="size-3" />,
        },
      ],
      techs: [
        "React",
        "React Router",
        "React Hook Form",
        "JavaScript",
        "TypeScript",
        "Zod",
        "Tailwind",
        "Supabase",
      ],
    },
  ],
  works: [
    {
      company: "TeamHosty",
      title: "Frontend Engineer",
      dates: "July 1st 2024 - Present",
      location: "Lithuania (Remote)",
      linkedin: "https://www.linkedin.com/company/teamhosty",
      description: [
        "Developing dashboard for infrastructure portal that is being used for internal clients.",
        "Worked on 20+ UI components for a making customized admin panel.",
      ],
      image: "/teamhosty.jpg",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.teamhosty.com/",
        },
      ],
    },
    {
      company: "Shopping Cart Elite (HireOnceAndForever)",
      title: "Frontend Engineer",
      dates: "October 1st 2021 - January 3rd, 2024",
      location: "New York (Remote)",
      linkedin: "https://www.linkedin.com/company/shopping-cart-elite",
      description: [
        "Developed 30+ UI components for a crypto banking system, improved user engagement by 30%.",
        "Led the conversation of a .NET web application into Svelte and SvelteKit, reduced load times by 40%.",
      ],
      image: "/hof.png",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hireonceandforever.com/articles/hire-once-and-forever-home/",
        },
        {
          title: "Reference letter",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1oWA-SHGRYc6h5dBoTa8A3ESG7LMG-I8g/view?usp=sharing",
        },
      ],
    },
    {
      title: "Frontend Engineer",
      company: "xBase",
      dates: "May 1st 2023 - August 1st, 2023",
      location: "Davis, California",
      description: [
        "Redesigned the app UI, increased user satisfaction by 40%.",
        "Refactored 4000+ lines of code, improved maintainability and reduced bug reports by 40%.",
        "Implemented key features like drag & drop and an interactive onboarding process, increases to 25% user retention.",
      ],
      image: "/xbase.png",
      linkedin: "https://www.linkedin.com/company/xbasehq/",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://xbase.so",
        },
        {
          title: "Chrome Extension",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://chromewebstore.google.com/detail/xbase-extension-search-an/ipldmffgjegnflofelcomladejjllfli",
        },
      ],
    },
    {
      company: "Kws3 Media Ltd. UK",
      title: "Full Stack Developer",
      dates: "November 1st 2018 - December 1st, 2021",
      location: "Remote",
      linkedin: "https://www.linkedin.com/company/kws3-media-ltd/",
      description: [
        "Developed 4+ admin dashboards with reporting and charting, which reduced data analysis time by 40%.",
        "Developed and integrated REST API with frontend.",
        "Contributed to developing an internal elements library.",
      ],
      image: "/kws3.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://kws3.media/",
        },
        {
          title: "Reference letter",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1FX0vPWlF26nDBMpKCVMwrooZ_NZfhL0U/view?usp=sharing",
        },
      ],
    },
  ],
} as const;
