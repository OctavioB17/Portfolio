import { projectInfo } from "../../interfaces/projects/Projects";
import McFlyOne from '../../assets/images/Projects/McFly/Grabación 2025-01-24 110048.gif'
import McFlyTwo from '../../assets/images/Projects/McFly/Grabación 2025-01-24 110205.gif'
import McFlyThree from '../../assets/images/Projects/McFly/Grabación 2025-01-24 111236.gif'
import McFlyFour from '../../assets/images/Projects/McFly/Grabación 2025-01-24 111413.gif'
import McFlyDetails from "./McFlyDetails";
import EReduxOne from '../../assets/images/Projects/ERedux/1701862669755.gif'
import EReduxTwo from '../../assets/images/Projects/ERedux/1701862737080.gif'
import EReduxThree from '../../assets/images/Projects/ERedux/1701862760832.gif'
import EReduxFour from '../../assets/images/Projects/ERedux/1701862760832.gif'
import CulzoniOne from '../../assets/images/Projects/Culzoni/Grabación-2025-01-24-124334.gif'
import CulzoniTwo from '../../assets/images/Projects/Culzoni/Grabación-2025-01-24-124555.gif'
import CulzoniThree from '../../assets/images/Projects/Culzoni/Grabación-2025-01-24-124821.gif'
import CulzoniFour from '../../assets/images/Projects/Culzoni/Grabación-2025-01-24-125339.gif'
import CulzoniFive from '../../assets/images/Projects/Culzoni/Grabación-2025-01-24-125448.gif'
import PortfolioOne from '../../assets/images/Projects/Portfolio/Grabación 2025-02-03 091328.gif'
import PortfolioTwo from '../../assets/images/Projects/Portfolio/Grabación 2025-02-03 092129.gif'
import PortfolioThree from '../../assets/images/Projects/Portfolio/Grabación 2025-02-03 092226.gif'
import MariaPininaOne from '../../assets/images/Projects/MariaPinina/Grabación 2025-05-30 144116.gif'
import MariaPininaTwo from '../../assets/images/Projects/MariaPinina/Captura de pantalla 2025-05-30 143836.png'
import MariaPininaThree from '../../assets/images/Projects/MariaPinina/Captura de pantalla 2025-05-30 144334.png'
import CulzoniDigitalDetails from "./CulzoniDigitalDetails";
import EReduxDetails from "./EReduxDetails";
import PortfolioDetails from "./PortfolioDetails";
import MariaPininaDetails from "./MariaPininaDetails";

export const mcfly: projectInfo = {
    title: "McFly",
    description: McFlyDetails,
    photosUrl: [McFlyOne, McFlyTwo, McFlyThree, McFlyFour],
    technologies: ["HTML5", "CSS3", "JavaScript", "Material-UI", "React.JS", "Node.JS", "Express.JS", "Json Web Token", "MySQL", "Docker", "Amazon Web Services", "Linux"],
    projectUrl: "http://mcflyfrontbucket.s3-website-us-east-1.amazonaws.com/",
    gitHubUrl: "Not public"
}

export const culzoniDigital: projectInfo = {
    title: "Culzoni Digital",
    description: CulzoniDigitalDetails,
    photosUrl: [CulzoniOne, CulzoniTwo, CulzoniThree, CulzoniFour, CulzoniFive],
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Material-UI", "React.JS", "Node.JS", "Express.JS", "Json Web Token", "MySQL", "Docker", "Amazon Web Services", "Linux"],
    projectUrl: "https://culzonidigital.site",
    gitHubUrl: "Not public"
}

export const eredux: projectInfo = {
    title: "E-Redux",
    description: EReduxDetails,
    photosUrl: [EReduxOne, EReduxTwo, EReduxThree, EReduxFour],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.JS", "Redux", "Amazon Web Services"],
    projectUrl: "http://ereduxbruzaoctavio.s3-website-us-east-1.amazonaws.com",
    gitHubUrl: "Not public"
}

export const portfolio: projectInfo = {
    title: "Portfolio",
    description: PortfolioDetails,
    photosUrl: [PortfolioOne, PortfolioTwo, PortfolioThree],
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.JS", "React-Spring", "Amazon Web Services"],
    projectUrl: "https://octaviobruza.com",
    gitHubUrl: "https://github.com/OctavioB17/Portfolio"
}

export const mariaPinina: projectInfo = {
    title: "Maria Pinina",
    description: MariaPininaDetails,
    photosUrl: [MariaPininaOne, MariaPininaTwo, MariaPininaThree],
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Material-UI", "React.JS", "Node.JS", "Express.JS", "Json Web Token", "PostgreSQL", "Docker", "Amazon Web Services", "Linux"],
    projectUrl: "http://maria-pinina-front.s3-website-us-east-1.amazonaws.com/",
    gitHubUrl: "https://github.com/OctavioB17/MariaPininaBackend"
}