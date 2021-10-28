import React, { useReducer } from "react";
import formContext from "./formContext";
import formReducer from "./formReducer";

import { FORM_OPEN, FORM_CLOSE } from "../types";

const FormState = (props) => {
  const initialState = {
    form: false,
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  const openForm = () => {
    dispatch({ type: FORM_OPEN, payload: true });
  };
  const closeForm = () => {
    dispatch({ type: FORM_CLOSE, payload: false });
  };

  return (
    <formContext.Provider
      value={{
        form: state.form,
        openForm,
        closeForm,
      }}
    >
      {props.children}
    </formContext.Provider>
  );
};

export default FormState;
