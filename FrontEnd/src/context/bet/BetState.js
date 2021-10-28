import React, { useReducer } from "react";
import betContext from "./betContext";
import betReducer from "./betReducer";
import axios from "axios";
import { ADD_BET, GET_ALL_BETS, BET_ERROR } from "../types";
// import { Context } from "express-validator/src/context";

const BetState = (props) => {
  const initialState = {
    bets: [
      // {
      //   id: 1,
      //   pick: "KILLS",
      //   value: 10,
      //   side: "OVER",
      //   Verification: "AUTO",
      //   amount: 10,
      //   streamer: "SWAGGY",
      // },
      // {
      //   id: 2,
      //   pick: "WINS",
      //   value: 5,
      //   side: "UNDER",
      //   Verification: "MANUAL",
      //   amount: 5,
      //   streamer: "Shery",
      // },
    ],
    error: null,
  };
  const [state, dispatch] = useReducer(betReducer, initialState);

  // Get Bets
  const getAllBets = async () => {
    try {
      const res = await axios.get(
        `api/bets/${sessionStorage.getItem("channel")}`
      );
      dispatch({ type: GET_ALL_BETS, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: BET_ERROR, payload: error });
    }
  };

  // ADD_BET
  const addBet = async (bet) => {
    // console.log(bet);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/bets", bet, config);
      dispatch({ type: ADD_BET, payload: res.data });
    } catch (error) {
      dispatch({ type: BET_ERROR, payload: error });
    }
  };

  return (
    <betContext.Provider value={{ bets: state.bets, addBet, getAllBets }}>
      {props.children}
    </betContext.Provider>
  );
};

export default BetState;
