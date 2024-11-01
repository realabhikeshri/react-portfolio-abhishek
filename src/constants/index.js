import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2.5 years of hands-on experience, I have honed my skills in front-end technologies like React, Angular and Knockout.js, as well as back-end technologies like Node.js, MySQL, .Net Framework and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2.5 years of professional experience, I have worked with a variety of technologies, including React, KendoUI ,Bootstrap ,Angular , Knockout.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2022 - Present",
    role: "Full Stack Developer",
    company: "Deloitte USI",
    description: `Designed, developed and maintained web applications using .NetFrameWork , KendoUI , Angular,  knockoutJS , Node.js ,SQl. Implemented RESTful APIs and integrated with databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: [".NetFrameWork", "Angular", "knockoutJS","Javascript","TypeScript","C#","Node.js","SQL"],
  },
  {
    year: "Jan 2022 - June 2022",
    role: "Full Stack Developer Intern",
    company: "Deloitte USI",
    description: `Created a full stack solution to handle Pricing Module where user can create a proposal plan with client and
view all his engagements in Dashboard. Worked closely with backend developers to integrate frontend components with Node.js APIs. `,
    technologies: ["HTML", "CSS", "Javascript","Bootstrap","Angular" ,"Node.js","mySQL"],
  },
  {
    year: "June 2021 - Aug 2021",
    role: "Web Development Intern",
    company: "MissionEd",
    description: `Developed and maintained web applications using JavaScript, React.js, Express.Js, Node.js and MongoDB.Implemented responsive designs and optimized frontend performance.Designed and implemented RESTful APIs for data communication`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "WAMP", "PHP"],
  },
  {
    title: "Cohesive Planning and Compreensive Planning Application",
    image: project2,
    description:
      "An application for managing Client Engagement and Finances involved, with features such as proposal creation, review and progress tracking.,etc",
    technologies: [ "Angular","kendoUI", "KnockoutJS","NodeJS", "SQL",".Net Framework" ,"DSMS" , "Git", "CI/CD"],
  },
  {
    title: "Digital Filter Design and Optimisation using BAT algorithm",
    image: project3,
    description:
      "Used DIP and Signal processing in MATLAB for creating highly optimized filter which can be used for image processing",
    technologies: [ "MATLAB", "Simulink"],
  },
  {
    title: "Text To MockUp Tool",
    image: project4,
    description:
      "Created Text to Mockup generation tool which generates UI elements in form of pictures customized to Deloitte interface by providing prompts using Dall-e ",
    technologies: ["Python", "Dall-e"],
  },
  {
    title: "Fresher Onboarding Web App",
    image: project5,
    description:
      "A platform for smooth onboarding experince and progress tracking for quicker project allotment using lowcode/nocode tools ",
    technologies: ["Mendix"],
  },
];

export const CONTACT = {
  address: "Room No. 201 , Vedha Sri Mens PG , Anjaiah Nagar , Hyderabad , Telangana , India",
  phoneNo: "+91 9153193472",
  email: "abhiskekkeshriofficial@gmail.com",
};
