import "./index.scss";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Event = (props: {
  descs: Array<string>;
  date: Date;
  img: string;
  background?: string;
  refHook?: (ref: any) => {};
}) => {
  const { descs, date, img, background, refHook } = props;
  return (
    <div
      className="event"
      style={background ? { backgroundImage: `url(${background})` } : {}}
      ref={refHook}
    >
      <div
        className="img-container"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="content-container">
        <div className="year">
          <p>{date.getFullYear()}</p>
        </div>
        <div className="month-date">
          <p>
            {monthNames[date.getMonth()]} {date.getDate()}
          </p>
        </div>
        <div className="descs">
          {descs.map((desc, key) => (
            <div className="desc" key={key}>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
