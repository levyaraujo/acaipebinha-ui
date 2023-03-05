import styled from "styled-components";


export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
	color: #3A3D42;
	font-size: 15px;
	font-weight: 500;
  margin: 0;
  margin-bottom: 5px;
  grid-column: 1/3;
`;


export const ModalContainer = styled.div`
  position: fixed;
  width: 270px;
  height: auto;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  z-index: 100;
  text-align: start;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 200px;
  width: 100%;
  @media (max-width: 768px) {
  }
`;

export const ModalHeader = styled.div`
	height: 200px;
	width: 270px;
	border-radius: 3px;
  overflow: hidden;
`;

export const ModalBody = styled.div`
  height: 150px;
  padding: 4px 20px;
  text-align: start;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid #3A3D42;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* place-items: center; */
  justify-content: space-around;
	padding: 20px 20px;
`;

export const CloseButton = styled.button`
  margin-top: 1px;
  margin-right: -2px;
  position:absolute;
  background-color: transparent;
  top:0;
  right:0;
  border: none;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`;

export const Price = styled.p`
	color: white;
	font-size: 15px;
	font-weight: 600;
  margin: 0;
`;
