import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  * {
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif; } 
`;

export const Container = styled.div `
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
    alignItems:center;
    textAlign:center;
  }
`;


export const Search = styled.div `
  border-radius: 5px;
  background: ${({ primary }) => (primary ? '#fff' : '#fff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #000;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.1s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    alignItems:center;
    textAlign:center;
  }
`;

export const Button = styled.button `
  border-radius: 40px;
  background: ${({ primary }) => (primary ? '#2acfcf' : '#2acfcf')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.1s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    alignItems:center;
    textAlign:center;
  }
`;

export default GlobalStyle;