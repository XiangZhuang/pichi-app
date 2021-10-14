import "./index.scss";
import ContactItems from "../../components/ContactItems";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Contact = () => {
  return (
    <div className="contact">
      <div className="block block-01">
        <div className="container">
          <div className="left">
            <div className="title">
              <p>Contact Me</p>
            </div>
            <div className="sub-title">
              <p>Questions & Appointments(Not Available Now)</p>
            </div>
            <ContactItems />
          </div>
          <div className="right">
            <div className="message">
              <div className="row">
                <div className="col">
                  <Input placeholder="Name" />
                </div>
                <div className="col">
                  <Input placeholder="Phone" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Input placeholder="Email" />
                </div>
                <div className="col">
                  <Input placeholder="Address" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Input multiLine rows={7} placeholder="Message" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Button text={"Send Message"} size="large" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
