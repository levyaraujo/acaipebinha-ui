import styled from "styled-components";
import { FunctionComponent } from "react";

const LineStyle = styled.div`
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
`;

export const Line: FunctionComponent = () => {
  return <LineStyle />;
};
