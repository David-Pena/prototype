import "./App.css";
import "./components/Start";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./components/Start";
import WLform from "./components/WLform"
import CLform from "./components/CLform"
import WRform from "./components/WRform"
import CRform from "./components/CRform"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Start} exact />
          <Route path="/wl-form" component={WLform} exact />
          <Route path="/cl-form" component={CLform} exact />
          <Route path="/wr-form" component={WRform} exact />
          <Route path="/cr-form" component={CRform} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
