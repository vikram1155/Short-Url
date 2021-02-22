import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardsContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  background:#bfbfbf;
  


  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const CardsCard = styled(Link)
`
  background: #242424;
  width: 30%;
  height: 20%;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom :1%;

  

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const CardsCardshort = styled(Link)
`
  background: #3b3054;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 30%;
  height: 20%;
  text-decoration: none;
  border-radius: 4px;
  marginBottom :"3%";
  

  &:nth-child(2) {
    margin: 24px;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  }
`;

export const CardsCardInfo = styled.div `
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;
  color: #fff;
    justify-content: center;
    align-items: center;
    text-align: left;
`;

export const CardsCardIcon = styled.div `
  margin: 24px 0;
`;