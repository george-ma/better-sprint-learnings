import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import LearningsContainer from "./containers/LearningsContainer"
import Learning from "./views/Learning";

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/learnings" exact component={LearningsContainer} />
          <Route path="/learning/:id" exact component={Learning} />
        </Switch>
      </Router>
    );
  }
}
export default App
