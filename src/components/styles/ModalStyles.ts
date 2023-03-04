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

export const ModalContainer = styled.div`
  position: fixed;
  width: 270px;
  height: 346px;
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
`;

export const ModalHeader = styled.div`
	height: 200px;
	width: 270px;
	border-radius: 3px;
  overflow: hidden;
`;

export const ModalBody = styled.div`
  height: auto;
  padding: 4px 20px;
  text-align: start;
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
