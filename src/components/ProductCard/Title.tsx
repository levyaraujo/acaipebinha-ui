import { FunctionComponent } from "react";
import * as S from "./card.style";

interface TitleProps {
  title: string;
}

export const Title: FunctionComponent<TitleProps> = ({ title }) => {
  return <S.Title>{title}</S.Title>;
};
