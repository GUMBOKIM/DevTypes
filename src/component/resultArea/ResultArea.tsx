import React from "react";
import styled from "styled-components";
import SummaryResult from "./summaryResult/SummaryResult";
import KeyInputResult from "./keyAccuracyResult/KeyAccuracyResult";
import KeySwitchingResult from "./keySwitchingResult/KeySwitchingResult";

const ResultArea: React.FC = () => {
    return (
        <ResultAreaContainer>
            <SummaryResult/>
            <KeyInputResult/>
            <KeySwitchingResult/>
        </ResultAreaContainer>
    )
}

const ResultAreaContainer = styled.div`
  font-family: 'Silkscreen', cursive;
  
  display: flex;2
  align-items: center;
  justify-content: center;
  flex-direction: column;
`


export default ResultArea;
