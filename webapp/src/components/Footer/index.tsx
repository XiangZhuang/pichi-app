import "./index.scss";
import plant from "../../images/home-plant01.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="imgs">
        <img className="img" src={plant} alt="plant" />
      </div>
      <div className="container">
        <div className="copyright">
          <p>Copyright © 2021 Johnson Z. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
