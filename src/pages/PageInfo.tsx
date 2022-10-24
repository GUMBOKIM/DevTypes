import HomePage from "./homePage/HomePage";
import AboutPage from "./aboutPage/AboutPage";
import TypePage from "./typePage/TypePage";
import ContactPage from "./contactPage/ContactPage";
import {ReactNode} from "react";
import TestPage from "./testPage/TestPage";

type PageKind = "HOME" | "ABOUT" | "TYPE" | "CONTACT" | "TEST"

interface IPageInfo {
    kind: PageKind;
    route: string;
    page: ReactNode;
}

const PageInfo: IPageInfo[] = [
    {
        kind: "HOME",
        route: "/home",
        page: <HomePage />
    },
    {
        kind: "ABOUT",
        route: "/about",
        page: <AboutPage />
    },
    {
        kind: "TYPE",
        route: "/type",
        page: <TypePage />
    },
    {
        kind: "CONTACT",
        route: "/contact",
        page: <ContactPage />
    },
    {
        kind: "TEST",
        route: "/test",
        page: <TestPage />
    },
]

export default PageInfo;