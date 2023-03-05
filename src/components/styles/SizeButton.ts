import styled from "styled-components";


export const Size = styled.button`
  width: 50px;
  height: 20px;
  border-radius: 2px;
  background-color: #D9D9D9;
  color: #3A3D42;
  text-align: center;
  font-size: 12px;
  border: none;
  cursor: pointer;
  box-shadow: #282828 .5px .5px 2px;
  margin: 0;
  margin-bottom: 30px;

  &:focus {
    background-color: #4E41D9;
    color: white;
  }

  &:first-child {
    margin: 0px -10px;
  }
`;
