import { Link } from "react-router-dom";
import * as S from "./styles";

export function Logo() {
  return (
    <S.NavbarLogo>
      <Link to="/" style={{ textDecoration: "none", color: "#f8f9fa" }}>
        Açaí Pebinha
      </Link>
    </S.NavbarLogo>
  );
}
