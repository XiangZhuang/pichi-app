import "./index.scss";
import photo01 from "../../images/gallery/photo01.png";
import photo02 from "../../images/gallery/photo02.png";
import photo03 from "../../images/gallery/photo03.png";
import photo04 from "../../images/gallery/photo04.png";
import photo05 from "../../images/gallery/photo05.png";
import photo06 from "../../images/gallery/photo06.png";
import profile from "../../images/gallery/profile.png";
import line from "../../images/home-line01.png";
import { ReactNode, useEffect, useRef, useState } from "react";
import Photo from "./Photo";
import { useAppState } from "../../store";
import { showPhotoModal } from "../../store/actions/modalActions";

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
  const [columns, setColumns] = useState<Array<Array<ReactNode>>>([[], [], []]);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [, dispatch] = useAppState();

  const generateColumns = async () => {
    const columns: Array<Array<ReactNode>> = Array.from(
      Array(columnsRef.current?.children.length),
      () => []
    );
    const colNum = columns.length;
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
          const img = new Image();
          img.src = photo.img;
          img.onload = function () {
            column_imgs[columnIndex].push(
              img.height *
                ((columnsRef.current?.children[columnIndex].clientWidth || 0) /
                  img.width)
            );
            columns[columnIndex].push(
              <Photo
                img={photo.img}
                id={count}
                key={count}
                onClick={() => {
                  showPhotoModal(dispatch, photo.img);
                }}
              />
            );
            resolve();
          };
        })
      );
      await promises[promises.length - 1];
      count += 1;
    }
    setColumns(columns);
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
    generateColumns();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // 试试函数式更新state来避免闭包陷阱
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
                  onClick={() => {
                    showPhotoModal(dispatch, img.img);
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
            <div className="gallery-column">
              {columns[0].map((photo) => photo)}
            </div>
            <div className="gallery-column">
              {columns[1].map((photo) => photo)}
            </div>
            <div className="gallery-column">
              {columns[2].map((photo) => photo)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
