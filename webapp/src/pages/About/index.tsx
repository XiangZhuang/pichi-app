import "./index.scss";
import pichi from "../../images/about-pichi01.png";
import upper from "../../images/about-upper01.png";
import event01 from "../../images/about-event-01.png";
import event02 from "../../images/about-event-02.png";
import event03 from "../../images/about-event-03.png";
import plant01 from "../../images/about-plant01.png";
import plant02 from "../../images/about-plant02.png";
import plant03 from "../../images/about-plant03.png";
import Event from "./Event";
import { createRef, useEffect, useRef } from "react";

const events = [
  {
    descs: [
      "I was born in the JUDYFUL Cattery",
      "Given birth by my daddy Poker Face and Mommy Chili, I am the only golden kitty of my batch (with pride).",
    ],
    date: new Date("2021-04-19"),
    img: event01,
    background: plant01,
  },
  {
    descs: [
      "I was chosen by my master Johnson, because of my handsome looking and energetic personality.",
    ],
    date: new Date("2021-07-27"),
    img: event02,
    background: plant02,
  },
  {
    descs: [
      "I arrived at my new home. The new environment was a bit frightening, so I hid in the dark space behind the mircowave oven for half a day, util my master tricked  me out by the sound of kitten video!",
    ],
    date: new Date("2021-09-27"),
    img: event03,
    background: plant03,
  },
];

const About = () => {
  const eventRefs = useRef([]);
  // @ts-ignore
  eventRefs.current = Array(events.length).map((_) => createRef());

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    for (let i = 0; i < eventRefs.current.length; i += 1) {
      const ref = eventRefs.current[i] as any;
      if (!!ref) {
        const offsetTop = ref.getBoundingClientRect().top + window.scrollY;
        // @ts-ignore
        const className = eventRefs.current[i].className;
        if (
          scrollTop > offsetTop - window.innerHeight &&
          !className.split(" ").includes("appear")
        ) {
          // @ts-ignore
          eventRefs.current[i].className = `${className} appear`;
        }
      }
    }
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="about">
      <div className="block block-01">
        <div className="imgs">
          <img className="bg" src={pichi} alt="Pichi Picture" />
          <div className="cover" />
        </div>
        <div className="container">
          <div className="title-container">
            <p>Pichi is a 5-Month Old Bengal Cat</p>
          </div>
        </div>
        <div
          className="wave"
          style={{
            backgroundImage: `url(${upper})`,
          }}
        />
      </div>
      <div className="block block-02">
        <div className="container">
          <div className="title">
            <p>Pichi Calendar</p>
          </div>
          <div className="events">
            {events.map((event, key) => (
              <Event
                key={key}
                // @ts-ignore
                refHook={(ref) => (eventRefs.current[key] = ref)}
                descs={event.descs}
                date={event.date}
                img={event.img}
                background={event.background}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
