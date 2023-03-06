import styled from "styled-components";

export const Nav = styled.nav`
	height: 84px;
	width: 100vw;
	background-color: #4E41D9;
	position: fixed;
	z-index: 10;
	top: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const NavIcon = styled.h1`
	color: white;
	font-size: 30px;
	cursor: pointer;
  display: flex;
  align-items: center;
`;


export const CartIcon = styled.h1`
	color: white;
	font-size: 30px;
	cursor: pointer;
  display: flex;
  align-items: center;
`;

export const GradientBrand = styled.span`
  background: linear-gradient(to right, #e9ecef, #ced4da);
  -webkit-background-clip: text;
  background-clip: none;
  -webkit-text-fill-color: transparent;
`;

export const ItemCounter = styled.span`
	color: #4E41D9;
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
