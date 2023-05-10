import { FunctionComponent } from "react";
import * as S from "./styles";
import { Image } from "../Image";
import { Title } from "./Title";
import { Description } from "./Description";
import { Footer } from "./Footer";
import { CartProvider } from "../Cart/cart.context";

export interface CardProps {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  sizes: number[];
  prices?: number[];
}

export const Card: FunctionComponent<CardProps> = ({
  _id,
  name,
  description,
  imagePath,
  sizes,
}) => {
  return (
    <S.Card>
      <Image imagePath={imagePath} />
      <S.CardBody>
        <Title title={name} />
        <Description description={description} />
      </S.CardBody>
      <CartProvider>
        <Footer sizes={sizes} id={_id} name={name} imagePath={imagePath} />
      </CartProvider>
    </S.Card>
  );
};
