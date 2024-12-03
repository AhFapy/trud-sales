import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre Nosotros",
    },
    {
      id: "work",
      title: "Resultados",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Ventas",
      icon: web,
    },
    
    {
      title: "Dirección de Procesos",
      icon: figma,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
    
  
  const projects = [
    {
      name: "Banking App",
      description:
        "This Landing Page for a Banking App is a Personal Project I developed to work on my skills",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "responsive",
          color: "green-text-gradient",
        },
        {
          name: "landing-page",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://ahfa-bank.netlify.app/",
    },
    {
      name: "Roudani Watches",
      description:
        "Full website for an eCommerce shop with full Shopify and Code features like buying and seeing products",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "responsive",
          color: "green-text-gradient",
        },
        {
          name: "eCommerce",
          color: "red-text-gradient",
        },
      ],
      source_code_link: "https://roudaniofficial.com/",
    },
    {
      name: "Medito Donation Page",
      description:
        "This is the project I delivered for a Web Development Competition hosted by Medito, a meditation application",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "responsive",
          color: "green-text-gradient",
        },
        {
          name: "eCommerce",
          color: "red-text-gradient",
        },
      ],
      source_code_link: "https://roudaniofficial.com/",
    },
  ];
  
  export { services, technologies, projects };