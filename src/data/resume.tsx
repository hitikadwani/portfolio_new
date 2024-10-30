import { Home, HomeIcon, NotebookIcon } from "lucide-react";
import { Icons } from "@/components/ui/icons";

export const DATA = {
  name: "Hitik Adwani | Personal Portfolio",
  initials: "HA",
  location: "Bengaluru, India",
  description: "I am a Full Stack Developer , NextJS Developer and Software Engineer. I love building things and helping people. Very active on twitter.",
  summary: "I'm a Pre-Final Year Student specializing in Data Science and AI, with a strong foundation in Data Structures and Algorithms. I love solving Complex Problems and seeing my Code work. Building things that work smoothly drives me forward. I enjoy learning new Tech and am always ready to pick up new Skills. Currently seeking Software Developer Internship opportunities where I can apply my technical expertise while gaining invaluable industry experience.",
  avatarUrl: "/me1.jpg",
  skills: [
    "C/C++",
    "Java",
    "JavaScript",
    "Data structures",
    "Algorithms",
    "Typescript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Git",
    "PostgresQL",
    "Next.js",
    "Tailwind CSS",
    "Docker",
    "Recoil",
    "Express Js",
    "MongoDB",
    "REST APIs (OpenAPI Specification)",
    "CI/CD",
    "Prisma",
    "JWT",
    "Zod",
    "Next-Auth",
    "Cloudflare Workers",
    "Serverless Backends",
    "Hono",
    "Framer Motion",
    "TurboRepo",
  ],
  navbar: [
    {href: "/", icon: HomeIcon, label: "Home"},
    {href: "blog", icon: NotebookIcon, label: "Blog"}
  ],
  contact: {
    email: "hitikadwani0902@gmail.com",
    tel: "+919375548030",
    social: {
        Github: {
            name: "Github",
            url: "https://github.com/hitikadwani",
            icon: Icons.github,
            navbar: true,
        },
        LinkedIn: {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/hitik-adwani-a63095250/",
            icon: Icons.linkedin,
    
            navbar: true,
        },
        X: {
            name: "X",
            url: "https://x.com/Hitik0902",
            icon: Icons.x,
    
            navbar: true,
        },
        email: {
            name: "Send Email",
            url: "mailto:hitikadwani0902@gmail.com?subject=Portfolio Contact",
            icon: Icons.email,
    
            navbar: false,
        },
    }
  },
  education: [
    {
      school: "Indian Institute of Information Technology, Dharwad",
      href: "https://iiitdwd.ac.in/",
      degree: "Bachelor's Degree In Technology (B.Tech)",
      logoUrl: "/iiit.png",
      start: "2022",
      end: "2026",
      description: "Currently pursuing B.Tech in Data Science and AI at IIIT Dharwad. Throughout my coursework, I gained proficiency in core computer science subjects including C/C++, Java, Data Structures, Algorithms, Database Management Systems, SQL, Operating Systems, Computer Networks, Web Development, and Software Engineering."
    },
    {
      school: "Bhagwan Mahavir International School, Surat",
      href: "https://bmis.in/",
      degree: "Senior Secondary School",
      logoUrl: "/bmis.png",
      start: "2020",
      end: "2022",
      description: "I completed my Senior Secondary education at Bhagwan Mahavir International School, achieving 90% in Physics, Chemistry, and Mathematics."
    },
    {
      school: "The Radiant International School, Surat",
      href: "https://www.tris.edu.in/",
      degree: "Secondary School",
      logoUrl: "/radiant.png",
      start: "2008",
      end: "2020",
      description: "I completed my Secondary education at The Radiant International School, securing 94.4% marks."
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;