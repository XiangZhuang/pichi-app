import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";

const Pages = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default Pages;
