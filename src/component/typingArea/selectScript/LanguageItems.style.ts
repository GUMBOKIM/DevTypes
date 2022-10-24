import styled from "styled-components";

export const LanguageItemContainer = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  justify-content: center;
`

export const LanguageItemWrapper = styled.div<{ isSelected: boolean }>`
  width: 100px;
  height: 100px;

  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem;
  padding: 1rem;

  color: lightgrey;
  border: 0.3rem lightgrey solid;
  
  opacity: 0.5;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`