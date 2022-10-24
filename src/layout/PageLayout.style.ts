import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ContentWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 800px) {
    display: none;
  }
`