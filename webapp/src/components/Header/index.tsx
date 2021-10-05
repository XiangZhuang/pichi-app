import { Link, useHistory } from "react-router-dom";
import "./index.scss";
import { createRef, useEffect } from "react";

const Header = () => {
  const headerRef = createRef<HTMLDivElement>();
  const history = useHistory();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const classes = headerRef.current!!.className.split(" ");
    if (scrollTop > 80) {
      if (!classes!!.includes("shadow")) {
        classes!!.push("shadow");
      }
    } else {
      if (classes!!.includes("shadow")) {
        classes.splice(classes.indexOf("shadow"), 1);
      }
    }
    headerRef.current!!.className = classes!!.join(" ");
  };

  const handlePathChange = (pathname: string) => {
    const whiteList = ["/about"];
    const classes = headerRef.current!!.className.split(" ");
    if (whiteList.includes(pathname)) {
      if (!classes.includes("white")) {
        classes.push("white");
      }
    } else {
      if (classes.includes("white")) {
        classes.splice(classes.indexOf("white"), 1);
      }
    }
    headerRef.current!!.className = classes!!.join(" ");
  };

  useEffect(() => {
    handlePathChange(history.location.pathname);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    return history.listen((location) => {
      handlePathChange(location.pathname);
    });
  }, [history]);

  return (
    <div className="header" ref={headerRef}>
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
