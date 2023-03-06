import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ValueButton = styled.button`
  width: 30px;
  height: 20px;
  border-radius: 2px;
  border: none;
  background-color: #9D9D9D;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;


export const ValueInput = styled.p`
  background-color: #9d9d9d;
  padding: 5px 10px;
  font-size: 10px;
  border: none;
  background-color: #fff;
  width: 10px;
  height: 10px;
  outline: none;
  border-radius: 2px;
  text-align: center;
  margin-top: -1px;

  ::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }

  &:focus {
    border: solid #4E41D9 1px;
  }
`;
