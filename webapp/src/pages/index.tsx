import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Pages = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default Pages;
