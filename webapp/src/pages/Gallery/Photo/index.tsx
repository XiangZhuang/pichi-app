import "./index.scss";

const Photo = (props: { img: string; id: number }) => {
  const { img, id } = props;

  return (
    <div
      className="gallery-photo"
      id={`img-block-${id}`}
      style={{ background: `url(${img}) center no-repeat` }}
    >
      <img src={img} alt="Pichi Photo" />
    </div>
  );
};

export default Photo;
