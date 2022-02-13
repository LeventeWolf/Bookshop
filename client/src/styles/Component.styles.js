import styled from "styled-components";

const boxShadow = `0 1px 3px rgb(0 0 0 / 20%);`
const sectionBorder = `1px solid rgba(0, 0, 0, 0.1)`

export const Main = styled.div`
  max-width: 1440px;

  margin: auto;
  padding: 10px 20px;
`;

export const Container = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;

  letter-spacing: 0;
  animation: appear .3s ease-out;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: ${props => props.borderBottom ? sectionBorder : ''};
  width: 100%;
`;

export const ProductContainer = styled.div`
  padding: 10px 20px;
  background-color: white;

  display: flex;
  box-shadow: ${boxShadow};
`


// Page templates

export const PageTitle = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 2rem;
  font-family: Roboto, sans-serif;

  margin-bottom: 10px;

  letter-spacing: -1.5px;
`



// Product Details

export const DescriptionContainer = styled.div`
  margin-left: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductImage = styled.img`
  width: ${props => props.w};
  height: ${props => props.h};
`;

export const ProductTitle = styled.h3`
  font-size: ${props => props.fontSize || '11pt'};
  font-weight: bold;
  letter-spacing: -1px;
`;

export const ProductAuthor = styled.span`
  font-size: 11pt;
  font-weight: 100;
`;

export const ProductType = styled.span`
  font-size: 11pt;
  font-weight: 100;
`;

export const ProductPrice = styled.span`
  color: #ff0072;
  font-size: ${props => props.fontSize || '11pt'};
  align-self: start;
`;

// Actions

export const BasketButton = styled.button`
  border-radius: 5px;

  background-color: #0cceeb;
  color: white;
  font-size: 11pt;
  font-weight: bold;
  font-family: Roboto, sans-serif;

  transition: all .3s;

  width: ${props => props.w + 'px'};
  height: ${props => props.h + 'px'};

  &:hover {
    background-color: #01ddfe;
  }
`;

export const WishlistButton = styled.button`
  border-radius: 5px;

  background-color: #f0f0f0;
  color: #666666;
  font-size: 11pt;
  font-family: Roboto, sans-serif;

  transition: all .3s;

  width: ${props => props.w + 'px'};
  height: ${props => props.h + 'px'};

  &:hover {
    background-color: #CECECE;
  }
`;

export const ActionsContainer = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  flex-grow: 2;

  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);

  padding: 20px 15px 10px 15px;


  //border: 2px solid black;
  height: 400px;
  width: 400px;
`;
