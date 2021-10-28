import React, { useContext, useEffect, useState } from "react";
import CurrentBets from "./CurrentBets";
import BetForm from "./BetForm";
import BetContext from "../context/bet/betContext";
import FormContext from "../context/betForm/formContext";
import axios from "axios";

const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

const Stream = (props) => {
  const [gameName, setGameName] = useState("");
  const instance = axios.create({
    baseURL: "https://api.twitch.tv/helix",
    // baseURL: 'http://localhost:6005/',
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "*",
    // "Access-Control-Allow-Headers":
    // "Origin, X-Requested-With, Content-Type, Accept",
    // Authorization: "Bearer 36kg8vr5q0j7scrl7cjubzt8gwhsn0",
    // "Client-Id": "x6wdq29ufay33k2lbrg8l4j0de0uaq",
    crossorigin: true,
  });

  const betContext = useContext(BetContext);

  const { bets, getAllBets } = betContext;

  const formContext = useContext(FormContext);

  const { form, openForm } = formContext;

  useEffect(() => {
    document.getElementById("kk").click();
    getGameName();
    getAllBets();

    //eslint-disable-next-line
  }, []);

  const createBet = () => {
    openForm();
  };

  const getGameName = async () => {
    let res = await instance({
      url: `/users?login=${sessionStorage.getItem("channel")}`,
      headers: {
        Authorization: "Bearer 36kg8vr5q0j7scrl7cjubzt8gwhsn0",
        "Client-Id": "x6wdq29ufay33k2lbrg8l4j0de0uaq",
      },
    });
    getGameNameById(res.data.data[0].id);
  };
  const getGameNameById = async (id) => {
    let res = await instance({
      url: `/channels?broadcaster_id=${id}`,
      headers: {
        Authorization: "Bearer 36kg8vr5q0j7scrl7cjubzt8gwhsn0",
        "Client-Id": "x6wdq29ufay33k2lbrg8l4j0de0uaq",
      },
    });
    setGameName(res.data.data[0].game_name);
  };
  // sessionStorage.setItem("gameName", gameName);

  const set_creator_name = () => {
    return sessionStorage.getItem("channel");
  };
  const streamerName = set_creator_name();
  return (
    <div className="container-fluid">
      <div className="row g-4">
        <div className="col-sm-10 col-md-8 ">
          <div className="p-3 live-stream">
            <h3>{streamerName}</h3>
            <div className="stream">
              <div className="ppv" id="ppv"></div>
            </div>
            <div className="bottom-div">
              <h5>
                {`${streamerName.toUpperCase()}`}
                <span> currently playing </span>
                {`${gameName}`}
              </h5>
              <button className="btn btn-dark color-white" onClick={createBet}>
                CREATE BET
              </button>
            </div>
          </div>
          {form && <BetForm streamerName={streamerName} gameName={gameName} />}
        </div>

        <div className="col-sm-10 col-md-4">
          <div className="bets p-3">
            <h3>CURRENT BETS</h3>
            {bets.map((bet) => (
              <CurrentBets key={bet.id} bet={bet} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;
