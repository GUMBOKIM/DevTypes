import React from "react";
import styled from "styled-components";
import SummaryResultItem from "./SummaryResultItem";
import * as S from "../ResultArea.style"

const SummaryResult: React.FC = () => {
    return (
        <S.ResultContainer>
            <S.ResultTitle>Typing Speed Result</S.ResultTitle>
            <SummaryResultContainer>
                <SummaryResultItems>
                    <SummaryResultItem name={"WPM"} result={10}/>
                    <SummaryResultItem name={"CPM"} result={10}/>
                    <SummaryResultItem name={"ACC"} result={"99%"}/>
                </SummaryResultItems>
            </SummaryResultContainer>
        </S.ResultContainer>
    )
}

const SummaryResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


const SummaryResultItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`


export default SummaryResult;