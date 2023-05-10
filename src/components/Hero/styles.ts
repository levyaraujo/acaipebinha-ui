import { styled } from "styled-components";

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("https://images.pexels.com/photos/6741479/pexels-photo-6741479.jpeg?auto=compress&cs=tinysrgb&w=1600")
    no-repeat center center/cover;
  height: 70vh;
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));
  }
`;

export const HeroTitle = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  z-index: 1;
  max-width: 60rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2rem;
    max-width: 90vw;
  }

  span {
    text-decoration: underline;
    font-style: italic;
    background-image: linear-gradient(
      90deg,
      rgb(64, 203, 246) -0.03%,
      rgb(130, 192, 65) 99.92%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;
