import React from "react";

const CurrentBets = (bet) => {
  const {
    bet: { pick, value, side, verification, amount },
  } = bet;
  return (
    <div className="current-bet">
      <div className="first">
        <span className="one">
          {pick === "wins"
            ? `Win next ${value} games`
            : pick === "kills"
            ? `Kill ${value} next game`
            : "Got Damage"}
        </span>
        <span className="two">OODS Locks in: 10s</span>
      </div>
      <div className="second">
        <span className="one">Over Payout: 100%</span>
        <span className="two">|</span>
        <span className="three">Under Payout: 100%</span>
        <span className="four">{amount}$</span>
      </div>
      <div className="third">
        <div className="one d-flex justify-content-center">Over</div>
        <div className="two">1</div>
        <div className="three d-flex justify-content-center">Under</div>
        <div className="four">Bet</div>
      </div>
    </div>
  );
};

export default CurrentBets;
