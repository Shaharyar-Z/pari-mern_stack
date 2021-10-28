import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";

const Signup = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "A user with this email already exists.") {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    passsword: "",
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all field", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };
  const { name, email, password } = user;
  return (
    <div className="signup container">
      <div className="row">
        <form onSubmit={onSubmit} className="col-10 col-md-6">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
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
              name="password"
              value={password}
              onChange={onChange}
              className="form-control"
              id="password"
              minLength="6"
            />
          </div>
          <button type="submit" className="btn btn-dark color-white">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
