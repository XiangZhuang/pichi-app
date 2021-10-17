import Step from "./Step";
import phone from "../../images/icons/phone-white.png";
import calendar from "../../images/icons/calendar-white.png";
import cat from "../../images/icons/cat-white.png";
import "./index.scss";

const MeetSteps = () => {
  return (
    <div className="meet-steps">
      <div className="title">
        <p>THREE STEPS TO MEET PICHI</p>
      </div>
      <div className="sub-title">
        <p>(Service not available now...)</p>
      </div>
      <div className="steps">
        <Step
          title="Contact Me"
          desc="Please find me through my WeChat, WhatsApp, Instagram, or Email, with your basic information attached."
          icon={phone}
        />
        <Step
          title="Schedule a Date"
          desc="Find one day that is available for both you and me. Weekends or public holidays are preferred~"
          icon={calendar}
        />
        <Step
          title="Meet Pichi"
          desc="Come to Pichi’s little home and play with Pichi! Enjoy your time with our lovely lovely creature~~~"
          icon={cat}
        />
      </div>
    </div>
  );
};

export default MeetSteps;
