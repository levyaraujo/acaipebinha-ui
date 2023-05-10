import { FunctionComponent } from "react";
import { styled } from "styled-components";

const DescriptionStyle = styled.p`
  font-weight: 400;
  color: #838383;
  font-size: 0.8rem;
  line-height: 1.1rem;
`;

interface DescriptionProps {
  description: string;
}

export const Description: FunctionComponent<DescriptionProps> = ({
  description,
}) => {
  return <DescriptionStyle>{description}</DescriptionStyle>;
};
