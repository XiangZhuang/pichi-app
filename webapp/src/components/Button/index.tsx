import "./index.scss";
import { useHistory } from "react-router-dom";

const Button = (props: {
  text: string;
  className?: string;
  theme?: "default" | "round-radius" | "circle";
  variant?: "green" | "red";
  onClick?: () => {};
  href?: string;
}) => {
  const {
    text,
    className = "",
    onClick,
    theme = "",
    variant = "green",
    href,
  } = props;

  const history = useHistory();

  return (
    <div
      className={`btn ${className} ${theme} ${variant}`}
      onClick={() => {
        onClick?.();
        if (href) {
          history.push("/about");
        }
      }}
    >
      <p>{text}</p>
      <div className="cover" />
    </div>
  );
};

export default Button;
