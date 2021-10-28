import { FORM_OPEN, FORM_CLOSE } from "../types";

const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_OPEN:
      return {
        ...state,
        form: action.payload,
      };
    case FORM_CLOSE:
      return {
        ...state,
        form: action.payload,
      };

    default:
      return state;
  }
};
export default formReducer;
