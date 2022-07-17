import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Login/login";

import Signup from "./Signup/signup";

import Navbar from "./Header/header";

import Footer from "./Footer/footer";

import Together from "./Chat/Together";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="RouterPage">
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/together" component={Together} />
          </div>
          <div className="mt-5">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
