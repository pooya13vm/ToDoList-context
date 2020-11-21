import React, { Fragment } from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import MustDo from "./components/mustdoCtrl";
import DoneJobs from "./components/doneCtrl";
import AboutMe from "./components/aboutMe";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Nav />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Fragment>
              <Header />
              <MustDo />
              <DoneJobs />
              <ToastContainer />
            </Fragment>
          )}
        />
        <Route path="/about" component={AboutMe} />
      </Switch>
    </Fragment>
  );
};

export default App;
