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

export const CartIcon = styled.h1`
  color: white;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const ItemCounter = styled.span`
  color: #4e41d9;
  font-weight: 700;
  font-size: 11px;
  position: absolute;
  background-color: white;
  width: 13px;
  height: 13px;
  top: 47px;
  border-radius: 50%;
  text-align: center;
  margin-left: 18px;
`;
