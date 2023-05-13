import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #212529;
  height: 5rem;
  width: 100%;
  z-index: 5;
  color: #f8f9fa;
  font-family: "Poppins", sans-serif;
  position: fixed;
  top: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;

export const NavbarLogo = styled.h1`
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const CartIcon = styled.h1`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`;
