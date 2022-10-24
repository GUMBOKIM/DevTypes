import React from "react";
import styled from "styled-components";

const SummaryResultItem: React.FC<{ name: string; result: string | number }> = ({name, result}) => {
    return (
        <ItemWrapper>
            <ItemName>{name}</ItemName>
            <ItemResult>{result}</ItemResult>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  flex-direction: column;
  margin: 0 1rem;
`

const ItemName = styled.div`
  color: white;
`

const ItemResult = styled.div`
  color: yellow;
`

export default SummaryResultItem;