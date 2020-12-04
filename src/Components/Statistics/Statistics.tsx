import React from "react";
import cards from "./statistics.json";
import Card from "../Card";

const Statistics: React.FC = (): JSX.Element => {
  return (
    <div className="statistics">
      <div className="statistics__info">
        <h2 className="statistics__info-title">Advanced Statistics</h2>
        <div className="statistics__info-text">
          Track how your links are performing across the web with <br />
          our advanced statistics dashboard.
        </div>
      </div>
      <div className="cards">
          <div className="line"></div>
        {cards.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
export default Statistics;
