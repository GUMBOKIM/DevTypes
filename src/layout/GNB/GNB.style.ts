import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px 20px;
  box-sizing: border-box;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Silkscreen', cursive;
`

export const GNBHomeContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  
  :hover {
    cursor: pointer;
  }


`

export const GNBTitle = styled.div`
  margin-left: 15px;
  
  font-size: 30px;
  letter-spacing: -1.5px;
  word-spacing: -8px;

  @media(max-width: 400px) {
    display: none;
  }
`

export const GNBItemContainer = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 600px) {
    display: none;
  }
`

export const GNBItemWrapper = styled.div<{ isSelected: boolean }>`
  margin: 5px;
  
  display: flex;
  align-items: center;
  
  font-size: 20px;
  letter-spacing: -2px;
  color: ${props => props.isSelected ? 'white' : 'grey'};

  :hover {
    cursor: pointer;
  }
`