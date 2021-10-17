import { useAppState } from "../../store";
import "./index.scss";

const Modal = () => {
  // @ts-ignore
  const [state, dispatch] = useAppState();
  const { show, photo } = state.modal;

  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div
        className="cover"
        onClick={() => {
          dispatch({
            type: "MODAL_HIDE_PHOTO",
          });
        }}
      />
      <div className="photo">
        <img src={photo} alt="photo" />
      </div>
    </div>
  );
};
export default Modal;
