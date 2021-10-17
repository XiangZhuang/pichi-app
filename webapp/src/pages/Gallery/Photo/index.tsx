import "./index.scss";

const Photo = (props: { img: string; id: number; onClick?: () => void }) => {
  const { img, id, onClick } = props;

  return (
    <div
      className="gallery-photo"
      id={`img-block-${id}`}
      style={{ background: `url(${img}) center no-repeat` }}
      onClick={onClick}
    >
      <img src={img} alt="Pichi Photo" />
    </div>
  );
};

export default Photo;
