import { SimCardDownloadIcon, GitHubIcon, LinkedInIcon, EmailRoundedIcon } from 'src/components/mui/icons';


const linkBarContent = [
    {
        name: 'Resume',
        lable: 'go to my Linkedin',
        webSrc: 'https://mui.com/material-ui/react-button/#contained-buttons',
        icon: <SimCardDownloadIcon />
    },
    {
        name: 'Linkedin',
        lable: 'go to my Linkedin',
        webSrc: 'https://www.linkedin.com/in/juiwen-chiang/',
        icon: <LinkedInIcon />
    },
    {
        name: 'Github',
        lable: 'go to my Github',
        webSrc: 'https://github.com/jui-wen-chiang',
        icon: <GitHubIcon />
    },
    {
        name: 'Email',
        lable: 'get in touch',
        webSrc: 'https://mui.com/material-ui/react-button/#contained-buttons',
        icon: <EmailRoundedIcon />
    },
];


export { linkBarContent }
