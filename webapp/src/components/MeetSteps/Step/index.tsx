import "./index.scss";

const Step = (props: { title: string; desc: string; icon: string }) => {
  const { title, desc, icon } = props;
  return (
    <div className="step">
      <div className="circle">
        <img src={icon} alt="icon" />
      </div>
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Step;
