import { ADD_BET, GET_ALL_BETS, BET_ERROR } from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_BETS:
      return {
        ...state,
        bets: action.payload,
      };
    case ADD_BET:
      console.log(action.payload);
      return {
        ...state,
        bets: [action.payload, ...state.bets],
      };
    case BET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
