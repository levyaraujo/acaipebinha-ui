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
`;

export const NavbarLogo = styled.h1`
  text-decoration: none;
  font-size: 1.5rem;
`;
