import IMG1 from "./assets/portfolio1.png";
import IMG2 from "./assets/portfolio2.png";
import IMG3 from "./assets/portfolio3.png";
import IMG4 from "./assets/portfolio4.png";
import IMG5 from "./assets/portfolio5.png";
import IMG6 from "./assets/portfolio6.png";
import IEEE from './assets/ieee.jpg';
import SENTEC from './assets/sentec.jpg';

const dataabout = {
    experience: 1,
    education: "Bachelors",
    projects: "10+",
    title: "About my self",
    about: "I have over a couple of years of experience in delivering web applications and I like making life better through technology. My work currently consists of freelance clients and side projects. My freelance full stack development roots are in React, Firebase, Node.js, MongoDB, and others.",
    aboutme: "ELectrical Engineer and a MERN stack developer trying to seek and mantain full-time position that offers professional challenges utilizing skills, excellent timemanagement & problem solving skills.",
};
const worktimeline = [

    {
        img: SENTEC,
        jobtitle: "Advisor Technical",
        where: "Society For The Promotion Of Science, Engineering & Technology",
        date: "Sept, 2021 - Sept 2022",
        link: "https://www.facebook.com/sentecneduet",
        short: "SENTEC"
    },
    {
        img: IEEE,
        jobtitle: "Director Technical",
        where: "IEEE Student Branch NEDUET",
        date: "March, 2020 - March 2021",
        link: "https://www.facebook.com/IEEENEDUET",
        short: "IEEE-SB NEDUET"

    },
    {
        img: SENTEC,
        jobtitle: "Director Robotics & IT",
        where: "Society For The Promotion Of Science, Engineering & Technology",
        date: "Sept, 2020 - Sept 2021",
        link: "https://www.facebook.com/sentecneduet",
        short: "SENTEC"

    },
];

const skills = [{
    name: "Nodejs",
    value: 70,
},
{
    name: "MongoDB",
    value: 75,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "React",
    value: 80,
},
{
    name: "Express",
    value: 85,
},
];

const services = [{
    title: "React",
    flavours: [
        "Redux /Redux-toolkit /Flux",
        "React-Router",
        "React Bootstrap.",
        "Material UI.",
        "Swiper",
        "Enzyme",
        "ES-Lint",
    ],
},
{
    title: "Backend",
    flavours: ["express", "socket.io", "jsonwebtoken", "nodemailer", "bcryptjs","Axios", "cors", "Faker" ,"Multer"],
},
{
    title: "Other",
    flavours: ["mongoose", "mongodb", "puppeteer", "selenium-webdriver", "uuid", "jade"],
},
];
const experience = {
    frontend: [

        { skill: "HTML", level: "Experienced" },
        { skill: "CSS", level: "Intermediate" },
        { skill: "Javascript", level: "Experienced" },
        { skill: "Bootstrap", level: "Experienced" },
        { skill: "Tailwind css", level: "Experienced" },
        { skill: "React", level: "Experienced" },

    ],

    backend: [
        { skill: "Nodejs", level: "Intermediate" },
        { skill: "Express", level: "Intermediate" },
        { skill: "MongoDB", level: "Intermediate" },
        { skill: "MySQL", level: "Intermediate" },
        { skill: "Azure", level: "Intermediate" },
        { skill: "Git", level: "Intermediate" },

    ]
};

const dataportfolio = [

    {
        img: IMG1,
        desctiption: "Landing page of Mega Project Exhibition & Robotics Competition (MPERC'22)",
        link: "https://mperc.sentec.live/",
        github: "https://github.com/SHAHARYAR1255/mperc.git"
    },
    {
        img: IMG3,
        desctiption: "Official website of Mernday (using React with Firebase)",
        link: "https://roadtofirebase-ae0cc.web.app/",
        github: "https://github.com/SHAHARYAR1255/mernday.git"
    },

    {
        img: IMG2,
        desctiption: "Official Website of Society For The Promotion Of Science, Engineering & Technology",
        link: "https://www.sentec.live/",
        github: "https://github.com/SHAHARYAR1255/Sentec-webapp.git"
    },
    // {
    //     img: Imagess,
    //     desctiption: "Expense Tracker App with React",
    //     link: "https://react-expense-tracker-malik1255.surge.sh/",
    // },
    {
        img: IMG4,
        desctiption: "React Portfolio with react-bootstrap",
        link: "https://covid19statswebsite.netlify.com/",
        github: "https://github.com/SHAHARYAR1255/ReactPortfolio.git"
    },
    {
        img: IMG5,
        desctiption: "Covid-19 tracker using React, Chartjs & MaterialUI",
        link: "https://covid19statswebsite.netlify.com/",
        github: "https://github.com/SHAHARYAR1255/covid-app.git"
    },
    {
        img: IMG6,
        desctiption: "Shoe Store Web App with React Router",
        link: "https://malik-shoestore.surge.sh/",
        github: "https://github.com/SHAHARYAR1255/shoeStore.git"
    }
];

const contactConfig = {
    YOUR_EMAIL: "shaharyar.malik2000@gmail.com",
    YOUR_PHONE: "+923172039912",
    YOUR_MESSENGER: "https://m.me/shaharyarm1",
    flavours: "I’m Shaharyar Malik  _ Full stack devloper, learning Web3.0 technologies",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/SHAHARYAR1255",
    facebook: "#",
    linkedin: "https://www.linkedin.com/in/shaharyar-malik-b7415219a/",
    twitter: "#",
    youtube: "#",
    twitch: "#",
    instagram: "https://www.instagram.com/shaharyar._.malik/"
};
export {
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    contactConfig,
    socialprofils,
    experience

};
