import "./index.scss";
import pichi01 from "../../images/home-pichi01.png";
import pichi02 from "../../images/home-pichi02.png";

const Home = () => {
  return (
    <div className="home">
      <div className="block block-01">
        <div className="imgs">
          <img className="img img-01" src={pichi01} alt="Pichi picture 01" />
          <img className="img img-02" src={pichi02} alt="Pichi picture 02" />
        </div>
        <div className="container">
          <div className="title-container">
            <div className="title">
              <p>Hello Pichi</p>
            </div>
            <div className="sub-title">
              <p>- I'm just a baby catty</p>
            </div>
            <div className="btn">
              <p>About Me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
