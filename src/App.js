import "./App.css";
import "./components/Start";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./components/Start";
import WLform from "./components/WLform"
import CLform from "./components/CLform"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Start} exact />
          <Route path="/wl-form" component={WLform} exact />
          <Route path="/cl-form" component={CLform} exact />
          <Route path="/home" component={Home} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
