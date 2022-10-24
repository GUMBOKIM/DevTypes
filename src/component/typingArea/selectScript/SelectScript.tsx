import React from "react";
import styled from "styled-components";
import LanguageItems from "./LanguageItems";

const SelectScript: React.FC<{ moveNextScene: () => void }> = ({moveNextScene}) => {
    return (
        <SelectLanguageContainer>
            <SelectLanguageHeader>Select Language</SelectLanguageHeader>

            <LanguageItems moveNextScene={moveNextScene}/>
            <button onClick={moveNextScene}>nextScene</button>
        </SelectLanguageContainer>
    )
}

const SelectLanguageContainer = styled.div`
  font-family: 'Silkscreen', cursive;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`

const SelectLanguageHeader = styled.span`
  font-size: 2rem;
  margin-bottom: 2rem;
`


export default SelectScript;