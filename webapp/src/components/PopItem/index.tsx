import React, { useState } from "react";
import "./index.scss";

const PopItem = (props: {
  icon: string;
  popup?: React.ReactNode;
  href?: string;
}) => {
  const { icon, popup, href } = props;
  const [show, setShow] = useState(false);
  return (
    <div
      className="pop-item"
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
      onClick={() => {
        if (href) window.location.href = href;
      }}
    >
      <div className="pop-btn">
        <img className="icon" src={icon} alt="icon" />
      </div>
      {show && popup ? <div className="popup">{popup}</div> : null}
    </div>
  );
};

export default PopItem;
