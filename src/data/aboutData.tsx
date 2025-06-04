import { AssignmentIndSharpIcon, GitHubIcon, LinkedInIcon, EmailRoundedIcon } from 'src/components/mui/icons';

const paragraphProfessional = "I'm Jui-Wen, Chiang, a software developer with a background in art and design. I'm passionate about crafting interfaces that are not only visually appealing but also user-friendly. My journey into development was driven by my love for combining aesthetics and functionality and loves learning new things and thinking on their feet."

const paragraphHobbies = "Beyond coding, I enjoy solo travel, watching musicals, and painting. While working and traveling in Australia, I even participated in a local community art exhibition. I'm constantly seeking new experiences and challenges because stagnation just isn't my style."

const skillList = [
    'Coding',
    'UI&UX',
    'Problem Solving',
    'Team Management',
]


const buttonContent = [
    {
        name: 'Resume',
        lable: 'go to my Linkedin',
        webSrc: 'https://mui.com/material-ui/react-button/#contained-buttons',
        icon: <AssignmentIndSharpIcon />
    },
    {
        name: 'Linkedin',
        lable: 'go to my Linkedin',
        webSrc: 'https://mui.com/material-ui/react-button/#contained-buttons',
        icon: <LinkedInIcon />
    },
    {
        name: 'Github',
        lable: 'go to my Github',
        webSrc: 'https://mui.com/material-ui/react-button/#contained-buttons',
        icon: <GitHubIcon />
    },
    {
        name: 'Email',
        lable: 'get in touch',
        webSrc: 'https://mui.com/material-ui/react-button/#contained-buttons',
        icon: <EmailRoundedIcon />
    },
];


export { paragraphProfessional, paragraphHobbies,buttonContent }
