import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin} from "@tabler/icons-react";

const ProjectInfo = [
    {
        title : "Ecommerce website",
        desc:"Ecommerce website is fully responsive website built using HTML, CSS and JavaScript, offering a seamless shopping.User can add items to a wishlist or remove them, search for specific products, and add to shoping cart for purchase.This is fully frontend website. ",
        image:"Ecomwebsite.png",
        live:"true",
        technologies:["HTML", "CSS", "JavaScript"],
        link:"https://amjadraza19.github.io/Ecommerce-website/",
        github:"https://github.com/amjadraza19/Ecommerce-website"
    },
    {
        title : "Food website",
        desc:"Creating a frontend for a food delivery app involves designing an intuitive and engaging user interface that provides users with a seamless experience while browsing restaurants, selecting dishes, and placing orders.",
        image:"foodwebsite.png",
        live:"true",
        technologies:["React JS", "Tailwind CSS"],
        link:"https://food-delivery-website-by-raza.netlify.app/",
        github:"https://github.com/amjadraza19/Ecommerce-website"
    },
    {
        title : "Online Testing System",
        desc:"The Online Testing System (OTS) is designed to provide an efficient platform for users to assess their knowledge and skills through various tests and quizzes. The system supports user authentication, question selection, score calculation, and overall grade assessment, ensuring a seamless experience for both learners and administrators.",
        image:"ots.png",
        live:"true",
        technologies:["Python", "Django", "Database"],
        link:"https://amjadraza1912.pythonanywhere.com/OTS/login",
        github:"https://github.com/amjadraza19/ots_system"
        
    },
    {
        title : "Random Gifs Generator",
        desc:"A fun and interactive website where users can search for meme GIFs based on any keyword. It fetches and displays random GIFs instantly, providing endless entertainment. The site is easy to use and perfect for quick meme discovery and sharing. ",
        image:"randommeme.png",
        live:"true",
        technologies:["React Js", "Fetch API"],
        link:"https://random-meme-gifs.vercel.app/",
        github:"https://github.com/amjadraza19/random-meme-gifs"
        
    },
    {
        title : "simons game",
        desc:"This is a simple Simon Says Game built using HTML, CSS, and JavaScript. The game challenges the player to repeat a randomly generated sequence of button flashes in the correct order. The sequence grows with each successful level, and the game continues until the player makes a mistake. ",
        image:"simonsgame.png",
        live:"true",
        technologies:["HTML", "CSS", "JavaScript"],
        link:"https://amjadraza19.github.io/simons_game/",
        github:"https://github.com/amjadraza19/simons_game/tree/main"
        
    },
    {
        title : "Age Calculator",
        desc:"This is a simple Age Calculator Website built with HTML, CSS, and JavaScript. The website allows users to input their birthdate in 'DD-MM-YYYY' format and calculates their age in various formats like years, months, weeks, days, hours, minutes, and seconds.",
        image:"agecalculator.png",
        live:"true",
        technologies:["HTML", "CSS", "JavaScript"],
        link:"https://amjadraza19.github.io/age-calculator/",
        github:"https://github.com/amjadraza19/age-calculator"
        
    },
    {
        title : "Color Switcher",
        desc:"This is a Background Color Changer webpage created using HTML, CSS, and JavaScript. It allows users to dynamically change the background color of the webpage by clicking on color blocks.",
        image:"colorswitcher.png",
        live:"true",
        technologies:["HTML", "CSS", "JavaScript"],
        link:"https://amjadraza19.github.io/color_change_background/",
        github:"https://github.com/amjadraza19/color_change_background"
        
    },
]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Tailwind CSS","Bootstrap", "Mantine UI"]
    },
    {
        title: "Backend",
        skills: ["Python", "Django", "MySQL", "MYSql Workbench"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Python", "JavaScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "Pycharm Community"]
    }
]

const ExperienceInfo = [
    {
        role: "Backend Developer",
        company: "TechAhead",
        date: "July 2024 - September 2024",
        desc: "At TeachAhead, I focused on backend development, using Python, Django, and SQL to build and maintain efficient systems. I worked on developing and optimizing backend functionalities, including user authentication, data management, and API integrations. Collaborating closely with the team, I ensured seamless performance and security in all backend processes, contributing to scalable and high-quality software solutions.",
        skills: ["Python", "Django", "MySQL WorkBench"]
    }
]
const Slugs = [
    "pycharm community",
    "javascript",
    "Python",
    "react",
    "html5",
    "css3",
    "c",
    "c++",
    "postman",
    "mysql",
    "mysql workbench",
    "postgresql",
    "django",
    "vercel",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
    "vite",
];

const socialLinks = [
    { link: "https://github.com/amjadraza19", icon: IconBrandGithub },
    { link: "www.linkedin.com/in/md-amjad-raza-836b7a256", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/raza_amjad786/", icon: IconBrandInstagram }, 
    { link: "https://leetcode.com/u/amjad1912/", icon: IconBrandLeetcode }
];

export { ProjectInfo, SkillInfo, ExperienceInfo, socialLinks, Slugs};