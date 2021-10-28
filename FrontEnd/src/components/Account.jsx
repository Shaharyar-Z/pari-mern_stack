import React, { useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";

const Account = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {}, []);
  const { user, logout } = authContext;

  // localStorage.setItem('user',user)

  // const onLogout = () => {
  //   logout();
  // };
  return (
    <>
      <div className="container account ">
        <div className="row">
          <div className="  col-10 col-md-6">
            <div className="account-inner">
              <div className="account-name">
                <h4>Username</h4>
                <p>{user && user.name}</p>
              </div>
              <div className="account-email">
                <h4>Email</h4>
                <p>{user && user.email}</p>
              </div>
              {/* <button className="btn btn-dark color-white" onClick={onLogout}>
                Logout
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
