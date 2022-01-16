export interface IIntroduction {
    name: string;
    avatar: string;
    location: string;
    description: string;
    position: string;
}

export interface IWork {
    title: string;
    logo: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
    stack: { name: string; icon: string; }[];
}

export interface ISchoolEntity {
    name: string;
    logo: string;
    title: string;
    duration: string;
    credentialLink?: string;
}

export interface ISkill {
    name: string;
    icon: string;
    current?: boolean;
}

export interface ILanguage {
    name: string;
    level: string;
}

export interface IContact {
    name: string;
    icon: string;
    link: string;
}

export interface IResume {
    introduction: IIntroduction;
    experience: IWork[];
    education: ISchoolEntity[];
    skills: ISkill[];
    languages: ILanguage[];
    contact: IContact[];
}

const Resume: IResume = {
    introduction: {
        name: "Saif BEJAOUI",
        avatar: "./images/avatar.jpg",
        location: "Ariana, Tunisia",
        description: "Senior confirmed developer with very good programming skills, with more than 6 years of experience, including frontend and backend development, application and website development, corrective and evolutionary maintenance, analysis and design of solutions to be developed and the understanding of customer needs.",
        position: "Tech Lead"
    },
    experience: [
        {
            title: 'Tech Lead - Full stack web developer',
            company: 'Sofia Tech',
            logo: 'https://sofia-technologies.com/wp-content/uploads/2019/05/logo-sofiatech-01.png',
            duration: 'July 2021 - Present',
            location: 'Ariana, Tunisia',
            description: [
            ],
            stack: [
                { name: 'Angularjs', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
                { name: 'Typescript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
                { name: 'Nodejs', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
                { name: 'Expressjs', icon: 'https://cdn.svgporn.com/logos/express.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
                { name: 'PHP', icon: 'https://cdn.svgporn.com/logos/php.svg' },
                { name: 'Symfony', icon: 'https://cdn.svgporn.com/logos/symfony.svg' },
                { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
            ]
        },
        {
            title: 'Team Lead - Full stack web developer',
            company: 'NetMarketing - Plus Group',
            logo: './images/logoNet-1.svg',
            duration: '11/2020 – 06/2021',
            location: 'Ariana, Tunisia',
            description: [
                'Analyze and design the web applications ',
                'Develop and design web and hybrid mobile applications',
                'Detect and maintain technical problems encountered',
                'Technical support for the development team'
            ],
            stack: [
                { name: 'Angularjs', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
                { name: 'Typescript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
                { name: 'PHP', icon: 'https://cdn.svgporn.com/logos/php.svg' },
                { name: 'Symfony', icon: 'https://cdn.svgporn.com/logos/symfony.svg' },
                { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
            ]
        },
        {
            title: 'Full stack web developer',
            company: 'Web Media',
            logo: './images/logo-wwebmedia.png',
            duration: '06/2015 – 10/2020',
            location: 'Tunis, Tunisia',
            description: [
                'Participate in discussions with clients and document needs',
                'Design & develop web applications (PHP, Java, SpringBoot, VB.Net, CMS)',
                'Develop hybrid mobile applications (Angular, Ionic, REST APIs)',
                'Develop REST API and SOAP web services'
            ],
            stack: [
                { name: 'jQuery', icon: 'https://cdn.svgporn.com/logos/jquery.svg' },
                { name: 'PHP', icon: 'https://cdn.svgporn.com/logos/php.svg' },
                { name: 'Symfony', icon: 'https://cdn.svgporn.com/logos/symfony.svg' },
                { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
            ]
        }
    ],
    education: [
        { name: 'Higher Institute of Computer Science - ISI Ariana', logo: './images/logoisi.png', title: 'Computer Engineering, Software', duration: '2008 - 2013' },
        { name: 'University of sciences Bizerte - FSB', logo: './images/logofsb.jpg', title: 'Developing and Deploying an Internet of Things', duration: 'August 2019', credentialLink: 'https://courses.edx.org/certificates/d372e340b9894e80becea59fd705967b' },
    ],
    skills: [
        { name: 'Javascript', icon: 'https://cdn.svgporn.com/logos/javascript.svg' },
        { name: 'Reactjs', icon: 'https://cdn.svgporn.com/logos/react.svg'},
        { name: 'Typescript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'},
        { name: 'Redux', icon: 'https://cdn.svgporn.com/logos/redux.svg' },
        { name: 'Angularjs', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
        { name: 'Nextjs', icon: 'https://cdn.svgporn.com/logos/nextjs.svg' },
        { name: 'Nodejs', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg'},
        { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg'},
        { name: 'Jira', icon: 'https://cdn.svgporn.com/logos/jira.svg'},
        { name: 'HTML5', icon: 'https://cdn.svgporn.com/logos/html-5.svg'},
        { name: 'CSS3', icon: 'https://cdn.svgporn.com/logos/css-3.svg'},
        { name: 'Java', icon: 'https://cdn.svgporn.com/logos/java.svg' },
        { name: 'Styled Components', icon: './images/styled-components.png' },
        { name: 'jQuery', icon: 'https://cdn.svgporn.com/logos/jquery.svg' },
        { name: 'PHP', icon: 'https://cdn.svgporn.com/logos/php.svg' },
        { name: 'Symfony', icon: 'https://cdn.svgporn.com/logos/symfony.svg' },
        { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
    ],
    languages: [
        {
            name: 'Arabic',
            level: 'Mother tongue'
        },
        {
            name: 'French',
            level: 'Read, write, speak: Fluent'
        },
        {
            name: 'Engish',
            level: 'Read, write, speak: Fluent (IELTS certificate : CEFR Level B2)'
        }
    ],
    contact: [
        { name: 'Github', icon: 'https://cdn.svgporn.com/logos/github-icon.svg', link: 'https://github.com/saif-tn' },
        { name: 'bej.saif@gmail.com', icon: 'https://cdn.svgporn.com/logos/google-gmail.svg', link: 'mailto:bej.saif@gmail.com' },
    ]
};

export default Resume;
