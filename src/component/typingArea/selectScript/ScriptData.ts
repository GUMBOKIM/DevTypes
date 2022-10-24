export interface ILanguage {
    name: string;
    imgUrl: string;
    scripts: IScript[];
}

export interface IScript {
    imgUrl: string;
    type: string;
}

export const LanguageData: ILanguage[] = [
    {
        name: "java\nscript",
        imgUrl: "img/language/javascript.png",
        scripts: [
            {imgUrl: "AA", type: "vanillaJS"},
            {imgUrl: "AA", type: "React"},
            {imgUrl: "AA", type: "TypeScript"},
        ]
    },
    {
        name: "java",
        imgUrl: "img/language/java.png",
        scripts: [
            {imgUrl: "AA", type: "spring"}
        ]
    },
    {
        name: "python",
        imgUrl: "img/language/java.png",
        scripts: [
            {imgUrl: "AA", type: "spring"}
        ]
    },
]
