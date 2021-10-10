import "./index.scss";
import photo01 from "../../images/gallery/photo01.png";
import photo02 from "../../images/gallery/photo02.png";
import photo03 from "../../images/gallery/photo03.png";
import photo04 from "../../images/gallery/photo04.png";
import photo05 from "../../images/gallery/photo05.png";
import photo06 from "../../images/gallery/photo06.png";
import profile from "../../images/gallery/profile.png";
import line from "../../images/home-line01.png";
import { useEffect, useRef, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const ImgBlock = (props: { img: string; id: number }) => {
  const { img, id } = props;

  return (
    <div
      className="img-block"
      id={`img-block-${id}`}
      style={{ background: `url(${img}) center no-repeat` }}
    >
      <img src={img} alt="Pichi Photo" />
    </div>
  );
};

const headImgs = [
  {
    img: photo04,
  },
  {
    img: photo02,
  },
  {
    img: photo03,
  },
];

const photos = [
  ...headImgs,
  {
    img: photo01,
  },
  {
    img: photo05,
  },
  {
    img: photo06,
  },
];

const Gallery = () => {
  const columnsRef = useRef<HTMLDivElement>(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  const generateGallery = async () => {
    const columns = columnsRef.current?.children || [];
    const colNum = columnsRef.current?.children.length || 0;
    const column_imgs: Array<Array<number>> = [];
    for (let i = 0; i < colNum; i += 1) {
      column_imgs.push([]);
    }
    let count = 0;
    const promises = [];
    for (let i in photos) {
      const photo = photos[i];
      const columnIndex = getShortestColumn(column_imgs);
      promises.push(
        new Promise<void>((resolve) => {
          var img = new Image();
          img.src = photo.img;
          img.onload = function () {
            columns[columnIndex].insertAdjacentHTML(
              "beforeend",
              renderToStaticMarkup(<ImgBlock img={photo.img} id={count} />)
            );
            resolve();
          };
        })
      );
      await promises[promises.length - 1];
      column_imgs[columnIndex].push(
        document.getElementById(`img-block-${count}`)?.clientHeight || 0
      );
      count += 1;
    }
  };

  const getShortestColumn = (columns: Array<Array<number>>) => {
    const heights = columns.map((column) =>
      column.length
        ? column.reduce((sum: number, value: number) => sum + value)
        : 0
    );
    return heights.indexOf(Math.min(...heights));
  };

  useEffect(() => {
    generateGallery();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderIndex((sliderIndex + 1) % headImgs.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [sliderIndex]);

  return (
    <div
      className="gallery"
      style={{
        backgroundImage: `url(${line})`,
      }}
    >
      <div className="block block-01">
        <div className="container">
          <div className="slider">
            <div
              className="slider-container"
              style={{
                width: `calc(100% * ${headImgs.length})`,
                left: `calc(-100% * ${sliderIndex}`,
              }}
            >
              {headImgs.map((img, key) => (
                <div
                  className="img"
                  key={key}
                  style={{
                    backgroundImage: `url(${img.img})`,
                    width: `calc(100% / ${headImgs.length})`,
                  }}
                />
              ))}
            </div>
            <div className="index" style={{ width: headImgs.length * 12 }}>
              {headImgs.map((img, index) => (
                <div
                  className={`dot ${sliderIndex === index ? "selected" : ""}`}
                  key={index}
                  onClick={() => {
                    setSliderIndex(index);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="block block-02">
        <div className="container">
          <div
            className="profile"
            style={{ backgroundImage: `url(${profile})` }}
          />
          <div className="title">
            <p>Pichi's Gallery</p>
          </div>
        </div>
      </div>
      <div className="block block-03">
        <div className="container">
          <div className="gallery-columns" ref={columnsRef}>
            <div className="gallery-column" />
            <div className="gallery-column" />
            <div className="gallery-column" />
          </div>
        </div>
      </div>
    </div>
  );

  // const generateColumns = () => {
  //   const columns = $(".columns");
  //   const width = $(window).outerWidth();
  //   const currColNum = $(".column").length;
  //   let columnNum = 1;
  //   if (width > 769) {
  //     columnNum = 3;
  //   } else if (width > 500) {
  //     columnNum = 2;
  //   }
  //   if (currColNum !== columnNum) {
  //     columns.empty();
  //     for (let i = 0; i < columnNum; i += 1) {
  //       columns.append('<div class="column"></div>');
  //     }
  //     generateGallery();
  //   }
  // };
};

export default Gallery;