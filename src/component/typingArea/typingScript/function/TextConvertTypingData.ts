import {CONVERT_TYPE} from "../TypingScriptEnum";

export interface ITypingLine {
    indent: number;
    words: ITypingWord[];
}

export interface ITypingWord {
    origin: string;
    ref: HTMLDivElement ;
    chars: ITypingChar[]
}

export interface ITypingChar {
    origin: string;
    input?: string;
    ref: HTMLDivElement;
}

export const textConvertTypingData = (text: string, type: CONVERT_TYPE) => {
    switch (type) {
        case CONVERT_TYPE.CODE:
            return codeTextConvert(text);
        case CONVERT_TYPE.NORMAL:
        default:
            return normalTextConvert(text);
    }
}

const normalTextConvert = (text: string) => {
    return text.split("\n").map(line => {  // 한줄 단위로 자르기
            return {
                indent: 2, words: line.trim().split(" ").map(word => { // 앞 여백 지운 후, 문자 단위로 자르기
                    return {
                        origin: word,
                        chars: word.split("") //  문자 단위로 자르기
                            .map(char => {
                                return {origin: char}
                            })
                    }
                })
            } as ITypingLine
        }
    )
}

const codeTextConvert = (text: string) => {
    return text.split("\n").map(line => {  // 한줄 단위로 자르기
            const trimLine = line.trimStart();
            return {
                indent: line.length - trimLine.length,
                words: trimLine.trimEnd().split(" ").map(word => { // 앞 여백 지운 후, 문자 단위로 자르기
                    return {
                        origin: word,
                        chars: word.split("") //  문자 단위로 자르기
                            .map(char => {
                                return {origin: char}
                            })
                    }
                })
            } as ITypingLine
        }
    )
}