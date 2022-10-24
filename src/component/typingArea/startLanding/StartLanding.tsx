import React from "react";
import styled from "styled-components";
import StartLandingInput from "./StartLandingInput";

const StartLanding: React.FC<{ moveNextScene: () => void }> = ({moveNextScene}) => {

    return (
        <InputStartBox>
            <LandingTitle>Typing "Typing Start!" and Press Enter</LandingTitle>
            <LandingDescription>
                This Step is the process of verifying that your keyboard input is correct.
            </LandingDescription>
            <StartLandingInput/>
            <button onClick={moveNextScene}>nextScene</button>
        </InputStartBox>
    )
}

const InputStartBox = styled.div`
    display: flex;
    flex-direction: column;
`

const LandingTitle = styled.h1``
const LandingDescription = styled.span``
export default StartLanding;