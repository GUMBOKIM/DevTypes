import React from "react";
import KeyboardLayout from "../../keyboardLayout/KeyboardLayout";
import KeyAccuracyChart from "./KeyAccuracyChart";
import * as S from "../ResultArea.style"

const KeyAccuracyResult: React.FC = () => {
    return (
        <S.ResultContainer>
            <S.ResultTitle>Key Accuracy Result</S.ResultTitle>
            <KeyboardLayout/>
            <S.ResultDivide/>
            <KeyAccuracyChart/>
        </S.ResultContainer>
    )
}


export default KeyAccuracyResult;