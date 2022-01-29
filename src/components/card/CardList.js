import React from 'react';
import styled from 'styled-components';

const StyledCardList = styled.div`
    
    
    display: grid;
    grid-template-columns: repeat(3, 1fr); //3 cot
    gap: 90px 30px; //row gap - column gap
    padding: 30px;
    

`;

export default function CardList(props) {
  return <StyledCardList>{props.children}</StyledCardList>;
}
