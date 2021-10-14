import "./index.scss";
import { useHistory } from "react-router-dom";

const Button = (props: {
  text: string;
  className?: string;
  theme?: "default" | "round-radius" | "circle";
  variant?: "green" | "red";
  onClick?: () => {};
  href?: string;
  size?: "small" | "large" | "medium";
}) => {
  const {
    text,
    className = "",
    onClick,
    theme = "",
    variant = "green",
    href,
    size,
  } = props;

  const history = useHistory();

  return (
    <div
      className={`button ${className} ${theme} ${variant} ${size}`}
      onClick={() => {
        onClick?.();
        if (href) {
          history.push(href);
        }
      }}
    >
      <p>{text}</p>
      <div className="cover" />
    </div>
  );
};

export default Button;
