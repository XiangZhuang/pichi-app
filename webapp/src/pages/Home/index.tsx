import "./index.scss";
import pichi01 from "../../images/home-pichi01.png";
import pichi02 from "../../images/home-pichi02.png";
import pichi03 from "../../images/home-pichi03.png";
import backgroundPlants from "../../images/home-plants01.png";
import upperWave from "../../images/home-upper01.png";
import downWave from "../../images/home-down01.png";
import footprints from "../../images/home-footprints.png";
import line02 from "../../images/home-line02.png";
import Button from "../../components/Button";

const Home = () => {
  return (
    <div className="home">
      <div
        className="block block-01"
        style={{
          backgroundImage: `url(${backgroundPlants})`,
        }}
      >
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
            <Button theme="round-radius" text="My Journey" href="/about" />
          </div>
        </div>
      </div>
      <div
        className="wave"
        style={{
          backgroundImage: `url(${upperWave})`,
        }}
      />
      <div
        className="block block-02"
        style={{
          backgroundImage: `url(${line02})`,
        }}
      >
        <div className="imgs">
          <img className="img img-01" src={pichi03} alt="Pichi picture 03" />
          <img className="img img-02" src={footprints} alt="Pichi footprints" />
        </div>
        <div className="container">
          <div className="title-container">
            <div className="title">
              <p>I am looking at U</p>
              <p>～(='x'=)</p>
            </div>
            <div className="sub-title">
              <p>and I know U are looking at me</p>
            </div>
            <Button
              theme="round-radius"
              variant="red"
              text="Look More at Me!"
              href="/gallery"
            />
          </div>
        </div>
      </div>
      <div
        className="wave"
        style={{
          backgroundImage: `url(${downWave})`,
        }}
      />
    </div>
  );
};

export default Home;
