import styled from "styled-components";

export const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const KeyRow = styled.div`
  display: flex;
`

export const KeyCapOuter = styled.div<{ size: number; color?: string;}>`
  width: ${props => props.size * 3}rem;
  height: 3rem;
  padding: 0.2rem;
  box-sizing: border-box;
  color: inherit;
`

export const KeyCapInner = styled.div`
  position: relative;
  
  width: 100%;
  height: 100%;;
  padding: 0 0.3rem;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  border: 3px solid darkgrey;
  border-radius: 6px;
`

export const TextUpper = styled.span`
  margin-right: auto;
  vertical-align: top;
`

export const TextLower = styled.span`
  margin-left: auto;
  vertical-align: bottom;
`

export const TextCenter = styled.span`
    margin: auto;
`
