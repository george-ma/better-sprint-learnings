import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/views/Home";
import Learnings from "../components/views/Learnings"

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/learnings" exact component={Learnings} />
        </Switch>
      </Router>
    );
  }
}
export default App
