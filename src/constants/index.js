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
    certi,
    carrent,
    jobit,
    tripguide,
    threejs,
    goldmedal,
    sports,

    
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work & Education",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
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
      name: "Arduino",
      icon: docker,
    },





    

  ];
  
  const experiences = [
    {
      title: "MERN Stack Developer (Internship)",
      company_name: "IBM (ALL SOFT SOLUTIONS AND SERVICES PVT. LTD).",
      icon: starbucks,
      iconBg: "white",
      date: "Feb 2024 - May 2024",
      points: [
        "Built a web application using the MERN stack, ensuring seamless integration between front-end and back-end components",
        "Designed dynamic, user-friendly interfaces with React, enhancing user engagement and experience.",
        "Implemented robust server-side logic using Node.js and Express, ensuring efficient data flow and system performance.",
        "Optimized database operations with MongoDB, improving data handling and scalability.",
      ],
    },
    {
      title: "Software Developer (Internship) ",
      company_name: "ARDENT COMPUTECH PVT. LTD. ",
      icon: tesla,
      iconBg: "white",
      date: "June 2023 - July 2023",
      points: [
        " Developed and deployed a mobile application using Flutter, contributing to a 30% increase in user engagement.",
        " Worked collaboratively with a team of 5 developers and 1 product manager to improve app functionality and enhance user experience.",
        " Identified and resolved over 50 bugs, resulting in a 30% reduction in application crashes and optimization of overall performance. ",
        " Integrated RESTful APIs with React.js frontend, achieving a 20% faster response time and seamless user interaction. ",
      ],
    },
    {
      title: "Graduation",
      company_name: "SHRI VAISHNAV VIDYAPEETH VISHWAVIDYALAYA, INDORE ",
      icon: shopify,
      iconBg: "white",
      date: "Oct 2020 - Oct 2024",
      points: [
        "Completed B.Tech in Computer Science with a current CGPA of 7.32.",
        "Developed strong knowledge in algorithms, data structures, web development, and mobile app development.",
        "Completed hands-on projects, including MERN stack applications and IoT-based solutions.",
        "Actively participated in coding competitions and extracurricular activities, enhancing problem-solving and teamwork skills.",
      ],
    },
    {
      title: "Secondary & Higher Secondary Education",
      company_name: "Kendriya Vidyalaya No.2, INDORE",
      icon: meta,
      iconBg: "white",
      date: "May 2017 - June 2020",
      points: [
        "Completed Higher Secondary Education (2019-2020) with 68.4% in the Science stream.",
        "Achieved 71.8% in Secondary Education (2017-2018), excelling in foundational subjects.",
        "Participated in school-level competitions, demonstrating leadership and teamwork skills.",
        "Built a strong foundation in mathematics and science, fostering interest in computer science and programming.",
      ],
    },
  ];
  
  const testimonials = [
    {heading:"State Level Powerlifting Champion",
      testimonial:
        "I recently won a gold medal in the Madhya Pradesh Federation of Powerlifting ",
      name: "Gold Medal",
      designation: "Madhya Pradesh Federation",
      company: "Powerlifting",
      icon:goldmedal,
    },
    {heading:"College Sports Captain",
      testimonial:
        "My leadership skills were recognized by the Sports department when I was selected as the sports captain of my college.",
      name: "2021-2024",
      designation: "Shri Vaishnav Institute",
      company: "Information Technology",
      icon:sports,
    },
    {heading:"Some Of My Certificates",
      testimonial:
        "I successfully completed and passed in Machine Learning with Python &  How to Build Watson AI and Swift APIs.",
      name: "Sumit Yadav",
      designation: "Cognitive Class",
      company: "IBM",
      icon:certi,
    },
  ];
  
  const projects = [
    {
      name: "HomeService-providers",
      description:
        "AllRound is a full-stack web app that connects users with local service providers for home services like cleaning, plumbing, and electrical work, streamlining bookings for a seamless user experience and efficient provider management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Sumit-Yadav-v/Allround-homeServiceprovider/tree/2942b13b3cb572abc16662e6dd05d7e50835e820",
    },
    {
      name: "Smart-WaterBottle",
      description:
        "The Smart Water Bottle is an IoT-based project that tracks water level, temperature, and sends hydration reminders. Built with Arduino IDE, Blynk, and ESP8266, it provides real-time monitoring to ensure proper hydration.",
      tags: [
        {
          name: "IOT",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "green-text-gradient",
        },
        {
          name: "Blynk",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Sumit-Yadav-v/Smart-Water-bottle/tree/29fef46deb931645f7aca787df46a10f698713d1",
    },
    {
      name: "Trade-Web",
      description:
        "The Trading Page offers information about trading courses and plans, featuring interactive 3D elements with Three.js and fast performance using Vite. It also includes a response form for direct user-client communication.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "vite",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Sumit-Yadav-v/Trade-web.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };