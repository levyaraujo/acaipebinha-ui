import * as S from "./styles";
import { ScrollDown } from "../ScrollDown";

export const Hero = () => {
  return (
    <S.Hero>
      <S.HeroTitle>
        Encontre o açaí perfeito para qualquer hora do dia.{" "}
        <span>Experimente nossos sabores</span>
      </S.HeroTitle>
      <ScrollDown />
    </S.Hero>
  );
};
