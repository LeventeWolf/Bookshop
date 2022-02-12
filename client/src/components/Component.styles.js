import styled from "styled-components";

export const ProductContainer = styled.div`
  border: 1px solid blue;

  width: 100%;
  
  display: flex;
`

export const ProductImage = styled.img`
    width: ${props => props.w + 'px'};
`;

export const ProductTitle = styled.h3`
  font-size: 11pt;
  font-weight: bold;
`;

export const ProductAuthor = styled.span`
  font-size: 11pt;
  font-weight: 100;
`;

export const ProductPrice = styled.span`
  color: #ff0072;
  font-weight: bold;
  font-size: 12pt;
`;

export const DescriptionContainer = styled.div`
  margin-left: 10px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BasketButton = styled.button`
  border-radius: 5px;

  background-color: #10bbd5;
  color: white;
  font-size: 11pt;
  font-weight: bold;
  font-family: Roboto, sans-serif;

  transition: all .3s;
  
  width: ${props => props.w + 'px'};
  height: ${props => props.h + 'px'};

  &:hover {
    background-color: #29D5EF;
  }
`;