import { AiOutlineLoading3Quarters } from "react-icons/all";
import "./index.scss";

const Loading = (props: { size?: number; color?: string }) => {
  const { size = 18, color = "black" } = props;
  return (
    <div className="loading">
      <AiOutlineLoading3Quarters
        size={size}
        color={color}
        fontWeight={"bold"}
      />
    </div>
  );
};

export default Loading;
