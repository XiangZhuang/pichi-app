import "./index.scss";
import ContactItems from "../../components/ContactItems";
import Input from "../../components/Input";
import Button from "../../components/Button";
import MeetSteps from "../../components/MeetSteps";
import { useState } from "react";
import { sentContactForm } from "../../common/utils/email";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [addr, setAddr] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isValidating, setValidating] = useState<boolean>(false);
  const [isSent, setSent] = useState<boolean>(false);

  const onSubmit = () => {
    setValidating(true);
    sentContactForm({ name, email, phone, addr, message }).then(() => {
      setSent(true);
      setValidating(false);
      clearForm();
    });
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddr("");
    setMessage("");
  };

  const isContactFormValid = () => {
    return !!name && !!email && !!message;
  };

  const emptyValidator = (value?: string) => !isValidating || !!value;

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
            {isSent ? (
              <div className="success">
                <p>
                  Message is successfully sent! We will reach out to you soon!
                </p>
              </div>
            ) : (
              <div className="message">
                <div className="row">
                  <div className="col">
                    <Input
                      placeholder="Name *"
                      value={name}
                      onChange={setName}
                      validator={emptyValidator}
                    />
                  </div>
                  <div className="col">
                    <Input
                      placeholder="Phone"
                      value={phone}
                      onChange={setPhone}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Input
                      placeholder="Email *"
                      value={email}
                      onChange={setEmail}
                      validator={emptyValidator}
                    />
                  </div>
                  <div className="col">
                    <Input
                      placeholder="Address"
                      value={addr}
                      onChange={setAddr}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Input
                      multiLine
                      rows={7}
                      placeholder="Message *"
                      value={message}
                      onChange={setMessage}
                      validator={emptyValidator}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Button
                      text={"Send Message"}
                      size="large"
                      disabled={!isContactFormValid() || isValidating}
                      onClick={onSubmit}
                      loading={isValidating}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="block block-02">
        <div className="container">
          <MeetSteps />
        </div>
      </div>
    </div>
  );
};

export default Contact;
