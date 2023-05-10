import * as S from "./styles";
import { ScrollDown } from "../ScrollDown";

export const Hero = () => {
  return (
    <S.Hero>
      <S.HeroTitle>
        A melhor açaiteria de Parauapebas. <span>Conheça nossos sabores</span>
      </S.HeroTitle>
      <ScrollDown />
    </S.Hero>
  );
};
