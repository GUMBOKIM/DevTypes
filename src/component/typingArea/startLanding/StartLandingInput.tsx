import React, {useEffect, useRef} from "react";
import {checkPressKeyKind} from "../../../common/Util";
import * as _ from "lodash";
import styled from "styled-components";

const StartLandingInput: React.FC = () => {
    const displayInputsRef = useRef<HTMLDivElement>(null);
    const abnormalAlarmRef = useRef<HTMLDivElement>(null);
    const typingKeysRef = useRef<string[]>([]);

    useEffect(() => {
        const event = landingInputEvent(typingKeysRef, displayInputsRef);
        window.addEventListener("keydown", event);
        return () => window.removeEventListener("keydown", event);
    }, [])

    return (
        <>
            <div ref={displayInputsRef}/>
            <AbnormalAlarm ref={abnormalAlarmRef}>
                This is not a valid input. Check the currently selected keyboard language
            </AbnormalAlarm>
        </>
    )
}

const AbnormalAlarm = styled.div`
  color: yellow;
  opacity: 0;
  animation: fadeOut 0.3s;
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`


const landingInputEvent = (typingKeysRef: React.MutableRefObject<string[]>, displayInputRef: React.RefObject<HTMLDivElement>) => {
    return (e: KeyboardEvent) => {
        const pressKey = e.key;
        const keyKind = checkPressKeyKind(pressKey);
        if (keyKind.isEnterKey) {
            if (typingKeysRef.current.join('') === "Typing Start!") {
                console.log("성공");
            } else {
                console.log("실패");
            }
        } else {
            if (keyKind.isCharacterKey || keyKind.isSpaceKey) {
                typingKeysRef.current = _.concat(typingKeysRef.current, e.key)
            } else if (keyKind.isRemoveKey) {
                typingKeysRef.current = _.dropRight(typingKeysRef.current)
            }
            displayInputRef.current!.innerText = typingKeysRef.current.join('');
        }
    };
}

export default StartLandingInput;