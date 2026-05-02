// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import sqlLogo from './assets/tech_logo/sql.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import restapiLogo from './assets/tech_logo/restapi.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import mcLogo from './assets/tech_logo/mc.png';

// Experience Section Logo's
import smartbridgeLogo from './assets/company_logo/smartbridge_logo.jpg';
import skilldzireLogo from './assets/company_logo/skilldzire.jpg';

// Education Section Logo's
import adityaLogo from './assets/education_logo/Adityacollege.jpg';
import adityapoly from './assets/education_logo/adityapoly.jpg';
import srichaitanya from './assets/education_logo/srichaitanya.jpg';

// Project Section Logo's
import todoLogo from './assets/work_logo/todo.png';
import Spinal from './assets/Certificates/Spinal.jpeg';
import Weather_App from './assets/work_logo/Weather_App.png';


// Certificates Section Logo's
import reactCert from './assets/certificates/React_Certificate.jpg';
import jsCert from './assets/certificates/javascript_intermediate_certificate.jpg';
import frontendCert from './assets/certificates/Introduction_to_Front_End_Development.jpg';
import htmlCert from './assets/certificates/HTML.jpg';
import cssCert from './assets/certificates/css_certificate.jpg';
import aiMlCert from './assets/Certificates/AI&ML_Intren.jpg';
import googleClouCert from './assets/Certificates/googleClouCert.jpeg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'REST API', logo: restapiLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'SQL', logo: sqlLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
    ],
  },
];

  export const experiences = [
{
      id: 0,
      img: smartbridgeLogo,
      role: "Google Cloud Generative AI ",
      company: "Smartbridge",
      date: "Aug 2025 - March 2026",
      desc: "As a Google Cloud Generative AI Intern, I worked on building AI-powered applications using Google Cloud’s advanced machine learning and generative AI services. My responsibilities included working with large language models through Vertex AI, developing intelligent chatbots, and integrating AI capabilities into web applications. I gained hands-on experience in prompt engineering, model fine-tuning, and deploying scalable AI solutions on the cloud. I also collaborated on a real-time AI-based project, which helped me understand concepts like natural language processing, API integration, and responsible AI practices within the Google Cloud ecosystem.",
      skills: [
        "Prompt Engineering",
        "Working With Generative Models",
        "Cloud Deployment",
        
        
      ],
    },


    {
      id: 1,
      img: smartbridgeLogo,
      role: "Salesforce",
      company: "Smartbridge",
      date: "May 2025 - June 2025",
      desc: "As a Salesforce Intern at a training organization, I worked on developing and customizing cloud-based CRM solutions using the Salesforce platform. My responsibilities included creating and managing objects, fields, and relationships, automating business processes using workflows and Process Builder, and building user-friendly interfaces with Lightning App Builder. I also worked with Apex and SOQL for basic backend logic and data handling. I collaborated on a real-time Customer Relationship Management (CRM) project, which helped me gain hands-on experience in data modeling, security management, reports and dashboards, and overall Salesforce ecosystem functionality.",
      skills: [
        "Salesforce Administration",
        "Data Modeling",
        "REST APIs Integration Basics",
        "Apex Programming",
        
      ],
    },
    {
      id: 2,
      img: skilldzireLogo,
      role: "AI & ML Intern",
      company: "SkillDzire",
      date: "May 2024 - June 2024",
      desc: "During my internship at SkillDzire, I gained practical experience in Artificial Intelligence and Machine Learning by working on a real-time Sentiment Analysis project. The project focused on analyzing text data (e.g., tweets or reviews) to classify sentiments as positive, negative, or neutral. I applied key ML concepts such as data preprocessing, feature extraction, model training, and evaluation using Python and libraries like Scikit-learn, NLTK, and Pandas.",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Python",
      ],
    },
  ];
  
  export const education = [
    {
        id: 0,
        img: adityaLogo,
        school: "Aditya College of Engineering and Technology",
        date: "July 2021 - Present",
        grade: "7.37 CGPA",
        desc: "I am currently pursuing my Bachelor's degree in Computer Science and Engineering at Aditya College of Engineering and Technology. The program has provided me with a strong foundation in programming, data structures, algorithms, database systems, web technologies, and software development. I have actively participated in technical workshops, and project-based learning activities, which have enhanced my practical skills and problem-solving abilities.",
        degree: "B.Tech in Computer Science and Engineering",
    },
    {
      id: 1,
      img: adityapoly,
      school: "Aditya Polytechnic College , Surampalem",
      date: "July 2020 - June 2023",
      grade: "76.77%",
      desc: "I completed my Diploma in Computer Engineering from Aditya Polytechnic College, Surampalem.",
      degree: "Diploma in Computer Engineering",
    },
    {
      id: 2,
      img: srichaitanya,
      school: "Sri Chaitanya Techno School, Kapulapalem",
      date: "July 2017 - April 2020",
      grade: "90%",
      desc: "I completed my secondary education (Class 10) at Sri Chaitanya Techno School, Kapulapalem.",
      degree: "SSC (Class 10), Board of Secondary Education, AP",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "ToDo App",
      description:
        "Built a dynamic and responsive ToDo application using React.js that allows users to efficiently manage daily tasks. Core functionalities include adding new tasks, marking tasks as completed, editing task content, and deleting tasks.",
      image: todoLogo,
      tags: [ "React JS","CSS"],
      github: "https://github.com/Jayaramakasi/TO-DO-LIST",
      webapp: "https://to-do-list-theta-ivory-62.vercel.app/",
    },
    {
      id: 1,
      title: "Spinal Cord Damage Detection Using Yolo v8",
      description:
        "Developed a spinal cord damage detection system using YOLOv8, enabling accurate and real-time identification of injury regions from medical images.",
      image: Spinal,
      tags: ["Python", "Yolo v8", "OpenCv", "Html", "CSS", "JavaScript"],
      github: "https://github.com/Jayaramakasi/Spinal-Cord-Damage-Detection",
      webapp: "",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "Developed a responsive web application using React JS and CSS that integrates with a weather API to display real-time temperature, humidity, and weather conditions with a user-friendly interface.",
      image: Weather_App,
      tags: ["React JS","CSS","REST API"],
      github: "https://github.com/Jayaramakasi/Weather_app",
      webapp: "",
    },
  ];  

export const certificates = [
  {
    id: 1,
    title: "React JS",
    issuer: "Scaler Academy",
    image: reactCert,
    link: "https://drive.google.com/file/d/15LvPJ3rkvbJtFoUmIJSCGmnIdKxkoxND/view?usp=drivesdk",
  },
  {
    id: 2,
    title: "WebTechnology",
    issuer: "Technical Hub",
    image: jsCert,
    link: "https://drive.google.com/file/d/1aUAUobahIBZrTO8EyOIOAvf8vcljkTtc/view?usp=drivesdk",
  },
  {
    id: 3,
    title: "Salesforce Internship",
    issuer: "Smartbridge",
    image: frontendCert,
    link: "https://drive.google.com/file/d/116eKM84Jezv66-DvxtZBjPrRHrGh0WfJ/view?usp=drivesdk",
  },
  {
    id: 4,
    title: "HTML",
    issuer: "Great Learning",
    image: htmlCert,
    link: "https://drive.google.com/file/d/1VfLOXASjepUGhvtVEOWXs7CLSMaDp71U/view?usp=drivesdk",
  },
  {
    id: 5,
    title: "CSS",
    issuer: "Great Learning",
    image: cssCert,
    link: "https://drive.google.com/file/d/1CJ5gpPdCUWVmLioWpNJiKB30TPxZbPFi/view?usp=drivesdk",
  },
  {
    id: 6,
    title: "AI & ML Internship",
    issuer: "SkillDzire",
    image: aiMlCert,
    link: "https://drive.google.com/file/d/1fDsRsfSue0LOtDZooc0J5WTDq7r1Y-x-/view?usp=drivesdk",
  },
  {
    id: 7,
    title: "Google Cloud Generative AI Internship",
    issuer: "SmartBridge",
    image: googleClouCert,
    link: "https://drive.google.com/file/d/1OMCuwF4AReUf-o452G3Hm4aTUV9KE51g/view?usp=drivesdk",
  }
  
];
