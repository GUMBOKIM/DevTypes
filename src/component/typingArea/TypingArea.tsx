import React, {useState} from "react";
import TypingScript from "./typingScript/TypingScript";
import {TYPING_AREA_STATUS} from "./TypingAreaEnum";
import SelectScript from "./selectScript/SelectScript";
import StartLanding from "./startLanding/StartLanding";
import CountDown from "./countDown/CountDown";
import styled from "styled-components";

const TypingArea: React.FC = () => {
    const SceneComponent = useSceneSelect();
    return (
        <TypingAreaContainer>
            <SceneComponent/>
        </TypingAreaContainer>
    )
}

const TypingAreaContainer = styled.div`
  width: 100vw;
  height: 300px;
`

const useSceneSelect = () => {
    const [nowScene, setScene] = useState(TYPING_AREA_STATUS.SELECT_SCRIPT);

    const SceneComponent = () => {
        switch (nowScene) {
            case TYPING_AREA_STATUS.SELECT_SCRIPT:
                return <SelectScript moveNextScene={() => setScene(nowScene + 1)}/>;
            case TYPING_AREA_STATUS.INPUT_START:
                return <StartLanding moveNextScene={() => setScene(nowScene + 1)}/>;
            case TYPING_AREA_STATUS.COUNT_DOWN:
                return <CountDown moveNextScene={() => setScene(nowScene + 1)}/>;
            case TYPING_AREA_STATUS.TYPING_SCRIPT:
                return <TypingScript/>;
            default:
                return null;
        }
    }

    return SceneComponent;
}




export default TypingArea;
