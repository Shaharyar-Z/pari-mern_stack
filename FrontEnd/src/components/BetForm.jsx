import React, { useState, useContext } from "react";
import FormContext from "../context/betForm/formContext";
import BetContext from "../context/bet/betContext";

const BetForm = ({ streamerName, gameName }) => {
  const [bet, setBet] = useState({
    pick: "",
    value: "",
    side: "",
    verification: "",
    amount: "",
  });

  const formContext = useContext(FormContext);
  const betContext = useContext(BetContext);

  const { closeForm } = formContext;
  const { addBet } = betContext;

  const { pick, value, side, verification, amount } = bet;

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      pick === "" ||
      value === "" ||
      side === "" ||
      verification === "" ||
      amount === ""
    ) {
      alert("Please fill All the fields");
    } else {
      const newBet = {
        pick,
        value,
        side,
        verification,
        amount,
        streamerName,
        gameName,
      };
      addBet(newBet);
      closeForm();
    }
  };
  const handleForm = () => {
    closeForm();
  };

  const onChange = (e) => setBet({ ...bet, [e.target.name]: e.target.value });

  return (
    <div className="row bet-form">
      <form className="col-md-12" onSubmit={onSubmit}>
        <a href="#!" onClick={handleForm}>
          <i className="fas fa-times"></i>
        </a>
        <h2 className="fheading">{streamerName}</h2>
        <h5 className="subhead">Pick one:</h5>
        <div className="btn-group mb-2">
          <input
            type="radio"
            className="btn-check"
            name="pick"
            id="radio1"
            value="kills"
            checked={pick === "kills"}
            onChange={onChange}
            autoComplete="off"
          />
          <label className="btn btn-outline-secondary" htmlFor="radio1">
            KILLS
          </label>

          <input
            type="radio"
            className="btn-check"
            name="pick"
            id="radio2"
            value="wins"
            checked={pick === "wins"}
            onChange={onChange}
            autoComplete="off"
          />
          <label className="btn btn-outline-secondary" htmlFor="radio2">
            WINS
          </label>

          <input
            type="radio"
            className="btn-check"
            name="pick"
            id="radio3"
            value="damage"
            checked={pick === "damage"}
            onChange={onChange}
            autoComplete="off"
          />
          <label className="btn btn-outline-secondary" htmlFor="radio3">
            DAMAGE
          </label>
        </div>
        <div className="mb-2">
          <h5 className="subhead">Enter Value:</h5>
          <input
            type="number"
            name="value"
            value={value}
            onChange={onChange}
            className="form-control"
            id="value"
          />
        </div>
        <h5 className="subhead">Pick Side:</h5>
        <div className="btn-group mb-2">
          <input
            type="radio"
            className="btn-check"
            name="side"
            id="picksideradio1"
            value="over"
            checked={side === "over"}
            onChange={onChange}
            autoComplete="off"
          />
          <label className="btn btn-outline-secondary" htmlFor="picksideradio1">
            OVER
          </label>

          <input
            type="radio"
            className="btn-check"
            name="side"
            id="picksideradio2"
            value="under"
            checked={side === "under"}
            onChange={onChange}
            autoComplete="off"
          />
          <label className="btn btn-outline-secondary" htmlFor="picksideradio2">
            UNDER
          </label>
        </div>
        <h5 className="subhead">Verification:</h5>
        <div className="btn-group mb-2">
          <input
            type="radio"
            className="btn-check"
            name="verification"
            id="verificationradio1"
            value="auto"
            checked={verification === "auto"}
            onChange={onChange}
            autoComplete="off"
          />
          <label
            className="btn btn-outline-secondary"
            htmlFor="verificationradio1"
          >
            AUTO
          </label>

          <input
            type="radio"
            className="btn-check"
            name="verification"
            id="verificationradio2"
            value="manual"
            checked={verification === "manual"}
            onChange={onChange}
            autoComplete="off"
          />
          <label
            className="btn btn-outline-secondary"
            htmlFor="verificationradio2"
          >
            MANUAL
          </label>
        </div>
        <div className="mb-2">
          <h5 className="subhead">Enter Amount:</h5>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={onChange}
            className="form-control"
            id="amount"
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BetForm;
