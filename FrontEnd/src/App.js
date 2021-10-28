import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import BetState from "./context/bet/BetState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import FormState from "./context/betForm/FormState";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Stream from "./components/Stream";
import Alerts from "./components/Alerts";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRouting";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Account from "./components/Account";

function App() {
  if (localStorage.getItem("token") !== null) {
    setAuthToken(localStorage.getItem("token"));
  }

  return (
    <div className="app">
      <AuthState>
        <BetState>
          <AlertState>
            <Router>
              <FormState>
                <Navbar />
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/account" component={Account} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/stream" component={Stream} />
                </Switch>
              </FormState>
            </Router>
          </AlertState>
        </BetState>
      </AuthState>
    </div>
  );
}

export default App;
