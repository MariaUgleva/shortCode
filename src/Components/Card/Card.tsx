import React from "react";
import { CardType } from "../../type";

type PropsType = {
  data: CardType;
};
const Card: React.FC<PropsType> = ({ data }):JSX.Element => {
  return (
    <div className="card">
      <div className="card__helper">
        <div className="card__logo-box">
          <img src={data.logo} alt="" className="card__logo" />
        </div>
      </div>
      <h3 className="card__title">{data.title}</h3>
      <p className="card__text">{data.text}</p>
    </div>
  );
};
export default Card;
