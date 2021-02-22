import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav `
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)
`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)
`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)
`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div `
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    
  }
`;

export const NavMenu = styled.ul `
  display: flex;
  align-items: center;
  list-style: none;
  

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #3b3054;
    width:90%;
    margin:5%;
  }
`;

export const NavItem = styled.li `
  height: 80px;
  border-bottom: 2px solid transparent;
  


  &:hover {
    font-weight : bold;
    color:#000;
    text-decoration:none;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    color:#fff;
  font-size:24px;
  font-weight : bold;

    &:hover {
      border: none;
      color:#bfbfbf;
  font-size:30px;
  font-weight : bold;

    }
  }
`;

export const NavItemBtn = styled.li `
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    border-radius: 40px;
    color:#fff;
    
  }
`;

export const NavLinks = styled(Link)
`
  color: #bfbfbf;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
      color: #232127;
      transition: all 0.3s ease;
      font-weight:bold;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
      font-weight:bold;

    }
  }
`;

export const NavBtnLink = styled(Link)
`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border-radius: 40px;
  outline: none;
`;


