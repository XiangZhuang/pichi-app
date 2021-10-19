import "./index.scss";
import { useHistory } from "react-router-dom";

const Button = (props: {
  text: string;
  className?: string;
  theme?: "default" | "round-radius" | "circle";
  variant?: "green" | "red";
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
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
    disabled,
  } = props;

  const history = useHistory();

  return (
    <div
      className={`button ${className} ${theme} ${variant} ${size} ${
        disabled ? "disabled" : ""
      }`}
      onClick={() => {
        if (!disabled) {
          onClick?.();
          if (href) {
            history.push(href);
          }
        }
      }}
    >
      <p>{text}</p>
      <div className="cover" />
    </div>
  );
};

export default Button;
