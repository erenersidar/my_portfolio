import { PlaceHolderImages } from "./placeholder-images";
import React from "react";
import {
  FlutterLogo,
  DartLogo,
  ReactLogo,
  NextJsLogo,
  TailwindCssLogo,
  FirebaseLogo,
  FigmaLogo,
  GenkitLogo,
  GeminiLogo,
  JiraLogo,
  AgileLogo,
  AndroidLogo,
  IosLogo,
  AiLogo
} from "@/components/ui/tech-logos";

const projectImages = {
  project1: PlaceHolderImages.find(p => p.id === 'project-1'),
  project2: PlaceHolderImages.find(p => p.id === 'project-2'),
  project3: PlaceHolderImages.find(p => p.id === 'project-3'),
  project4: PlaceHolderImages.find(p => p.id === 'project-4'),
  project5: PlaceHolderImages.find(p => p.id === 'project-5'),
  project6: PlaceHolderImages.find(p => p.id === 'project-6'),
  project7: PlaceHolderImages.find(p => p.id === 'project-7'),
  project8: PlaceHolderImages.find(p => p.id === 'project-8'),
}

export const services = [
  {
    title: "Mobile App Development",
    description: "Building high-performance, cross-platform mobile applications with Flutter & Dart. Focused on clean architecture, smooth animations, and a great user experience on both iOS and Android.",
    icons: [
      { icon: React.createElement(FlutterLogo) },
      { icon: React.createElement(DartLogo) },
      { icon: React.createElement(AndroidLogo) },
      { icon: React.createElement(IosLogo) },
    ],
  },
  {
    title: "Web Development",
    description: "Creating modern, responsive web applications using React and Next.js. I specialize in building fast, scalable front-ends with Tailwind CSS for styling and various cloud services for backend functionality.",
    icons: [
      { icon: React.createElement(ReactLogo) },
      { icon: React.createElement(NextJsLogo, { className: "dark:invert" }) },
      { icon: React.createElement(TailwindCssLogo) },
      { icon: React.createElement(FirebaseLogo) },
    ],
  },
  {
    title: "AI Integration",
    description: "Leveraging GenAI to build intelligent features, chatbots, and automated workflows. Experience with Google Genkit and Gemini models to create smart, data-driven applications.",
    icons: [
      { icon: React.createElement(AiLogo) },
      { icon: React.createElement(GeminiLogo) },
      { icon: React.createElement(GenkitLogo) },
    ],
  },
  {
    title: "UX/UI Design",
    description: "Designing intuitive and engaging user interfaces. From user research and wireframing to creating mockups and interactive prototypes in Figma, I focus on user-centric design principles.",
    icons: [
      { icon: React.createElement(FigmaLogo) }
    ],
  },
  {
    title: "Agile & Project Management",
    description: "Helping teams adopt agile methodologies, Clean Code principles, and efficient workflows using tools like Jira for transparent and effective project tracking.",
    icons: [
      { icon: React.createElement(AgileLogo, { className: "dark:invert" }) },
      { icon: React.createElement(JiraLogo) },
    ],
  },
  {
    title: "Technical Consultancy",
    description: "Providing expert advice on technology stacks, app architecture, and development processes. Focused on ensuring code quality, scalability, and best practices.",
    icons: [
      { icon: React.createElement(FlutterLogo) },
      { icon: React.createElement(NextJsLogo, { className: "dark:invert" }) },
    ]
  }
];

export const projects = [
  {
    title: "PAC SERVICE - Reinigungsdienste",
    description: "Moderne, interaktive Website für professionelle Reinigungsdienste mit intelligentem Preisrechner und Rabattsystem.",
    tags: ["React", "Vite", "Tailwind CSS"],
    image: projectImages.project1,
    demoUrl: "https://pac-service-website.vercel.app",
  },
  {
    title: "Hotel Booking Platform",
    description: "Elegante Hotel-Buchungsplattform mit Zimmersuche, Verfügbarkeitsprüfung und Reservierungssystem.",
    tags: ["Next.js", "React", "Tailwind CSS", "Booking"],
    image: projectImages.project2,
    demoUrl: "https://sidar-hotel-demo.vercel.app",
  },
  {
    title: "Travel Agency Website",
    description: "Reisebüro-Website mit Reiseplanung, Destinationen und Buchungsfunktionen für Flüge und Hotels.",
    tags: ["Next.js", "React", "Tailwind CSS", "Travel"],
    image: projectImages.project3,
    demoUrl: "https://sidar-travel-demo.vercel.app",
  },
  {
    title: "Booking Management System",
    description: "Umfassendes Buchungsverwaltungssystem für Termine, Reservierungen und Kundenverwaltung.",
    tags: ["Next.js", "React", "TypeScript", "Booking"],
    image: projectImages.project4,
    demoUrl: "https://sidar-booking-demo.vercel.app",
  },
  {
    title: "E-Commerce Shop",
    description: "Moderner Online-Shop mit Produktkatalog, Warenkorb und Checkout-Prozess.",
    tags: ["Next.js", "React", "Tailwind CSS", "E-Commerce"],
    image: projectImages.project5,
    demoUrl: "https://sidar-ecommerce-demo.vercel.app",
  },
  {
    title: "ShadCN Landing Page",
    description: "Professionelle Landing Page mit modernem Design, gebaut mit ShadCN/UI Komponenten.",
    tags: ["Next.js", "ShadCN/UI", "Tailwind CSS"],
    image: projectImages.project6,
    demoUrl: "https://sidar-shadcn-landing.vercel.app",
  },
  {
    title: "Fin10 SaaS Platform",
    description: "SaaS-Plattform für Finanzdienstleistungen mit Dashboard und Analysetools.",
    tags: ["Next.js", "React", "SaaS", "Finance"],
    image: projectImages.project7,
    demoUrl: "https://sidar-fin10-saas.vercel.app",
  },
  {
    title: "Simple Landing Page",
    description: "Minimalistische, conversion-optimierte Landing Page für Produkte und Services.",
    tags: ["Next.js", "Tailwind CSS", "Landing Page"],
    image: projectImages.project8,
    demoUrl: "https://sidar-landing-simple.vercel.app",
  },
];
