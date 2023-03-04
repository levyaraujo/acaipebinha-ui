import styled from 'styled-components';

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

export const Image = styled.img`
  width: 242px;
  height: 109px;
  object-fit: cover;
  object-position: 70% 50%;
`;

export const GradientBrand = styled.span`
  background: linear-gradient(to right, #e9ecef, #ced4da);
  -webkit-background-clip: text;
  background-clip: none;
  -webkit-text-fill-color: transparent;
`;

export const ProductsContainer = styled.div`
  @keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
    }
  }

  animation: 1s ease-out 0s 1 slideInFromLeft;

	width: 100%;
	height: 100%;
	margin: 0;
	margin-top: 120px;
	padding: 0;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	color: #3A3D42;
	font-size: 50px;
	font-weight: 500;
  margin: 0;
  margin-bottom: 50px;
`;

export const CardHeader = styled.div`
	height: 109;
	width: 242px;
	border-radius: 3px;
  overflow: hidden;
`;

export const CardBody = styled.div`
	height: 150px;
	padding: 4px 20px;
`;

export const Name = styled.h1`
	color: #3A3D42;
	font-size: 20px;
	font-weight: 600;
`;

export const Description = styled.h1`
	color: #838383;
	font-size: 12px;
	font-weight: 400;
`;

export const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 10px 20px;
	height: auto;
`;

export const Price = styled.p`
	color: #50A773;
	font-size: 15px;
	font-weight: 600;
  margin: 0;
`;

export const AddtoCart = styled.button`
	color: white;
	background-color: #50A773;
	width: 90px;
	height: 30px;
	font-size: 12px;
	font-weight: 600px;
	border-color: #50A773;
	outline: none;
	border-radius: 2px;
	font-family: 'Inter', sans-serif;
	font-weight: 600;
	border: none;
	box-shadow: #282828 .5px .5px 2px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;

	:hover {
		background-color: #469d89;
    transition: .5s;
	}
`;

export const SizeButton = styled.button`
	color: white;
	background-color: #4E41D9;
	width: 50px;
	height: 30px;
	font-size: 12px;
	font-weight: 600px;
	outline: none;
	border-radius: 2px;
	font-family: 'Inter', sans-serif;
	font-weight: 600;
	border: none;
  padding: 0;
	box-shadow: #282828 .5px .5px 2px;
	text-align: center;
	cursor: pointer;
  margin: auto;

  @media (max-width: 768px) {
      height: 30px;
      width: 70px;
      font-size: 12px;
		}
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

export const Card = styled.div`
  width: 242px;
  height: auto;
  border-radius: 3px;
  background-color: #fff;
  text-align: left;
  box-shadow: #282828 2px 2px 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    ${Name} {
      font-size: 25px;
    }
    ${Description} {
      font-size: 15px;
    }
    ${Price} {
      font-size: 14px;
    }

    ${Image} {
      width: 100%;
      height: 250px;
    }
    ${CardFooter} {
      margin-top: 10px;
    }

    ${Title} {
      font-size: 12px;
    }
    height: auto;
  }
`;

export const Cards = styled.div`
	display: grid;
	max-width: 784;
	height: auto;
	grid-template-areas:
	      "a a a";
	grid-gap: 50px;
	margin-bottom: 100px;

	@media (max-width: 768px) {
		grid-template-areas:
	      "a";
    ${Card} {
      width: 90%;
    }
    ${CardHeader} {
      width: 100%;
    }
    margin: 0;
    place-items: center;
    margin-bottom: 100px;
	}
	max-width: 90%;
`;
