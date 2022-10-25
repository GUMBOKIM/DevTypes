import styled from "styled-components";

export const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
`

export const KeyRow = styled.div`
  display: flex;
`

export const KeyCapOuter = styled.div<{ unitSize: number;}>`
  width: ${props => props.unitSize * 3}em;
  height: 3em;
  padding: 0.2em;
  box-sizing: border-box;
  color: inherit;
`

export const KeyCapInner = styled.div`
  position: relative;
  transform-origin: top left;

  width: 100%;
  height: 100%;;
  padding: 0 0.3em;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  border: 0.2em solid darkgrey;
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
