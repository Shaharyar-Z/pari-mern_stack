import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { login, error, isAuthenticated, clearErrors } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Incorrect password.") {
      setAlert(error, "danger");
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("please fill the login form", "danger");
    } else {
      login({ email, password });
    }
  };

  return (
    <div className="login container">
      <div className="row">
        <form onSubmit={onSubmit} className="col-10 col-md-6">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              onChange={onChange}
              name="email"
              value={email}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              onChange={onChange}
              name="password"
              value={password}
              className="form-control"
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-dark color-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
