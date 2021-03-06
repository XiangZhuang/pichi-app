import "./index.scss";
import pichi from "../../images/about-pichi01.png";
import upper from "../../images/about-upper01.png";
import event01 from "../../images/about-event-01.png";
import event02 from "../../images/about-event-02.png";
import event03 from "../../images/about-event-03.png";
import event04 from "../../images/about-event-04.png";
import event05 from "../../images/about-event-05.png";
import event06 from "../../images/about-event-06.png";
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
    date: new Date("2021-09-05"),
    img: event03,
    background: plant03,
  },
  {
    descs: [
      "It was my first day out. Traveling through the park during the night was truly scary...... At least I made my first step!",
    ],
    date: new Date("2021-09-11"),
    img: event04,
    background: plant01,
  },
  {
    descs: [
      "There is another creature in my home! That tiny thing stayed in a three-floor house. It is so small that I can slap it to death. My master seemed really worried when I found it. Why......",
    ],
    date: new Date("2021-09-18"),
    img: event05,
    background: plant02,
  },
  {
    descs: ["I know it! I am actually a lion!!!"],
    date: new Date("2021-10-08"),
    img: event06,
    background: plant03,
  },
];

const About = () => {
  const eventRefs = useRef([]);
  // @ts-ignore
  eventRefs.current = Array(events.length).map((_) => createRef());

  const getAge = () => {
    const birth = new Date("2021-04-19");
    const today = new Date();
    const years = today.getFullYear() - birth.getFullYear();
    const dates = today.getDate() - birth.getDate();
    const months = today.getMonth() - birth.getMonth() - (dates < 0 ? 1 : 0);
    return `${years ? `${years}-Year ` : ""}${months}-Month`;
  };

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
            <p>Pichi is a {getAge()} Old Bengal Cat</p>
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
