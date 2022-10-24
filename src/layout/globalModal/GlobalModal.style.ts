import styled from "styled-components";

export const GlobalModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  backdrop-filter: blur(5px);
  z-index: 200;
  
  animation: fadein 0.2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const GlobalModalMessage = styled.span`
  width: 80%;
  margin-top: 20px;
  
  color: lightgoldenrodyellow;
  font-size: 1.5rem;
  font-family: 'Silkscreen', cursive;
  text-align: center;
`