import React from "react";
import styled from "styled-components";

interface ScriptModalProps {
    language: string;
    types: string[];
    handleClickClose: () => void;
}

const ScriptModal: React.FC<ScriptModalProps> = ({language, types, handleClickClose}) => {

    return (
        <ScriptModalContainer>
            <ScriptModalTitle>{language}</ScriptModalTitle>
            <ScriptModalCloseButton onClick={handleClickClose}>X</ScriptModalCloseButton>
            {types.map(type =>
                <ScriptItemContainer key={type}>
                    <ScriptItemImg src="https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png"/>
                    <ScriptItemType>{type}</ScriptItemType>
                </ScriptItemContainer>
            )}
        </ScriptModalContainer>
    )
}

const ScriptModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: inherit;
  border: 5px solid darkgrey;
  border-radius: 10px;

  background-color: #323437;
`

const ScriptModalTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
`

const ScriptModalCloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  
  width: 30px;
  height: 30px;
  
  font-size: 30px;

  opacity: 0.8;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`

const ScriptItemContainer = styled.div`
  height: 50px;
  width: 300px;

  display: flex;
  margin-bottom: 10px;

  opacity: 0.5;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`

const ScriptItemImg = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  background-color: grey;
`

const ScriptItemType = styled.h1`
  line-height: 50px;
  font-size: 2rem;
`


export default ScriptModal;