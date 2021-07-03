declare module "*.pdf"


interface IIcons {
    slug: string;
    title: string;
    image: string;
    level: string;
}

interface IProjects {
    slug: string;
    project: string;
    image: string;
    description: string;
}

interface ICMSProps {
    icons: IIcons[],
    projects: IProjects[]
}
