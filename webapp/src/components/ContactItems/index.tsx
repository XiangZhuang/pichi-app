import "./index.scss";
import PopItem from "../PopItem";
import fb from "../../images/icons/fb.png";
import wechat from "../../images/icons/wechat.png";
import ins from "../../images/icons/ins.png";
import wechatQR from "../../images/wechat-qr.jpg";
import insQR from "../../images/ins-qr.png";

const QR = (props: { code: string }) => {
  const { code } = props;
  return (
    <div
      className="qr-code"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 160,
        height: 160,
        backgroundColor: "white",
        borderRadius: 10,
      }}
    >
      <img src={code} style={{ width: "calc(100% - 6px)" }} alt="QR Code" />
    </div>
  );
};

const ContactItems = () => {
  return (
    <div className="contact-items">
      <PopItem icon={fb} href="https://www.facebook.com/xzhuangaa" />
      <PopItem icon={wechat} popup={<QR code={wechatQR} />} />
      <PopItem icon={ins} popup={<QR code={insQR} />} />
    </div>
  );
};

export default ContactItems;
