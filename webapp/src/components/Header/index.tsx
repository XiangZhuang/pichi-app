import { Link, useHistory } from "react-router-dom";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import menuIcon from "../../images/icons/menu.png";
import { handleClassName } from "../../common/utils";

const links = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "My Journey",
    link: "/about",
  },
  {
    name: "Photos",
    link: "/gallery",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const headerRef = useRef<HTMLDivElement>();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    handleClassName(headerRef, "shadow", scrollTop > 80);
  };

  const handlePathChange = (pathname: string) => {
    const whiteList = ["/about"];
    handleClassName(headerRef, "white", whiteList.includes(pathname));
    handleClassName(headerRef, "show-menu", showMenu);
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
    // @ts-ignore
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="navs">
          {links.map((link) => (
            <div className="nav" key={link.link}>
              <Link to={link.link}>{link.name}</Link>
            </div>
          ))}
        </div>
        <div className="mobile">
          <div
            className={`menu ${showMenu ? "rotate" : ""}`}
            onClick={() => {
              handleClassName(headerRef, "show-menu", !showMenu);
              setShowMenu(!showMenu);
            }}
          >
            <img src={menuIcon} alt="menu" />
          </div>
        </div>
      </div>
      <div className={`mobile-menu-items ${showMenu ? "show" : ""}`}>
        <div className="container">
          {links.map((link) => (
            <div
              className="item"
              key={link.link}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <Link to={link.link}>{link.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
