import type { SkillList } from 'src/types/components/tools';
import {
    // front-end
    JavascriptPlainIcon,
    TypescriptPlainIcon,
    TailwindcssOriginalIcon,
    BootstrapPlainIcon,
    Html5OriginalIcon,
    Css3OriginalIcon,
    ReactOriginalIcon,
    VuejsOriginalIcon,
    MaterialuiOriginalIcon,
    ViteOriginalIcon,
    EslintPlainIcon,
    // back-end
    NodejsOriginalIcon,
    CsharpPlainIcon,
    DotNetPlainIcon,
    JavaOriginalIcon,
    PythonOriginalIcon,
    FlaskOriginalIcon,
    DjangoPlainIcon,
    FastapiOriginalIcon,
    PhpOriginalIcon,
    // Machine Learning
    TensorflowOriginalIcon,
    PytorchOriginalIcon,
    // DataBase
    PostgresqlPlainIcon,
    MongodbPlainIcon,
    MysqlOriginalIcon,
    RedisPlainIcon,
    // Tools & Platforms
    GitPlainIcon,
    DockerPlainIcon,
    AnacondaOriginalIcon,
    VercelOriginalIcon,
    SupabasePlainIcon,
    SonarqubeOriginalIcon,
    JenkinsOriginalIcon,
    // Design
    FigmaPlainIcon,
    PhotoshopPlainIcon,
    IllustratorPlainIcon,
} from 'src/components/icons/skillDevicon';


const skillData: Array<SkillList> = [
    {
        category: 'Frontend',
        technologies: [
            { class: 'frontend', name: 'JavaScript', icon: JavascriptPlainIcon },
            { class: 'frontend', name: 'TypeScript', icon: TypescriptPlainIcon },
            { class: 'frontend', name: 'HTML', icon: Html5OriginalIcon },
            { class: 'frontend', name: 'CSS', icon: Css3OriginalIcon },
            { class: 'frontend', name: 'React', icon: ReactOriginalIcon },
            { class: 'frontend', name: 'Vuejs', icon: VuejsOriginalIcon },
            // -- extra --
            // { class: 'frontend', name: 'Tailwind CSS', icon: TailwindcssOriginalIcon },
            // { class: 'Bootstrap', name: 'Vuejs', icon: BootstrapPlainIcon },
            // { class: 'frontend', name: 'Material UI', icon: MaterialuiOriginalIcon },
            // { class: 'frontend', name: 'Vite', icon: ViteOriginalIcon },
            // { class: 'frontend', name: 'Eslint', icon: EslintPlainIcon },
        ]
    },
    {
        category: 'Backend',
        technologies: [
            { class: 'backend', name: 'Nodejs', icon: NodejsOriginalIcon },
            { class: 'backend', name: 'Python', icon: PythonOriginalIcon },
            { class: 'backend', name: 'FastAPI', icon: FastapiOriginalIcon },
            { class: 'backend', name: 'Django', icon: DjangoPlainIcon },
            { class: 'backend', name: 'C#', icon: CsharpPlainIcon },
            { class: 'backend', name: 'Java', icon: JavaOriginalIcon },
            // -- extra --
            // { class: 'backend', name: 'ASPNet', icon: DotNetPlainIcon },
            // { class: 'backend', name: 'PHP', icon: PhpOriginalIcon },
            // { class: 'backend', name: 'Flask', icon: FlaskOriginalIcon },
        ]
    },
    {
        category: 'DataBase & AI ',
        technologies: [
            { class: 'database', name: 'PostgreSQL', icon: PostgresqlPlainIcon },
            { class: 'database', name: 'MongoDB', icon: MongodbPlainIcon },
            { class: 'database', name: 'MySQL', icon: MysqlOriginalIcon },
            { class: 'database', name: 'Redis', icon: RedisPlainIcon },
            { class: 'ai', name: 'Tensorflow', icon: TensorflowOriginalIcon },
            { class: 'ai', name: 'Pytorch', icon: PytorchOriginalIcon },
        ]
    },
    {
        category: 'Tools & Design',
        technologies: [
            { class: 'tool', name: 'Git', icon: GitPlainIcon },
            { class: 'tool', name: 'Docker', icon: DockerPlainIcon },
            { class: 'tool', name: 'Vercel', icon: VercelOriginalIcon },
            { class: 'tool', name: 'Supabase', icon: SupabasePlainIcon },
            { class: 'design', name: 'Figma', icon: FigmaPlainIcon },
            { class: 'design', name: 'Illustrator', icon: IllustratorPlainIcon },
            // -- extra --
            // { class: 'tool', name: 'Anaconda', icon: AnacondaOriginalIcon },
            // { class: 'tool', name: 'Sonarqube', icon: SonarqubeOriginalIcon },
            // { class: 'tool', name: 'Jenkins', icon: JenkinsOriginalIcon },
            // { class: 'design', name: 'Photoshop', icon: PhotoshopPlainIcon },
        ]
    }
];

export { skillData };