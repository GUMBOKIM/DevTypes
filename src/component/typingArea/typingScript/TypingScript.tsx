import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import _ from "lodash";
import "./TypingScript.css";
import {CONVERT_TYPE} from "./TypingScriptEnum";
import {TypingScriptExample,} from "./TypingScriptExample";
import {ITypingLine, textConvertTypingData} from "./function/TextConvertTypingData";
import typingEvent from "./function/TypingEvent";

export interface TypingAreaProps {
    script?: string;
    type?: CONVERT_TYPE;
}

export interface ICursorLocation {
    lineIndex: number;
    wordIndex: number;
    charIndex: number;
}

export interface ITypingRecord {
    target?: string;
    input: string;
    isRight?: boolean;
    time: number;
}

const TypingScript: React.FC<TypingAreaProps> = ({script = TypingScriptExample, type = CONVERT_TYPE.CODE}) => {
    const typingLinesRef = useRef<ITypingLine[]>(textConvertTypingData(script, type));
    const cursorLocationRef = useRef<ICursorLocation>({lineIndex: 0, wordIndex: 0, charIndex: 0});
    const typingRecordsRef = useRef<ITypingRecord[]>([])

    useEffect(() => {
            const pressKeyEvent = (e: KeyboardEvent) => typingEvent(e, cursorLocationRef, typingLinesRef, typingRecordsRef);
            window.addEventListener('keydown', pressKeyEvent);
            return () => window.removeEventListener('keydown', pressKeyEvent)
        },
    )

    return (
        <TypingScriptContainer>
            {typingLinesRef.current.map((line, lIndex) =>
                <div className="line" key={lIndex}>
                    {_.map(Array(line.indent), (_, index) => <div key={index} className="indent"/>)}
                    {_.map(line.words, (word, wIndex) =>
                        <div className="word" key={wIndex} ref={(ref) => word.ref = ref as HTMLDivElement}>
                            {_.map(word.chars, (char, cIndex) =>
                                <span className="char"
                                      key={cIndex}
                                      ref={(ref) => char.ref = ref as HTMLDivElement}>
                                    {char.origin}
                                </span>)}
                            <div className="indent"/>
                        </div>
                    )}
                </div>
            )}
        </TypingScriptContainer>
    )
}

const TypingScriptContainer = styled.div`
  font-size: 2rem;
  ms-ime-mode: inactive;
`;

export default TypingScript;
