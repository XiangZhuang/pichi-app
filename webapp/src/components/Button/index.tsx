import "./index.scss";

const Button = (props: {
  text: string;
  className?: string;
  theme?: "default" | "round-radius" | "circle";
  variant?: "green" | "red";
  onClick?: () => {};
}) => {
  const {
    text,
    className = "",
    onClick,
    theme = "",
    variant = "green",
  } = props;

  return (
    <div className={`btn ${className} ${theme} ${variant}`} onClick={onClick}>
      <p>{text}</p>
      <div className="cover" />
    </div>
  );
};

export default Button;
