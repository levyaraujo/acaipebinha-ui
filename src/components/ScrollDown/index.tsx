import "./styles.scss";
import { FunctionComponent } from "react";

export const ScrollDown: FunctionComponent = () => {
  const handleClick = () => {
    window.scrollBy({ top: 600, behavior: "smooth" });
  };

  return (
    <div className="container" onClick={handleClick}>
      <div className="chevron" onClick={handleClick}></div>
      <div className="chevron" onClick={handleClick}></div>
      <div className="chevron" onClick={handleClick}></div>
    </div>
  );
};
