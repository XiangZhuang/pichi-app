import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="navs">
          <div className="nav">
            <Link to="/home">Home</Link>
          </div>
          <div className="nav">
            <Link to="/about">My Journey</Link>
          </div>
          <div className="nav">
            <Link to="/contact">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
