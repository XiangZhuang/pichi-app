import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Pages = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default Pages;
