import { SkillList } from 'src/types/components/tools';
import {
    SiJavascript, FaPython, FaJava, SiTypescript, FaHtml5, FaCss3Alt, PiFileCSharp, FaPhp,
    FaGitAlt, FaDocker, RiReactjsFill, FaVuejs, IoLogoFigma, SiFlask, SiDjango, SiTensorflow, SiPytorch,
    GrMysql, BiLogoPostgresql, SiMongodb, DiRedis, IoLogoTableau, SiSonarqube
} from 'src/components/icons/skillIcons';


const detilData: Array<SkillList> = [
    {
        category: 'Programming Language',
        technologies: [
            // Frontend
            { class: 'frontend', name: 'JavaScript', icon: SiJavascript },
            { class: 'frontend', name: 'TypeScript', icon: SiTypescript },
            { class: 'frontend', name: 'HTML', icon: FaHtml5 },
            { class: 'frontend', name: 'CSS', icon: FaCss3Alt },
            // Backend
            { class: 'backend', name: 'C#', icon: PiFileCSharp },
            { class: 'backend', name: 'Python', icon: FaPython },
            { class: 'backend', name: 'Java', icon: FaJava },
            { class: 'backend', name: 'PHP', icon: FaPhp },
        ]
    },
    {
        category: 'Frameworks',
        technologies: [
            // Frontend
            { class: 'frontend', name: 'ReactJS', icon: RiReactjsFill },
            { class: 'frontend', name: 'VueJS', icon: FaVuejs },
            // Backend
            { class: 'backend', name: 'Flask' },
            { class: 'backend', name: 'Django' },
            // ML
            { class: 'ml', name: 'TensorFlow', icon: SiTensorflow },
            { class: 'ml', name: 'Pytorch', icon: SiPytorch },
        ]
    },
    {
        category: 'DataBase',
        technologies: [
            { class: 'database', name: 'PostgreSQL', icon: BiLogoPostgresql },
            { class: 'database', name: 'MySQL', icon: GrMysql },
            { class: 'database', name: 'MongoDB', icon: SiMongodb },
            { class: 'database', name: 'Redis', icon: DiRedis },
        ]
    },
    {
        category: 'Tools & Platforms',
        technologies: [
            { class: 'tool', name: 'Git', icon: FaGitAlt },
            { class: 'platform', name: 'Docker', icon: FaDocker },
            { class: 'testing', name: 'SonarQube', icon: SiSonarqube },
            { class: 'analysis', name: 'Tableau', icon: IoLogoTableau },
            { class: 'testing', name: 'Mocha' },
            { class: 'platform', name: 'Odoo' },
        ]
    },
    {
        category: 'Others',
        technologies: [
            { class: 'model', name: 'BERT NLP' },
            { class: 'ui', name: 'Figma', icon: IoLogoFigma }
        ]
    }
];

const skillData: Array<SkillList> = [
    {
        category: 'Programming Language',
        technologies: [
            // Backend
            { class: 'backend', name: 'C#', icon: PiFileCSharp },
            { class: 'backend', name: 'Python', icon: FaPython },
            // { class: 'backend', name: 'Java', icon: FaJava },
            // { class: 'backend', name: 'PHP', icon: FaPhp },
            // Frontend
            { class: 'frontend', name: 'JavaScript', icon: SiJavascript },
            { class: 'frontend', name: 'TypeScript', icon: SiTypescript },
            { class: 'frontend', name: 'HTML', icon: FaHtml5 },
            { class: 'frontend', name: 'CSS', icon: FaCss3Alt },
        ]
    },
    {
        category: 'Frameworks',
        technologies: [
            // Frontend
            { class: 'frontend', name: 'ReactJS', icon: RiReactjsFill },
            { class: 'frontend', name: 'VueJS', icon: FaVuejs },
            // Backend
            { class: 'backend', name: 'Flask', icon: SiFlask },
            { class: 'backend', name: 'Django', icon: SiDjango },
            // ML
            { class: 'ml', name: 'TensorFlow', icon: SiTensorflow },
            { class: 'ml', name: 'Pytorch', icon: SiPytorch },
        ]
    },
    {
        category: 'DataBase & Tools ',
        technologies: [
            { class: 'database', name: 'PostgreSQL', icon: BiLogoPostgresql },
            { class: 'database', name: 'MySQL', icon: GrMysql },
            { class: 'database', name: 'MongoDB', icon: SiMongodb },
            { class: 'database', name: 'Redis', icon: DiRedis },
            { class: 'tool', name: 'Git', icon: FaGitAlt },
            { class: 'platform', name: 'Docker', icon: FaDocker },
        ]
    }
];

export { skillData };