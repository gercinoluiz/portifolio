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

interface IMessage {
    name: string;
    mesage: string;
    mail: string
}




interface IRequest {

    body: {

        name: string,
        email: string,
        mesage: string
    }



}


