import styled from "styled-components";

export const Cart = styled.div`
  @keyframes growing {
  0% {
    transform: scale(0%) translate(-50%, -50%);
    opacity: 0;
  }
  100% {
    transform: scale(100%) translate(-50%, -50%);
    opacity: 1;
    }
  }
  transform: scale(0);
  position: fixed;
  width: 80%;
  height: 90%;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  z-index: 100;
  text-align: start;
  animation: .5s 0s 1 growing;
`;
